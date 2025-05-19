import "@/global.css";
import { View } from "react-native";
import Navbar from "./sections/Navbar";

export default function RootLayout() {
  return (
    <View className="h-full flex-1bg-[#010103] font-generalsans max-w-7xl mx-auto">
      <Navbar/>
      {/* <Slot /> */}
    </View>
  );
}
