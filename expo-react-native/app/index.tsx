import { Text, View } from "react-native";
import { Canvas, useFrame } from "@react-three/fiber/native"
import { OrbitControls, Sparkles } from "@react-three/drei/native";
import { useRef } from "react";
import { Mesh } from "three";

export default function Index() {
  return(
    <View className="max-w-7xl mx-auto">
      <Text className="text-2xl text-white underline">Hello Three js</Text>
    </View>
  )
}
