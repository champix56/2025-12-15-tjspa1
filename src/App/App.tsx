import MemeForm from "../components/functionnal/MemeForm/MemeForm.stored.js";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import Navbar from "../components/ui/Navbar/Navbar";
import MemeSvgViewer from "../components/ui/MemeSvgViewer/MemeSvgViewer.stored.js";


const App: React.FC = () => {
  return (
    <>
      {/* <div>images:{JSON.stringify(images)}</div> */}
      <div className="App">
        <FlexH3Grow>
          <Header />
          <Navbar />
          <FlexV1Grow>
            <MemeSvgViewer basePath=""/>
            <MemeForm />
          </FlexV1Grow>
          <Footer />
        </FlexH3Grow>
      </div>
    </>
  );
};

export default App;
