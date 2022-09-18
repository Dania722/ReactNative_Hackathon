import React, {useState} from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from '../Styling/style';
import Input from '../components/input';
import Button from '../components/button';


export default function SignIn({navigation}) {
  return (
    <>
      <View style={{flex: 0.2}}></View>
      <View style={{flex: 1}}>
        <View style={[styles.my1, styles.ps1]}>
          <Text style={[styles.h1, styles.textDark, styles.textBold]}>
            Sign In !
          </Text>
        </View>
        <View style={[styles.ps1]}>
          <Text style={[styles.textDark, styles.fs5]}>
            Get Started your journey
          </Text>
          <Text style={[styles.textDark, styles.fs5]}>
            lorem epsum adssfsdfsgdgdhd
          </Text>
        </View>

        <View style={[styles.mt3]}>
          <Input
            keyboardType="email"
            onChangeText={e => {
              setEmail(e);
            }}
            secureTextEntry={false}
            name="login"
            placeholder="Enter Email"
          />
          <Input
            keyboardType="password"
            onChangeText={e => {
              setPassword(e);
            }}
            secureTextEntry={true}
            name="lock"
            placeholder="Password"
          />
        </View>
        <View style={[styles.px1]}>
          {/* <Button onPress={login} label="SIGN UP" /> */}
          <Button onPress={() => navigation.navigate('mainscreen')} label="MASUK" />
        </View>
      </View>
    </>
  );
}
