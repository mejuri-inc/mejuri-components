import React from 'react'
import PropTypes from 'prop-types'
import { SubPage, Title, List, Item } from './styled'

export const MobileMenuSubPage = ({ active, options, title, children }) => {
  return (
    <SubPage active={active}>
      <Title>{title}</Title>
      <List>
        {options.map((o) => (
          <Item key={o.label}>
            <a href={o.url}>{o.label}</a>
          </Item>
        ))}
      </List>
      {children}
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
  children: PropTypes.node
}

export default MobileMenuSubPage
