import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Badge, Card, Typography, Space, Button, Image,
  Menu, Dropdown,
} from 'antd';

import { EllipsisOutlined } from '@ant-design/icons';
import TicketModal from '../TicketModal';
// import styles from './Ticket.module.css';

const { Text } = Typography;

export default function Ticket({ ticket }) {
  const [showModal, setShowModal] = useState(false);

  const handleUpdateTicket = () => {
    setShowModal(true);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <button onClick={handleUpdateTicket} type="button">
          Editar
        </button>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          Excluir
        </a>
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
          <Text strong>{ticket.id }</Text>
          <Text type="secondary">{ticket.description}</Text>
          <Space size={85} style={{ marginTop: '15px' }}>
            <Text>{ticket.manage}</Text>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <Button type="text" style={{ fontSize: '20px' }}>
                <EllipsisOutlined />
              </Button>
            </Dropdown>
          </Space>

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
  }).isRequired,
};
