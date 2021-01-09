import React from 'react';

import { Button } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import styles from './Header.module.css';
import logo from '../../assets/logo.png';

// const { Header } = Layout;

export default function HeaderComponent() {
  return (
    <header className={styles.root}>
      <img src={logo} alt="Trílogo" />
      <Button type="primary" icon={<PlusOutlined />} size={10} shape="round">
        Novo ticket
      </Button>
    </header>
  );
}
