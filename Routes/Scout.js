import React from "react";
import {
    View,
    ScrollView,
    Button
} from "react-native";

import Header from "./ScoutComponents/Header.js";
import MatchInfoContainer from "./ScoutComponents/MatchInfoContainer.js";
import Autonomous from "./ScoutComponents/Autonomous.js";
import TeleOp from "./ScoutComponents/TeleOp.js";
import Endgame from "./ScoutComponents/EndGame.js";
import Other from "./ScoutComponents/Other.js";

import Data from "./ScoutComponents/Data.js";

/** Test Components */

export default class Scout extends React.Component {
    constructor(props) {
        super(props);

        global.currentMatchIndex = -1;
    }
    
    render() {
        return (
            <ScrollView>
                <Button onPress={() => {
                    alert(global.currentMatchIndex);
                }} title="CurrentMatchID" />

                <View>
                    <Data data={this.props.data}/>

                    <Header onReset={() => this.setState({condition: false})}/>
                    
                    <MatchInfoContainer/>
                    <Autonomous/>
                    <TeleOp/>
                    <Endgame/>
                    <Other/>
                </View>
            </ScrollView>
            );
    }
}