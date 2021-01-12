import { uuid } from 'uuidv4';

export const TYPES = {
  ADD: 'ticket/ADD',
  REMOVE: 'ticket/REMOVE',
  UPDATE: 'ticket/UPDATE',
  OPEN_MODAL: 'ticket/OPEN_MODAL',
  CLOSE_MODAL: 'ticket/CLOSE_MODAL',
};

// Reducer

const initialState = {
  allTickets: [],
  openTicketModal: false,
  error: null,
};

export default function tickets(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD:
      return {
        ...state,
        allTickets: [...state.allTickets, {
          ...action.payload.ticket,
          id: uuid(),
          code: Math.floor(Math.random() * 10000),
        }],
      };
    case TYPES.REMOVE:
      return {
        ...state,
        allTickets: state.allTickets.filter((t) => t.id !== action.payload.ticketId),
      };
    case TYPES.UPDATE:
      return {
        ...state,
        allTickets: state.allTickets.map((t) => {
          if (t.id === action.payload.ticket.id) {
            return action.payload.ticket;
          }
          return t;
        }),
      };
    case TYPES.OPEN_MODAL:
      return {
        ...state,
        openTicketModal: true,
      };
    case TYPES.CLOSE_MODAL:
      return {
        ...state,
        openTicketModal: false,
      };
    default:
      return state;
  }
}
