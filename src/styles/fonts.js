// These are the 3 different variants of the Brandon Grotesque Family defined on the styleguide

import { css } from 'styled-components'
import brandonGrotesqueLight from './fonts/BrandonGrotesque-Light.woff'
import brandonGrotesqueLight2 from './fonts/BrandonGrotesque-Light.woff2'
import brandonGrotesqueRegular from './fonts/BrandonGrotesque-Regular.woff'
import brandonGrotesqueRegular2 from './fonts/BrandonGrotesque-Regular.woff2'
import brandonGrotesqueMedium from './fonts/BrandonGrotesque-Medium.woff'
import brandonGrotesqueMedium2 from './fonts/BrandonGrotesque-Medium.woff2'

export default css`
  @font-face {
    font-family: 'Brandon Grotesque';
    src:
      url(${brandonGrotesqueLight2}) format('woff2'),
      url(${brandonGrotesqueLight}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Brandon Grotesque';
    src:
      url(${brandonGrotesqueRegular2}) format('woff2'),
      url(${brandonGrotesqueRegular}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Brandon Grotesque';
    src:
      url(${brandonGrotesqueMedium2}) format('woff2'),
      url(${brandonGrotesqueMedium}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
`
