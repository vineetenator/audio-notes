import { Title, Form } from "./styled";
import { useState } from "react";
import { postData } from "./postData";

// const pollyApiUrl = "./api/express-polly";
const pollyApiUrl = "//localhost:3001/polly";

export const UploadTextPage = () => {
  const [textNotes, setTextNotes] = useState("");

  const onChangeTextNotes = (event) => {
    const val = event.target.value;
    setTextNotes(val);
  };

  // const callbackSuccess = () => {
  //   console.log("Success");
  // };

  const onClickConverter = async () => {
    console.log("onClickConverter > textNotes ->", textNotes);
    const response = await postData(pollyApiUrl, {
      textNotes,
    });
    // console.log("response", response);
  };

  return (
    <>
      <Title>Welcome to Chegg Audio Notes</Title>
      <Form>
        {/* <div>
        <label htmlFor="voice">Select a voice:</label>
        <select id="voice" name="voiceId" disabled>
          <option value="">Choose a voice...</option>
        </select>
      </div> */}
        <div className="text-box-container">
          <textarea
            id="textNotes"
            maxLength={1000}
            minLength={15}
            name="textNotes"
            placeholder="Paste your notes here..."
            onChange={onChangeTextNotes}
          />
        </div>
        <button onClick={onClickConverter}>Convert</button>
      </Form>
    </>
  );
};
