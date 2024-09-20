import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Form, Select, Input, InputNumber } from "antd";
import Btn from "./Button";


function ModalComp() {

  const form = useForm()
  const { register, handleSubmit } = form

  const submitFn = (data) => {
    console.log(data);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Btn modal={showModal} />
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form name="basic" onSubmitCapture={handleSubmit(submitFn)}>
          <Form.Item
            label="FirstName"
            name="FirstName"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input {...register('name')}/>
          </Form.Item>
          <Form.Item
            label="LastName"
            name="LastName"
            rules={[
              {
                required: true,
                message: 'Please input your lastname!',
              },
            ]}
          >
            <Input {...register('lastname')}/>
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
            <InputNumber/>
          </Form.Item>

        </Form>
      </Modal>
    </>
  )
}

export default ModalComp