import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function JobCard({ item }) {
  return (
    <View style={{backgroundColor:'#fff', borderRadius:12, padding:14, borderWidth:1, borderColor:'#f0f2f5'}}>
      <Text style={{fontWeight:'700', fontSize:16}}>{item.title}</Text>
      <Text style={{color:'#6b7280', marginVertical:6}}>{item.type} · {item.location}</Text>
      <Text numberOfLines={2}>{item.description}</Text>

      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:12}}>
        <Text style={{color:'#8b8f97'}}>{item.posted}</Text>
        <Text style={{color:'#2e6df6'}}>{item.applicants} applicants</Text>
      </View>
    </View>
  );
}
