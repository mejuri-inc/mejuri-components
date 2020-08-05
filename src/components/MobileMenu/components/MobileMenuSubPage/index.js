import React from 'react'
import PropTypes from 'prop-types'
import { SubPage, Title, List, Item } from './styled'
import { loggedInFilter, posFilter } from '../../filters'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import get from 'lodash.get'

export const MobileMenuSubPage = ({
  active,
  options,
  title,
  isLoggedIn,
  pos
}) => {
  return (
    <SubPage active={active}>
      <Title>{title}</Title>
      <List>
        {options
          .filter(loggedInFilter(isLoggedIn))
          .filter(posFilter(pos))
          .map((o) => (
            <Item key={o.text} style={get(o, 'extraFields.extraCss') || {}}>
              <a href={o.url} data-h='mobile-menu-sub-page-item-btn'>
                {o.text}
              </a>
              {o.description && documentToReactComponents(o.description)}
            </Item>
          ))}
      </List>
    </SubPage>
  )
}

MobileMenuSubPage.propTypes = {
  active: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string
    })
  ),
  title: PropTypes.string,
  children: PropTypes.node,
  isLoggedIn: PropTypes.bool
}

MobileMenuSubPage.defaultProps = {
  isLoggedIn: false,
  pos: false
}

export default MobileMenuSubPage
