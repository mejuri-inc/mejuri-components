import "regenerator-runtime/runtime.js";

// REACT COMPONENTS
import Header from './components/Header'
import NotificationBar from './components/NotificationsBar'
import TimedMessage from './components/common/TimedMessage'
import Cart from './components/cart/Cart'
import MejuriTheme from './themes/material'
import CarouselArrow from './resources/icons/CarouselArrow'
import MobileMenu from './components/MobileMenu'
import StickyContainer from './components/StickyContainer'
import MainSearch from './components/MainSearch'
import Overlay from './components/common/Overlay'
import IsOnScreen from './components/common/IsOnScreen'
import Footer from './components/Footer'
import OnboardingModal from './components/OnboardingModal'

// SERVICES
import { ContentfulAPI } from './services/ContentfulApi'
import UserConsent from './services/UserConsent'

// HELPERS
export * from './helpers/itemDescription'
export * from './helpers/currency'

// OTHER
import Theme from './themes/styled'

export {
  ContentfulAPI,
  UserConsent,
  Theme,
  Header,
  NotificationBar,
  TimedMessage,
  Cart,
  MejuriTheme,
  CarouselArrow,
  MobileMenu,
  StickyContainer,
  MainSearch,
  Overlay,
  IsOnScreen,
  Footer,
  OnboardingModal,
}
