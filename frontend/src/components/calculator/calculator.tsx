import React, { FC, useState } from 'react';
import { useMutation } from 'react-query';
import TextInput from '../common/TextInput';
import isEmpty from '../../utills/fuctions';
import { LoadingOutlined } from '@ant-design/icons';
import { ICalculator } from '../../models/calculator';
import { calculateSum } from '../../services/calculatorServices';
import { Typography, Input, Divider, Form, Spin } from 'antd';
import { Wrapper, StyledButton, StyledCard, StyledRow, Container } from './calculatorStyled';

type Props = {};

const { Title, Text } = Typography
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Calculator: FC<Props> = () => {
  const [formValues, setFormValues] = useState<ICalculator>({ firstNumber: '', secondNumber: '' })
  const {
    mutate,
    isLoading,
    data,
    error
  }: {
    mutate: Function,
    isLoading: boolean,
    data: any,
    error: any
  } = useMutation(calculateSum)

  const handleChange = (e: any) => {
    const { name, value } = e?.target || {}
    setFormValues({ ...formValues, [name]: Number(value) })
  }

  const onCalculateSum = (e: any) => {
    e.preventDefault();
    const { firstNumber, secondNumber } = formValues

    if (isEmpty(firstNumber) || isEmpty(secondNumber)) {
      return;
    }
    mutate({ ...formValues })
  }

  return (
    <>
      <StyledRow>
        <Title> Calculator </Title>
      </StyledRow>
      <Container justify='center'>
        <StyledCard>
          <Form onSubmitCapture={onCalculateSum}>
            <Wrapper>
              <Text> Enter the numbers </Text>
            </Wrapper>
            <Wrapper>
              <TextInput
                type='number'
                label="number"
                name='firstNumber'
                placeholder='number1'
                isRequired={true}
                onChange={handleChange}
              />
            </Wrapper>
            <Wrapper>
              <TextInput
                type='number'
                label="number"
                name='secondNumber'
                placeholder='number2'
                isRequired={true}
                onChange={handleChange} />
            </Wrapper>
            {error &&
              <Wrapper>
                <Text className='error'>
                  {error?.response?.data?.message}
                </Text>
              </Wrapper>
            }
            <Wrapper>
              <StyledButton
                htmlType='submit'
                disabled={isLoading}
              >
                {isLoading
                  ? <Spin indicator={antIcon} />
                  : 'Sum'
                }
              </StyledButton>
            </Wrapper>
          </Form>
          <Divider />
          <Wrapper>
            <Text> Results </Text>
          </Wrapper>
          <Wrapper>
            <Input
              className='result-input'
              value={data?.data?.result}
              type='number'
              disabled
            />
          </Wrapper>
        </StyledCard>
      </Container>
    </>
  )
}
export default Calculator;







