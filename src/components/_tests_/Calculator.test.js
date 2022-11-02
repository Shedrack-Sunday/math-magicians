import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';
import '@testing-library/jest-dom/extend-expect';

describe('Test render Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
