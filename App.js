import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import BureaucracyTracker from "./components/BureaucracyTracker";
import CommandBar from "./components/CommandBar";
import ExecutiveFilterCard from "./components/ExecutiveFilterCard";
import IntelligenceFeed from "./components/IntelligenceFeed";
import PredictiveRadar from "./components/PredictiveRadar";

const decision = {
  title: "Trânsito intenso na Rodovia",
  detail: "Saia 10min antes e use a rota B para evitar gargalos às 18:00.",
};

const tasks = [
  {
    id: "task-1",
    title: "Contestação de fatura",
    tag: "Operadora",
    status: "Status: em análise pela equipe financeira",
  },
  {
    id: "task-2",
    title: "Renovação do seguro",
    tag: "Veículo",
    status: "Status: aguardando proposta revisada",
  },
];

const feedItems = [
  {
    id: "feed-1",
    category: "Executive Brief",
    title: "Resumo fiscal Q3",
    summary: "Fluxo de caixa estável, margem líquida +4%.",
    time: "Atualizado há 8 min",
  },
  {
    id: "feed-2",
    category: "Document Scan",
    title: "Contrato Alfa",
    summary: "Cláusula 7 exige revisão jurídica antes de sexta.",
    time: "Há 22 min",
  },
  {
    id: "feed-3",
    category: "News Intel",
    title: "Mercado de energia",
    summary: "Tendência de alta nos próximos 5 dias. Ajustar reservas.",
    time: "Há 45 min",
  },
];

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#0A0A0A]">
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 180 }}
        className="px-6 pt-6"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text className="text-xs uppercase tracking-[2px] text-[#4B5563]">
            Orion AI Agent
          </Text>
          <Text className="mt-2 text-2xl font-semibold text-white">
            Dashboard de Decisão
          </Text>
          <Text className="mt-2 text-sm text-[#6B7280]">
            Processando sinais críticos em tempo real.
          </Text>
        </View>

        <View className="mt-6">
          <ExecutiveFilterCard decision={decision} />
        </View>

        <View className="mt-6 flex-row flex-wrap gap-4">
          <View className="flex-1 min-w-[160px]">
            <PredictiveRadar level="78%" label="Picos de alerta entre 14h-18h" />
          </View>
          <View className="flex-1 min-w-[160px]">
            <BureaucracyTracker tasks={tasks} />
          </View>
        </View>

        <View className="mt-6">
          <IntelligenceFeed items={feedItems} />
        </View>
      </ScrollView>
      <CommandBar />
    </SafeAreaView>
  );
}
