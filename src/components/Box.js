import React, { useState, useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { useDrag } from '@use-gesture/react'

const Box = ({ position, onPositionChange, ...props }) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  const [pos, setPos] = useState(position)
  const camera = useThree((state) => state.camera)
  const { zoom } = camera
  const width = window.innerWidth
  const height = window.innerHeight
  const bind = useDrag(({ offset: [x, y] }) => setPos([x, y, 0]), {
    // bounds are expressed in canvas coordinates!
    bounds: {
      left: -width / 2 / zoom,
      right: width / 2 / zoom,
      top: -height / 2 / zoom,
      bottom: height / 2 / zoom
    },
    rubberband: true,
    from: pos,
    transform: ([x, y]) => {
      // console.log({ x, y })
      return [x / zoom, -y / zoom]
    }
  })

  useEffect(() => {
    if (onPositionChange) {
      onPositionChange(pos)
    }
  }, [pos, onPositionChange])

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      position={pos}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      {...bind()}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
export default Box
