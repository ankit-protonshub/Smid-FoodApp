import React, { useEffect, useState } from "react";
import { View, Text, Alert, StatusBar } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../CommonComponents/CustomHeader";

interface Props {
  route: any;
  navigation: any;
}

const Workouts = (props: Props) => {

  const someFunction = async () => {

  }

  const someOtherFunction = async () => {

  }
  const [workoutName, setWorkoutName] = useState<String>('')

  useEffect(() => {
    // alert(JSON.stringify(props?.route?.params?.WorkoutName))
    setWorkoutName(props?.route?.params?.WorkoutName)
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar barStyle={'light-content'} translucent={false} /> */}
      <CustomHeader title={workoutName} navigation={props.navigation} />
      {/* <View style={{ flex: 1, width: '100%',alignItems:'center',justifyContent:'center' }}>
        <Text>{workoutName}</Text>
      </View> */}
    </SafeAreaView>
  );
}

export default Workouts;