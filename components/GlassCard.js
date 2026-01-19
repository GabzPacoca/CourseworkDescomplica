import React from "react";
import { View } from "react-native";

const glowShadow = {
  shadowColor: "#3B82F6",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.25,
  shadowRadius: 10,
  elevation: 8,
};

export default function GlassCard({ children, className = "", style }) {
  return (
    <View
      className={`bg-[#0F0F10] border border-[#1A1A1C] rounded-3xl ${className}`}
      style={[glowShadow, style]}
    >
      {children}
    </View>
  );
}
