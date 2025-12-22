import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function ChatScreen({ route }) {
  const candidate = route.params?.candidate;
  const [messages, setMessages] = useState([
    {id:'1', from:'them', text:`Hi, I'm interested in the role.` , time:'11:00 AM'},
    {id:'2', from:'me', text:`Thanks! I'll check and get back.`, time:'11:05 AM'}
  ]);
  const [text, setText] = useState('');

  const send = () => {
    if(!text.trim()) return;
    setMessages(prev => [...prev, {id:Date.now().toString(), from:'me', text, time:'Now'}]);
    setText('');
  };

  return (
    <View style={{flex:1}}>
      <View style={styles.header}><Text style={{fontWeight:'700'}}>{candidate?.name || 'Chat'}</Text></View>

      <FlatList
        data={messages}
        keyExtractor={i=>i.id}
        contentContainerStyle={{padding:18}}
        renderItem={({item}) => (
          <View style={{alignSelf: item.from === 'me' ? 'flex-end' : 'flex-start', marginBottom:12, maxWidth:'80%'}}>
            <View style={{backgroundColor: item.from === 'me' ? '#2e6df6' : '#f1f3f6', padding:12, borderRadius:10}}>
              <Text style={{color: item.from === 'me' ? '#fff' : '#000'}}>{item.text}</Text>
            </View>
            <Text style={{fontSize:10, color:'#8b8f97', marginTop:4}}>{item.time}</Text>
          </View>
        )}
      />

      <View style={styles.composer}>
        <TextInput style={styles.input} placeholder="Message" value={text} onChangeText={setText} />
        <TouchableOpacity onPress={send} style={styles.sendBtn}><Text style={{color:'#fff'}}>Send</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{padding:18, borderBottomWidth:1, borderColor:'#f0f2f5'},
  composer:{flexDirection:'row', padding:12, borderTopWidth:1, borderColor:'#f0f2f5', alignItems:'center'},
  input:{flex:1, backgroundColor:'#f6f7fb', padding:12, borderRadius:999, marginRight:8},
  sendBtn:{backgroundColor:'#2e6df6', padding:12, borderRadius:24}
});

