import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'vid-com',
  styleUrl: 'vid-com.css',
  shadow: true
})
export class VidCom {
  /**
   * The first name
   */
  @Prop() src: string;

  render() {
    return <Host>
      <video src={this.src} />
    </Host>
  }
}
