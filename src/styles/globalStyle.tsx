import { createGlobalStyle } from "styled-components";
import WebApp from "@twa-dev/sdk";

export const GlobalStyle = createGlobalStyle`
    html {
        --bg-color: ${WebApp.themeParams.bg_color};
    }
`;

