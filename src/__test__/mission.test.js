import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import Mission from '../components/Mission';
import store from '../app/store';
import { initialState } from '../feature/mission/missionSlice';

const data = {
  missions: [
    {
      mission_id: '1',
      mission_name: 'Falcon 1',
      description: 'The falcon 1 description',
    },
    {
      mission_id: '2',
      mission_name: 'Falcon 2',
      description: 'The falcon 2 description',
    },
  ],
};

it('should render the mission page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render the mission', () => {
  const mockStore = configureStore();
  const missionStore = mockStore(initialState);

  missionStore.clearActions();
  const getMissions = () => ({ type: 'GET_MISSIONS' });

  missionStore.dispatch(getMissions());

  const actions = missionStore.getActions();
  const expectedPayload = { type: 'GET_MISSIONS' };
  expect(actions).toEqual([expectedPayload]);
});

it('should render the initial state Properly', () => {
  const mockStore = configureStore();
  const missionStore = mockStore(initialState);

  expect(initialState).toEqual(missionStore.getState());
});

it('should render the Mission state Properly', () => {
  const mockStore = configureStore();

  const missionStore = mockStore(data);

  expect(data).toEqual(missionStore.getState());
});

describe('Test Mission Rendering to the screen', () => {
  const mockStore = configureStore();

  it('should render the mission list to the screen', () => {
    const newState = {
      mission: {
        missions: [
          {
            mission_id: 'id-1',
            mission_name: 'Falcon 1',
            description: 'Falcon 1 description',
            reserved: false,
          },
          {
            mission_id: 'id-2',
            mission_name: 'Falcon 2',
            description: 'Falcon 2 description',
            reserved: false,
          },
        ],
      },
    };
    const store = mockStore(newState);
    store.dispatch({
      type: 'get/mission',
      payload: newState,
    });

    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    const falcon1 = screen.getByText('Falcon 1');
    const falcon2 = screen.getByText('Falcon 2');

    expect(falcon1).toBeInTheDocument();
    expect(falcon2).toBeInTheDocument();
  });
});
