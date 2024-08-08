import styled from 'styled-components'

export const Button=styled.button`
  padding:10px 18px;
  color: white;
  height: 44px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border:1px solid transparent;
  cursor: pointer;
  transition: 0ms.4s background ease-in;

  &:hover{
    background-color:white;
    border: 1px solid black;
    transition:0.3s background ease-in;
    color:black;
  }
`
export const OutlineButton=styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover{
    background-color:black;
    border: 1px solid transparent;
    color:white;
    
  }
`
