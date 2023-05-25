import { newSpecPage } from '@stencil/core/testing';
import { LdsSwiper } from '../lds-swiper';

describe('lds-swiper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LdsSwiper],
      html: `<lds-swiper></lds-swiper>`,
    });
    expect(page.root).toEqualHtml(`
      <lds-swiper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lds-swiper>
    `);
  });
});
