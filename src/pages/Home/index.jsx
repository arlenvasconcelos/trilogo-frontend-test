import React from 'react';

import { Row, Col } from 'antd';
import Header from '../../components/Header';
import Board from '../../components/Board';

import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.mainContent}>
        <Row gutter={16}>
          <Col span={6}>
            <Board title="Abertos" bgColor="rgba(245, 34, 45, 0.25)">
              aushas
            </Board>
          </Col>
          <Col span={6}>
            <Board title="Executados" bgColor="rgba(212, 102, 45,0.25)">
              asuhas
            </Board>
          </Col>
          <Col span={6}>
            <Board title="Vistoriados" bgColor="rgba(82, 196, 26, 0.25)">
              asuhas
            </Board>
          </Col>
          <Col span={6}>
            <Board title="Arquivados" bgColor="rgba(193, 185, 185, 0.25)">
              asuahs
            </Board>
          </Col>
        </Row>
      </div>
    </>
  );
}
