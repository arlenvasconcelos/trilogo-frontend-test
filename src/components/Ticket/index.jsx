import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge, Card, Typography, Space, Button, Image,
} from 'antd';

import { EllipsisOutlined } from '@ant-design/icons';

// import styles from './Ticket.module.css';

const { Text } = Typography;

export default function Ticket({ ticket }) {
  return (
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
          <Button type="text" style={{ fontSize: '20px' }}>
            <EllipsisOutlined />
          </Button>
        </Space>

      </Space>
    </Card>
  );
}

Ticket.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    manage: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
