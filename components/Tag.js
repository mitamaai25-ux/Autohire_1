import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tag({ text }) {
  return (
    <View style={styles.tag}><Text style={{color:'#0a2b7a'}}>{text}</Text></View>
  );
}

const styles = StyleSheet.create({
  tag:{backgroundColor:'#eef4ff', paddingHorizontal:12, paddingVertical:8, borderRadius:999, marginRight:8, marginBottom:8}
});
