import React from 'react'
import {Environment, Lightformer} from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[-10, 5, -5]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[10, 0, 1]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                </group>
            </Environment>
            <spotLight
                position={[-2, 10, 5]}
                angle={0.15}
                decay={0}
                rotation-y={Math.PI / 0.2}
            />
            <spotLight
                position={[-2, -25, 5]}
                angle={0.15}
                decay={0}
                rotation-y={Math.PI / 0.2}
            />
            <spotLight
                position={[0, 15, 5]}
                angle={0.15}
                decay={0}
                rotation-y={Math.PI}
            />
        </group>
    )
}
export default StudioLights
