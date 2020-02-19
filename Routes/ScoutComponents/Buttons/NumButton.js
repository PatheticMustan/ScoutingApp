import React from 'react';
import {
	StyleSheet,
	Text,
    View
} from 'react-native';

import Incrementer from '../Utility/Incrementer.js';

export default class BoolButton extends React.Component {
	render() {
        const p = this.props;
        const styles = StyleSheet.create({
            container: {
                backgroundColor: '#FFF',
            },
            button: {
                textAlign: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: '#000000',
                width: (p.width? p.width : 100),
                height: (p.height? p.height : 40)
            }
        });
        
        
		return (
			<View style={styles.container}>
                    <View style = {{
                        textAlign: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: '#000000',
                        width: (p.width? p.width : 100),
                        height: (p.height? p.height : 40)
                        }}>
                    <Text>{this.props.children}</Text>
                    </View>
                    <Incrementer/>
			</View>
		);
	}
}