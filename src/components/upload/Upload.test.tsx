import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Upload from './Upload';

test('invoke onFileChange on input change event', async () => {
  const props = {
    fileName: 'filename.log',
    onFileChange: jest.fn(),
  };
  render(<Upload {...props} />);

  const input = screen.getByTestId('input');
  const file = { name: 'filename.log' };
  const mockEvent = {
    target: { files: [file] },
  };
  fireEvent.change(input, mockEvent);

  expect(props.onFileChange).toHaveBeenCalledTimes(1);
  expect(props.onFileChange).toHaveBeenCalledWith([{ name: 'filename.log' }]);
});
