import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lds-swiper',
  styleUrl: 'lds-swiper.css',
  shadow: true,
})
export class LdsSwiper {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
