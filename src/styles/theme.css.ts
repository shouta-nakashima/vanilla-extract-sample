import {createGlobalTheme} from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root',{
  font:{
    global:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n\' +\n' +
      '    \'    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    code:'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace'
  },
  textColor:{
    primary:'#0070f3',
    primary_light:'#679eff',
    secondary:'#ff1014',
    border:'#eaeaea',
    gray100:'#fafafa'
  }
})