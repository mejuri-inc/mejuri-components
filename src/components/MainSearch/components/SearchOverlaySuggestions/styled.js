import styled from 'styled-components'

export const Wrapper = styled.ul`
  list-style: none;
  margin: 0 auto;
  max-width: 800px;
  padding: 25px 0;

  li:first-child {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.86px;
    line-height: 18px;
    margin: 0 0 12px;
    text-transform: uppercase;
  }
`
Wrapper.displayName = 'SuggestionsWrapper'

export const Suggestion = styled.li`
  font-size: 16px;
  font-weight: 300;
  height: 32px;
  margin-bottom: 0;

  & > button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: inherit;
    padding: 0%;

    &:hover {
      opacity: 0.5;
    }
  }
`
Suggestion.displayName = 'SuggestionsItem'
