import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import style from '../styles/Home.module.css'
import { AnimatedBox } from '../components'
import { OrbitControls, Stats, useTexture } from '@react-three/drei'

const TexturedSpheres = () => {
  const map = useTexture('./textures/rock_boulder_cracked_diff_1k.png')
  const displacementMap = useTexture(
    './textures/rock_boulder_cracked_disp_1k.png',
  )
  const normalMap = useTexture('./textures/rock_boulder_cracked_nor_gl_1k.png')
  const roughnessMap = useTexture(
    './textures/rock_boulder_cracked_rough_1k.png',
  )

  return (
    <>
      {/* low graphics */}
      <mesh scale={[0.5, 0.5, 0.5]} position={[-1, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial map={map} />
      </mesh>
      {/* mid graphics */}
      <mesh scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
        />
      </mesh>
      {/* high graphics */}
      <mesh scale={[0.5, 0.5, 0.5]} position={[1, 0, 0]}>
        <sphereGeometry args={[1, 100, 100]} />
        <meshStandardMaterial
          map={map}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementScale={0.0}
        />
      </mesh>
    </>
  )
}

const Home: NextPage = () => {
  const testing = true

  return (
    <div className={style.container}>
      <Canvas>
        {testing && (
          <>
            <Stats />
            <axesHelper />
            <gridHelper args={[10, 10]} />
          </>
        )}
        <OrbitControls />
        <ambientLight intensity={0.3} />
        <directionalLight color="red" position={[0, 8, 5]} />
        <TexturedSpheres />
      </Canvas>
    </div>
  )
}

export default Home
