import { Form,Input } from 'antd';

const TextInput = props => {
  const { getFieldDecorator,name,label,extra,validator,initialValue,...inputConfig } = props;
  
  return (
    <Form.Item label={label} extra={extra}>
      {getFieldDecorator (name, {
        rules : [
          {
            validator : validator || '',
          }
        ],
        initialValue: initialValue || null
      }) (<Input {...inputConfig} />)}
    </Form.Item>
  );
};

export default TextInput;