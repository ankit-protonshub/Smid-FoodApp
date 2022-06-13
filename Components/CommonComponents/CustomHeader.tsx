import React, { useEffect, useState } from "react";
import { View, Text, Touchable, TouchableOpacity, Alert } from 'react-native'
import { Scale } from "../Utilities/Scale";

interface Props {
    navigation: any;
    title: String;
}

const CustomHeader = (props: Props) => {
    
    const someFunction = async () => {

    }

    const someOtherFunction = async () => {

    }

    const [header,setHeader] = useState<string>('')

    useEffect(() => {
        // alert(JSON.stringify(props.title))    
    }, [])

    const goBack = () => {
        props.navigation.goBack(null);
    }
    

    return (
        <View style={{ height: Scale(30), width: '100%', marginVertical: Scale(4), alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={goBack} style={{ width: '20%', marginLeft: Scale(20),alignItems:'center',height:'100%',justifyContent:'center' }}>
                    <Text style={{fontSize:Scale(18)}}>{'< '}Back</Text>
                </TouchableOpacity>
                <View style={{ width: '60%', alignItems: 'center' }}>
                    <Text style={{fontSize:Scale(18)}}>{props.title}</Text>
                </View>
                <View style={{ width: '20%', alignItems: 'center' }}>
                    {/* <Text numberOfLines={1}>{props.title}</Text> */}
                </View>
            </View>
        </View>
    );
}

export default CustomHeader;