import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./api', () => ({
  fetchContent: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockData = {
    content: 'Sample Content',
  };

  beforeEach(() => {
    (fetchContent as jest.Mock).mockResolvedValue(mockData);
  });

  test('renders without crashing', async () => {
    render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('displays content after loading', async () => {
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(mockData.content)).toBeInTheDocument());
  });

  test('handles error state when fetching data fails', async () => {
    (fetchContent as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  test('allows user interaction with content', () => {
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(fetchContent).toHaveBeenCalled();
  });

  test('ensures accessibility features are properly implemented', async () => {
    render(<DesignArchitectureComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();
  });

  test('tests edge cases for content loading', async () => {
    (fetchContent as jest.Mock).mockResolvedValueOnce(null).mockResolvedValue(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(mockData.content)).toBeInTheDocument());
  });

  test('tests loading state for multiple requests', async () => {
    (fetchContent as jest.Mock).mockResolvedValueOnce(mockData).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(mockData.content)).toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./api', () => ({
  fetchContent: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockData = {
    content: 'Sample Content',
  };

  beforeEach(() => {
    (fetchContent as jest.Mock).mockResolvedValue(mockData);
  });

  test('renders without crashing', async () => {
    render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('displays content after loading', async () => {
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(mockData.content)).toBeInTheDocument());
  });

  test('handles error state when fetching data fails', async () => {
    (fetchContent as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  test('allows user interaction with content', () => {
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(fetchContent).toHaveBeenCalled();
  });

  test('ensures accessibility features are properly implemented', async () => {
    render(<DesignArchitectureComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();
  });

  test('tests edge cases for content loading', async () => {
    (fetchContent as jest.Mock).mockResolvedValueOnce(null).mockResolvedValue(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(mockData.content)).toBeInTheDocument());
  });

  test('tests loading state for multiple requests', async () => {
    (fetchContent as jest.Mock).mockResolvedValueOnce(mockData).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(mockData.content)).toBeInTheDocument());
  });
});