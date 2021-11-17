describe('Login Flow', () => {
  beforeAll(async () => {
    console.log("1");
    await device.launchApp();
    console.log("2");
  });

  beforeEach(async () => {
    console.log("3");
    await device.reloadReactNative();
    console.log("4");
  });

  it('should have login screen', async () => {
    console.log("5");
    await expect(element(by.id('submitButton'))).toBeVisible();
    console.log("6");
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
