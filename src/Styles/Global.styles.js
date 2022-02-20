import { createGlobalStyle } from "styled-components";
import  theme  from './Theme';

export const GlobalStyle = createGlobalStyle`
  
* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

html,
body, #root {      
  font-weight: 100;
  /* max-width: 82em; */
background-color: #f7f7f7;  
color: "##685f5f";        
@media screen and (min-width: 25em) {
  html { font-size: calc( 16px + (24 - 16) * (100vw - 400px) / (800 - 400) ); }
}

/* Safari <8 and IE <11 */
@media screen and (min-width: 25em) {
  html { font-size: calc( 16px + (24 - 16) * (100vw - 400px) / (800 - 400) ); }
}
@media screen and (min-width: 50em) {
    html { font-size: calc( 16px + (24 - 16) * (100vw - 400px) / (800 - 400) ); }
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: 'DM Sans', sans-serif;  
  
}

h1, h2, h5 {
  font-family: 'Dongle', sans-serif;  
  /* padding: 0 !important;
  margin: 0 !important; */
  /* line-height: 10px; */
}
h5 {
  font-size: 2rem;
}


`