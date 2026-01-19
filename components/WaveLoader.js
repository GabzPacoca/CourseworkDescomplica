import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

const BAR_COUNT = 5;

export default function WaveLoader({ active = true }) {
  const animations = useRef(
    Array.from({ length: BAR_COUNT }, () => new Animated.Value(0.4))
  ).current;

  useEffect(() => {
    if (!active) {
      animations.forEach((anim) => anim.setValue(0.4));
      return;
    }

    const loops = animations.map((anim, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 140),
          Animated.timing(anim, {
            toValue: 1,
            duration: 520,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0.4,
            duration: 520,
            useNativeDriver: true,
          }),
        ])
      )
    );

    loops.forEach((loop) => loop.start());

    return () => loops.forEach((loop) => loop.stop());
  }, [active, animations]);

  return (
    <View className="flex-row items-end gap-1">
      {animations.map((anim, index) => (
        <Animated.View
          key={`wave-${index}`}
          className="w-2 rounded-full bg-[#A3FF12]"
          style={{
            height: anim.interpolate({
              inputRange: [0.4, 1],
              outputRange: [8, 24],
            }),
            opacity: anim,
          }}
        />
      ))}
    </View>
  );
}
