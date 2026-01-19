import React from "react";
import { Pressable, Text, View } from "react-native";
import * as Haptics from "expo-haptics";
import GlassCard from "./GlassCard";

export default function ExecutiveFilterCard({ decision }) {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <Pressable onPress={handlePress}>
      <GlassCard className="p-6" style={{ shadowColor: "#22D3EE" }}>
        <View className="flex-row items-center justify-between">
          <Text className="text-xs uppercase tracking-[2px] text-[#6B7280]">
            Decision Filter
          </Text>
          <View className="px-3 py-1 rounded-full bg-[#0B1B2E] border border-[#1E3A8A]">
            <Text className="text-[10px] text-[#38BDF8]">Priority</Text>
          </View>
        </View>
        <Text className="mt-4 text-xl font-semibold text-white">
          {decision.title}
        </Text>
        <Text className="mt-2 text-sm text-[#9CA3AF]">
          {decision.detail}
        </Text>
        <View className="mt-4 flex-row items-center gap-3">
          <View className="h-2 w-2 rounded-full bg-[#A3FF12]" />
          <Text className="text-xs text-[#A3FF12]">AI recomendou ajuste imediato</Text>
        </View>
      </GlassCard>
    </Pressable>
  );
}
