import React from 'react';
import { Modal, Form, Input, Select, Space, Button } from 'antd';

const { Option } = Select;

const ModalEditData = ({ isModalVisible, onCancel, selectedData }) => {

    const handleEditData = (data) => {
        console.log(data);
    }

    return (
        <Modal title="Edit Data" visible={isModalVisible} onCancel={onCancel} footer={null}>
            <Form
                name="basic"
                onFinish={handleEditData}
                autoComplete="off"
                layout="vertical"
                style={{ marginTop: '40px' }}
                initialValues={selectedData}
            >

                <Form.Item
                    label="Title"
                    name="title"
                >
                    <Input type="text" />
                </Form.Item>
               

                <Form.Item
                    label="Description"
                    name="description"
                >
                    <Input type="text" />
                </Form.Item>

                <Form.Item
                    label="Status"
                    name="status"
                >
                    <Select placeholder="Status">
                        <Option value={1}>Complete</Option>
                        <Option value={0}>Incomplete</Option>
                    </Select>
                </Form.Item>

                <Form.Item >
                    <Space style={{ width: '100%', justifyContent: 'flex-end' }} size={8}>
                        {selectedData.status === 1 && (
                            <Button type="primary" danger>Delete</Button>
                        )} 
                        <Button type="primary" htmlType="submit">Update</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalEditData