import React, { useEffect, useState } from 'react'
import type { IStoredMemeFormProps } from './MemeForm.interface'
import StandaloneMemeForm from './MemeForm'
import { store } from '../../../store/store'
import { saveCurrent } from '../../../store/asyncCaller'
import { emptyMeme, type ImageInterface, type MemeInterface } from 'orsys-tjs-meme'
import { update } from '../../../store/current'

const MemeForm: React.FC<IStoredMemeFormProps> = (props) => {
    const [images, setimages] = useState<Array<ImageInterface>>([])
    const [current, setcurrent] = useState<MemeInterface>(emptyMeme)
    useEffect(() => {
        setimages(store.getState().ressources.images);
        setcurrent(store.getState().current.meme)
        store.subscribe(() => {
            setimages(store.getState().ressources.images)
            setcurrent(store.getState().current.meme)
        })
    }, [])
    return <StandaloneMemeForm {...props} images={images} meme={current} onMemeSave={(meme) => {
        store.dispatch(saveCurrent(meme));
    }} onMemeChange={(meme) => {
        store.dispatch(update(meme))
    }} />
}

export default MemeForm