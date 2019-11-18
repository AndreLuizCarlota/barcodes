import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default class Buttom extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <TouchableOpacity style={[styles.button, this.props.style]} onPress={this.props.onPress}>
                        <Text style={{ color: !!this.props.textColor ? this.props.textColor : '#fff' }}>{this.props.text}</Text>
                  </TouchableOpacity>
            );
      }
}

const styles = StyleSheet.create({
      button: {
            justifyContent: 'center',
            paddingHorizontal: 20,
            alignItems: 'center',
            paddingVertical: 15,
            borderRadius: 4,
      }
});
