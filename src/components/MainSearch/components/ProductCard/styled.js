import styled from 'styled-components'
import colors from 'styles/colors'

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  text-decoration: none;
  width: 100%;
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
  font-weight: 800;
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
