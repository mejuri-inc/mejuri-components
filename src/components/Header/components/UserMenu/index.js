import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'
import { Wrapper, Panel, LabelChevron, Option } from './styled'
import ChevronIcon from 'resources/icons/Chevron'

const UserMenu = ({ nameOrEmail, options }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper
      onClick={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(false)}
      onMouseEnter={() => setIsOpen(true)}
      isOpen={isOpen}
    >
      <LabelChevron>{nameOrEmail}</LabelChevron>
      <ChevronIcon isOpen={isOpen} />
      <Panel isOpen={isOpen}>
        {options.map((o) => (
          <Option key={o.title}>
            <a href={o.url} data-h='header-user-menu-btn'>
              <FormattedMessageWithLoader id={o.title} />
            </a>
          </Option>
        ))}
      </Panel>
    </Wrapper>
  )
}

UserMenu.propTypes = {
  nameOrEmail: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string
    })
  )
}

UserMenu.defaultProps = {
  options: [
    { url: '/profile', title: 'header.userMenu.myProfile' },
    { url: '/profile/history', title: 'header.userMenu.myOrders' },
    { url: '/profile/wish-list', title: 'header.userMenu.myWishList' },
    { url: '/profile/return', title: 'header.userMenu.returns' },
    { url: '/signout', title: 'header.userMenu.signOut' }
  ]
}

export default UserMenu
