import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OrderForm from './OrderForm';

beforeAll(() => {
  HTMLFormElement.prototype.submit = jest.fn();
});

test('renders OrderForm component and submits form with filled input values', () => {
  render(<OrderForm />);

  const streetInput = screen.getByLabelText(/Street/) as HTMLInputElement;
  const houseInput = screen.getByLabelText(/House/) as HTMLInputElement;
  const orderButton = screen.getByText(/Order/);

  fireEvent.change(streetInput, { target: { value: '123 Main St' } });
  fireEvent.change(houseInput, { target: { value: '456' } });

  fireEvent.click(orderButton);

  expect(streetInput.value).toBe('123 Main St');
  expect(houseInput.value).toBe('456');
});
