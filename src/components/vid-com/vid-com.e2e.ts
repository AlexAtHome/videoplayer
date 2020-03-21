// TODO: Make some E2E tests

// import { newE2EPage } from '@stencil/core/testing';
//
// describe('my-component', () => {
//   it('renders', async () => {
//     const page = await newE2EPage();
//
//     await page.setContent('<vid-com></vid-com>');
//     const element = await page.find('my-component');
//     expect(element).toHaveClass('hydrated');
//   });
//
//   it('renders changes to the name data', async () => {
//     const page = await newE2EPage();
//
//     await page.setContent('<vid-com></vid-com>');
//     const component = await page.find('my-component');
//     const element = await page.find('vid-com >>> div');
//     expect(element.textContent).toEqual(`Hello, World! I'm `);
//
//     component.setProperty('first', 'James');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James`);
//
//     component.setProperty('last', 'Quincy');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);
//
//     component.setProperty('middle', 'Earl');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
//   });
// });
