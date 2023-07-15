import { useState } from "react";
import { pages } from "./contants";
import {
  ButtonLink,
  CardsContainer,
  CardContainer,
  PlayListContainer,
  Player,
  Title,
} from "./styled";
import useSWR from "swr";
import ReactAudioPlayer from "react-audio-player";

const audioNotesApiUrl = "//localhost:3001/audionotes";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Card = ({
  audioTitle,
  description,
  fileName,
  url,
  setAudio,
  isActivated,
}) => {
  const cardClasses = isActivated ? "card-items active" : "card-items";

  const onClick = () => {
    setAudio({
      url,
      fileName,
      audioTitle,
    });
  };
  return (
    <CardContainer className={cardClasses}>
      <a href={"javascript:void(0);"} onClick={onClick}>
        <div className="details">
          <svg
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 44 44"
            height="48"
            width="48"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="evenodd" clip-rule="evenodd">
              <path
                d="M22 .42c-12.2 0-22 9.8-22 22s9.8 22 22 22 22-9.8 22-22-9.8-22-22-22Zm0 42.2c-11.1 0-20.2-9-20.2-20.2S10.9 2.22 22 2.22s20.2 9 20.2 20.2-9.1 20.2-20.2 20.2Z"
                role="presentation"
              ></path>
              <path
                d="M34.3 22.42c0 .3-.2.6-.5.8l-18.7 10.4c-.3.2-.6.2-.9 0-.3-.2-.5-.5-.5-.8v-20.7c0-.3.2-.6.5-.8.3-.2.6-.2.9 0l18.7 10.4c.3.1.5.4.5.7Z"
                role="presentation"
              ></path>
            </g>
          </svg>
          <div className="card-title">
            <div>
              <h2>{audioTitle}</h2>
            </div>
            <div>
              <span className="description">{description || fileName}</span>
            </div>
          </div>
        </div>
      </a>
    </CardContainer>
  );
};

export const Playbook = ({ setPage }) => {
  const { data, error, isLoading } = useSWR(audioNotesApiUrl, fetcher);
  const [activeAudio, setAudio] = useState(null);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (data) console.log("data ==>", data);
  return (
    <>
      <Title>Audio Notes</Title>
      <PlayListContainer>
        <CardsContainer>
          {data.length &&
            data.map((card) => (
              <Card
                audioTitle={card.audioTitle}
                description={card.text}
                fileName={card.fileName}
                url={card.url}
                setAudio={setAudio}
                key={card.fileName}
                isActivated={
                  activeAudio && activeAudio.fileName === card.fileName
                }
              />
            ))}
        </CardsContainer>
        <Player>
          {activeAudio && (
            <>
              <ReactAudioPlayer src={activeAudio.url} autoPlay controls />
              <p>{activeAudio.audioTitle}</p>
            </>
          )}
        </Player>
      </PlayListContainer>
      <div>
        <ButtonLink onClick={() => setPage(pages.CONVERTER)} align={"left"}>
          &lt; Back
        </ButtonLink>
      </div>
    </>
  );
};
