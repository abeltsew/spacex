import renderer from 'react-test-renderer';
import Mission from '../components/Mission';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { initialState } from '../feature/mission/missionSlice';
import { render, screen } from '@testing-library/react';
import store from '../app/store';

it('should render the mission page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Mission />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render the mission', () => {
  const mockStore = configureStore();

  render(
    <Provider store={mockStore(initialState)}>
      <Mission />
    </Provider>
  );

  const loading = screen.getByText(/Loading../i);
  expect(loading).toBeInTheDocument();
});
