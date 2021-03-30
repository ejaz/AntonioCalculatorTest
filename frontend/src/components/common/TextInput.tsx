import React, { FC } from 'react';
import { Form, Input } from 'antd';
import styled from 'styled-components';

type Props = {
  name: string,
  isRequired?: boolean,
  label: string,
  type?: string,
  placeholder?: string,
  onChange?: any
};

const TextInput: FC<Props> = ({ name, label, type, isRequired, onChange, ...props}) => {
  return (<>
    <FormItem name={name} rules={[{ required: isRequired, message: `Please enter ${label}!` }]} >
      <Input type={type} name={name} {...props} onChange={onChange}/>
    </FormItem>
  </>)
}

export default TextInput

const FormItem = styled(Form.Item)`
color: red;
margin: 0.5rem 0;
  .ant-form-item-explain ant-form-item-explain-error {
    color: red;
  }
`