import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Modal, Form, Select, Input, InputNumber, Button } from "antd";
import Btn from "./Button";


function ModalComp() {

  const form = useForm()
  const { register, handleSubmit, control ,formState } = form
  const { errors } = formState;

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

  console.log(Controller);
  
  return (
    <>
      <Btn modal={showModal} />
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form name="basic" onSubmit={handleSubmit(submitFn)} >
        <Controller 
            name="name"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field}) => (
              <>
              <Input {...field} placeholder="Enter your name" />
              <Button {...field} htmlType="submit">Submit</Button>
              </>
          )}
            />
            

          {/* <Form.Item
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
          <p style={{color:'red'}}>{errors?.username?.message}</p>
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
          </Form.Item> */}

              
        </Form>
      </Modal>
    </>
  )
}

export default ModalComp