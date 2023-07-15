import React, { useState } from "react";
import Head from "next/head";
import { Container, Footer, GlobalStyles, Main } from "../src/styled";
import { UploadTextPage } from "../src/UploadTextPage";
import { pages } from "../src/contants";
import { Playbook } from "../src/Playbook";

const Home = () => {
  const [page, setPage] = useState(pages.CONVERTER);
  return (
    <>
      <Container>
        <Head>
          <title>AudioNotes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          {page === pages.CONVERTER ? (
            <UploadTextPage setPage={setPage} />
          ) : (
            <Playbook setPage={setPage} />
          )}
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
