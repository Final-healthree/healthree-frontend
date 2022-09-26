import { createGlobalStyle } from "styled-components";
import Jalnan from "../styles/fonts/Jalnan.ttf"

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: Jalnan;
    src: url(${Jalnan}) format('ttf'),
  }
`;

export default FontStyles;
