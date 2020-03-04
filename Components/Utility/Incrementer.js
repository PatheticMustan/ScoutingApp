import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

import {FontAwesome} from 'react-native-vector-icons';

export default class Incrementer extends React.Component {
    constructor(props) {
        super(props);
        /** Set default */
        this.state = {
            val: props.default || 0
        }
        global.data[props.id] = this.state.val;


        this.increment = () => {
            this.setState(
                {val: props.max? Math.min(props.max, this.state.val + 1) : (this.state.val + 1)},
                () => global.data[props.id] = this.state.val
            )
        }
        this.decrement = () => {
            this.setState(
                {val: Math.max(0, this.state.val - 1)},
                () => global.data[props.id] = this.state.val
            )
        }
    }

    

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.decrement}>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="minus" size={30} color="#29ADFF"/>
                    </View>
                </TouchableOpacity>
                
                <Text style = {{fontSize: 30}}>{this.state.val}{this.props.max? `/${this.props.max}` : ""}</Text>

                <TouchableOpacity onPress={this.increment}>
                    <View style = {styles.iconContainer}>
                        <FontAwesome name="plus" size={30} color="#29ADFF"/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        flexDirection: "row"
    },
    iconContainer: {
        padding: 5
    }
});
