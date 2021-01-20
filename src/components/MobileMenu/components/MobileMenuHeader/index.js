import React from 'react'
import PropTypes from 'prop-types'
import Arrow from 'resources/icons/ArrowLongLeft'
import Close from 'resources/icons/CloseIcon'
import FormattedMessageWithLoader from 'components/FormattedMessageWithLoader'
import { Header, GoBack, ArrowIcon, ButtonLink } from './styled'

export const MobileMenuHeader = ({
  toggleNavigation,
  isGoBackEnabled,
  accessibility
}) => {
  return (
    <Header>
      {accessibility && (
        <ButtonLink
          href='javascript:enableUsableNetAssistive()'
          data-h='accessibility-btn'
        >
          <FormattedMessageWithLoader id='mobileMenu.accessibility' />
        </ButtonLink>
      )}
      <GoBack onClick={toggleNavigation} data-h='mobile-menu-toggle-btn'>
        {isGoBackEnabled ? (
          <ArrowIcon>
            <Arrow />
          </ArrowIcon>
        ) : (
          <Close />
        )}
      </GoBack>
    </Header>
  )
}

MobileMenuHeader.propTypes = {
  toggleNavigation: PropTypes.func,
  isGoBackEnabled: PropTypes.bool,
  accessibility: PropTypes.bool
}

export default MobileMenuHeader
