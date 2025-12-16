import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useEffect } from "react";
import { Color } from "three";
import { noChangeParts } from "../../lib/constants/models";
import useMacBookStore from "../../store";

export default function MacbookModel(props) {
  const { nodes, materials, scene } = useGLTF(
    "/models/macbook-transformed.glb",
  );
  const { color, texture } = useMacBookStore();
  const screen = useVideoTexture(texture);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && !noChangeParts.includes(child.name)) {
        child.material.color = new Color(color);
      }
    });
  }, [color, scene]);

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
        castShadow={false}
        receiveShadow={false}
      >
        <meshBasicMaterial map={screen} />
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

useGLTF.preload("/models/macbook-transformed.glb");
