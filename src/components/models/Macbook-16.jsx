import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";
import { Color } from "three";
import { noChangeParts } from "../../lib/constants/models";
import useMacBookStore from "../../store";

export default function MacBookModel16(props) {
  const { nodes, materials, scene } = useGLTF(
    "/models/macbook-16-transformed.glb",
  );
  const texture = useTexture("/screen.webp");
  const { color } = useMacBookStore();

  useEffect(() => {
    const changeableMeshes = [];
    scene.traverse((child) => {
      if (child.isMesh && !noChangeParts.includes(child.name)) {
        changeableMeshes.push(child);
      }
    });
    changeableMeshes.forEach((mesh) => {
      mesh.material.color = new Color(color);
    });
  }, [color]);

  return (
    <group {...props} dispose={null} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.PaletteMaterial001}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.zhGRTuGrQoJflBD}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.PaletteMaterial002}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.lmWQsEjxpsebDlK}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.LtEafgAVRolQqRw}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.iyDJFXmHelnMTbD}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials.eJObPwhgFzvfaoZ}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.nDsMUuDKliqGFdU}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.CRQixVLpahJzhJc}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials.YYwBgwvcyZVOOAA}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.SLGkCohDDelqXBu}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.WnHKXHhScfUbJQi}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials.fNHiBfcxHUJCahl}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_74.geometry}
        material={materials.LpqXZqhaGCeSzdu}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials.gMtYExgrEUqPfln}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_96.geometry}
        material={materials.PaletteMaterial003}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_107.geometry}
        material={materials.JvMFZolVCdpPqjj}
        castShadow={false}
        receiveShadow={false}
      />
      <mesh
        geometry={nodes.Object_123.geometry}
        material={materials.sfCQkHOWyrsLmor}
        castShadow={false}
        receiveShadow={false}
      >
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Object_127.geometry}
        material={materials.ZCDwChwkbBfITSW}
        castShadow={false}
        receiveShadow={false}
      />
    </group>
  );
}

useGLTF.preload("/models/macbook-16-transformed.glb");
useTexture.preload("/screen.webp");
