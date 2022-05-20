import * as React from "react";
import Moveable from "react-moveable";

export default function Sticker({ image, tag }) {
    const [target, setTarget] = React.useState();
    const [frame, setFrame] = React.useState({
        translate: [0,0],
        rotate: 0,
        transformOrigin: "50% 50%",
    });
    React.useEffect(() => {
        setTarget(document.querySelector(`.${tag}`));
    }, []);
    return (
    <div className="container">
        <div className={`${tag}`}><img src={image} style={{maxWidth: "100%"}}/></div>
        <Moveable
            target={target}
            originRelative={true}
            draggable={true}
            throttleDrag={0}
            zoom={1}
            origin={true}
            padding={{"left":0,"top":0,"right":0,"bottom":0}}
            throttleRotate={0}
            onDragOriginStart={e => {
                e.dragStart && e.dragStart.set(frame.translate);
            }}
            onDragOrigin={e => {
                frame.translate = e.drag.beforeTranslate;
                frame.transformOrigin = e.transformOrigin;
            }}
            onDragStart={e => {
                e.set(frame.translate);
            }}
            onDrag={e => {
                frame.translate = e.beforeTranslate;
            }}
            onRender={e => {
                const { translate, rotate, transformOrigin } = frame;
                e.target.style.transformOrigin = transformOrigin;
                e.target.style.transform = `translate(${translate[0]}px, ${translate[1]}px)`
                    +  ` rotate(${rotate}deg)`;
            }}
        />
    </div>
    )
}