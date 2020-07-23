import styled from 'styled-components/macro'
import colors from 'styles/colors'

export const StylingHelp = styled.div`
  border-top: 1px solid ${colors.lightGray1};
  margin-top: 35px;
  margin-bottom: 35px;
  padding-top: 20px;
  & > h5 {
    letter-spacing: 1px;
  }

  & > a {
    color: ${colors.black};
    display: block;
    margin-top: 20px;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 300;
    text-decoration-color: ${colors.black};
  }

  & > p {
    margin-top: 15px;
  }
`
