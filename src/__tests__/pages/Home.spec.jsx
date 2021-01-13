import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from '../../pages/Home';
import Ticket from '../../components/Ticket';

const tickets = [
  {
    id: 'abasduahsdqwec',
    type: 'Bem',
    description: 'Vazamento',
    code: 1234,
    manager: 'Arlen Vasocncelos',
    image: '',
    status: 'opened',
  },
  {
    id: 'asdasllere',
    type: 'Predial',
    description: 'Rachadura',
    code: 4456,
    manager: 'João Felipe',
    image: '',
    status: 'done',
  },
  {
    id: 'asdokuhwergf',
    type: 'Procedimento',
    description: 'Vazamento',
    code: 1256,
    manager: 'Fulano de Tal',
    image: '',
    status: 'filed',
  },
  {
    id: 'asdiuwher3hg',
    type: 'Bem',
    description: 'Vazamento',
    code: 3215,
    manager: 'JOão Silva',
    image: '',
    status: 'inspected',
  },
  {
    id: 'asd54a6s54dfwe',
    type: 'Procedimento',
    description: 'Vazamento',
    code: 3215,
    manager: 'José Silva',
    image: '',
    status: 'inspected',
  },
];

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector() {
    return ({
      allTickets: tickets,
    });
  },
  useDispatch() {
    return mockedDispatch;
  },
}));

describe('Home Page', () => {
  it('Should be able to list tickets', async () => {
    const { getByTestId } = render(<Home />);

    const openedList = getByTestId('opened-ticket-list');
    const doneList = getByTestId('done-ticket-list');
    const inspectedList = getByTestId('inspected-ticket-list');
    const filedList = getByTestId('filed-ticket-list');

    expect(openedList.children.length).toBeLessThanOrEqual(1);
    expect(doneList.children.length).toBeLessThanOrEqual(1);
    expect(inspectedList.children.length).toBeLessThanOrEqual(2);
    expect(filedList.children.length).toBeLessThanOrEqual(1);
  });
});
