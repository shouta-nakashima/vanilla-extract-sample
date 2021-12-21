import {style,globalStyle} from '@vanilla-extract/css'

export const container = style({
  padding:'0 2rem'
})

export const main = style({
  minHeight:'100vh',
  padding:'4rem 0',
  flex:1,
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:"center"
})

export const title = style({
  margin:0,
  lineHeight:1.15,
  fontSize:'4rem',
})

export const description = style({
  margin:'4rem 0',
  lineHeight:1.5,
  fontSize:'1.5rem'
})

export const code = style({
  background: '#fafafa',
  borderRadius: '5px',
  padding: '0.75rem',
  fontSize: '1.1rem',
  fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace'
})

globalStyle(`${title} ${description}`,{
  textAlign:'center'
})

globalStyle(`${title} a`,{
  color:'#0070f3',
  textDecoration:'none',
})

globalStyle(`${title} a:hover,:active,:focus`,{
  textDecoration:'underline'
})