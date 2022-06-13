import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
type MyProps = { title: string, marginTop: number, onPress: Function };
type MyState = {};
import { Scale, verticalScale } from '../Utilities/Scale';
import { Colors as colors } from '../Utilities/Colors';
import Fonts from '../Utilities/Fonts'
import Strings from '../Utilities/Strings';
export interface Props {
    navigation: any;
    id: string;
}
interface myProps {
    
    marginTop : number
    title: string;
    loading: boolean;
  }

export default function CustomButton(props: myProps) {

    onPress(); {
        // props.onPress()
    };

    return (
        <TouchableOpacity onPress={() => { onPress() }}
            style={{
                backgroundColor: colors.navyBlue,
                width: Scale(312),
                height: Scale(48),
                marginTop: verticalScale(props.marginTop),
                borderRadius: Scale(12),
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text style={{
                color: colors.lightGrey,
                letterSpacing: Scale(1),
                fontFamily:Fonts.getFontByOS(Strings.fontBold)
            }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

function onPress() {
    throw new Error('Function not implemented.');
}

