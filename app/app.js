import React, { Component } from 'react';
import { Text } from 'react-native';
import Header from './components/header';

class app extends Component {

    render() {
        return (
            <Header headerText={'PhilanTrophy'} />
        )
    }

}
export default app;
// AppRegistry.registerComponent('app', () => app);
