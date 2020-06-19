import React, { PureComponent } from 'react'
import map from 'lodash.map'
import PropTypes from 'prop-types'
import {
  DesktopWrapper,
  MobileWrapper,
  Title,
  Links,
  Link,
  Col,
  Wrapper
} from './styled'
import { FormattedMessage } from 'react-intl'

export default class FooterLinks extends PureComponent {
  static propTypes = {
    desktopLinks: PropTypes.object,
    mobileLinks: PropTypes.object
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
        <DesktopWrapper>
          {map(this.props.desktopLinks, (links, key) => (
            <Col key={key}>
              <Title>
                <FormattedMessage id={`footer.links.${key}`} />
              </Title>
              <Links>{this.renderLinks(links, key)}</Links>
            </Col>
          ))}
        </DesktopWrapper>
        <MobileWrapper>
          {map(this.props.mobileLinks, (links, key) => (
            <Col key={key}>
              <Title>
                <FormattedMessage id={`footer.links.${key}`} />
              </Title>
              <Links>{this.renderLinks(links, key)}</Links>
            </Col>
          ))}
        </MobileWrapper>
      </Wrapper>
    )
  }
}
