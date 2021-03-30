import styled from 'styled-components';
import { Card, Row, Button } from 'antd';

export const  Wrapper = styled(Row)`
  margin-bottom: 10px;
  text-align: center;
  .ant-input {
    border: 1px solid #A4A4A4;
    border-radius: 2px;
    height: 36px;
    padding: 0 12px;
    width: 227px;
    font-family: Varela Round;
  }
  .ant-typography {
    font-family: Varela Round;
    color: #A4A4A4;
    font-size: 16px;
  }
  .error {
    font-family: Varela Round;
    color: red;
    font-size: 16px;
  }
  .result-input {
    border-color: #C10708;
    font-family: Varela Round;
  }
`

export const  StyledCard = styled(Card)`
  width: 100%;
  .ant-card {
    width: 100%;
  }
  .ant-divider {
    width: 100%;
    height: 1px;
    background: #C10708;
    margin: 55px 0 42px 0;
  }
`

export const  StyledButton = styled(Button)`
  background: #C10708;
  font-size: 16px;
  color: white;
  margin-top: 8px;
  width: 253px;
  border: 0;
  border-radius: 2px;
  height: 36px;
`

export const  Container = styled(Row)`
    max-width: 700px;
    row-gap: 0px;
    display: flex;
    margin: 0 auto;
    border: 0.5px solid #A4A4A4;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 2px 6px 10px #00000029;
    margin-top: 60px;
    padding: 25px;
    @media screen and (max-width: 767px){
      width: 75%;
    }
`

export const  StyledRow = styled(Row)`
  width: 100vw;
  background: #C10708;
  .ant-typography {
    margin: 0px;
    padding: 27px 0;
    text-align: center;
    text-align: center;
    font-size: 18px;
    letter-spacing: 0.54px;
    color: #FFFFFF;
    text-transform: uppercase;
    font-family: Varela Round;
  }
`