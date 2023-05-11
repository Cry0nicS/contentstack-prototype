import {createGetInitialProps} from "@mantine/next";
import {Head, Html, Main, NextScript} from "next/document";
import type {ReactElement} from "react";

const AppDocument = (): ReactElement => {
    createGetInitialProps();

    return (
        <Html>
            <Head>
                <link
                    rel="icon"
                    href="/static/assets/icons/favicon.svg"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default AppDocument;
