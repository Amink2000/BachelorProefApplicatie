import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, ScrollView, TouchableOpacity, Linking} from 'react-native'

import Icon1 from 'react-native-vector-icons/Ionicons';

const{width, height} = Dimensions.get('window')
const ThesisCard = ({item }) => {
    console.log(item)
    return (
        <View style={styles.cardView}>
            <Text style={styles.title}> {item.name}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:0468204065`)}>
                
            <Text style={styles.company}>
            <Icon1 name="call-outline" color="steelblue" size={14}/>
                {item.promotor} </Text>
                        </TouchableOpacity>
            
                <TouchableOpacity onPress={() => Linking.openURL('maps://app?saddr=Mijn+Locatie&daddr='+item.campus)}>
                
                        <Text style={styles.company}>
                        <Icon1 name="location-outline" color="steelblue" size={14}/>
                            {item.campus}
                        </Text>
                        </TouchableOpacity>
            {/* <Text style={styles.author}>{item.company} </Text> */}
            <ScrollView>
            <Text style={styles.description}>{item.description}</Text>
            </ScrollView>
            <Text style={styles.persons}>
            <Icon1 name="people-outline" color="steelblue" size={14}/>
                {item.numberOfPers}
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: 'steelblue',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title:{
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'steelblue',
        fontSize: 20,
        fontWeight: 'bold'
    },
    description:{
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.03,
        color: 'gray',
        fontSize: 12
    },
    image:{
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    company:{
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.04,
        fontSize: 15,
        color: 'gray'

    },
    persons:{
        marginBottom: width * 0.02,
        marginHorizontal: width * 0.04,
        fontSize: 15,
        color: 'gray'
    }
})

export default ThesisCard