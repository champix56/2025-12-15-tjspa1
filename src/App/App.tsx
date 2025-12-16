import MemeForm from "../components/functionnal/MemeForm/MemeForm.stored.js";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import Navbar from "../components/ui/Navbar/Navbar";
import MemeSvgViewer from "../components/ui/MemeSvgViewer/MemeSvgViewer.stored.js";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home.js";
import Editor from "../pages/Editor/Editor.js";
import Thumbnail from "../pages/Thumbnail/Thumbnail.js";


const App: React.FC = () => {
  return (
    <>
      {/* <div>images:{JSON.stringify(images)}</div> */}
      <div className="App">
        <FlexH3Grow>
          <Header />
          <Navbar />
          <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/home" Component={Home}/>
              <Route path="/editor" Component={Editor}/>
              <Route path="/editor/:id" Component={Editor}/>
              <Route path="/thumbnail" Component={Thumbnail}/>
          </Routes>
          <Footer />
        </FlexH3Grow>
      </div>
    </>
  );
};

export default App;
