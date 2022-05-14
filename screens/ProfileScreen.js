
import { View, Button, StyleSheet, SafeAreaView, Linking, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Navigation from '../navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouriteScreen from './FavouriteScreen';
import React, { useState, useEffect } from 'react';
import authAxios from '../apis/AuthApi';

export default function Profile({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [idStudent, setIdStudent] = useState(15);
    const [profileFirstName, setProfileFirstName] = useState("");
    const [profileLastName, setProfileLastName] = useState("");
    const [profileCell, setProfileCell] = useState("");
    const [profileEmail, setProfileEmail] = useState("aminkhatibi@icloud.com");
    const [profileLocation, setProfileLocation] = useState("");
    const [profileCampus, setProfileCampus] = useState("");
    const [submitted, setSubmitted] = useState("No", "Yes");
    

    useEffect(() => {
        authAxios.get("/student/all")
        .then(({ data }) => {
            console.log("defaultApp -> data", data)
            setData(data)
            setProfileCell(data[0].tel);
            setProfileFirstName(data[0].firstName);
            setProfileLastName(data[0].lastName);
            setProfileCampus(data[0].campus);
            setProfileLocation(data[0].address)
            console.log(profileCampus)
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);
    useEffect(() => {
        authAxios.get("/preferences/all")
        .then(({ data }) => {
            console.log("defaultApp -> data", data[0])
            setData(data)
            if(data[0].submitted==true){
                setSubmitted("Yes")
            }
            else{
                setSubmitted("No")
            }
            console.log(submitted)
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView> 
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginLeft: 7, }}>
                    <Avatar.Image source={require('../assets/images/user.jpg')}
                    marginTop='1.5%'
                    size={80} />

                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {marginTop: 15, marginBottom: 5,}]}>{profileFirstName} {profileLastName}</Title>
                        <Caption style={styles.caption}>R0743523</Caption>
                    </View>
                </View>

                <View style={[styles.userInfoSection, {marginTop: '10%', marginLeft: '-10%'}]}>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color="steelblue" size={20} />
                        <TouchableOpacity onPress={() => Linking.openURL('maps://app?saddr=Mijn+Locatie&daddr='+profileLocation)}>
                        <Text style={{color: '#777777', marginLeft: 20}}>
                            {profileLocation}
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="steelblue" size={20} />
                        <Text style={{color: '#777777', marginLeft: 20}}>{profileCell}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="steelblue" size={20} />
                        <Text style={{color: '#777777', marginLeft: 20}}>aminkhatibi@icloud.com</Text>
                    </View>
                </View>
                
                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {borderRightColor: '#dddddd', borderRightWidth: 1,}]}>
                        <Title >{submitted}</Title>
                        <Caption>Selection made</Caption>
                    </View>
                
                    <View style={styles.infoBox}>
                        <Text style={styles.text0}>{profileCampus}</Text>
                        <Caption>Campus</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.menuWrapper}> 
            <TouchableRipple onPress={() => {
              navigation.navigate('TabFour')
            }}>
                    <View style={styles.menuItem}>
                        <Icon name="heart-outline" color="steelblue" size={25}/>
                        <Text style={styles.menuItemText}>Your Favorities</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {
                  Linking.openURL('https://kuleuven.be')
                }}>
                    <View style={styles.menuItem}>
                        <Icon name="share-outline" color="steelblue" size={25}/>
                        <Text style={styles.menuItemText}>Go to browser</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {
                    alert("If you have any questions or if any problems have occurred, don't hesitate to contact your coordinator")
                }}>
                    <View style={styles.menuItem}>
                        <Icon name="account-outline" color="steelblue" size={25}/>
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color:"black"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    infoBoxWrapper: {
        borderBottomColor: '#777777',
        borderBottomWidth: 1,
        borderTopColor: '#777777',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 5,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    text0:{
        marginBottom:5,
        marginTop:12,
        fontSize:16
    }
});