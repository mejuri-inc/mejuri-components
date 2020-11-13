import React, { Component } from 'react'
import PropTypes from 'prop-types'
import v from './validations'
import { checkEmail, login, register, resetPassword } from './session'
import View from './view'

const userSubmitForm = (action, data) => {
  var form = document.createElement('form')

  for (const key in data) {
    const value = data[key]
    const elem = document.createElement('input')
    elem.name = key
    elem.value = value
    form.appendChild(elem)
  }

  form.method = 'POST'
  form.action = action
  document.body.appendChild(form)
  form.submit()
  form.remove()

  return true
}

export class Onboarding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 'idle',
      isFetching: false,
      form: {
        email: '',
        password: '',
        name: '',
        newsletter: false
      },
      errors: {},
      apiErrors: {},
      token: null
    }

    this.r = React.createRef()
  }

  componentDidMount() {
    const { recaptchaKey } = this.props
    if (window.grecaptcha && recaptchaKey && this.r.current) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.render(this.r.current, {
          sitekey: recaptchaKey,
          size: 'invisible',
          callback: (token) => {
            this.next(token)
          }
        })
      })
    }
  }

  resetCaptcha() {
    window.grecaptcha && window.grecaptcha.reset()
    this.setState({ token: null })
  }

  setStep = (step) => {
    this.setState((prev) => ({
      step,
      isFetching: false,
      form: { ...prev.form, password: '', name: '' },
      errors: {},
      apiErrors: {}
    }))

    return false
  }

  switchUser = () => {
    const { isFetching } = this.state
    if (isFetching) return
    this.setStep('idle')
  }

  updateField = (field, value) => {
    this.setState((prev) => {
      return {
        form: { ...prev.form, [field]: value },
        errors: { ...prev.errors, [field]: null },
        apiErrors: { ...prev.apiErrors, [field]: null }
      }
    })
  }

  handleFieldChange = (e) => {
    const { name, value } = e.target
    this.updateField(name, value)
  }

  handleCheckboxChange = (e) => {
    const { checked } = e.target
    this.setState((prev) => ({
      form: { ...prev.form, newsletter: checked }
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { isFetching, step } = this.state
    const { recaptchaKey } = this.props
    if (isFetching) return

    if (!this.validateStep(step)) return

    this.setState({ isFetching: true })

    if (recaptchaKey && window.grecaptcha) {
      window.grecaptcha && window.grecaptcha.execute()
    } else {
      this.next(null)
    }
  }

  next = (token) => {
    const { onClose } = this.props
    const { step } = this.state

    switch (step) {
      case 'idle':
        return this.checkUser(token)
      case 'login':
        return this.login(token)
      case 'register':
        return this.register()
      case 'resetPassword':
        return this.resetPassword()
      case 'resetPasswordDone':
        return onClose()
      default:
        return null
    }
  }

  get validationOptions() {
    return {
      abortEarly: false,
      stripUnknown: true
    }
  }

  checkUser = async (token) => {
    const { email } = this.state.form
    const { mejuriApiHost } = this.props

    const response = await checkEmail(email, mejuriApiHost, token)

    try {
      if (response.ok) {
        if (response.exists) {
          this.setStep('login')
        } else {
          this.setStep('register')
        }
      } else {
        this.setApiErrors(response.errors)
      }
    } catch (e) {
      this.setApiErrors(e)
    }
    this.resetCaptcha()
  }

  login = async (token) => {
    const { email, password } = this.state.form
    const { mejuriApiHost, csrf, tracking } = this.props
    try {
      await login(
        {
          email,
          password
        },
        mejuriApiHost,
        token,
        csrf
      )

      tracking?.onSignUp?.()(
        tracking?.signUp?.({ email, name }, false, this.userChanged)
      ) || this.userChanged()
    } catch (e) {
      this.setApiErrors(e)
      this.resetCaptcha()
    }
  }

  register = async () => {
    const { email, password, name, newsletter } = this.state.form
    const { mejuriApiHost, csrf, tracking } = this.props

    try {
      const response = await register(
        {
          email,
          password,
          first_name: name,
          name,
          newsletter
        },
        mejuriApiHost,
        csrf
      )

      if (response.ok) {
        tracking?.onSignUp?.()(
          tracking?.signUp?.({ email, name }, newsletter, this.userChanged)
        ) || this.userChanged()
      } else {
        this.setApiErrors(response.errors)
        this.resetCaptcha()
      }
    } catch (e) {
      this.setApiErrors(e)
      this.resetCaptcha()
    }
  }

  resetPassword = async () => {
    const { email } = this.state.form
    const { mejuriApiHost } = this.props

    try {
      await resetPassword(email, mejuriApiHost)
      this.setStep('resetPasswordDone')
    } catch (e) {
      this.setApiErrors(e)
    }
    this.resetCaptcha()
  }

  handleFacebookLogin = (e) => {
    e.preventDefault()
    const { csrf, mejuriApiHost } = this.props

    const data = {
      authenticity_token: csrf
    }

    userSubmitForm(`${mejuriApiHost}/users/auth/facebook`, data)
  }

  userChanged = () => window.location.reload()

  validateStep = (step) => {
    const { form } = this.state
    const config = this.config[step]
    const schema = this.getSchema(config.fields)

    this.setState({ errors: {} })

    try {
      schema.validateSync(form, this.validationOptions)
      return true
    } catch (validationErrors) {
      const errors = validationErrors.inner.reduce(
        (e, currentValidation) =>
          Object.assign(e, {
            [currentValidation.path]: currentValidation.errors[0]
          }),
        {}
      )
      this.setState({ errors })
      return false
    }
  }

  getSchema = (fields) => {
    const shape = {}
    fields.forEach((f) => {
      const schema = this.controls[f].schema
      if (!schema) return
      shape[f] = schema
    })
    return v.object().shape(shape)
  }

  setApiErrors(e) {
    this.setState({
      isFetching: false,
      apiErrors: e.errors || { server: e }
    })
  }

  controls = {
    email: {
      schema: v
        .string()
        .email('form.error.email.invalid')
        .required('form.error.email.required'),
      type: 'email',
      name: 'email'
    },
    readonlyEmail: {
      type: 'email',
      name: 'email',
      readOnly: true,
      onClick: this.switchUser
    },
    password: {
      schema: v
        .string()
        .min(6, 'form.error.password.length')
        .required('form.error.password.required'),
      type: 'password',
      name: 'password'
    },
    name: {
      schema: v.string().required('form.error.name.required'),
      type: 'text',
      name: 'name'
    }
  }

  config = {
    idle: {
      title: 'onboarding.idle.title',
      caption: 'onboarding.idle.caption',
      fields: ['email'],
      autoFocus: 'email',
      action: 'common.continue',
      facebookLogin: {
        label: 'onboarding.facebookLogin',
        onClick: this.handleFacebookLogin
      }
    },
    login: {
      title: 'onboarding.login.title',
      caption: 'onboarding.login.caption',
      fields: ['readonlyEmail', 'password'],
      autoFocus: 'password',
      action: 'common.continue',
      footerLink: {
        label: 'onboarding.login.forgotPassword',
        onClick: () => this.setStep('resetPassword')
      }
    },
    register: {
      title: 'onboarding.register.title',
      caption: 'onboarding.register.caption',
      fields: ['readonlyEmail', 'password', 'name'],
      autoFocus: 'password',
      action: 'common.continue'
    },
    resetPassword: {
      title: 'onboarding.resetPassword.title',
      caption: 'onboarding.resetPassword.caption',
      fields: ['readonlyEmail'],
      autoFocus: 'password',
      action: 'common.continue'
    },
    resetPasswordDone: {
      title: 'onboarding.resetPasswordDone.title',
      caption: 'onboarding.resetPasswordDone.caption',
      fields: [],
      action: 'common.close'
    }
  }

  render() {
    const { isFetching } = this.props
    const { step, form, errors, apiErrors } = this.state
    const config = this.config[step]

    return (
      <div>
        <div ref={this.r} />
        <View
          isFetching={isFetching}
          key={step}
          step={step}
          values={form}
          errors={errors}
          apiErrors={apiErrors}
          controls={this.controls}
          onChange={this.handleFieldChange}
          checkboxOnChange={this.handleCheckboxChange}
          onSubmit={this.handleSubmit}
          {...config}
        />
      </div>
    )
  }
}

Onboarding.defaultProps = {
  isFetching: false,
  onClose: () => {},
  mejuriApiHost: '',
  recaptchaKey: null
}

Onboarding.propTypes = {
  csrf: PropTypes.string,
  isFetching: PropTypes.bool,
  onClose: PropTypes.func,
  mejuriApiHost: PropTypes.string,
  recaptchaKey: PropTypes.string,
  tracking: PropTypes.shape({
    onSignIn: PropTypes.func,
    onSignUp: PropTypes.func,
    signUp: PropTypes.func
  })
}

export default Onboarding
