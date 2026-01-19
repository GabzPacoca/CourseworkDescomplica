import React from "react";
import { Pressable, Text, View } from "react-native";
import * as Haptics from "expo-haptics";
import GlassCard from "./GlassCard";

export default function BureaucracyTracker({ tasks }) {
  const handlePress = () => {
    Haptics.selectionAsync();
  };

  return (
    <GlassCard className="p-5" style={{ shadowColor: "#22C55E" }}>
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-semibold text-white">Burocracy Tracker</Text>
        <View className="px-2 py-1 rounded-full bg-[#0F172A] border border-[#1E293B]">
          <Text className="text-[10px] text-[#94A3B8]">Life Admin</Text>
        </View>
      </View>
      <View className="mt-4 gap-3">
        {tasks.map((task) => (
          <Pressable
            key={task.id}
            className="rounded-2xl border border-[#1F2937] bg-[#0B0B0D] px-4 py-3"
            onPress={handlePress}
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-[#E5E7EB]">{task.title}</Text>
              <Text className="text-[10px] text-[#38BDF8]">{task.tag}</Text>
            </View>
            <Text className="mt-1 text-xs text-[#6B7280]">{task.status}</Text>
          </Pressable>
        ))}
      </View>
    </GlassCard>
  );
}
