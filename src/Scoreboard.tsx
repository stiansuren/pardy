import React, { useEffect } from "react";
import usePersistedState from "./usePersistedState";
import styled from "styled-components";
import { colors } from "./variables";

const Board = styled.div`
  justify-self: center;
  padding: 16px 24px 8px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  border-radius: 20px;
  background: linear-gradient(${colors.lightpink}, ${colors.pink});
  box-shadow: 6px 6px ${colors.yellow};
  align-content: center;
`;

const Team = styled.div`
  display: grid;
  grid-template-columns: repeat(auto, 3);
  grid-gap: 0 8px;
  width: 300px;
  align-content: center;
  justify-self: center;
`;
const H3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  color: ${colors.blue};
  justify-self: center;
  grid-column: 1/4;
`;
const Score = styled.p`
  margin: 0;
  font-size: 64px;
  font-weight: 900;
  color: beige;
  justify-self: center;
`;

type ScoreProps = {
  plus: boolean;
};
const ScoreButton = styled.button<ScoreProps>`
  background-color: ${(props) => (props.plus ? colors.blue : colors.magenta)};
  color: beige;
  font-size: 40px;
  font-weight: 700;
  border-radius: 100px;
  border: none;
  height: 40px;
  width: 40px;
  padding: 0;
  justify-self: center;
  align-self: center;
  padding: -10px;
  :focus {
    outline: none;
  }
`;

const Icon = styled.svg`
  transform: translateY(-3px);
`;

const Plus = () => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24px"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </Icon>
  );
};

const Minus = () => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24px"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12h8m-6 0H5"
      />
    </Icon>
  );
};

export const Scoreboard = () => {
  const [teamOne, setTeamOne] = usePersistedState("TeamOne", 0);
  const [teamTwo, setTeamTwo] = usePersistedState("TeamTwo", 0);

  useEffect(() => {}, [teamOne, teamTwo]);

  return (
    <Board>
      <Team>
        <H3>useLess</H3>
        <ScoreButton plus={false} onClick={() => setTeamOne(teamOne - 100)}>
          <Minus />
        </ScoreButton>
        <Score>{teamOne}</Score>
        <ScoreButton plus onClick={() => setTeamOne(teamOne + 100)}>
          <Plus />
        </ScoreButton>
      </Team>
      <Team>
        <H3>useKartong</H3>
        <ScoreButton plus={false} onClick={() => setTeamTwo(teamTwo - 100)}>
          <Minus />
        </ScoreButton>
        <Score>{teamTwo}</Score>
        <ScoreButton plus onClick={() => setTeamTwo(teamTwo + 100)}>
          <Plus />
        </ScoreButton>
      </Team>
    </Board>
  );
};
