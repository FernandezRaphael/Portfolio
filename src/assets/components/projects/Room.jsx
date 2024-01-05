import { useGLTF, useTexture, OrbitControls, Float, PresentationControls } from '@react-three/drei'

export default function Room() {

    const { nodes } = useGLTF('./room3d/room.glb')

    const bakedTexture = useTexture('./room3d/baked.jpg')
    bakedTexture.flipY = false

    return <>
        <color args={['#191919']} attach="background" />

        {/* <OrbitControls makeDefault /> */}

        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[- 0.4, 0.3]}
            azimuth={[- 0.5, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >
            <Float rotationIntensity={0.4}>
                <mesh geometry={nodes.baked.geometry} rotation-y={-1} position={[-1, 0, 3]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh >
            </Float>
        </PresentationControls >
    </>
}