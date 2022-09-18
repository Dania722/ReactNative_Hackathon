import React from 'react'
import { Button, Text, View  } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../Styling/style';
import * as Progress from 'react-native-progress';
function Cards() {
  return (
    <>
      <View>
        <View style={styles.flexRow}>
          <View>
            <Icon name="face" size={50} style={[styles.icons, styles.m1]} />
          </View>
          <View>
            <Text
              style={[
                styles.ps1,
                styles.fs3,
                styles.pt1,
                styles.textDark,
                styles.textBold,
              ]}>
              Hi , Dania Ahmed{' '}
            </Text>
            <Text style={[styles.ps1, styles.f6, styles.textDark]}>
              Lorem epsum safsgdhjgjgkhkngh
            </Text>
          </View>
          <View>
            <Icon
              name="file-download"
              size={50}
              style={[styles.dIcon, styles.ps3, styles.m1]}
            />
          </View>
        </View>

        <View
          style={[styles.flexRow, styles.bgDark, styles.cardText, styles.mt3]}>
          <View>
            <Text
              style={[
                styles.ps1,
                styles.fs3,
                styles.pt1,
                styles.card,
                styles.textBold,
              ]}>
              Hi , Dania Ahmed{' '}
            </Text>
            <Text style={[styles.ps1, styles.f6, styles.card, styles.textBold]}>
              Lorem epsum safsgdhjgjgkhkngh
            </Text>
            <View>
              <Progress.Bar progress={0} width={380}  style={[styles.mt1]}/>
            </View>
          </View>
          <View>
            {/* <Button style={[styles.me2]}
              title="MUAIL"
              
              ></Button> */}
          </View>
        </View>

        <View>
          <View style={styles.proCar}></View>
        </View>
      </View>
    </>
  );
}

export default Cards
