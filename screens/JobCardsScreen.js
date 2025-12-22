import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { sampleJobs } from '../data/sampleData';
import JobCard from '../components/JobCard';

export default function JobCardsScreen() {
  return (
    <View style={{flex:1, backgroundColor:'#fff', paddingTop:20}}>
      <Text style={{fontSize:36, fontWeight:'800', marginLeft:18}}>Job Cards</Text>
      <FlatList
        data={sampleJobs}
        keyExtractor={i=>i.id}
        contentContainerStyle={{padding:18}}
        renderItem={({item}) => <JobCard item={item} />}
        ItemSeparatorComponent={()=> <View style={{height:10}}/>}
      />
    </View>
  );
}
