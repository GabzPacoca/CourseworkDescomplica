import React from "react";
import { FlatList, Text, View } from "react-native";
import GlassCard from "./GlassCard";
import WaveLoader from "./WaveLoader";

export default function IntelligenceFeed({ items }) {
  return (
    <GlassCard className="p-5" style={{ shadowColor: "#3B82F6" }}>
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-semibold text-white">Intelligence Feed</Text>
        <WaveLoader />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 16 }}
        renderItem={({ item }) => (
          <View className="mr-4 w-64 rounded-3xl border border-[#1F2937] bg-[#0B0B10] p-4">
            <Text className="text-[10px] uppercase tracking-[1.5px] text-[#6B7280]">
              {item.category}
            </Text>
            <Text className="mt-2 text-base font-semibold text-white">
              {item.title}
            </Text>
            <Text className="mt-2 text-xs text-[#9CA3AF]">{item.summary}</Text>
            <View className="mt-4 flex-row items-center gap-2">
              <View className="h-2 w-2 rounded-full bg-[#38BDF8]" />
              <Text className="text-[10px] text-[#38BDF8]">{item.time}</Text>
            </View>
          </View>
        )}
      />
    </GlassCard>
  );
}
