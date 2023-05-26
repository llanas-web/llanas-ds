import { newE2EPage } from '@stencil/core/testing';

describe('lds-swiper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lds-swiper></lds-swiper>');

    const element = await page.find('lds-swiper');
    expect(element).toHaveClass('hydrated');
  });
});
