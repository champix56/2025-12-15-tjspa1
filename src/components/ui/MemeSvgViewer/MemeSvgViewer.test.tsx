import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MemeSvgViewer from './MemeSvgViewer';

describe('<MemeSvgViewer />', () => {
  test('it should mount', () => {
    render(<MemeSvgViewer />);

    const memeSvgViewer = screen.getByTestId('MemeSvgViewer');

    expect(memeSvgViewer).toBeInTheDocument();
  });
});