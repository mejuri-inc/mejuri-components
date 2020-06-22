import React from 'react'
import { Wrapper, Content } from './styled'
import PropTypes from 'prop-types'
import Onboarding from './components/Onboarding'
import Popup from 'components/common/Popup'

function OnboardingModal({ isOpen, csrf, close, mejuriApiHost, recaptchaKey }) {
  if (!isOpen) return null

  return (
    <Popup onClose={close}>
      <Wrapper>
        <Content>
          <Onboarding
            onClose={close}
            csrf={csrf}
            mejuriApiHost={mejuriApiHost}
            recaptchaKey={recaptchaKey}
          />
        </Content>
      </Wrapper>
    </Popup>
  )
}

OnboardingModal.propTypes = {
  csrf: PropTypes.string,
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  recaptchaKey: PropTypes.string
}

OnboardingModal.defaultProps = {
  csrf: null,
  isOpen: false,
  close: function () {
    console.error('close prop missing in <OnboardingModal />')
  }
}

export default OnboardingModal
