import styled from 'styled-components'

export const Suggestions = styled.ul`
  list-style: none;
  margin: 0 auto;
  max-width: 800px;
  padding: 25px 5px;

  li:first-child {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.86px;
    line-height: 18px;
    margin: 0 0 12px;
    text-transform: uppercase;
  }
`

export const Suggestion = styled.li`
  font-size: 15px;
  font-weight: 800;
  height: 32px;

  & > button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: inherit;
    padding: 0%;
  }
`