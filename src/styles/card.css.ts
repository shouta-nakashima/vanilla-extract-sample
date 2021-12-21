import {style,globalStyle} from '@vanilla-extract/css'

export const grid = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '800px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      flexDirection: 'column'
    }
  },
})

export const card = style({
  margin: '1rem',
  padding: '1.5rem',
  textAlign: 'left',
  color: 'inherit',
  textDecoration: 'none',
  border: '1px solid #eaeaea',
  borderRadius: '10px',
  transition: 'color 0.15s ease, border-color 0.15s ease',
  maxWidth: '300px',
  ':hover': {
    color: '#0070f3',
    borderColor: '#0070f3'
  },
})

globalStyle(`${card} h2`,{
  margin: '0 0 1rem 0',
  fontSize: '1.5rem'
})

globalStyle(`${card} p`,{
  margin: '0',
  fontSize: '1.25rem',
  lineHeight:1.5
})
