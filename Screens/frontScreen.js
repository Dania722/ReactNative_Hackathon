import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Button from '../components/button';
import styles from '../Styling/style';
export default function FrontScreen({navigation}) {
  return (
    <>
      <View style={[{flex: 2}, styles.p1]}>
        <View style={[styles.bgDark, {flex: 1, borderRadius: 30}]}>
          {/* <Image source={img}/> */}
        </View>
      </View>
      <View style={[styles.p1]}>
        <View>
          <Text
            style={[
              styles.fs1,
              styles.textDark,
              styles.textBold,
              {lineHeight: 30},
            ]}>
            Perangkat Lunak
          </Text>
          <Text
            style={[
              {lineHeight: 45},
              styles.fs1,
              styles.textDark,
              styles.textBold, {marginTop:1}
            ]}>
            Pengolah Grambar Vektor
          </Text>
        </View>
        <View style={[styles.my1]}>
          <Text style={[styles.fs, styles.textDark]}>
            Lorem Ipsumr printer took a galley of type and scrambled it to make
            a type specimen book.
          </Text>
        </View>
        <Button onPress={() => navigation.navigate('signup')} label="MASUK" />
      </View>
    </>
  );
}
