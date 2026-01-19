import React from "react";
import { Pressable, Text, View } from "react-native";
import * as Haptics from "expo-haptics";

const actions = [
  { id: "scan", label: "Scan" },
  { id: "voice", label: "Voice" },
  { id: "pulse", label: "Pulse" },
  { id: "focus", label: "Focus" },
];

export default function CommandBar() {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <View className="absolute bottom-6 left-0 right-0 px-6">
      <View className="mb-3 items-center">
        <View className="h-1.5 w-14 rounded-full bg-[#1F2937]" />
        <Text className="mt-2 text-[10px] uppercase tracking-[2px] text-[#6B7280]">
          Swipe up for command
        </Text>
      </View>
      <View className="rounded-3xl border border-[#1F2937] bg-[#0B0B10] px-5 py-4 shadow-2xl">
        <View className="flex-row items-center justify-between">
          {actions.map((action) => (
            <Pressable
              key={action.id}
              onPress={handlePress}
              className="items-center"
            >
              <View className="h-12 w-12 items-center justify-center rounded-2xl border border-[#1F2937] bg-[#0F172A]">
                <View className="h-2 w-2 rounded-full bg-[#38BDF8]" />
              </View>
              <Text className="mt-2 text-[10px] text-[#94A3B8]">
                {action.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
