import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

/* Reset CSS */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    font-family: Arial;

    background-color: #2b2a2aff;;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}
`

const theme = {
  colors: {
    primary: `hsla(0, 1%, 17%, 1)`,
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
