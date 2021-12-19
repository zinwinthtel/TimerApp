import  React , { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Timer  extends Component {
    constructor(props){
        super(props);
        this.state = {
            min: 0,
            sec: 0,
            msec: 0
        }

        this.interval = null;
    }
    timerToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.timerStart()
        );
    };

    timerStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 99) {
                    this.setState({
                        msec: this.state.msec + 1
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                } else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    timerReset = () => {
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false
        });

        clearInterval(this.interval);
    };
    render(){
        return(
            
            <View>
                <View style={styles.digitContainer}>
                    <Text style={styles.digitText}>{timerDigit(this.state.min)}</Text>
                    <Text style={styles.digitText}>:</Text>
                    <Text style={styles.digitText}>{timerDigit(this.state.sec)}</Text>
                </View>
                     <View style={styles.buttonBackground}>
                    <TouchableOpacity style={styles.button} onPress={this.timerReset}><Text  style={styles.buttonText}>Reset</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.timerToggle}><Text style={styles.buttonText}>{!this.state.start? 'Start': 'Stop'}</Text></TouchableOpacity>
                </View>

            </View>
         );
     }    
}

let timerDigit = (number) => (number <= 9 ? `0${number}`: number);
const styles = StyleSheet.create({
    digitContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: "45%",
        marginLeft: "5%"
    },

    digitText: {
      fontSize: 100,
      color: "#C89933",
    },

    buttonBackground: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "12%",
    },

    button: {
        backgroundColor: "#694966",
        paddingTop: "4%",
        paddingBottom: "3%",
        paddingLeft: "6%",
        paddingRight: "7%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#694966",
        height: 60,
        marginLeft:"5%"
    },

    buttonText: {
        color: "#C89933",
        fontSize: 25,
        alignSelf: "center"
    }

});

export default Timer;