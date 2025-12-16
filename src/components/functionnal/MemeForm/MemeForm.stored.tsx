import React from 'react'
import type { IStoredMemeFormProps } from './MemeForm.interface'
import StandaloneMemeForm from './MemeForm'
import {useDispatch, useSelector} from 'react-redux'
import { saveCurrent } from '../../../store/asyncCaller'
import { update } from '../../../store/current'
import type { AppDispatch, RootState } from '../../../store/store'

const MemeForm: React.FC<IStoredMemeFormProps> = (props) => {
   const images=useSelector((state:RootState)=>state.ressources.images)
   const current=useSelector((state:RootState)=>state.current.meme)
   const dispatch=useDispatch<AppDispatch>();
    return <StandaloneMemeForm {...props} images={images} meme={current} onMemeSave={(meme) => {
        dispatch(saveCurrent(meme));
    }} onMemeChange={(meme) => {
        dispatch(update(meme))
    }} />
}

export default MemeForm