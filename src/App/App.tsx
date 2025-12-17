import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";
// import MemeForm from "../components/functionnal/MemeForm/MemeForm";
import MemeForm from "../components/functionnal/MemeForm/MemeForm.store.tsx";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import Navbar from "../components/ui/Navbar/Navbar";
import { useEffect, useState } from "react";
import { REST_API_RESSOURCES, REST_API_URL } from "../config/constantes";
import '../store/store.ts'
type TImages = Array<ImageInterface>;

const App: React.FC = () => {
  const [current, setcurrent] = useState(emptyMeme);
  const [images, setImages] = useState<TImages>([]);
  useEffect(() => {
    fetch(`${REST_API_URL}${REST_API_RESSOURCES.images}`)
      .then((r) => r.json())
      .then((imgs) => setImages(imgs));
  }, []);

  return (
    <>
      {/* <div>images:{JSON.stringify(images)}</div> */}
      <div className="App">
        <FlexH3Grow>
          <Header />
          <Navbar />
          <FlexV1Grow>
            <MemeSVGViewer
              meme={current}
              image={images.find((item) => item.id === current.imageId)}
              basePath=""
            />
            {/* <MemeForm
              images={images}
              meme={current}
              onMemeChange={(meme) => {
                setcurrent(meme);
              }}
            /> */}
            <MemeForm/>
          </FlexV1Grow>
          <Footer />
        </FlexH3Grow>
      </div>
    </>
  );
};

export default App;
