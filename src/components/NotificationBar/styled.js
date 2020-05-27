import styled from 'styled-components'

const mobileBp = '768px'

export const Wrapper = styled.div`
  position: relative;
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#000'};
  color: ${(props) => (props.color ? props.color : '#fff')};
  text-decoration-color: ${(props) => (props.color ? props.color : '#fff')};
  padding: 0 12px;
  align-items: center;
  justify-content: center;

  @media (min-width: ${mobileBp}) {
    padding: 0 24px;
    display: flex;
  }
`
Wrapper.displayName = 'NotificationBarWrapper'

export const Message = styled.div`
  font-size: 14px;
  line-height: 18px;
  padding: 10px 10px 10px 0;
  text-align: center;
  letter-spacing: 1px;

  @media (min-width: ${mobileBp}) {
    padding: 10px 0;
  }

  & > u {
    text-decoration-color: ${(props) => (props.color ? props.color : '#fff')};
  }

  & > a {
    text-decoration: none;
    color: ${(props) => (props.color ? props.color : '#fff')};
  }
`
Message.displayName = 'NotificationBarMessage'

export const Icon = styled.div`
  padding: 0 15px 0 0;
  position: fixed;
  right: 0;
  font-size: 30px;
  cursor: pointer;
  padding: 0 15px 0 0;
  margin-left: auto;

  @media (min-width: ${mobileBp}) {
    display: none;
  }

  &::before {
    content: '×';
  }
`
Icon.displayName = 'NotificationBarIcon'
