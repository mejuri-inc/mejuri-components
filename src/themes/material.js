import { createMuiTheme } from '@material-ui/core/styles'
import { fontWeight } from '../styles/settings'
import colors from '../styles/colors'

export default createMuiTheme({
  shadows: Array(25).fill('none'),
  palette: {
    primary: {
      light: colors.lightGray1,
      main: colors.black,
      dark: colors.darkGray1
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Brandon Grotesque',
      'sans-serif'
    ].join(',')
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '0',
        letterSpacing: '1px',
        fontWeight: fontWeight.medium,
        padding: '16px',
        lineHeight: '1.4',
        width: '100%',
        minHeight: '56px'
      }
    },
    MuiInputBase: {
      inputMultiline: {
        fontSize: '16px'
      },
      root: {
        backgroundColor: colors.white
      }
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderRadius: 0
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: '14px'
      },
      root: {
        '& $notchedOutline': {
          borderColor: colors.darkGray1
        },
        '& $notchedOutline, &:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: colors.darkGray1,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: colors.darkGray1
          }
        }
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        '&$checked': {
          color: colors.black
        },
        '&$disabled': {
          color: colors.lightGray1
        }
      }
    },
    MuiFormControlLabel: {
      root: {
        marginRight: 0
      }
    },
    MuiInputLabel: {
      outlined: {
        top: '50%',
        transform: 'translate(14px, -50%) scale(1)',
        transition: 'all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        '&$shrink': {
          top: 0
        }
      }
    },
    MuiIconButton: {
      root: {
        padding: '0 12px'
      }
    },
    MuiTooltip: {
      tooltip: {
        padding: '10px',
        fontSize: '12px',
        backgroundColor: colors.black
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        }
      }
    }
  }
})
