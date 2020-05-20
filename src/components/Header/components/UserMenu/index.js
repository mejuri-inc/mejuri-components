import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import { FormattedMessage } from 'react-intl'
import { Wrapper, Panel, LabelChevron, Option } from './styled'
import ChevronIcon from 'resources/icons/Chevron'

import menuOptions from './mock'

const UserMenu = ({ nameOrEmail }) => {
  return (
    <Wrapper>
      <LabelChevron>
        {nameOrEmail}
        <ChevronIcon />
      </LabelChevron>

      {menuOptions && (
        <Panel>
          {map(menuOptions, (option, key) => (
            <Option key={key}>
              <a href={option.url}>
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
