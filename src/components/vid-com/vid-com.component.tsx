import {Component, Prop, Host, h, Method, Element, State} from '@stencil/core';
import {PlayButton} from "../../utils/play";

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
   * Whether the video is played once
   */
  @State() isStarted: boolean = false;

  /**
   * Component's video element
   * @private
   */
  get video(): HTMLVideoElement {
    return this.wrap.shadowRoot.querySelector('video')
  }

  /**
   * Plays the video
   */
  @Method()
  async play(): Promise<void> {
    return this.video.play();
  }

  /**
   * Play button click handler
   * @private
   */
  private _playButtonClickHandler(): void {
    this.isStarted = true;
    this.play();
  }

  render() {
    return <Host>
      <video src={this.src} />
      {!this.isStarted && <PlayButton class="play-button control" onClick={this._playButtonClickHandler.bind(this)} />}
    </Host>
  }
}
