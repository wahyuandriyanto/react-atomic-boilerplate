import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

const { Option } = Select;

const ModalEditData = ({ isModalVisible, onCancel, selectedData }) => {

    const toDoList = useSelector(select => select.toDoList);
    const dispatch = useDispatch();
    const [data, setData] = useState(toDoList);

    const handleEditData = (data) => {
        const newArr = _.map(toDoList, function(obj) {
            return obj.id === selectedData.id ? {
                ...selectedData,
                ...data
            } : obj
        })
        setData(newArr);
        onCancel();
    }

    const handleDeleteData = () => {
        const newArr = _.filter(toDoList, function(obj) {
            return obj.id !== selectedData.id
        })
        setData(newArr);
        setTimeout(() => {
            onCancel();
        }, 100);
    }
    
    useEffect(() => {
        dispatch({
            type    : 'SET_TO_DO_LIST',
            payload : data
        })
    }, [data, dispatch])
    

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
                            <Button type="primary" danger onClick={handleDeleteData}>Delete</Button>
                        )} 
                        <Button type="primary" htmlType="submit">Update</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalEditData