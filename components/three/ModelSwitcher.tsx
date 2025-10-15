import { useRef} from "react";
import {PresentationControls} from "@react-three/drei";
import gsap from 'gsap';

import Macbook16 from "../models/Macbook-16.jsx";
import Macbook14 from "../models/Macbook-14.jsx";
import {useGSAP} from "@gsap/react";

const ANIMATION_DURATION = 1
const OFFSET_DISTANCE = 8

interface ModelSwitcherProps {
    scale: number;
    isMobile: boolean;
}

const fadeMeshes = (group: any, opacity: any) => {
    if(!group) return;

    group.traverse((child: any) => {
        if(child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}

const moveGroup = (group: any, x: any) => {
    if(!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}



const ModelSwitcher = ({ scale, isMobile } : ModelSwitcherProps) => {
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;

    const smallMacbookRef = useRef<HTMLDivElement>(null);
    const largeMacbookRef = useRef<HTMLDivElement>(null);

    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    useGSAP(() => {
        if(showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, 0);
            fadeMeshes(largeMacbookRef.current, 1);
        } else {
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(largeMacbookRef.current, 0);
        }
    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        config: {mass:1, tension: 0, friction: 26}
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <Macbook16 scale={isMobile ? 0.05 : 0.08}/>
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <Macbook14 scale={isMobile ? 0.03 : 0.06}/>
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher
