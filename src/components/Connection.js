import React from 'react'
import { Line } from '@react-three/drei'

const Connection = ({ b1, b2 }) => {
  const points = [b1.position.data(), b2.position.data()]

  return <Line points={points} color={'orange'} lineWidth={15} />
}
export default Connection
