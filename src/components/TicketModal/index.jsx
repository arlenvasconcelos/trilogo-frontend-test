import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Modal, Button, Form, Input, Select, Upload,
} from 'antd';

import { InboxOutlined } from '@ant-design/icons';

import { addNewTicket, updateTicket } from '../../store/modules/tickets/actions';
import { users } from '../../database';

import styles from './TicketModal.module.css';

const { Option } = Select;

const typeOptions = [
  { value: 'Bem', label: 'Bem' },
  { value: 'Predial', label: 'Predial' },
  { value: 'Procedimento', label: 'Procedimento' },
];

const statusOptions = [
  { value: 'opened', label: 'Aberto' },
  { value: 'done', label: 'Executado' },
  { value: 'inspected', label: 'Inspecionado' },
  { value: 'filed', label: 'Arquivado' },
];

export default function TicketModal({
  isUpdating, selectedTicket, visible, handleCancel,
}) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [requiredMark, setRequiredMarkType] = useState('required');

  const onRequiredTypeChange = ({ reqMark }) => {
    setRequiredMarkType(reqMark);
  };

  const normFile = (e) => {
    // console.log('Upload event:', e);
    form.setFieldsValue([{
    }]);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleCloseModal = () => {
    form.resetFields();
    handleCancel();
  };

  const onFinish = (values) => {
    if (isUpdating) {
      dispatch(updateTicket({ ticket: { ...values, id: selectedTicket.id } }));
    } else {
      dispatch(addNewTicket({ ticket: { ...values, status: 'opened' } }));
    }
    handleCloseModal();
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      if (values.image) {
        values.image = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
      }
      onFinish(values);
    } catch (errorInfo) {
      // console.log('Failed:', errorInfo);
    }
  };

  // Effects
  useEffect(() => {
    if (isUpdating) {
      form.setFieldsValue(selectedTicket);
    }
  }, [isUpdating, form, selectedTicket]);

  return (
    <>
      <Modal
        data-testid="ticket-modal"
        visible={visible}
        title={isUpdating ? 'Atualizar Ticket' : 'Novo Ticket'}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ requiredMark }}
          onValuesChange={onRequiredTypeChange}
        >
          <Form.Item
            name="description"
            label="Descrição"
            rules={[
              {
                required: true,
                message: 'Este campo é obrigatório',
              },
            ]}
          >
            <Input data-testid="description-input" />
          </Form.Item>
          <Form.Item
            name="type"
            label="Tipo"
            rules={[
              {
                required: true,
                message: 'Este campo é obrigatório',
              },
            ]}
          >
            <Select>
              {typeOptions.map((item) => (
                <Option key={item.value} value={item.value}>{item.label}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="manager"
            label="Responsável"
            rules={[
              {
                required: true,
                message: 'Este campo é obrigatório',
              },
            ]}
          >
            <Select>
              {users.map((item) => (
                <Option key={item.id} value={item.name}>{item.name}</Option>
              ))}
            </Select>
          </Form.Item>
          {isUpdating && (
            <Form.Item
              name="status"
              label="Status"
              rules={[
                {
                  required: true,
                  message: 'Este campo é obrigatório',
                },
              ]}
            >
              <Select>
                {statusOptions.map((item) => (
                  <Option key={item.value} value={item.value}>{item.label}</Option>
                ))}
              </Select>
            </Form.Item>
          )}
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
            <Button shape="round" type="primary" onClick={onCheck}>
              {isUpdating ? 'Atualizar ticket' : 'Criar ticket'}
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}

TicketModal.propTypes = {
  isUpdating: PropTypes.bool.isRequired,
  selectedTicket: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    manager: PropTypes.string,
    image: PropTypes.string,
  }),
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

TicketModal.defaultProps = {
  selectedTicket: null,
};
