import React from 'react';
import {
  render, fireEvent, waitFor,
} from '@testing-library/react';
import TicketModal from '../../components/TicketModal';

const ticket = {
  id: 'abasduahsdqwec',
  type: 'Bem',
  description: 'Vazamento',
  code: 1234,
  manager: 'Arlen Vasocncelos',
  image: '',
  status: 'opened',
};

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch() {
    return mockedDispatch;
  },
}));

describe('TicketModal component', () => {
  it('should update ticket', async () => {
    const { getByLabelText, getByText } = render(
      <TicketModal isUpdating handleCancel={() => {}} visible selectedTicket={ticket} />,
    );

    const descriptionInput = getByLabelText('Descrição');
    const submitButton = getByText('Atualizar ticket');

    fireEvent.change(descriptionInput, {
      target: {
        value: 'Vazamento de gás',
      },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedDispatch).toHaveBeenCalled();
    });
  });
});
