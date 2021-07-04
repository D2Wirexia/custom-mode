import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import style from './coustomFlexibleBlock.module.css'
import Curtain from "./Curtain";

const CustomFlexibleBlock = () => {
    const iRef = useRef()
    const bodyRef = useRef()
    const [img, setImg] = useState('https://s1.1zoom.ru/big0/697/Love_Night_Moon_Trees_Silhouette_Two_Dating_576752_1280x853.jpg')
    const [isClick, setIsClick] = useState(false)
    const [mousePositionIsRegulation, setMousePositionIsRegulation] = useState(false)

    const [heightTopCurtain, setHeightTopCurtain] = useState(40)
    const [heightBottomCurtain, setHeightBottomCurtain] = useState(40)


    const [widthImg, setWidthImg] = useState(0)
    const [positionMouse, setPositionMouse] = useState(0)
    const [blur, setBlur] = useState(10)
    useEffect(() => setWidthImg(iRef.current.width), [img])

    function throttle(callback, ms){
        let savedArgs, savedThis,
            isThrottle = false
        const wrapper = () => {
            if (isThrottle){
                savedArgs = arguments
                savedThis = this
                return
            }
            callback.apply(this, arguments)
            isThrottle = true
            setTimeout(()=>{
                if(savedArgs){
                    wrapper.apply(savedThis, savedArgs)
                    savedThis = savedArgs = null
                }
                isThrottle = false
            }, ms)
        }
        return wrapper
    }

    const topCurtain = useCallback(() => {
        setHeightBottomCurtain(400 - 20 - heightTopCurtain)
    }, [heightTopCurtain])
    const downCurtain = useCallback(() => {
        setHeightTopCurtain(400 - 20 - heightBottomCurtain)
    }, [heightBottomCurtain])

    useEffect(()=>{
        if(heightTopCurtain + heightBottomCurtain >= 380){
            topCurtain()
            downCurtain()
        }
    }, [heightTopCurtain, heightBottomCurtain])


    const loadPhoto = (e) => {
        const files = e.target.files
        const reader = new FileReader()
        reader.onload = ev => {
            setImg(ev.target.result)
        }
         if (files[0]){
            reader.readAsDataURL(files[0])
        }else{
             setImg('https://s1.1zoom.ru/big0/697/Love_Night_Moon_Trees_Silhouette_Two_Dating_576752_1280x853.jpg')

         }
    }

    const saveBlur = (e) => setBlur(e.target.value)
    return (
        <div style={{width: '100%', height: '100%', marginTop: '50px'}}>
            <div className={style.bodyBlock} style={{width: `${widthImg}px`}} ref={bodyRef}>
                <img ref={iRef} src={img} alt=""/>
               <Curtain blur={blur} setIsClick={setIsClick} setMousePositionIsRegulation={setMousePositionIsRegulation}
                        isClick={isClick} mousePositionIsRegulation={mousePositionIsRegulation}
                        bodyRef={bodyRef} setPositionMouse={setPositionMouse} setHeightTopCurtain={setHeightTopCurtain}
                        heightTopCurtain={heightTopCurtain} position='top'/>
                <Curtain blur={blur} setIsClick={setIsClick} setMousePositionIsRegulation={setMousePositionIsRegulation}
                         isClick={isClick} mousePositionIsRegulation={mousePositionIsRegulation}
                         bodyRef={bodyRef} setPositionMouse={setPositionMouse} setHeightBottomCurtain={setHeightBottomCurtain}
                         heightBottomCurtain={heightBottomCurtain} position='down'/>
            </div>
            <input type="range" min={1} max={25} value={blur} onChange={saveBlur}/>
            <input type="file" onChange={loadPhoto}/>
            <div className={style.info}>
                <div>Height top curtain: {heightTopCurtain}</div>
                <div>Height down curtain: {heightBottomCurtain}</div>
                <div>Width img: {widthImg}</div>
                <div>Position Mouse: {positionMouse}</div>
                <div>Is pos regul: {mousePositionIsRegulation ? 'yes' : 'no'}</div>
                <div>Is click: {isClick ? 'yes' : 'no'}</div>
            </div>
        </div>
    )
}


export default CustomFlexibleBlock;