import {MantineProvider} from "@mantine/core";
import ApplicationContainer from "../components/application-container";
import {themeConfig} from "../styles/layout.styles";
import type {AppProps} from "next/app";
import type {ReactNode} from "react";

export default function NextApp({Component, pageProps}: AppProps): ReactNode {
    return (
        <MantineProvider
            theme={themeConfig()}
            withGlobalStyles
            withNormalizeCSS>
            <ApplicationContainer>
                <Component {...pageProps} />
            </ApplicationContainer>
        </MantineProvider>
    );
}
