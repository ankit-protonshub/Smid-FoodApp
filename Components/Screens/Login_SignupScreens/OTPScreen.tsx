import React, { useEffect, useState } from "react";
import {View,Text, StyleSheet, SafeAreaView} from 'react-native'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

interface Props {
  navigation: any;
}

const CELL_COUNT = 4;

const OTPScreen = (props: Props) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    const someFunction = async () => {

    }
    
    const someOtherFunction = async () => {
      
    }

    useEffect(()=>{
      
    },[])
    return (
      <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20,marginHorizontal:50},
    cell: {
      width: 60,
      height: 60,
      lineHeight: 55,
      fontSize: 30,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center'
    },
    focusCell: {
      borderColor: '#000',
    },
  });

export default OTPScreen;