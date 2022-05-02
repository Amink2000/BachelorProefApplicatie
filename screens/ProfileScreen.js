import React from 'react';
import { View, Button, StyleSheet, SafeAreaView, Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Navigation from '../navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouriteScreen from './FavouriteScreen';

export default function Profile({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView> 
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginLeft: 7, }}>
                    <Avatar.Image source={require('../assets/images/user.jpg')}
                    marginTop='1.5%'
                    size={80} />

                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {marginTop: 15, marginBottom: 5,}]}>Amin Khatibi</Title>
                        <Caption style={styles.caption}>R0743523</Caption>
                    </View>
                </View>

                <View style={[styles.userInfoSection, {marginTop: '10%', marginLeft: '-10%'}]}>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color="steelblue" size={20} />
                        <Text style={{color: '#777777', marginLeft: 20}}>Ghent, Belgium</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="steelblue" size={20} />
                        <Text style={{color: '#777777', marginLeft: 20}}>+32 468 20 40 65</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="steelblue" size={20} />
                        <Text style={{color: '#777777', marginLeft: 20}}>aminkhatibi@icloud.com</Text>
                    </View>
                </View>
                
                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {borderRightColor: '#dddddd', borderRightWidth: 1,}]}>
                        <Title>No</Title>
                        <Caption>Selection made</Caption>
                    </View>
                
                    <View style={styles.infoBox}>
                        <Title>5</Title>
                        <Caption>Favourites</Caption>
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
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name="account-outline" color="steelblue" size={25}/>
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon1 name="settings" color="steelblue" size={25}/>
                        <Text style={styles.menuItemText}>Settings</Text>
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
});