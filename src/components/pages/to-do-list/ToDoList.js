import React, { useState, useEffect, useCallback } from 'react';
import PageHeader from 'components/molecules/to-do-list/PageHeader';
import DataTable from 'components/organisms/to-do-list/DataTable';
import _ from 'lodash';

import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Alert, notification, Spin } from 'antd';
import { ApiCall } from 'utils/ApiCall';

import { StyledToDoList } from './Styled';

const ToDoList = () => {
    const toDoList = useSelector(select => select.toDoList);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const getData = useCallback(() => {
        setLoading(true);
        ApiCall.get('/hanabyan/todo/1.0.0/to-do-list')
        .then((res) => {
            dispatch({
                type    : 'SET_TO_DO_LIST',
                payload : res.data
            })
            setLoading(false);
        })
        .catch(() => {
            notification.error({
                message: 'ERROR',
                description: 'Please contact your api division!',
            });
            setLoading(false);
        })
    },[dispatch])

    const completedList     = _.filter(toDoList, { 'status': 1 });
    const inCompletedList   = _.filter(toDoList, { 'status': 0 });

    useEffect(() => {
        getData();
    }, [getData])

    return (
        <StyledToDoList>
            <PageHeader />
            <Spin spinning={loading}>
                <Row gutter={24}>
                    <Col span={12}>
                        <Alert message="Complete" type="success" showIcon />
                        <DataTable data={completedList} />
                    </Col>
                    <Col span={12}>
                        <Alert message="Incomplete" type="error" showIcon />
                        <DataTable data={inCompletedList} />
                    </Col>
                </Row>
            </Spin>
        </StyledToDoList>
    )
}

export default ToDoList