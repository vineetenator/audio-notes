import React from "react";
import Head from "next/head";
import { Container, Footer, GlobalStyles, Main } from "../src/styled";
import { UploadTextPage } from "../src/UploadTextPage";

const Home = () => {
  return (
    <>
      <Container>
        <Head>
          <title>AudioNotes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          <UploadTextPage />
        </Main>
        <Footer>
          <a
            href="local.live.test.cheggnet.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by {"\b"}
            <strong>Chegg's Hackathon</strong>
          </a>
        </Footer>
      </Container>
      <GlobalStyles />
    </>
  );
};

export default Home;
