import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rocket from '../components/Rocket';

const mockStore = configureStore([]);

describe('Rocket component', () => {
  const rocketInfo = {
    id: 1,
    rocket_name: 'Falcon 9',
    flickr_images: 'https://example.com/image.jpg',
    description: 'Sample description',
    reserved: false,
  };

  test('Rocket component renders correctly', () => {
    const store = mockStore({});
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Rocket rocketInfo={rocketInfo} />
      </Provider>,
    );
    const rocketName = getByText(rocketInfo.rocket_name);
    const rocketImage = getByAltText(rocketInfo.rocket_name);
    const description = getByText(rocketInfo.description);

    expect(rocketName).toBeInTheDocument();
    expect(rocketImage).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('should render rocket details on to the screen', () => {
    const newState = {
      rocket: {
        rockets: [
          {
            id: 1,
            rocket_name: 'Falcon 9',
            flickr_images: 'https://example.com/image.jpg',
            description: 'Falcon star',
            reserved: false,
          },
        ],
      },
    };
    const store = mockStore(newState);
    store.dispatch({
      type: 'get/rockets',
      payload: newState,
    });

    render(
      <Provider store={store}>
        <Rocket rocketInfo={rocketInfo} />
      </Provider>,
    );
    expect(screen.getByText('Falcon 9')).toBeInTheDocument();
  });
});
