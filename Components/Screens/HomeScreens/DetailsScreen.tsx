import React from "react";
import { View, Text, SafeAreaView, FlatList, Alert, TouchableOpacity, TouchableHighlight, Touchable, Image, StatusBar } from 'react-native'
import { Scale } from "../../Utilities/Scale";
import CustomHeader from '../../CommonComponents/CustomHeader'

interface Props {
    navigation: any;
    // onPressClose: Function;
}

export default function DetailsScreen(props: Props) {
    const workoutArray = [
        { id: 1, workoutName: 'Chest', thumbnail: require('../../Assets/chestThumbnail.jpeg') },
        { id: 2, workoutName: 'Biceps', thumbnail: require('../../Assets/bicepsThumbnail.png') },
        { id: 3, workoutName: 'Shoulders', thumbnail: require('../../Assets/shoulderThumbnail.jpeg') },
        { id: 4, workoutName: 'Triceps', thumbnail: require('../../Assets/tricepsThumbnail.jpeg') },
        { id: 5, workoutName: 'Back', thumbnail: require('../../Assets/backThumbnail.jpeg') },
        { id: 6, workoutName: 'Thighs', thumbnail: require('../../Assets/thighsThumbnail.jpeg') },
    ]

    function onPressWorkout(name: string) {
        props.navigation.navigate('Workouts', { WorkoutName: name })
        // throw new Error("Function not implemented.");
    }

    const renderWorkouts = (item: any) => {
        return (
            <TouchableOpacity onPress={() => onPressWorkout(item.workoutName)} style={{
                borderColor: 'black',
                borderWidth: 1,
                width: Scale(150),
                height: Scale(250),
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: Scale(20),
                marginHorizontal: Scale(10),
                borderRadius: Scale(20)
            }}>
                {/* <Text>{item.name}</Text> */}
                <Image source={item?.thumbnail} style={{ height: Scale(250), width: Scale(150), borderRadius: Scale(20) }} />
            </TouchableOpacity>
        )
    }
    const goBack = () => {
        props.navigation.goBack(null);
      }

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <StatusBar barStyle={'light-content'} translucent={false} />
            <CustomHeader navigation={props.navigation} title={'Main Workouts'} />
            {/* <View style={{ height: Scale(30), width: '100%', marginTop: Scale(4), alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={goBack} style={{ width: '10%', marginLeft: Scale(20) }}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '90%', alignItems: 'center' }}>
                        <Text>Header</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            {/* <CustomHeader navigation={undefined} /> */}
            <View>
                <Text>Hii "Name"..!! What do you want to do next?</Text>
                <FlatList
                    data={workoutArray}
                    numColumns={2}
                    renderItem={({ item, index, separators }) => renderWorkouts(item)}
                    style={{ marginTop: Scale(20) }}
                    contentContainerStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}

