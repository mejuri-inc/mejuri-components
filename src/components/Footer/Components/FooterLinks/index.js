import React, { PureComponent } from 'react'
import map from 'lodash/map'
import PropTypes from 'prop-types'
import { Wrapper, Col, Title, Links, Link } from './styled'
import { FormattedMessage } from 'react-intl'

export default class FooterLinks extends PureComponent {
  static propTypes = {
    desktopLinks: PropTypes.object,
    mobileLinks: PropTypes.object
  }

  get links() {
    return window.screen.width >= 1024
      ? this.props.desktopLinks
      : this.props.mobileLinks
  }

  renderLinks(links, title) {
    if (!links) return null

    return map(links, (link, key) => (
      <Link key={key}>
        <a href={link.url} target={link.isExternal ? '_blank' : ''}>
          <FormattedMessage id={`footer.links.${title}.${key}`} />
        </a>
      </Link>
    ))
  }

  render() {
    return (
      <Wrapper>
        {map(this.links, (links, key) => (
          <Col key={key}>
            <Title>
              <FormattedMessage id={`footer.links.${key}`} />
            </Title>
            <Links>{this.renderLinks(links, key)}</Links>
          </Col>
        ))}
      </Wrapper>
    )
  }
}
