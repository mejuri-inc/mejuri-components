import styled from 'styled-components'

const RegularNotificationBar = styled.div`
  background-color: ${(p) => p.theme.colors.black};
  padding: 10px 20px;
  color: ${(p) => p.theme.colors.white};
  font-size: 14px;
  font-weight: ${(p) => p.theme.fontWeight.regular};
  letter-spacing: 1px;
  line-height: 18px;
  text-align: center;
  -webkit-text-stroke: initial;

  @media (min-width: 768px) {
    padding: 12px;
    font-size: 15px;
  }

  a {
    color: ${(p) => p.theme.colors.white};
    transition: color 0.3s ease;
    text-decoration: underline;

    &:hover {
      color: ${(p) => p.theme.colors.grey};
    }
  }
`

export default RegularNotificationBar
