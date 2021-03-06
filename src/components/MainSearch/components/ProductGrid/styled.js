import styled from 'styled-components'

export const Wrapper = styled.section`
  margin: auto;
  max-width: 800px;
  padding-bottom: 40px;
  position: relative;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 0.5fr));
  grid-gap: 16px;
`

export const Children = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
`
