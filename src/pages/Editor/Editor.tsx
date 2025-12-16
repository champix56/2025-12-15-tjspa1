import { useNavigate, useParams } from "react-router"
import MemeForm from "../../components/functionnal/MemeForm/MemeForm.stored"
import FlexV1Grow from "../../components/layout/FlexV1Grow/FlexV1Grow.lazy"
import MemeSvgViewer from "../../components/ui/MemeSvgViewer/MemeSvgViewer.stored"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import { clear, update } from "../../store/current"
import { current } from "@reduxjs/toolkit"

const Editor: React.FC = () => {
    const param = useParams();
    const ressources = useSelector((s: RootState) => s.ressources)
    const dispatch = useDispatch();
    const nav=useNavigate();
    useEffect(() => {
        if (!ressources.loaded && param.id !== undefined) {
            return;//memes pas encore charger alors q'un meme est en id
        }
        if (param.id === undefined) {
            //nouveau meme
            dispatch(clear());
            return ;
        }
        //presence du champs id dans le param de route
        const current = ressources.memes.find(m => m.id === Number(param.id));
        if(current!==undefined){
            //meme trouvé
            dispatch(update(current))
        }
        else{
            nav('/editor');
        }

    }, [param.id, ressources, dispatch,nav])
    return (
        <FlexV1Grow>
            <MemeSvgViewer basePath="" />
            <MemeForm />
        </FlexV1Grow>
    )
}

export default Editor