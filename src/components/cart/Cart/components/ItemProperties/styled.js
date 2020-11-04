import styled from 'styled-components'
import colors from 'styles/colors'
import { fontWeight } from 'styles/settings'

export const Wrapper = styled.div`
  flex: 2.3;
`
Wrapper.displayName = 'ItemPropertiesWrapper'

export const Name = styled.h4`
  font-size: 16px;
  font-weight: ${fontWeight.regular};
  letter-spacing: 0.025em;
  margin: 0.8rem 0 0 0;
  text-transform: none;
  font-weight: 600;
  & > a {
    color: ${colors.black};
    text-decoration: none;
  }
  & > a:hover {
    color: ${colors.darkGray2};
  }
`
Name.displayName = 'ItemPropertiesName'

export const SpecialMessage = styled.span`
  color: #8d3f2d;
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  margin-top: 7px;
  display: inline-block;
`

export const Options = styled.p`
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  margin: 7px 0 0 0;
`
Options.displayName = 'ItemPropertiesOptions'

export const PriceBox = styled.div`
  align-items: center;
  display: flex;
  font-size: 13px;
  font-weight: ${fontWeight.light};
  justify-content: space-between;
  margin-top: 0.7rem;
  min-height: 45px;
`
PriceBox.displayName = 'ItemPropertiesPriceBox'
