/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 MounTripElement_2.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/MounTripElement_2.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0}>
        <mesh geometry={nodes['3D_2_-_2'].geometry} material={materials['Wood 1']} position={[-14.77, 7.5, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/MounTripElement_2.glb')
