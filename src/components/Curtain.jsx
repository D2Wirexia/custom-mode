import React, {useEffect, useRef, useState} from 'react';
import style from "./coustomFlexibleBlock.module.css";

const Curtain = ({blur, setIsClick, setMousePositionIsRegulation,
                     isClick, mousePositionIsRegulation,
                     bodyRef, setPositionMouse,
                     setHeightBottomCurtain = null, heightTopCurtain = null,
                     heightBottomCurtain = null, position, setHeightTopCurtain = null}) => {


    const regulatorRef = useRef()
    const [activeCurtain, setActiveCurtain] = useState(null)
    //нажали мышкой на ручку-регулятор
    const clickOnRegulator = () => {
        setActiveCurtain(position)
        setIsClick(true)
    }
    //отжали мышку ручки-регулятора
    const squeezeOutRegulator = () => {
        setIsClick(false)
        setActiveCurtain(null)
    }
    //курсор мышки находиться на регуляторе
    const isMouseOnRegulation = () => setMousePositionIsRegulation(true)
    //курсор мышки находиться не на регуляторе
    const isMouseNoOnRegulation = () => setMousePositionIsRegulation(false)
    //получить координаты мышки на блоке картинки
    const getPositionMouse = e => {
        setPositionMouse(e.y - 50)
        if(activeCurtain === 'top'){
            setHeightTopCurtain(e.y - 50)
        } else if (activeCurtain === 'down') {
            setHeightBottomCurtain(450 - e.y)
        } else {
            e.preventDefault()
        }
    }
    useEffect(() => {
        if (!regulatorRef.current || !bodyRef.current) return;
        regulatorRef.current.addEventListener('mousedown', clickOnRegulator)
        regulatorRef.current.addEventListener('mouseover', isMouseOnRegulation)
        regulatorRef.current.addEventListener('mouseout', isMouseNoOnRegulation)
        window.addEventListener('mouseup', squeezeOutRegulator)
        if (isClick /*&& mousePositionIsRegulation*/) {
            bodyRef.current.addEventListener('mousemove', getPositionMouse)
        }
        return () => {
            regulatorRef.current.removeEventListener('mousedown', clickOnRegulator)
            regulatorRef.current.removeEventListener('mouseover', isMouseOnRegulation)
            regulatorRef.current.removeEventListener('mouseout', isMouseNoOnRegulation)
            window.removeEventListener('mouseup', squeezeOutRegulator)
            bodyRef.current.removeEventListener('mousemove', getPositionMouse)
        }
    }, [isClick, mousePositionIsRegulation])





    const curtain = {
        width: '100%',
        maxWidth: '700px',
        height: position === 'top' ? `${heightTopCurtain}px` : `${heightBottomCurtain}px`,
        position: 'absolute',
        top: position === 'top' ? 0 : 'none',
        bottom: position === 'down' ? 0 : 'none',
        background: 'rgba(255,255,255,0.49)',
        backdropFilter: `blur(${blur}px)`
    }
    const regulatorPositionTop = {
        bottom: '-5px'
    }
    const regulatorPositionBottom = {
        top: '-5px'
    }


    return(
        <div style={curtain}>
            <div className={style.regulator} ref={regulatorRef} id={position}
                 style={position === 'top' ? regulatorPositionTop : regulatorPositionBottom}/>
        </div>
    )
}

export default Curtain;