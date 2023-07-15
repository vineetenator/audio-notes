import { pages } from "./contants";
import { ButtonLink, Form, Title } from "./styled";
import useSWR from "swr";

const audioNotesApiUrl = "//localhost:3001/audionotes";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Playbook = ({ setPage }) => {
  const { data, error, isLoading } = useSWR(audioNotesApiUrl, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (data) console.log("data ==>", data);
  return (
    <>
      <Title>Audio Notes</Title>
      <Form></Form>
      <div>
        <ButtonLink onClick={() => setPage(pages.CONVERTER)}>
          &lt; Back
        </ButtonLink>
      </div>
    </>
  );
};
