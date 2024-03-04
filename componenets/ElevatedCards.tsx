import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
    <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                me
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                Scroll
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                more
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
            😀!
            </Text>
        </View>
    </ScrollView>
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
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:4
      },
      cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:400,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#0000ff'
      },
      container:{
        backgroundColor:'#000',
        borderRadius:5,
        margin:4
      }

})