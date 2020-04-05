import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { CenteredContainer } from 'features/centeredContainer';
import { Form } from 'features/form';

const Home: NextPage = () => (
    <>
        <Head>
            <title>Advanced Form</title>
        </Head>
        <CenteredContainer>
            <Form />
        </CenteredContainer>
    </>
);

export default Home;
