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

// Modal
const openModal = () => ({
  type: TYPES.OPEN_MODAL,
});
const closeModal = () => ({
  type: TYPES.CLOSE_MODAL,
});

export {
  addNewTicket,
  removeTicket,
  updateTicket,
  openModal,
  closeModal,
};
