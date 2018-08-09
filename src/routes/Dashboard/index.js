import React from 'react';
import {View, Image, TouchableHighlight, Text, StyleSheet, Dimensions, Button} from 'react-native';
import {LineChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
/**
 * Get a Random Amount
 * @returns {number}
 */
function getRandomAmount() {
    var precision = 100; // 2 decimals
    var randomnum = Math.floor(Math.random() * (100) * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);
    return randomnum;
}
/**
 * Get a Random Percentage
 * @returns {string}
 */
function getRandomPercentage() {
    var precision = 100; // 2 decimals
    var randomnum = Math.floor(Math.random() * (10) * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);
    return randomnum + "%";
}
/**
 * Dashboard Component
 */
export default class Dashboard extends React.Component {
    /**
     * Header Props for React Navigation
     * @type {{headerStyle: {backgroundColor: string, borderBottomWidth: number, height: number, marginBottom: number, paddingBottom: number}, headerTitle: (()), headerLeft: XML, headerRight: XML}}
     */
    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#f8f8f8",
            borderBottomWidth: 0,
            height: 100,
            marginBottom: 0,
            paddingBottom: 0
        },
        headerTitle: () => {
            return (
                <View style={{
                    textAlign: "center"
                }}>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 5
                    }}>
                        <Text style={{
                            fontSize: 25,
                            color: "#2d2d2d"
                        }}>My Wallet</Text>
                        <Text style={{
                            fontSize: 12,
                            color: "#8f8f8f",
                            marginLeft: 12,
                            marginTop: 12
                        }}>${getRandomAmount()}</Text>
                    </View>
                    <View style={{
                        marginTop: 20,
                        marginLeft: 40
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                color: "#373737",
                                fontWeight: "500"
                            }}>${getRandomAmount()}</Text>
                            <Text style={{
                                fontSize: 12,
                                color: "#8f8f8f"
                            }}>{getRandomAmount() + " coin"}</Text>
                        </View>
                    </View>
                </View>
            )
        },
        headerLeft: ({onPress}) => {

            return (
                <View style={{
                    marginLeft: 20,
                    marginTop: -10
                }}>
                    <View>
                        <TouchableHighlight onPress={onPress}>
                            <Icon name="list" size={20} style={{
                                color: "#767676"
                            }}/>
                        </TouchableHighlight>
                    </View>
                    <View style={{
                        marginTop: 20
                    }}>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: "300"
                        }}>ETH</Text>
                    </View>
                </View>
            )
        },
        headerRight: (
            <View style={{
                borderColor: "#e18b88",
                borderWidth: 2,
                borderRadius: 20,
                padding: 6,
                marginRight: 10
            }}>
                <Text style={{
                    color: "#e18b88",
                    fontWeight: "700"
                }}>{"-" + getRandomPercentage()}</Text>
            </View>
        )
    };
    state = {
        index: 0,
        routes: [
            {key: '1D', title: '1D'},
            {key: '1W', title: '1W'},
            {key: '1M', title: '1M'},
            {key: '1Y', title: '1Y'},
            {key: 'ALL', title: 'ALL'}
        ],
    };

    /**
     * Get Tab View for the Dashboard
     * @param text
     * @returns {{}}
     */
    getTabView(text) {
        let obj = {};
        this.state.routes.map((item) => {
            obj[item.key] = () => {
                return (
                    <View style={[styles.container, {
                        flexDirection: "row",
                        alignItems: "center"
                    }]}>
                        <View style={{
                            marginLeft: 50,
                            alignItems: "center",
                        }}>
                            <View style={{
                                borderRightWidth: 1,
                                borderRightColor: "#adaeb0",
                                paddingRight: 40
                            }}>
                                <Text style={styles.footerPercentage}>{"+" + getRandomPercentage()}</Text>
                                <Text style={styles.footerText}>ETHEREUM</Text>
                            </View>
                            <TouchableHighlight style={{
                                ...styles.button,
                                marginRight : 40
                            }} onPress={() => {
                                alert("Amount Bought")
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    color: "#788877"
                                }}>BUY</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{
                            marginLeft: 10,
                            alignItems: "center"
                        }}>
                            <Text style={styles.footerPercentage}>{"+" + getRandomPercentage()}</Text>
                            <Text style={styles.footerText}>MARKET</Text>
                            <TouchableHighlight style={{
                                ...styles.button
                            }} onPress={() => {
                                alert("Amount Bought")
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    color: "#788877"
                                }}>SELL</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                )
            }
        });
        return obj
    }

    /**
     * Get Random Data for Charts
     * @returns {Array}
     */
    getRandomData() {
        let data = [];
        for (var i = 0; i < 30; i++) {
            data.push(getRandomAmount())
        }
        return data
    }

    /**
     * Render View
     * @returns {XML}
     */
    render() {
        const data = this.getRandomData()
        return (
            <View style={styles.container}>
                <Text style={styles.mainAmountStyle}>${getRandomAmount()}</Text>
                <View >
                    <LineChart
                        style={{
                            ...styles.lineChartStyle,
                            top: 50
                        }}
                        data={data}
                        svg={{strokeWidth: 2, stroke: 'rgb(111, 164, 118)'}}
                    />
                    <LineChart
                        style={{
                            ...styles.lineChartStyle,
                            top: -60
                        }}
                        data={data}
                        svg={{strokeWidth: 2, stroke: 'rgb(214, 246, 246)'}}
                    />
                </View>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap(this.getTabView())}
                    renderTabBar={props =>
                        <TabBar
                            {...props}
                            style={styles.tabBarStyle}
                            labelStyle={styles.tabBarLabelStyle}
                            indicatorStyle={styles.tabBarIndicatorStyle}
                        />
                    }
                    onIndexChange={index => this.setState({index})}
                    initialLayout={{width: Dimensions.get('window').width, height: 50}}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        height: 100
    },
    tabBarStyle: {
        backgroundColor: '#FFFFFF'
    },
    tabBarLabelStyle: {
        color: "rgb(111, 164, 118)"
    },
    tabBarIndicatorStyle: {
        backgroundColor: "rgb(111, 164, 118)"
    },
    lineChartStyle : {
        height: 150, position: 'relative'
    },
    mainAmountStyle : {
        fontSize: 30,
        marginTop: 10,
        textAlign: "center",
        fontWeight: "300"
    },
    button :{
        borderWidth: 1,
        marginTop: 15,
        borderColor: "#788877",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 40,
        paddingLeft: 40,
        borderRadius: 10
    },
    footerPercentage : {
        fontSize: 20,
        marginTop: 10,
        color: "#8dce75",
        fontWeight: "500"
    },
    footerText : {
        fontSize: 12,
        marginTop: 6,
        color: "#788877"
    }
});

