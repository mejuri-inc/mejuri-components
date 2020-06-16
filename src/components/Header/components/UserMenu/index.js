import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Wrapper, Panel, LabelChevron, Option } from './styled'
import ChevronIcon from 'resources/icons/Chevron'

import menuOptions from './mock'

const UserMenu = ({ nameOrEmail }) => {
  return (
    <Wrapper>
      <LabelChevron>{nameOrEmail}</LabelChevron>
      <ChevronIcon />

      {menuOptions && (
        <Panel>
          {Object.keys(menuOptions).map((key) => (
            <Option key={key}>
              <a href={menuOptions[key].url}>
                <FormattedMessage id={`header.userMenu.${key}`} />
              </a>
            </Option>
          ))}
        </Panel>
      )}
    </Wrapper>
  )
}

UserMenu.propTypes = {
  nameOrEmail: PropTypes.string
}

export default UserMenu
