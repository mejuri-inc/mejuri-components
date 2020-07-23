import styled from 'styled-components/macro'

const Icon = styled.i`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  width: ${({ w }) => w || '50px'};

  > svg {
    width: 100%;
  }
`
Icon.displayName = 'Icon'

export default Icon
