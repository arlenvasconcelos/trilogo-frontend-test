import React from 'react';

import { Row, Col, Space } from 'antd';
import Header from '../../components/Header';
import Board from '../../components/Board';

import styles from './Home.module.css';
import TicketModal from './components/TicketModal';
import Ticket from '../../components/Ticket';

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.mainContent}>
        <Row gutter={[16, 16]} style={{ height: '100%' }}>
          <Col span={6} style={{ height: '100%' }}>
            <Board title="Abertos" bgColor="rgba(245, 34, 45, 0.25)">
              <Space direction="vertical">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
              </Space>
            </Board>
          </Col>
          <Col span={6} style={{ height: '100%' }}>
            <Board title="Executados" bgColor="rgba(212, 102, 45,0.25)">
              <Space direction="vertical">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
              </Space>
            </Board>
          </Col>
          <Col span={6} style={{ height: '100%' }}>
            <Board title="Vistoriados" bgColor="rgba(82, 196, 26, 0.25)">
              <Space direction="vertical">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
              </Space>
            </Board>
          </Col>
          <Col span={6} style={{ height: '100%' }}>
            <Board title="Arquivados" bgColor="rgba(193, 185, 185, 0.25)">
              <Space direction="vertical">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
              </Space>
            </Board>
          </Col>
        </Row>
      </div>
      <TicketModal />
    </>
  );
}
