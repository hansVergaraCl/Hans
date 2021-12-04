import "./App.css";
import Header from "./components/sections/header";
import Cv from "./components/sections/cv";
import { Page, Spacer } from "@geist-ui/react";
import Footer from "./components/sections/footer";

function App() {
  return (
    <Page width="850px">
      <Header />
      <Spacer h={2} />
      <Cv />
      <Spacer h={2} />
      <Footer />
    </Page>
  );
}

export default App;
