import React from 'react';

import {
  Row, Col, Space, Layout,
} from 'antd';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Board from '../../components/Board';

import styles from './Home.module.css';
import Ticket from '../../components/Ticket';

const { Content } = Layout;

export default function Home() {
  const { allTickets } = useSelector((state) => state.tickets);

  return (
    <Layout>
      <Header />
      <Content className={styles.mainContent}>
        <Row gutter={[16, 16]} style={{ height: '100%' }}>
          <Col xs={24} sm={12} md={6} lg={6} className={styles.boardWrapper}>
            <Board title="Abertos" bgColor="rgba(245, 34, 45, 0.25)">
              <Space direction="vertical">
                {
                  allTickets.map((ticket) => {
                    if (ticket.status === 'opened') {
                      return <Ticket key={ticket.id} ticket={ticket} />;
                    }
                    return <></>;
                  })
                }
              </Space>
            </Board>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6} className={styles.boardWrapper}>
            <Board title="Executados" bgColor="rgba(212, 102, 45,0.25)">
              <Space direction="vertical">
                {
                  allTickets.map((ticket) => {
                    if (ticket.status === 'done') {
                      return <Ticket key={ticket.id} ticket={ticket} />;
                    }
                    return <></>;
                  })
                }
              </Space>
            </Board>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6} className={styles.boardWrapper}>
            <Board title="Vistoriados" bgColor="rgba(82, 196, 26, 0.25)">
              <Space direction="vertical">
                {
                  allTickets.map((ticket) => {
                    if (ticket.status === 'inspected') {
                      return <Ticket key={ticket.id} ticket={ticket} />;
                    }
                    return <></>;
                  })
                }
              </Space>
            </Board>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6} className={styles.boardWrapper}>
            <Board title="Arquivados" bgColor="rgba(193, 185, 185, 0.25)">
              <Space direction="vertical">
                {
                  allTickets.map((ticket) => {
                    if (ticket.status === 'filed') {
                      return <Ticket key={ticket.id} ticket={ticket} />;
                    }
                    return <></>;
                  })
                }
              </Space>
            </Board>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
