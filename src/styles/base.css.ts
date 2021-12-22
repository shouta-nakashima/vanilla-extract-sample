import {globalStyle} from '@vanilla-extract/css'
import {vars} from './theme.css'

globalStyle('html,body',{
  padding:0,
  margin:0,
  fontFamily: vars.font.global
})

globalStyle('a',{
  color: 'inherit',
  textDecoration: 'none'
})

globalStyle('*',{
  boxSizing:'border-box'
})