import 'regenerator-runtime/runtime.js'

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
import CurrencySelector from './components/CurrencySelector'
import OnboardingModal from './components/OnboardingModal'
import PosNotificationBar from './components/PosNotificationBar'
import DiscountNotificationBar from './components/DiscountNotificationBar'
import {
  ClientStateProvider,
  ClientStateContext
} from './components/ClientStateProvider'

// REACT COMMON COMPONENTS
import Spinner from './components/common/Spinner'
import ButtonLink from './components/common/ButtonLink'
import Popup from './components/common/Popup'

// SERVICES
import { ContentfulAPI } from './services/ContentfulApi'
import UserConsent from './services/UserConsent'

// OTHER
import Theme from './themes/styled'
import TrackingProvider, { UserIdentifier } from './components/TrackingProvider'

// HELPERS
export * from './helpers/itemDescription'
export * from './helpers/currency'

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
  CurrencySelector,
  OnboardingModal,
  Spinner,
  ButtonLink,
  PosNotificationBar,
  DiscountNotificationBar,
  ClientStateProvider,
  ClientStateContext,
  TrackingProvider,
  UserIdentifier,
  Popup
}
