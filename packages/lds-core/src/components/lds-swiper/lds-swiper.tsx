import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'lds-swiper',
  styleUrl: 'lds-swiper.css',
  shadow: true,
})
export class LdsSwiper {

  @Prop() name: string;

  render() {
    return (
      <Host>
        <div class="lds-swiper-container">
          <slot></slot>
        </div>
      </Host>
    );
  }

}