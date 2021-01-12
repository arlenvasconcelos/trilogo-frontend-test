import { TYPES } from './reducer';

const addNewTicket = ({ ticket }) => ({
  type: TYPES.ADD,
  payload: { ticket },
});
const removeTicket = ({ ticketId }) => ({
  type: TYPES.REMOVE,
  payload: { ticketId },
});
const updateTicket = ({ ticket }) => ({
  type: TYPES.UPDATE,
  payload: { ticket },
});
export {
  addNewTicket,
  removeTicket,
  updateTicket,
};
