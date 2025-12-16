import { emptyMeme, MemeSVGViewer } from "orsys-tjs-meme";
import MemeForm from "../components/functionnal/MemeForm/MemeForm";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import Navbar from "../components/ui/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <FlexH3Grow>
        <Header />
        <Navbar />
        <FlexV1Grow>
          <MemeSVGViewer meme={emptyMeme} image={undefined} basePath=""/>
          <MemeForm />
        </FlexV1Grow>
        <Footer/>
      </FlexH3Grow>
    </div>
  );
};

export default App;
