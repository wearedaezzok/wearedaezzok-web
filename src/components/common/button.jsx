import { styled } from "styled-components";

export default function Button(props) {
  const { children, onClick, allTyped } = props;
  return (
    <ButtonLayout onClick={onClick} allTyped={allTyped}>
      {children}
    </ButtonLayout>
  );
}

const ButtonLayout = styled.button`
  width: 20.875rem;
  height: 3.25rem;
  flex-shrink: 0;
  background-color: ${({ allTyped }) => (allTyped ? "#92D5FF" : "#ffffff")};

  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 120% */
`;
