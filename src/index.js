import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Barcodes, Modal } from './screens';

const root = createStackNavigator({
      Barcodes: { screen: Barcodes, navigationOptions: { header: null } },
});

const app = createStackNavigator({
      Main: { screen: root },
      Modal: { screen: Modal },
}, { mode: 'modal', headerMode: 'none', transparentCard: true, cardStyle: { backgroundColor: "transparent", opacity: 0.99 } });

// const AppContainer = createAppContainer(app);

// export default class App extends Component {
//       render() {
//             return <AppContainer />;
//       }
// }

export default createAppContainer(app);