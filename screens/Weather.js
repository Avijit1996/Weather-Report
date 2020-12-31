import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Styles} from '../styles/global';
import {connect} from 'react-redux';

const Weather = ({weather}) => {
  return (
    <View style={Styles.container}>
      {/* <Text>{JSON.stringify(weather)}</Text> */}
      <View style={Styles.listDisplay}>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>temperature: </Text>
            <Text>{weather.temperature}</Text>
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Weather Icons: </Text>
            {weather.weather_icons.map((icon) => (
              <Image
                key={icon}
                style={{width: 20, height: 20}}
                source={{uri: icon}}
              />
            ))}
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Wind Speed: </Text>
            <Text>{weather.wind_speed}</Text>
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Precip: </Text>
            <Text>{weather.precip}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  weather: state.reducer.weather.data.current,
});

export default connect(mapStateToProps)(Weather);
