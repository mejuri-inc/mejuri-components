import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  background: white;
  border-bottom: 1px solid tomato;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  padding: 0 25px;
`

export const GoBack = styled.div`
  margin-right: auto;
`

export const Arrow = styled.button`
  background: transparent;
  border: none;
  height: 40px;
  width: 40px;
`

export const Close = styled(Arrow)`
  padding: 12px;
  margin-left: -12px;
`

export const Glass = styled.button`
  background: transparent;
  border: none;
  height: 35px;
  margin-right: 5px;
  width: 35px;
`
