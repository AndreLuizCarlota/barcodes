import styles from './styles';
import { Sound } from '../../services';
import { Buttom } from '../../component';
import React, { Component } from 'react';
import { RNCamera } from "react-native-camera";
import BarcodeMask from 'react-native-barcode-mask';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, View, Vibration, StatusBar } from "react-native";

const type = [
      RNCamera.Constants.BarCodeType.qr,
      RNCamera.Constants.BarCodeType.ean8,
      RNCamera.Constants.BarCodeType.aztec,
      RNCamera.Constants.BarCodeType.itf14,
      RNCamera.Constants.BarCodeType.upc_e,
      RNCamera.Constants.BarCodeType.ean13,
      RNCamera.Constants.BarCodeType.code39,
      RNCamera.Constants.BarCodeType.pdf417,
      RNCamera.Constants.BarCodeType.code93,
      RNCamera.Constants.BarCodeType.code128,
      RNCamera.Constants.BarCodeType.datamatrix,
      RNCamera.Constants.BarCodeType.code39mod43,
      RNCamera.Constants.BarCodeType.interleaved2of5
]

export default class Barcodes extends Component {
      constructor(props) {
            super(props);
            this.state = { data: [] };
      }

      onBarCodeRead(e) {
            try {
                  Sound.beep();
                  Vibration.vibrate(2000);

                  let data = this.state.data;
                  data.push({ barcodes: e.data, info: e });

                  this.setState(data);
            }
            catch (error) { console.warn(error.message); }
      };

      cameraState(state) {
            if (state)
                  this.camera.resumePreview();
            else
                  this.camera.pausePreview();
      }

      render() {
            return (
                  <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                        <StatusBar backgroundColor="rgba(0,0,0, .9)" barStyle="light-content" animated={true} />

                        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', height: 50, transparency: 0.8, backgroundColor: '#000' }}>
                              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Modal', { data: this.state.data })}>
                                    <MaterialIcons name="history" color={'#eee'} size={35} />
                              </TouchableOpacity>
                        </View>

                        <RNCamera
                              onBarCodeRead={this.onBarCodeRead.bind(this)}
                              flashMode={RNCamera.Constants.FlashMode.off}
                              type={RNCamera.Constants.Type.back}
                              ref={cam => (this.camera = cam)}
                              barCodeTypes={this.type}
                              style={styles.camera}
                              focusDepth={.99}>
                              <BarcodeMask
                                    flex={1}
                                    width={300}
                                    height={150}
                                    edgeColor={'red'}
                                    transparency={0.8}
                                    showAnimatedLine={true}
                              />
                        </RNCamera>
                        <View style={{ flexDirection: 'row', height: 50, transparency: 0.8, backgroundColor: '#000' }}>
                              <Buttom text={'CAPTURAR'} style={{ backgroundColor: 'transparent', marginHorizontal: 10, flex: 1 }} onPress={() => this.cameraState.bind(this)(true)} />
                              <Buttom text={'PAUSAR'} style={{ backgroundColor: 'transparent', marginHorizontal: 10, flex: 1 }} onPress={() => this.cameraState.bind(this)(false)} />
                        </View>
                  </View>
            );
      }
}
