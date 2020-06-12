import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import scriptLoader from 'react-async-script-loader'
import humps from 'humps'
import { selectLatLng } from 'app/store/geo/selectors'
import { getScripts } from 'app/helpers/scripts'
import Input from './Input'

class GooglePlaces extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    isScriptLoaded: PropTypes.bool,
    isScriptLoadSucceed: PropTypes.bool,
    latLng: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    }),
    onScriptLoaded: PropTypes.func,
    onSelectLocation: PropTypes.func,
    dispatch: PropTypes.func
  }

  static defaultProps = {
    onSelectLocation () {}
  }

  constructor (props) {
    super(props)

    this.inputRef = React.createRef()
  }

  componentDidUpdate ({ isScriptLoaded, isScriptLoadSucceed, latLng }) {
    if ((isScriptLoaded && !this.props.isScriptLoaded) || (isScriptLoadSucceed && (latLng !== this.props.latLng))) {
      this.init(isScriptLoadSucceed) // When the script has loaded or latLng is updated afterwards
    }
  }

  componentDidMount () {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if (isScriptLoaded) {
      this.init(isScriptLoadSucceed)
    }
  }

  get bounds () {
    const { latLng } = this.props

    if (!latLng) return undefined

    const center = new window.google.maps.LatLng(latLng.lat, latLng.lng)
    const radius = 1000000 // 1000 km radius

    const ne = window.google.maps.geometry.spherical.computeOffset(center, radius, 45)
    const sw = window.google.maps.geometry.spherical.computeOffset(center, radius, 45 + 180)

    return new window.google.maps.LatLngBounds(sw, ne)
  }

  init (success) {
    if (!success) return

    const options = {
      types: ['address'],
      bounds: this.bounds
    }

    this.autocomplete = new window.google.maps.places.Autocomplete(this.inputRef.current, options)
    this.autocomplete.addListener('place_changed', this.handlePlaceChanged)
    try {
    } catch (e) {}
  }

  get isLoading () {
    const { isScriptLoaded } = this.props
    return !isScriptLoaded
  }

  handlePlaceChanged = () => {
    const { onSelectLocation } = this.props
    const info = this.autocomplete.getPlace()
    onSelectLocation(humps.camelizeKeys(info))
  }

  render () {
    const {
      dispatch,
      latLng,
      isScriptLoaded,
      isScriptLoadSucceed,
      onScriptLoaded,
      onSelectLocation,
      disabled,
      ...props
    } = this.props

    return (
      <Input
        inputRef={this.inputRef}
        disabled={disabled || this.isLoading}
        {...props}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    latLng: selectLatLng(state)
  }
}

const scripts = getScripts('gMaps')
export default scriptLoader(scripts)(connect(mapStateToProps, null)(GooglePlaces))
