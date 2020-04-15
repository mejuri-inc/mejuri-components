import styled from 'styled-components'

export const StylingHelp = styled.div`
  border-top: tomato;
  margin-top: 35px;
  padding-top: 20px;

  & > h5 {
    letter-spacing: 1px;
  }

  & > a {
    color: black;
    display: block;
    margin-top: 20px;
    text-decoration: underline;
  }

  & > p {
    margin-top: 15px;
  }
`
