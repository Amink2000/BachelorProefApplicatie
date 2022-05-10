import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions} from 'react-native'

const{width, height} = Dimensions.get('window')
const ThesisCard = ({item }) => {
    console.log(item)
    return (
        <View style={styles.cardView}>
            <Text style={styles.title}> {item.name}</Text>
            <Text style={styles.author}>{item.fieldOfStudy} </Text>
            <Text style={styles.author}>{item.campus} </Text>
            {/* <Text style={styles.author}>{item.company} </Text> */}
            
            <Text style={styles.title}>{item.description}</Text>
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
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 18
    },
    image:{
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    company:{
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'

    }
})

export default ThesisCard