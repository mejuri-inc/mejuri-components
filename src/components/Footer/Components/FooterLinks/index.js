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
import get from 'lodash.get'

export default class FooterLinks extends PureComponent {
  static propTypes = {
    config: PropTypes.object
  }

  renderLinks(links) {
    if (!links) return null
    return map(links, (link) => (
      <Link key={link._id}>
        {link && link.extraFields && link.extraFields.attributes ? (
          <a
            href={link.url}
            {...link.extraFields.attributes}
            data-h='footer-btn'
          >
            {link.text}
          </a>
        ) : (
          <a href={link.url} data-h='footer-btn'>
            {link.text}
          </a>
        )}
      </Link>
    ))
  }

  render() {
    const sections = this.props.config.children.filter(function (x) {
      const isLegal = get(x, 'extraFields.legal', false)
      return !isLegal
    })
    return (
      <Wrapper>
        <DesktopWrapper>
          {map(sections, (section) => (
            <Col key={section._id}>
              <Title>{section.text}</Title>
              <Links>{this.renderLinks(section.children)}</Links>
            </Col>
          ))}
        </DesktopWrapper>
        <MobileWrapper>
          {map(sections, (section) => (
            <Col key={section._id}>
              <Title>{section.text}</Title>
              <Links>{this.renderLinks(section.children)}</Links>
            </Col>
          ))}
        </MobileWrapper>
      </Wrapper>
    )
  }
}
