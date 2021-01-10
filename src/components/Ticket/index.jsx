import React from 'react';
import {
  Badge, Card, Typography, Space, Button, Image,
} from 'antd';

import { EllipsisOutlined } from '@ant-design/icons';

// import styles from './Ticket.module.css';

const { Text } = Typography;

export default function Ticket() {
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
          count="Procedimento"
          style={{
            backgroundColor: '#CAD1EB',
            color: '#1F1F49',
          }}
        />
        <Text strong>6532</Text>
        <Text type="secondary">Consertar o vazamento</Text>
        <Space size={110} style={{ marginTop: '15px' }}>
          <Text>Yudi Tamashiro</Text>
          <Button type="text">
            <EllipsisOutlined />
          </Button>
        </Space>

      </Space>
    </Card>
  );
}
