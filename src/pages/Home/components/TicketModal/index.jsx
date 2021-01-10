import React, { useState } from 'react';
import {
  Modal, Button, Form, Input, Select, Upload,
} from 'antd';

import { InboxOutlined } from '@ant-design/icons';

import styles from './TicketModal.module.css';

const { Option } = Select;

const typeOptions = [
  { value: 'oi', label: 'Oi' },
  { value: 'ola', label: 'olá' },
];

export default function TicketModal() {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);
  const [requiredMark, setRequiredMarkType] = useState('required');

  const onRequiredTypeChange = ({ reqMark }) => {
    setRequiredMarkType(reqMark);
  };

  const handleOk = () => {
    setVisible(false);
    setLoading(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFieldsChange = (e) => {
    console.log(e);
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Modal
        visible={visible}
        title="Novo Ticket"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          onFieldsChange={onFieldsChange}
          form={form}
          layout="vertical"
          initialValues={{ requiredMark }}
          onValuesChange={onRequiredTypeChange}
          onFinish={onFinish}
          // requiredMark={requiredMark}
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
              {typeOptions.map((item) => (
                <Option key={item.value} value={item.value}>{item.label}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Imagem">
            <Form.Item name="image" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon" style={{ fontSize: '39px' }}>
                  <InboxOutlined />
                </p>
                {/* <p className="ant-upload-text">Click or drag file to this area to upload</p> */}
                <p className="ant-upload-hint">Arraste uma imagem para anexar ao ticket</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <div className={styles.submitBtnWrapper}>
            <Button shape="round" type="primary" loading={loading} onClick={handleOk}>
              Criar ticket
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
