import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface Props {
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorPicker: React.FC<Props> = ({ selectedColor, setSelectedColor }) => {
  const color_list: string[] = Colors.COLOR_LIST;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 20,
        marginTop: 20,
        marginHorizontal: "auto",
      }}
    >
      {color_list.map((color: string, index: number) => {
        return (
          <TouchableOpacity
            style={[
              {
                height: 30,
                width: 30,
                backgroundColor: color,
                borderRadius: 99,
              },
              selectedColor === color && { borderWidth: 4 },
            ]}
            key={index + 1}
            onPress={() => setSelectedColor(color)}
          ></TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ColorPicker;

const styles = StyleSheet.create({});
