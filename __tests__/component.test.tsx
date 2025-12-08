import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('status'));
  });

  test('displays error message if fetching data fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'error', error: new Error(errorMessage) });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('displays content when data is successfully fetched', async () => {
    const mockContent = { title: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: mockContent });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/sample title/i));
  });

  test('handles user interaction with buttons', () => {
    const handleButtonClick = jest.fn();
    render(<CoreFunctionalityComponent onButtonClick={handleButtonClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleButtonClick).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented correctly', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: { title: 'Sample Title' } });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
    fireEvent.click(button);
    await waitFor(() => screen.getByText(/sample title/i));
  });

  test('validates form inputs', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: { title: 'Sample Title' } });
    render(<CoreFunctionalityComponent />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(screen.getByText(/submit/i));
    await waitFor(() => expect(screen.getByText(/please enter a valid/i)).toBeInTheDocument());
  });

  test('handles edge cases for data', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: { title: '' } });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/no content available/i));
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('status'));
  });

  test('displays error message if fetching data fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'error', error: new Error(errorMessage) });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/failed to fetch/i));
  });

  test('displays content when data is successfully fetched', async () => {
    const mockContent = { title: 'Sample Title' };
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: mockContent });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/sample title/i));
  });

  test('handles user interaction with buttons', () => {
    const handleButtonClick = jest.fn();
    render(<CoreFunctionalityComponent onButtonClick={handleButtonClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleButtonClick).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented correctly', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: { title: 'Sample Title' } });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
    fireEvent.click(button);
    await waitFor(() => screen.getByText(/sample title/i));
  });

  test('validates form inputs', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: { title: 'Sample Title' } });
    render(<CoreFunctionalityComponent />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(screen.getByText(/submit/i));
    await waitFor(() => expect(screen.getByText(/please enter a valid/i)).toBeInTheDocument());
  });

  test('handles edge cases for data', async () => {
    (useExternalData as jest.Mock).mockReturnValueOnce({ status: 'success', data: { title: '' } });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/no content available/i));
  });
});