import styled from 'styled-components'

export const ButtonItem = styled.li`
  list-style: none;
  padding: 5px 10px;
`
export const LanguageButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${props => props.buttonBgColor};
  color: ${props => props.buttonTextColor};
  border-radius: 10px;
  border: 2px solid ${props => props.buttonTextColor};
`
