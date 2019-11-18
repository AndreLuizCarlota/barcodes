import styles from './styles';
import { Buttom } from '../../component';
import React, { Component } from 'react';
import { Text, View, FlatList } from "react-native";


export default class Modal extends Component {
      constructor(props) {
            super(props);
            this.state = { data: this.props.navigation.state.params.data }
      }
      render() {
            return (
                  <View style={{ flex: 1, margin: 0, padding: 0, justifyContent: 'center', alignItems: 'center', transparency: '100%' }}>
                        <View style={{ height: "80%", backgroundColor: '#fff', borderRadius: 4, width: '80%', justifyContent: "center" }}>
                              <FlatList
                                    style={styles.list}
                                    data={this.state.data}
                                    ref={list => this.list = list}
                                    keyExtractor={({ item, index }) => `Key${index}`}
                                    renderItem={({ item }) =>
                                          <View style={styles.line}>
                                                <Text style={{ flex: 1 }}>Codigo: {item.barcodes}</Text>
                                                <Text style={{ flex: 1 }}>Tipo: {item.info.type}</Text>
                                          </View>
                                    }
                              />
                              <Buttom text={'VOLTAR'} style={{ backgroundColor: '#000', height: 50, borderRadius: 0 }} onPress={() => this.props.navigation.goBack()} />
                        </View>
                  </View>
            )
      }
}
