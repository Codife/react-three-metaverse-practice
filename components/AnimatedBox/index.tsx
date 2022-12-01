import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { BoxHelper } from 'three'

interface Props {
  isTesting: boolean
}

const AnimatedBox = ({ isTesting }: Props) => {
  const meshRef = useRef<THREE.Mesh>(null)

  {
    //@ts-ignore
    isTesting ? useHelper(meshRef, BoxHelper, 'red') : null
  }

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.03
    }
  })

  return (
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

export default AnimatedBox
