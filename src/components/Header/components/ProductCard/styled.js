import styled from 'styled-components'
import { bp } from 'app/packages/styled'
import colors from 'styles/colors'
import { fontWeight } from 'styles/settings'

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding-bottom: 20px;
  text-decoration: none;
  width: calc(50% - 10px);
  ${bp('md')`
    width: calc(20% - 10px);
  `}
`

export const Image = styled.img`
  background: ${colors.lightGray3};
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(250, 250, 250, 1) 96%
  );
  width: 100%;
`

export const Name = styled.div`
  color: ${colors.black};
  display: block;
  font-size: 14px;
  font-weight: ${fontWeight.medium};
  line-height: 22px;
  margin: 10px 0;
  min-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Detail = styled.div`
  color: ${colors.black};
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
