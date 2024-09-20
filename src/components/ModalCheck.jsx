import React, { useState } from 'react';
import { Button, Form, Input, Modal, InputNumber, Select } from 'antd';
const ModalCheck = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setFormValues(values);
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Click
      </Button>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <Modal
        open={open}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        okButtonProps={{
          autoFocus: true,
          htmlType: 'submit',
        }}
        onCancel={() => setOpen(false)}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            layout="horizontal"
            form={form}
            name="form_in_modal"
            initialValues={{
              modifier: 'public',
            }}
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="FirstName"
          label="FirstName"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="lastName" label="LastName">
          <Input />
        </Form.Item>

        <Form.Item
          label="Address">
          <Select
            showSearch
            placeholder="Select a region"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: '1',
                label: 'Toshkent',
              },
              {
                value: '2',
                label: 'Surxandaryo',
              },
              {
                value: '3',
                label: 'Qashqadaryo',
              },
              {
                value: '4',
                label: 'Andijon',
              },
              {
                value: '5',
                label: 'Buxoro',
              }

            ]}
          />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="Phone Number">
          <InputNumber />
        </Form.Item>
      </Modal>
    </>
  );
};
export default ModalCheck;