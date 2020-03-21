import {Component, Prop, Host, h, Method, Element, State, Watch} from '@stencil/core';
import {PauseButton, PlayButton, SoundOffButton, SoundOnButton} from "../../utils/controls";

@Component({
  tag: 'vid-com',
  styleUrl: 'vid-com.css',
  shadow: true
})
export class VidCom {
  /**
   * Video's URL
   */
  @Prop() src: string;

  /**
   * Video's thumbnail
   */
  @Prop() poster: string;

  @Prop() autoplay: boolean;

  /**
   * Component's host element
   */
  @Element() wrap: HTMLElement;

  /**
   * Whether the video is played at least once
   */
  @State() isStarted: boolean = false;

  @State() isMuted: boolean = false;

  /**
   * Whether the video is playing right now
   */
  @State() isPlaying: boolean = false;

  /**
   * Component's video element
   */
  get video(): HTMLVideoElement {
    return this.wrap.shadowRoot.querySelector('video')
  }

  @Watch('autoplay')
  validateAutoplay(newValue: boolean | string): void {
    if (newValue === "") {
      this.autoplay = true;
    }
  }

  componentWillLoad(): void {
    if (this.autoplay) {
      this._markAsPlaying();
    }
  }

  /**
   * Marks the component's video as playing right now
   * @private
   */
  private _markAsPlaying(): void {
    this.isStarted = true;
    this.isPlaying = true;
    this.poster = undefined;
  }

  /**
   * Marks the component's video as paused
   * @private
   */
  private _markAsPaused(): void {
    this.isPlaying = false;
  }

  /**
   * Plays the video
   */
  @Method()
  async play(): Promise<void> {
    this._markAsPlaying();
    return this.video.play();
  }

  /**
   * Pauses the video
   */
  @Method()
  async pause(): Promise<void> {
    this._markAsPaused();
    return this.video.pause();
  }

  @Method()
  async mute() {
    this.video.muted = this.isMuted = true;
  }

  @Method()
  async unmute() {
    this.video.muted = this.isMuted = false;
  }

  /**
   * Renders the control paneK
   * @private
   */
  private _renderControlPane() {
    return <div class="control-pane">
      <div class="control-pane__column control-pane__column_left">
        {
          this.isPlaying
            ? <PauseButton class="control control-pane__button" onClick={this.pause.bind(this)}/>
            : <PlayButton class="control control-pane__button" onClick={this.play.bind(this)}/>
        }
        {
          this.isMuted
            ? <SoundOffButton class="control control-pane__button" onClick={this.unmute.bind(this)} />
            : <SoundOnButton class="control control-pane__button" onClick={this.mute.bind(this)} />
        }
      </div>
    </div>
  }

  private async _togglePlay() {
    return this.isPlaying ? this.pause() : this.play();
  }

  render() {
    return <Host>
      {this.poster && <img alt="video thumbnail" src={this.poster} loading="lazy" class="thumbnail" onClick={this._togglePlay.bind(this)}/>}
      <video src={this.src} autoplay={this.autoplay} onClick={this._togglePlay.bind(this)} />
      <span tabIndex={-1} class="play-overlay" />
      {!this.isStarted && <PlayButton class="play-button control" onClick={this.play.bind(this)}/>}
      {this.isStarted && this._renderControlPane()}
    </Host>
  }
}
