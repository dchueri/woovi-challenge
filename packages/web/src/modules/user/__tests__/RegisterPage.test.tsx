import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { TestRouter } from '../../../../test/TestRouter';
import { WithProviders } from '../../../../test/WithProviders';
import Alerts from '../../../components/Alerts';
import { IndexRoutes } from '../../../routes';

afterEach(cleanup);

it('should redirect to movies panel after register', async () => {
  const environment = createMockEnvironment();
  const history = createMemoryHistory({
    initialEntries: ['/register'],
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
    name: 'test',
    email: 'test@test.com',
    password: 'testpassword',
  };

  await waitFor(() => expect(screen.getByRole('button')).toBeEnabled());

  userEvent.type(
    screen.getByLabelText('Name', { exact: false }),
    variables.name,
  );
  userEvent.type(
    screen.getByLabelText('Email', { exact: false }),
    variables.email,
  );
  userEvent.type(
    screen.getByLabelText('Password', { exact: false }),
    variables.password,
  );

  userEvent.click(screen.getByRole('button'));

  expect(screen.getByRole('button')).toBeDisabled();

  await waitFor(() => {
    const operation = environment.mock.getMostRecentOperation();

    expect(operation.request.variables).toMatchObject(variables);

    environment.mock.resolve(
      operation,
      MockPayloadGenerator.generate(operation),
    );
  });

  expect(screen.getByTestId('alert')).toHaveTextContent(
    'You have been registered! Welcome!',
  );

  expect(history.location.pathname).toBe('/movies');
});

it('should display an error if register faild', async () => {
  const environment = createMockEnvironment();
  const history = createMemoryHistory({
    initialEntries: ['/register'],
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

  await waitFor(() => screen.getByRole('button'));

  await waitFor(() => expect(screen.getByRole('button')).toBeEnabled());

  const variables = {
    name: 'test',
    email: 'test@test.com',
    password: 'testpassword',
  };

  userEvent.type(
    screen.getByLabelText('Name', { exact: false }),
    variables.name,
  );
  userEvent.type(
    screen.getByLabelText('Email', { exact: false }),
    variables.email,
  );
  userEvent.type(
    screen.getByLabelText('Password', { exact: false }),
    variables.password,
  );

  userEvent.click(screen.getByRole('button'));

  expect(await screen.findByRole('button')).toBeDisabled();

  const operation = environment.mock.getMostRecentOperation();
  const payload = MockPayloadGenerator.generate(operation);
  await waitFor(() => {
    console.log(payload);
    payload.data.RegisterUserMutation.token = null;

    environment.mock.resolve(operation, payload);
  });

  expect(screen.getByTestId('alert')).toHaveTextContent(
    payload.data.RegisterUserMutation.error,
  );

  expect(history.location.pathname).toBe('/register');

  expect(await screen.findByRole('button')).toBeEnabled();
});
