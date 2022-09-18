



import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Touchable,
  TouchableOpacity,
} from 'react-native';
// import { TextInput } from "react-native-gesture-handler";
// import bg from '../assets/bg.jpg';
import styles from '../Styling/style';
import Input from '../components/input';
import Button from '../components/button';
import Login from './login';


export default function Signup({navigation}) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let signin = () => {
    console.log(userName, email, password);
    let arr = [];
    if (!email) {
      arr.push('Email Required');
    }
    if (!password || password.length < 6) {
      arr.push('Password Required');
    }
    if (arr && arr.length > 0) {
      console.log(arr);
      return;
    }
    let obj = {
      email,
      password,
      userName,
    };
    console.log(obj);
  };
  return (
    <>
      <View style={{flex: 0.2}}></View>
      <View style={{flex: 1}}>
        <View style={[styles.my1, styles.ps1]}>
          <Text style={[styles.h1, styles.textDark, styles.textBold]}>
            Sign Up !
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
            keyboardType="text"
            onChangeText={e => {
              setUserName(e);
            }}
            secureTextEntry={false}
            name="login"
            placeholder="Enter Name"
          />
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
          <Button
            //  onPress={signin} label="SIGN UP"

            onPress={() => navigation.navigate('signin')}
            label="SIGN UP"
          />
        </View>
      </View>
    </>
  );
}