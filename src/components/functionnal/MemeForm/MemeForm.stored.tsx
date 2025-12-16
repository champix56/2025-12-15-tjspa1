import React, { useEffect, useState } from 'react'
import type { IStoredMemeFormProps } from './MemeForm.interface'
import StandaloneMemeForm from './MemeForm'
import { store } from '../../../store/store'
import { emptyMeme, type ImageInterface, type MemeInterface } from 'orsys-tjs-meme'

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

    return <StandaloneMemeForm {...props} images={images} meme={current} />
}

export default MemeForm.stored