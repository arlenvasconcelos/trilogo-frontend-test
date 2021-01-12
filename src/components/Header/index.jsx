import React, { useState } from 'react';

import { Button } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import TicketModal from '../TicketModal';

import styles from './Header.module.css';
import logo from '../../assets/logo.png';

// const { Header } = Layout;

export default function HeaderComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleAddTicket = () => {
    setShowModal(true);
  };

  return (
    <>
      <header className={styles.root}>
        <img src={logo} alt="Trílogo" />
        <Button type="primary" icon={<PlusOutlined />} size={10} shape="round" onClick={handleAddTicket}>
          Novo ticket
        </Button>
      </header>
      <TicketModal
        visible={showModal}
        handleCancel={() => setShowModal(false)}
        isUpdating={false}
      />
    </>
  );
}
