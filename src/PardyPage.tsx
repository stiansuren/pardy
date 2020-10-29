import React, { useState } from "react";
import styled from "styled-components";
import { Question } from "./PardyPage/Question";
import { Scoreboard } from "./PardyPage/Scoreboard";
import { questions } from "./questions/react_questions";
import { Button } from "./components/Button";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { colors } from "./utils/variables";

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 24px;
  margin: 0px 48px;
`;
const Category = styled.div`
  width: 100%;
  text-align: center;
`;
const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 48px 24px 48px;
  padding-top: 16px;
`;

const H2 = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${colors.blue};
  margin-bottom: 8px;
  margin-top: 8px;
`;

const Footer = styled.footer`
  margin: 80px 48px 24px 48px;
`;

export default function PardyPage() {
  /*   const [doubleRound, setDoubleRound] = usePersistedState("Double", false);
  const [questions, setQuestions] = useState(singleQuestions); */
  /*   useEffect(() => {
    doubleRound ? setQuestions(doubleQuestions) : setQuestions(singleQuestions);
  }, [doubleRound]); */

  const [refresh, setRefresh] = useState(false);

  const refreshGame = () => {
    localStorage.clear();
    setRefresh(!refresh);
    console.log(colors);
    console.log(colors.blue);
  };

  return (
    <>
      <Header>
        <Scoreboard />
        {/* <Button onClick={() => setDoubleRound(!doubleRound)}>
          {doubleRound ? "Forrige" : "Neste"}
        </Button> */}
      </Header>
      <Categories>
        {questions.map((category) => {
          return (
            <Category key={uuidv4()}>
              <H2>{category.category}</H2>
              {category.questions.map((question, index) => {
                return (
                  <Question
                    question={question.question}
                    answer={question.answer}
                    /* index={doubleRound ? (index + 1) * 2 : index + 1} */
                    index={index + 1}
                    key={uuidv4()}
                  />
                );
              })}
            </Category>
          );
        })}
      </Categories>
      <Footer>
        <Button onClick={refreshGame}>Refresh Game</Button>
      </Footer>
    </>
  );
}
