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

  /**
   * Plays the video
   */
  @Method()
  async play(): Promise<void> {
    this.isStarted = true;
    this.isPlaying = true;
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
      <video src={this.src}/>
      {!this.isStarted && <PlayButton class="play-button control" onClick={this.play.bind(this)}/>}
      {this.isStarted && this._renderControlPane()}
    </Host>
  }
}
