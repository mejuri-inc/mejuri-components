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
      <Link key={link.sys.id}>
        {link.fields &&
        link.fields.extraFields &&
        link.fields.extraFields.attributes ? (
          <a
            href={link.fields.url}
            {...link.fields.extraFields.attributes}
            data-h='footer-btn'
          >
            {link.fields.text}
          </a>
        ) : (
          <a href={link.fields.url} data-h='footer-btn'>
            {link.fields.text}
          </a>
        )}
      </Link>
    ))
  }

  render() {
    const sections = this.props.config.children.filter(function (x) {
      const isLegal = get(x, 'fields.extraFields.legal', false)
      return !isLegal
    })
    return (
      <Wrapper>
        <DesktopWrapper>
          {map(sections, (section) => (
            <Col key={section.sys.id}>
              <Title>{section.fields.text}</Title>
              <Links>{this.renderLinks(section.fields.children)}</Links>
            </Col>
          ))}
        </DesktopWrapper>
        <MobileWrapper>
          {map(sections, (section) => (
            <Col key={section.sys.id}>
              <Title>{section.fields.text}</Title>
              <Links>{this.renderLinks(section.fields.children)}</Links>
            </Col>
          ))}
        </MobileWrapper>
      </Wrapper>
    )
  }
}
