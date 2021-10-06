import type { AppProps } from "next/app";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "../components/shared/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const theme: object = {
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: "#DFDFDF",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Divider />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;

      body {
        background: #000;
      }

      body, select, input, button {
        font-family: 'DM Sans', sans-serif;
      }
    }
  `;

const Divider = styled.div`
  height: 7.1rem;
`;
