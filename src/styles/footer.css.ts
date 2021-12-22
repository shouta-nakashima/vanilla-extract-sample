import {style,globalStyle} from '@vanilla-extract/css'
import { vars } from "./theme.css";

export const logo = style({
  height:'100%',
  marginLeft:'0.5rem'
})
export const footer = style({
  display:"flex",
  flex:1,
  padding:'2rem 0',
  borderTop:`1px solid ${vars.textColor.border}`,
  justifyContent:'center',
  alignItems:"center",
})

globalStyle(`${footer} > a`,{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1
})
