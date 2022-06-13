import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";

export async function storeStringValue(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

export async function storeObjectData(key: string, value: any) {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
  }
}

export async function getStringValue(key: string) {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value;
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
}

export async function getObjectData(key: string) {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}