import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GreetingContainer = styled.div`
  padding: 0px 20px;
  max-width: 500px;
`
export const Heading = styled.h1`
  font-size: 30px;
  color: #db1c48;
  padding: 10px;
  margin-top: 30px;
  text-align: center;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 10px;
  width: 100%;
  flex-wrap: wrap;
`

export const GreetingImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const GreetingImage = styled.img`
  width: 100%;
  max-width: 300px;
  padding: 20px;
`
