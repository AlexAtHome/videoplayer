import {Component, Prop, Host, h, Method, Element, State} from '@stencil/core';
import {PauseButton, PlayButton} from "../../utils/controls";

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

  /**
   * Component's host element
   */
  @Element() wrap: HTMLElement;

  /**
   * Whether the video is played at least once
   */
  @State() isStarted: boolean = false;

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

  private get _thumbnailElement(): HTMLImageElement {
    return this.wrap.shadowRoot.querySelector('.thumbnail');
  }

  /**
   * Plays the video
   */
  @Method()
  async play(): Promise<void> {
    this.isStarted = true;
    this.isPlaying = true;
    this._thumbnailElement?.remove();
    return this.video.play();
  }

  /**
   * Pauses the video
   */
  @Method()
  async pause(): Promise<void> {
    this.isPlaying = false;
    return this.video.pause();
  }

  /**
   * Renders the control paneK
   * @private
   */
  private _renderControlPane() {
    return <div class="control-pane">
      {
        this.video.paused
          ? <PlayButton class="control control-pane__button" onClick={this.play.bind(this)}/>
          : <PauseButton class="control control-pane__button" onClick={this.pause.bind(this)}/>
      }
    </div>
  }

  render() {
    return <Host>
      {this.poster && <img alt="video thumbnail" src={this.poster} loading="lazy" class="thumbnail" />}
      <video src={this.src}/>
      {!this.isStarted && <PlayButton class="play-button control" onClick={this.play.bind(this)}/>}
      {this.isStarted && this._renderControlPane()}
    </Host>
  }
}
