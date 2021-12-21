import {style,globalStyle} from '@vanilla-extract/css'

export const footer = style({
  display:"flex",
  flex:1,
  padding:'2rem 0',
  borderTop:'1px solid #eaeaea',
  justifyContent:'center',
  alignItems:"center"
})

export const logo = style({
  height:'100%',
  marginLeft:'0.5rem'
})

globalStyle(`${footer} > a`,{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1
})
