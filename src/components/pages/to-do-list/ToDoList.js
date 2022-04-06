import React, { useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ApiCall } from 'utils/ApiCall';

const ToDoList = () => {
    const toDoList = useSelector(select => select.toDoList);
    const dispatch = useDispatch();

    const getData = useCallback(() => {
        if (toDoList.length === 0) {
            ApiCall.get('/hanabyan/todo/1.0.0/to-do-list')
            .then((res) => {
                dispatch({
                    type    : 'SET_TO_DO_LIST',
                    payload : res.data
                })
            })
        }
    },[])

    useEffect(() => {
        getData();
    }, [getData])
    
    return (
        <div>Homepage</div>
    )
}

export default ToDoList