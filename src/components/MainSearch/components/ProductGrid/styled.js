import styled from 'styled-components/macro'

export const Wrapper = styled.section`
  margin: auto;
  max-width: 800px;
  padding-bottom: 40px;
  position: relative;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  grid-gap: 16px;
`

export const Children = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
`
