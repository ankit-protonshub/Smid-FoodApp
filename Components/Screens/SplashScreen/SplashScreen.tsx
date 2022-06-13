import React, { useEffect } from "react";
import { View, Text, Alert } from 'react-native'
import { storeStringValue, storeObjectData, getStringValue, getObjectData } from '../../Utilities/AsyncStore'

interface Props {
  navigation: any;
  // onPressClose: Function;
}

const SplashScreen = (props: Props) => {

  const someFunction = async () => {
    await storeStringValue('message', 'Heyyy')
    let message: any = await getStringValue('message')
    Alert.alert(message)
  }

  const moveToNextScreen = async () => {
    let userData = await getObjectData("userData")
    if (userData?.data?.isUserLoggedIn === true) {
      props.navigation.navigate('DetailsScreen')
    } else {
      props.navigation.navigate('OTPScreen')
    }
  }

  useEffect( () => {
    const initializing = async () => {
    let userData = {
      data: {
        isUserLoggedIn: true
      }
    }
    await storeObjectData("userData", userData)
    setTimeout(() => {
      console.log("Hiiiii")
      moveToNextScreen();
    }, 1000);
  }
  initializing();
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Splash Screen</Text>
    </View>
  );
}
export default SplashScreen;