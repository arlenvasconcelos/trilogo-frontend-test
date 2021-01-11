import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal, Button, Form, Input, Select, Upload,
} from 'antd';

import { InboxOutlined } from '@ant-design/icons';

import { addNewTicket, closeModal } from '../../../../store/modules/tickets/actions';
import { users } from '../../../../database';

import styles from './TicketModal.module.css';

const { Option } = Select;

const typeOptions = [
  { value: 'Bem', label: 'Bem' },
  { value: 'Predial', label: 'Predial' },
  { value: 'Procedimento', label: 'Procedimento' },
];

export default function TicketModal() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { openTicketModal } = useSelector((state) => state.tickets);

  const [requiredMark, setRequiredMarkType] = useState('required');

  const onRequiredTypeChange = ({ reqMark }) => {
    setRequiredMarkType(reqMark);
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = (values) => {
    dispatch(addNewTicket({ ticket: { ...values, status: 'opened' } }));
    dispatch(closeModal());
  };

  return (
    <>
      <Modal
        visible={openTicketModal}
        title="Novo Ticket"
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ requiredMark }}
          onValuesChange={onRequiredTypeChange}
          onFinish={onFinish}
        >
          <Form.Item name="description" label="Descrição" required>
            <Input />
          </Form.Item>
          <Form.Item name="type" label="Tipo" required>
            <Select>
              {typeOptions.map((item) => (
                <Option key={item.value} value={item.value}>{item.label}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="manage" label="Responsável" required>
            <Select>
              {users.map((item) => (
                <Option key={item.id} value={item.name}>{item.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Imagem">
            <Form.Item name="image" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon" style={{ fontSize: '39px' }}>
                  <InboxOutlined />
                </p>
                <p className="ant-upload-hint">Arraste uma imagem para anexar ao ticket</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <div className={styles.submitBtnWrapper}>
            <Button shape="round" type="primary" htmlType="submit">
              Criar ticket
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
