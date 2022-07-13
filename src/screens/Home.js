import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";

import * as Animatable from "react-native-animatable";

const spacerHeight = 500;

const expenses = [
  { name: "Homerent", category: "Household", debt: "4,500.00" },
  { name: "Sushi", category: "Food", debt: "120.00" },
  { name: "Cleaning stuf", category: "Groceries", debt: "79.00" },
  { name: "Doctor", category: "Health", debt: "700.00" },
];

export function Home() {
  return (
    <ScrollView className="flex-1 bg-sky-100">
      {Platform.OS === "ios" && (
        <View
          style={{
            backgroundColor: "#0369a1",
            height: spacerHeight,
            position: "absolute",
            top: -spacerHeight,
            left: 0,
            right: 0,
          }}
        />
      )}
      <View className="h-36 z-20 p-4 justify-end bg-sky-700">
        <SafeAreaView className="flex-row items-center justify-between">
          <Text className=" text-2xl text-sky-100">My expenses</Text>
          <TouchableOpacity className="bg-sky-600 p-2 rounded-full">
            <Text className="text-gray-800 font-bold">Add expense</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      <Animatable.View
        animation="fadeInDown"
        className="bg-sky-50 z-10 p-4 mx-2 my-8 rounded-md shadow-lg"
      >
        <Text className="text-gray-500 text-md mb-4">Pending to pay</Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-700 text-2xl">$ 4,000.00 MXN</Text>
          <Text className="text-gray-500 text-md">July 20</Text>
        </View>
      </Animatable.View>

      {expenses.map((expense, i) => (
        <Animatable.View
          key={Math.random()}
          animation="fadeInUpBig"
          ease="ease-in-out"
          delay={i * 50}
          className="flex-row bg-sky-50 mx-2 my-1 shadow-md rounded-lg p-4 expenses-center justify-between"
        >
          <View className="flex-row">
            <View className="bg-red-500 mr-4 w-1" />
            <View>
              <Text className="text-gray-700">{expense.name}</Text>
              <Text className="text-gray-400 mt-2">{expense.category}</Text>
            </View>
          </View>
          <Text className="text-lg text-gray-700">$ {expense.debt} MXN</Text>
        </Animatable.View>
      ))}
    </ScrollView>
  );
}
