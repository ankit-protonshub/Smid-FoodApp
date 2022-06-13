import { ActivityIndicator, View } from "react-native";

import React from "react";
import { Colors } from "../Utilities/Colors";

interface myProps {
  loading: boolean;
}
export default function Loader(props: myProps) {
  return props.loading ? (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: "absolute",
      }}
    >
      <ActivityIndicator size={"large"} color={Colors.navyBlue} />
    </View>
  ) : (
    <View />
  );
}
