import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "rgb(56, 136, 252)",
    secondary: "#e6e6e6",
    tertiary: "#333333",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif condensed, Helvetica, sans-serif;
  background-color: #242222;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
