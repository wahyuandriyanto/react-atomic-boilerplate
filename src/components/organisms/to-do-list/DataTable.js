import React from 'react';
import PropTypes from 'prop-types';
import { Table, Typography } from 'antd';

import { StyledDataTable } from './Styled';

const { Column } = Table;
const { Text }   = Typography;

const DataTable = ({ data, type }) => {

    return (
        <StyledDataTable>
            <Table 
                dataSource={data}
                rowKey={data => data.id}
            >
                <Column 
                    title="Title"
                    dataIndex="title" 
                    render={(data) => (
                        <Text type="secondary">{data}</Text>
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
        </StyledDataTable>
    )
}

DataTable.propTypes = {
    data : PropTypes.array,
    type : PropTypes.oneOf(['complete', 'inComplete']),

};

export default DataTable