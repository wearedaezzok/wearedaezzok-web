import { GlobalStyle } from "./style/globalStyle";
import { RecoilRoot } from "recoil";
import Router from "./Router";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </>
  );
}
