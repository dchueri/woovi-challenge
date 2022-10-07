import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import { TestRouter } from '../../../../test/TestRouter';
import { WithProviders } from '../../../../test/WithProviders';
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
        <IndexRoutes />
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

  expect(history.location.pathname).toBe('/login');

  await waitFor(() => {
    const operation = environment.mock.getMostRecentOperation();

    expect(operation.request.variables).toMatchObject(variables);

    environment.mock.resolve(
      operation,
      MockPayloadGenerator.generate(operation),
    );
  });

  expect(history.location.pathname).toBe('/movies');
});
