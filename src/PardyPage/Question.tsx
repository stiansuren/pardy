import React, { useEffect, useState } from "react";
import usePersistedState from "../utils/usePersistedState";
import { Button } from "../components/Button";
import styled from "styled-components";
import { colors, getGradientColors } from "../utils/variables";

type QuestionType = {
  index: number;
  question: string;
  answer: string;
};

type DivProps = {
  visible: boolean;
  answered: boolean;
  index: number;
};

const Div = styled.div<DivProps>`
  background: ${(props) =>
    props.answered
      ? `linear-gradient(white, beige)`
      : `linear-gradient(${getGradientColors(props.index).start}, ${
          getGradientColors(props.index).end
        })`};
  min-height: 80px;
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 24px;
  box-sizing: border-box;
  text-align: center;
  align-content: center;
  box-shadow: 6px 6px ${colors.yellow};
  color: ${(props) => (props.answered ? colors.blue : "beige")};
`;

const Score = styled.p`
  font-size: 64px;
  color: beige;
  font-weight: 900;
  margin: 0;
`;
const P = styled.p`
  font-size: 24px;
  font-weight: 400;
`;

export const Question = ({ index, question, answer }: QuestionType) => {
  const [visible, setVisible] = useState(false);
  const [answered, setAnswered] = usePersistedState(question, false);
  const score = index * 100;

  useEffect(() => {}, [answered, visible]);

  return (
    <Div
      onClick={() => setVisible(!visible)}
      answered={!!answered}
      visible
      index={index}
    >
      {answered ? (
        <P>{answer}</P>
      ) : visible ? (
        <>
          <P>{question}</P>
          <Button onClick={() => setAnswered(true)}>Se svar</Button>
        </>
      ) : (
        <Score>{score.toString()}</Score>
      )}
    </Div>
  );
};
