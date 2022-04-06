import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Typography } from 'antd';

import { StyledDataTable } from './Styled';
import ModalEditData from 'components/molecules/to-do-list/ModalEditData';

const { Column } = Table;
const { Text }   = Typography;

const DataTable = ({ data }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    const handleEditData = (data) => {
        setIsModalVisible(true);
        setSelectedData(data);
    }

    return (
        <StyledDataTable>
            <Table 
                dataSource={data}
                rowKey={data => data.id}
            >
                <Column 
                    title="Title"
                    render={(data) => (
                        <Text 
                            type="primary" 
                            onClick={() => handleEditData(data)}
                            style={{ cursor: 'pointer' }}
                        >
                            {data.title}
                        </Text>
                    )} 
                />
                <Column 
                    title="Description" 
                    dataIndex="description"
                    render={(data) => (
                        <Text type="secondary">{data}</Text>
                    )} 
                />
                <Column 
                    title="Status"
                    dataIndex="status"
                    render={(data) => (
                        <Text type="secondary">
                            {data === 0 ? 'Incomplete' : 'Complete'}
                        </Text>
                    )} 
                />
            </Table>
            {isModalVisible && (
                <ModalEditData 
                    isModalVisible={isModalVisible} 
                    onCancel={() => setIsModalVisible(false)}
                    selectedData={selectedData}
                />
            )} 
        </StyledDataTable>
    )
}

DataTable.propTypes = {
    data : PropTypes.array,

};

export default DataTable