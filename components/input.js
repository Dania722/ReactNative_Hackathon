import React from 'react'
import { TextInput, View } from 'react-native'
import styles from '../Styling/style';

function Input(props) {
    const {placeholder, requied, label, keyboardType,  onChangeText} = props;
  return (
    <View style={styles.borderSignup}>
      <TextInput
        label={label}
        keyboardType={keyboardType}
        placeholder={placeholder}
        required={requied}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default Input
