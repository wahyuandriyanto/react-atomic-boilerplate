import React from 'react';
import { Typography } from 'antd';
import { StyledPageHeader } from './Styled';

const { Title } = Typography;

const PageHeader = () => {
    return (
        <StyledPageHeader>
            <Title level={3}>Simple To Do List App</Title>
        </StyledPageHeader>
    )
}

export default PageHeader