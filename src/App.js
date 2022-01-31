import React, { useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'
import { makeDefaultModel } from './model/makeModel'
import Model from './components/Model'
export default function App() {
  const [start, setStart] = useState([-1.2, 0, 0])
  const [end, setEnd] = useState([1.2, 0, 0])

  const modelRef = useRef(makeDefaultModel())
  console.log(modelRef.current)

  return (
    <Canvas touchAction={'none'} style={{ touchAction: 'none' }}>
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={50} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Model model={modelRef.current} />
      {/* <Box position={start} onPositionChange={setStart} />
      <Box position={end} onPositionChange={setEnd} />
      <Line points={[start, end]} color="blue" lineWidth={15} /> */}
    </Canvas>
  )
}
