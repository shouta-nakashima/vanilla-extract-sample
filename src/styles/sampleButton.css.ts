import { style, styleVariants } from '@vanilla-extract/css';
import {vars} from './theme.css'

const base = style({
  width:'300px',
  height:'32px',
  cursor:'pointer',
  border:'none'
})

const primary = style({
  background: vars.textColor.primary,
  borderRadius:'18px',
  color:'white',
  ':hover': {
    backgroundColor: vars.textColor.primary_light
  }
})

export const variant = styleVariants({
  primary: [base, primary],
  secondary: [base, { background: vars.textColor.secondary }]
})