import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = StyleSheet.create({
 item: {
   borderBottomColor: '#fff',
   flexDirection: 'row',
   justifyContent: 'space-between',
   borderBottomWidth:1,
   paddingTop: 20,
   paddingBottom: 20
 },
 
 text: {
  fontSize: 20,
  color: '#fff'
 },

 leftPanel: {
  width: '50%',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
 },
 rightPanel: {
  width: '50%',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center'
 }

});

export const eStyles = EStyleSheet.create({
 'item:last-child': {
   borderBottomWidth: 0
 }
});
