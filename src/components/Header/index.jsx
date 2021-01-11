import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { openModal } from '../../store/modules/tickets/actions';

// const { Header } = Layout;

export default function HeaderComponent() {
  const dispatch = useDispatch();

  const handleAddTicket = () => {
    dispatch(openModal());
  };

  return (
    <header className={styles.root}>
      <img src={logo} alt="Trílogo" />
      <Button type="primary" icon={<PlusOutlined />} size={10} shape="round" onClick={handleAddTicket}>
        Novo ticket
      </Button>
    </header>
  );
}
