import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import style from '../styles/Home.module.css'
import { AnimatedBox } from '../components'
import { OrbitControls, Stats } from '@react-three/drei'

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
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <AnimatedBox isTesting={testing} />
      </Canvas>
    </div>
  )
}

export default Home
