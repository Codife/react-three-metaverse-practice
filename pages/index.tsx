import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import style from '../styles/Home.module.css'
import { AnimatedBox, CameraOrbitController } from '../components'

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Canvas>
        <CameraOrbitController />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>
    </div>
  )
}

export default Home
