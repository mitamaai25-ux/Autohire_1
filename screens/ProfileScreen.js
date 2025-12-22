import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{flex:1, backgroundColor:'#fff', padding:18}}>
      <Text style={{fontSize:32, fontWeight:'800'}}>Elyse Freeman</Text>
      <Text style={{color:'#6b7280', marginTop:4}}>UI/UX Designer</Text>

      <View style={{backgroundColor:'#fafafa', marginTop:18, padding:12, borderRadius:12}}>
        <Text style={{fontWeight:'700'}}>Skills</Text>
        <Text>UI Design · UX Research · Prototyping · Visual Design</Text>
      </View>

      <Text style={{fontSize:18, fontWeight:'700', marginTop:18}}>Portfolio</Text>
      <View style={{height:120, backgroundColor:'#f0f4ff', borderRadius:12, marginTop:8}} />
    </View>
  );
}

