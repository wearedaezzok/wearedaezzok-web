import AnswerInput from "../components/userInfo/answerInput";
import QTitle from "../components/userInfo/qTitle";

export default function UserCount() {
  return (
    <>
      <QTitle />
      <AnswerInput />
      <p> *최소 2명~ 최대 15명까지 가능해요! </p>
    </>
  );
}
