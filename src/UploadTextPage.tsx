import {
  Title,
  Form,
  InputTitle,
  TextArea,
  Button,
  ButtonLink,
} from "./styled";
import { useState } from "react";
import { postData } from "./postData";
import { pages } from "./contants";

const pollyApiUrl = "//localhost:3001/polly";

export const UploadTextPage = ({ setPage }) => {
  const [textNotes, setTextNotes] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  const onChangeTextNotes = (event) => {
    const val = event.target.value;
    setTextNotes(val);
  };

  const onClickConverter = async () => {
    console.log("onClickConverter > textNotes ->", textNotes);
    const noteName = noteTitle;
    const response = await postData(pollyApiUrl, {
      textNotes,
      noteName,
    });
    alert(response.success ? "successfully created" : "failed");
  };

  return (
    <>
      <Title>Welcome to Chegg Audio Notes</Title>
      <Form>
        <div className="text-box-container">
          <InputTitle
            id="noteTitle"
            onChange={(event) => {
              const val = event.target.value;
              setNoteTitle(val);
            }}
            maxLength={50}
            placeholder="Add title to your note..."
          />
          <TextArea
            id="textNotes"
            maxLength={1000}
            minLength={15}
            name="textNotes"
            placeholder="Paste your notes here..."
            onChange={onChangeTextNotes}
          />
        </div>
        <Button onClick={onClickConverter}>Convert</Button>
      </Form>
      <div>
        <ButtonLink onClick={() => setPage(pages.PLAYBOOK)}>
          Audio note &gt;{" "}
        </ButtonLink>
      </div>
    </>
  );
};
