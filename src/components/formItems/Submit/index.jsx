import React from 'react';
import { Button } from 'antd';

const Submit = props => {
    const { children } = props;
    return (
        <Button type="primary" htmlType="submit">
            {children}
        </Button>
    )
}

export default Submit;