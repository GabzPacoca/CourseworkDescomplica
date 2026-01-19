import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
import GlassCard from "./GlassCard";

export default function PredictiveRadar({ level, label }) {
  const pulse = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0.8,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();
    return () => animation.stop();
  }, [pulse]);

  return (
    <GlassCard className="p-5" style={{ shadowColor: "#A3FF12" }}>
      <Text className="text-sm font-semibold text-white">Predictive Radar</Text>
      <View className="mt-4 items-center">
        <View className="h-32 w-32 items-center justify-center rounded-full border border-[#1F2937] bg-[#0B0B10]">
          <Animated.View
            className="absolute h-28 w-28 rounded-full border border-[#1D4ED8]"
            style={{ transform: [{ scale: pulse }], opacity: 0.6 }}
          />
          <View className="h-20 w-20 items-center justify-center rounded-full border border-[#334155] bg-[#0F172A]">
            <Text className="text-2xl font-semibold text-[#A3FF12]">
              {level}
            </Text>
            <Text className="text-[10px] uppercase tracking-[2px] text-[#6B7280]">
              Alert
            </Text>
          </View>
        </View>
        <Text className="mt-3 text-xs text-[#9CA3AF]">{label}</Text>
      </View>
    </GlassCard>
  );
}
