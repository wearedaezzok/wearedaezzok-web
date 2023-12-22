import { styled } from "styled-components";

export default function QTitle() {
  return (
    <>
      <QuestionNumber>Q1.</QuestionNumber>
      {/* <Highliter /> */}
      <QuestionString>
        하사람 후보자의 <span style={{ color: "#0075FF" }}>총 인원수</span>를 알려주세요.
      </QuestionString>
    </>
  );
}

const QuestionNumber = styled.p`
  display: inline-flex;
  color: var(--main-black, #1c1c1e);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 3rem */
  letter-spacing: 0.04rem;
  padding-bottom: 0rem;
  border-bottom: solid 6px #cce4ff; // 딱 맞게 수정 예정
`;

// const Highliter = styled.div``;

const QuestionString = styled.h1`
  color: var(--main-black, #1c1c1e);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 2.4375rem */
  letter-spacing: 0.0325rem;
`;
