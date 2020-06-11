import styled from 'styled-components'
import colors from 'styles/colors'

const mobileBp = '768px'

export const Wrapper = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : `${colors.black}`};
  display: ${(props) => (props.hide ? 'none' : 'block')};
  color: ${(props) => (props.color ? props.color : `${colors.white}`)};
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 18px;
  position: relative;
  padding: 12px;
  padding-right: 40px;
  text-align: center;

  & > u {
    text-decoration-color: inherit;
  }

  & > a {
    text-decoration: none;
    color: inherit;
  }
`

export const Icon = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => (props.color ? props.color : `${colors.white}`)};
  cursor: pointer;
  font-size: 30px;
  height: 100%;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;

  @media (min-width: ${mobileBp}) {
    display: none;
  }

  &::before {
    content: '×';
  }
`
Icon.displayName = 'NotificationBarIcon'

export const Notifications = styled.section``
