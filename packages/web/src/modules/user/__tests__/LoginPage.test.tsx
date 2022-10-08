import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { TestRouter } from '../../../../test/TestRouter';
import { WithProviders } from '../../../../test/WithProviders';
import Alerts from '../../../components/Alerts';
import { IndexRoutes } from '../../../routes';

afterEach(cleanup);

it('should redirect to movies panel after login', async () => {
  const environment = createMockEnvironment();
  const history = createMemoryHistory({
    initialEntries: ['/login'],
  });

  render(
    <TestRouter history={history}>
      <WithProviders relayEnvironment={environment}>
        <>
          <IndexRoutes />
          <Alerts />
        </>
      </WithProviders>
    </TestRouter>,
  );

  const variables = {
    email: 'test@test.com',
    password: 'testpassword',
  };

  await waitFor(() => expect(screen.getByRole('button')).toBeEnabled());

  userEvent.type(
    screen.getByLabelText('Email', { exact: false }),
    variables.email,
  );
  userEvent.type(
    screen.getByLabelText('Password', { exact: false }),
    variables.password,
  );

  await waitFor(() => expect(screen.getByRole('button')).toBeEnabled());

  userEvent.click(screen.getByRole('button'));

  expect(screen.getByRole('button')).toBeDisabled();

  expect(history.location.pathname).toBe('/login');

  await waitFor(() => {
    const operation = environment.mock.getMostRecentOperation();
    console.log(operation.request.variables)
    expect(operation.request.variables).toMatchObject(variables);

    environment.mock.resolve(
      operation,
      MockPayloadGenerator.generate(operation),
    );
  });

  expect(screen.getByTestId('alert')).toHaveTextContent(`Welcome`);

  expect(history.location.pathname).toBe('/movies');
});

it('should display an error if login faild', async () => {
  const environment = createMockEnvironment();
  const history = createMemoryHistory({
    initialEntries: ['/login'],
  });

  render(
    <TestRouter history={history}>
      <WithProviders relayEnvironment={environment}>
        <>
          <IndexRoutes />
          <Alerts />
        </>
      </WithProviders>
    </TestRouter>,
  );

  expect(await screen.findByRole('button')).toBeEnabled();

  await waitFor(() => screen.getByRole('button'));

  userEvent.type(
    screen.getByLabelText('Email', { exact: false }),
    'test@test.com',
  );
  userEvent.type(
    screen.getByLabelText('Password', { exact: false }),
    'wrongpassword',
  );

  userEvent.click(screen.getByRole('button'));

  expect(await screen.findByRole('button')).toBeDisabled();

  await waitFor(() => {
    const operation = environment.mock.getMostRecentOperation();
    const payload = MockPayloadGenerator.generate(operation)
    payload.data.LoginMutation.token = null;

    environment.mock.resolve(operation, payload);
  });

  expect(screen.getByTestId('alert')).toHaveTextContent(
    'Email or password is invalid. Please, try again!',
  );

  expect(await screen.findByRole('button')).toBeEnabled();
});
