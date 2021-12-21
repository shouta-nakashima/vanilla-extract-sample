import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  width:'300px',
  height:'32px'
})

const primary = style({
  background: 'blue',
  borderRadius:'10px',
  color:'white'
})

export const variant = styleVariants({
  primary: [base, primary],
  secondary: [base, { background: 'red' }]
})