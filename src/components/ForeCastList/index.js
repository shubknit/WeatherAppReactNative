import React from 'react'
import  { FlatList, View, Text, Image } from 'react-native';
import { styles, eStyles } from './styles';

export const ForeCastList = ({foreCastData}) => {
    return (
      <View>
          <FlatList data = {foreCastData} 
            renderItem = {({item}) => {
              const imageUrl = 'https://' + item.day.condition.icon;
              return(  
              <View style = {[styles.item, eStyles.item]}>
                <View style = {styles.leftPanel}>
                  <Text style = {styles.text}> {item.date} &nbsp; | &nbsp;</Text>
                  <Text style = {styles.text}> {item.day.condition.text}</Text>
                </View>
                <View style = {styles.rightPanel}>
                  <Image source = {{ uri: imageUrl }} 
                    style = {{width: 100, height: 100}}/>
                  <Text style = {styles.text}> &nbsp;{item.day.maxtemp_c}</Text>
                  <Text style = {styles.text}> / {item.day.mintemp_c}&#8451;</Text>
                </View>
                                
              </View>
              )
            }
              
          }  
      />
      </View>  
    )
  }
  