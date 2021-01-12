import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Badge, Card, Typography, Space, Button, Image,
  Menu, Dropdown,
} from 'antd';

import { EllipsisOutlined } from '@ant-design/icons';
import TicketModal from '../TicketModal';
import styles from './Ticket.module.css';

import { removeTicket } from '../../store/modules/tickets/actions';

const { Text } = Typography;

export default function Ticket({ ticket }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleUpdateTicket = () => {
    setShowModal(true);
  };
  const handleDeleteTicket = () => {
    dispatch(removeTicket({ ticketId: ticket.id }));
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <button onClick={handleUpdateTicket} type="button" className={styles.dropdpwnButton}>
          Editar
        </button>
      </Menu.Item>
      <Menu.Item>
        <button onClick={handleDeleteTicket} type="button" className={styles.dropdpwnButton}>
          Excluir
        </button>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Card size="small">
        <Space direction="vertical">
          <Image
            width="100%"
            height="104px"
            style={{
              objectFit: 'cover',
            }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            preview={false}
          />
          <Badge
            count={ticket.type}
            style={{
              backgroundColor: '#CAD1EB',
              color: '#1F1F49',
            }}
          />
          <Text strong>{ticket.code }</Text>
          <Text type="secondary">{ticket.description}</Text>
          <div style={{
            marginTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
          >
            <Text>{ticket.manage}</Text>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <Button type="text" style={{ fontSize: '20px' }}>
                <EllipsisOutlined />
              </Button>
            </Dropdown>
          </div>

        </Space>
      </Card>
      <TicketModal
        isUpdating
        selectedTicket={ticket}
        visible={showModal}
        handleCancel={() => setShowModal(false)}
      />
    </>
  );
}

Ticket.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    manage: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    code: PropTypes.number,
  }).isRequired,
};
