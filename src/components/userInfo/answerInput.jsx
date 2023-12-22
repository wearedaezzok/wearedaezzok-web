import { styled } from "styled-components";

export default function AnswerInput() {
  return (
    <Container>
      <StyledInput />
      <TextStyled> 명 </TextStyled>
    </Container>
  );
}

const StyledInput = styled.input`
  display: inline-flex;
  padding: 0.625rem 2.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 2px solid var(--main-primary, #0075ff);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TextStyled = styled.p`
  color: var(--main-black, #1c1c1e);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 2.4375rem */
  letter-spacing: 0.0325rem;
`;
