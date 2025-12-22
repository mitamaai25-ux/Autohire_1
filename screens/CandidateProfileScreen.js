import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function CandidateProfileScreen({ route, navigation }) {
  const { candidate } = route.params;

  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <ScrollView contentContainerStyle={{padding:18}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginBottom:8}}><Text>Back</Text></TouchableOpacity>
        <View style={{alignItems:'center', marginBottom:12}}>
          <View style={{width:92, height:92, borderRadius:46, backgroundColor:'#eee', alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:28}}>{candidate.name[0]}</Text>
          </View>
          <Text style={{fontSize:22, fontWeight:'700', marginTop:8}}>{candidate.name}</Text>
          <Text style={{color:'#6b7280'}}>{candidate.role}</Text>
        </View>

        <View style={{backgroundColor:'#fafafa', padding:12, borderRadius:12}}>
          <Text style={{fontWeight:'700', marginBottom:8}}>Skills</Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            {candidate.tags.map(t=> <View key={t} style={{padding:6, backgroundColor:'#e6f0ff', marginRight:8, marginBottom:8, borderRadius:8}}><Text>{t}</Text></View>)}
          </View>
        </View>

        <View style={{marginTop:14}}>
          <Text style={{fontWeight:'700', marginBottom:8}}>Experience</Text>
          <Text>{candidate.experience}</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
          <TouchableOpacity style={styles.primaryBtn}><Text style={{color:'#fff'}}>Hire</Text></TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn} onPress={()=>navigation.navigate('Chat', {candidate})}><Text>Chat</Text></TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn}><Text>Save</Text></TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryBtn:{backgroundColor:'#2e6df6', padding:12, borderRadius:10, flex:1, alignItems:'center', marginRight:6},
  secondaryBtn:{borderWidth:1, borderColor:'#dfe6fb', padding:12, borderRadius:10, flex:1, alignItems:'center', marginLeft:6}
});

