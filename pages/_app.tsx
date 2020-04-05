import React from 'react';
import BaseApp from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from 'config/theme';

class App extends BaseApp {
    componentDidMount(): void {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode?.removeChild(jssStyles);
        }
    }

    render(): JSX.Element {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Advanced Form</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        );
    }
}

export default App;
