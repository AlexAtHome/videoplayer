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

  /**
   * Video's autoplay
   */
  @Prop() autoplay: boolean;

  /**
   * Whether the video's sound is always disabled and can't be enabled
   */
  @Prop({attribute: 'muted'}) isAlwaysMuted: boolean = false;

  /**
   * Component's host element
   */
  @Element() wrap: HTMLElement;

  /**
   * Whether the video is played at least once
   */
  @State() isStarted: boolean = false;

  /**
   * Whether the video is muted right now
   */
  @State() isMuted: boolean = false;

  /**
   * Whether the video is playing right now
   */
  @State() isPlaying: boolean = false;

  @State() currentTime: number = 0;

  @State() duration: number;

  @State() volume: number = 60;

  /**
   * Component's video element
   */
  get video(): HTMLVideoElement {
    return this.wrap.shadowRoot.querySelector('video')
  }

  get progressBar(): HTMLInputElement {
    return this.wrap.shadowRoot.querySelector('.control-pane__progress');
  }

  get volumeBar(): HTMLInputElement {
    return this.wrap.shadowRoot.querySelector('.volume-control__input');
  }

  /**
   * Component thumbnail's element
   * @private
   */
  private get _thumbnailElement(): HTMLImageElement {
    return this.wrap.shadowRoot.querySelector('.thumbnail');
  }

  @Watch('autoplay')
  validateAutoplay(newValue: boolean | string): void {
    if (newValue === "") {
      this.autoplay = true;
    }
  }

  @Watch('isAlwaysMuted')
  validatePermanentMute(newValue: boolean | string): void {
    if (newValue === "") {
      this.isAlwaysMuted = true;
    }
    if (this.isAlwaysMuted) {
      this.isMuted = true;
    }
  }

  componentWillLoad(): void {
    this.validateAutoplay(this.autoplay);
    this.validatePermanentMute(this.isAlwaysMuted);
    if (this.autoplay) {
      this._markAsPlaying();
    }
  }

  componentDidLoad(): void {
    this._subscribeToTimeupdate();
  }

  disconnectedCallback(): void {
    // this.video.removeEventListener('timeupdate');
  }

  /**
   * Adds event listener for video's `timeupdate` event
   * @private
   */
  private _subscribeToTimeupdate(): void {
    this.video.addEventListener('timeupdate', () => {
      this.currentTime = this.video.currentTime;
    }, false);
  }

  /**
   * Handles the video scroll
   * @private
   */
  private _handleVideoScroll(): void {
    const time = Number(this.progressBar.value);

    if (time > this.video.duration) {
      this.video.currentTime = this.video.duration;
      return
    }

    if (time < 0) {
      this.video.currentTime = 0;
      return
    }
    this.video.currentTime = time;
  }

  /**
   * Volume change event listener
   * @private
   */
  private _changeVolume(): void {
    this.volume = Number(this.volumeBar.value);
    this.video.volume = this.volume / 100;
    if (this.volume === 0 && !this.isMuted) {
      this.mute()
    }
    if (this.volume > 0 && this.isMuted) {
      this.unmute()
    }
  }

  /**
   * Marks the component's video as playing right now
   * @private
   */
  private _markAsPlaying(): void {
    this.isStarted = true;
    this.isPlaying = true;
    this._thumbnailElement?.remove();
  }

  /**
   * Marks the component's video as paused
   * @private
   */
  private _markAsPaused(): void {
    this.isPlaying = false;
  }

  private _handleMutedButton(): void {
    if (!this.isAlwaysMuted) {
      this.unmute();
    }
  }

  private async _togglePlay() {
    return this.isPlaying ? this.pause() : this.play();
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
    this.isMuted = true;
    this.volume = 0;
  }

  @Method()
  async unmute() {
    this.isMuted = false;
    this.volume = this.video.volume * 100;
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
        <div class="control__wrap volume-control">
          {
            this.isMuted
              ? <SoundOffButton
                class={`control control-pane__button ${this.isAlwaysMuted && 'control-pane__button_unavailable'}`}
                onClick={this._handleMutedButton.bind(this)}/>
              : <SoundOnButton class="control control-pane__button" onClick={this.mute.bind(this)}/>
          }

          {!this.isAlwaysMuted && <div class="volume-control__wrap">
            <input
              type="range"
              min="0"
              max="100"
              value={this.volume}
              class="volume-control__input"
              onInput={this._changeVolume.bind(this)}
            />
          </div>}
        </div>
      </div>
      <div class="control-pane__column control-pane__column_center">
        <input
          type="range"
          min="0"
          max={this.video?.duration}
          value={this.currentTime}
          class="control-pane__progress"
          onInput={this._handleVideoScroll.bind(this)}
        />
      </div>
    </div>
  }

  render() {
    return <Host>
      {this.poster && <img alt="video thumbnail" src={this.poster} loading="lazy" class="thumbnail"
                           onClick={this._togglePlay.bind(this)}/>}
      <video src={this.src} autoplay={this.autoplay} muted={this.isMuted} onClick={this._togglePlay.bind(this)}/>
      <span tabIndex={-1} class="play-overlay"/>
      {!this.isStarted && <PlayButton class="play-button control" onClick={this.play.bind(this)}/>}
      {this.isStarted && this._renderControlPane()}
    </Host>
  }
}
