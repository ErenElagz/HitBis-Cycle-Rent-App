import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../styles/colors';

// Libraries
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {CustomMapStyle} from '../utils/mapStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 16,
          overflow: 'hidden',
        }}>
        <MapView
          customMapStyle={CustomMapStyle}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 41.0082,
            longitude: 28.9784,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 41.0082,
              longitude: 28.9784,
            }}
            title="Istanbul"
            description="Istanbul, Turkey"
          />
        </MapView>
        <View
          style={{
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 999,
            bottom: 16,
            right: 16,
            backgroundColor: Colors.dark,
            width: 48,
            height: 48,
            borderRadius: 16,
          }}>
          <Icon
            name="crop-free"
            size={28}
            color={Colors.light}
          />
        </View>
        <View
          style={{
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 999,
            bottom: 72,
            right: 20,
            backgroundColor: Colors.secondaryDark,
            width: 36,
            height: 36,
            borderRadius: 20,
          }}>
          <Icon name="near-me" size={20} color={Colors.red} />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 16,
          backgroundColor: Colors.backgroundColorSecondary,
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 16,
          gap: 4,
        }}>
        <TouchableOpacity>
          <Icon name="magnify" size={28} color={Colors.light} />
        </TouchableOpacity>
        <TextInput
          style={{
            flex: 1,
            color: Colors.light,
            fontSize: 16,
            fontFamily: 'Roboto-Regular',
          }}
          placeholderTextColor={Colors.light}
          placeholder="Search for Bikes and Locations"
        />
        <TouchableOpacity>
          <Icon name="microphone" size={28} color={Colors.light} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: 4,
          gap: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            gap: 8,
          }}>
          <Icon name="ticket" size={28} color={Colors.light} />
          <Text
            style={{
              color: Colors.light,
              fontSize: 24,
              fontFamily: 'Roboto-Bold',
            }}>
            Upcoming Events
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    padding: 16,
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  map: {
    width: '100%',
    height: 400,
  },
});
