describe('Login Flow', () => {
  beforeEach(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('given valid email, valid password and press button, should call alert with success', async () => {
    await element(by.id('emailInput')).typeText('valid@email.com');
    await element(by.id('passwordInput')).typeText('Pass123#');
    await element(by.id('submitButton')).tap();

    await expect(element(by.text('Login efetuado com sucesso!'))).toBeVisible();
    await expect(element(by.text('Email ou senha inválidos!'))).not.toBeVisible();
  });

  it('given valid email, invalid password and press button, should call alert with fail', async () => {
    await element(by.id('emailInput')).typeText('valid@email.com');
    await element(by.id('passwordInput')).typeText('invalid');
    await element(by.id('submitButton')).tap();

    await expect(element(by.text('Login efetuado com sucesso!'))).not.toBeVisible();
    await expect(element(by.text('Email ou senha inválidos!'))).toBeVisible();
  });

  it('given invalid email, valid password and press button, should call alert with fail', async () => {
    await element(by.id('emailInput')).typeText('invalid');
    await element(by.id('passwordInput')).typeText('Pass123#');
    await element(by.id('submitButton')).tap();

    await expect(element(by.text('Login efetuado com sucesso!'))).not.toBeVisible();
    await expect(element(by.text('Email ou senha inválidos!'))).toBeVisible();
  });

  it('given invalid email, invalid password and press button, should call alert with fail', async () => {
    await element(by.id('emailInput')).typeText('invalid');
    await element(by.id('passwordInput')).typeText('invalid');
    await element(by.id('submitButton')).tap();

    await expect(element(by.text('Login efetuado com sucesso!'))).not.toBeVisible();
    await expect(element(by.text('Email ou senha inválidos!'))).toBeVisible();
  });
});
