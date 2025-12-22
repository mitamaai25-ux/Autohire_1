import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import TopMatchCard from '../components/TopMatchCard';
import Tag from '../components/Tag';
import { sampleMatches } from '../data/sampleData';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <View style={styles.header}>
        <Text style={styles.logo}>AutoHire</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}><Icon name="notifications-outline" size={22} /></TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{padding:18}}>
        <Text style={styles.title}>Dashboard</Text>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBox}><Text>Post a Job</Text></TouchableOpacity>
          <TouchableOpacity style={styles.actionBox}><Text>View Applicants</Text></TouchableOpacity>
          <TouchableOpacity style={styles.actionBox}><Text>AI Recommendations</Text></TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Top Matches for You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {sampleMatches.map((m)=>(
            <TopMatchCard key={m.id} item={m} onPress={()=>navigation.navigate('Candidate', {candidate: m})} />
          ))}
        </ScrollView>

        <View style={{flexDirection:'row', flexWrap:'wrap', marginTop:14}}>
          <Tag text="Design" />
          <Tag text="Development" />
          <Tag text="AI" />
          <Tag text="Writing" />
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  header:{paddingTop:12, paddingHorizontal:18, flexDirection:'row', justifyContent:'space-between', alignItems:'center'},
  logo:{fontWeight:'700', fontSize:18},
  title:{fontSize:36, fontWeight:'800', marginVertical:8},
  actionRow:{marginTop:10},
  actionBox:{backgroundColor:'#eef4ff', padding:14, borderRadius:12, marginBottom:10},
  sectionTitle:{fontSize:18, fontWeight:'700', marginTop:8}
});

