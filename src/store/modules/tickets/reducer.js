import { uuid } from 'uuidv4';

export const TYPES = {
  ADD: 'ticket/ADD',
  REMOVE: 'ticket/REMOVE',
  UPDATE: 'ticket/UPDATE',
};

// Reducer

const initialState = {
  allTickets: [],
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
    default:
      return state;
  }
}
