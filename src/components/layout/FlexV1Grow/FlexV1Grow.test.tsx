import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexV1Grow from './FlexV1Grow';

describe('<FlexV1Grow />', () => {
  test('it should mount', () => {
    render(<FlexV1Grow />);

    const flexV1Grow = screen.getByTestId('FlexV1Grow');

    expect(flexV1Grow).toBeInTheDocument();
  });
});