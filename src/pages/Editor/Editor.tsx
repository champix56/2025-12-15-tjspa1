import MemeForm from "../../components/functionnal/MemeForm/MemeForm.stored"
import FlexV1Grow from "../../components/layout/FlexV1Grow/FlexV1Grow.lazy"
import MemeSvgViewer from "../../components/ui/MemeSvgViewer/MemeSvgViewer.stored"

const Editor: React.FC = () => {
    return (
        <FlexV1Grow>
            <MemeSvgViewer basePath="" />
            <MemeForm />
        </FlexV1Grow>
    )
}

export default Editor