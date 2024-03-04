import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ElevatedCards from './ElevatedCards';

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
        <View style={[styles.card,styles.elevatedCard]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    What's new in Javascript 21 -ES12
                </Text>
            </View>
            <Image
            source={
                {uri:'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
            }
            style={styles.cardImage}
            />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={4}>
                Just like every year, Javascript brings in new features. This year
                javascript is bringing 4 new features, which are almost in
                production rollout. I won't be wasting much more time and directly
                jump to code with easy to understand examples.
                </Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity
                      onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                    <Text style={styles.links}>Read More</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        flexWrap:'wrap',
        margin:8, 
        borderRadius:8
    },
    elevatedCard:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    headingContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:5
    },
    headerText:{
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:190,
        width:'100%'
    },
    bodyContainer:{
        padding:2,
        margin:5
    },
    footerContainer:{
        marginBottom:10,
        marginRight:10,
        alignItems: 'flex-start'
    },
    links:{
        backgroundColor:'#000',
        color:"#FFF",
        paddingLeft:4,
        paddingRight:4,
        paddingBottom:2,
        borderRadius:40,
        marginTop:9,
        marginHorizontal:4
    }

})