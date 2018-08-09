import React, {Component} from 'react';
import {Platform, TouchableHighlight,StyleSheet, Text, View, Button} from 'react-native';
import Data from './data'
import AddCoinDialog from '../../component/AddCoinsDialog'
import NewWalletDialog from '../../component/NewWalletDialog'

type Props = {};
/**
 * Main App Page
 */
export default class App extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            showAddCoinDialog: false,
            showNewWalletDialog: false,
            coinList: [].concat(Data),
            data: [].concat(Data)
        }
        this.showAddCoinDialog = this.showAddCoinDialog.bind(this);
        this.closeAddCoinDialog = this.closeAddCoinDialog.bind(this);
        this.showAddNewWalletDialog = this.showAddNewWalletDialog.bind(this);
        this.onListItemClick = this.onListItemClick.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.closeNewWalletDialog = this.closeNewWalletDialog.bind(this);
        this.goToDashboard = this.goToDashboard.bind(this)
    }

    /**
     * Navigation options
     * @type {{headerMode: string}}
     */
    static navigationOptions = {
        headerMode : 'none',
        header : null
    };
    /**
     * Show Add Coin Dialog
     */
    showAddCoinDialog() {
        const showAddCoinDialog = !this.state.showAddCoinDialog
        this.setState({
            showAddCoinDialog,
            showNewWalletDialog: false
        })
    }
    /**
     * Close Add Coin Dialog
     */
    closeAddCoinDialog() {
        const {navigation} = this.props;
        const showAddCoinDialog = !this.state.showAddCoinDialog
        this.setState({
            showAddCoinDialog
        },()=>{
            navigation.navigate("Dashboard")
        })

    }
    /**
     * Close Add New Dialog
     */
    closeNewWalletDialog() {
        const showNewWalletDialog = !this.state.showNewWalletDialog
        this.setState({
            showNewWalletDialog
        })
    }

    /**
     * Show Add New Dialog
     */
    showAddNewWalletDialog() {
        const showNewWalletDialog = !this.state.showNewWalletDialog
        this.setState({
            showNewWalletDialog,
        })
    }

    /**
     * On Item click of Wallet
     * @param index
     */
    onListItemClick(index) {
        const tempList = this.state.coinList;
        tempList[index].selected = !tempList[index].selected
        this.setState({
            data: this.state.coinList
        })
    }

    /**
     * On Change of Search Text
     * @param text
     */
    onChangeText(text) {
        if (text.trim().length > 0) {
            const found = this.state.coinList.filter(item =>
            item.name.toLocaleLowerCase().startsWith(text.toLocaleLowerCase()) ||
            item.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) !== -1);
            this.setState({
                data: found
            })
        } else {
            this.setState({
                data: this.state.coinList
            })
        }
    }

    /**
     * Go To Dashboard
     */
    goToDashboard(){
        const {navigation} = this.props;
        navigation.navigate("Dashboard");
    }
    /**
     * Render View
     * @returns {XML}
     */
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style = {styles.button}  onPress={this.showAddNewWalletDialog}>
                    <Text style = {styles.buttonText}>Add new wallet</Text>
                </TouchableHighlight>
                <TouchableHighlight style = {styles.button} onPress={this.goToDashboard}>
                    <Text style = {styles.buttonText}>Dashboard</Text>
                </TouchableHighlight>
                {this.state.showAddCoinDialog ? <AddCoinDialog
                    closeDialog={this.closeAddCoinDialog}
                    coinList={this.state.data}
                    onListItemClick={this.onListItemClick} onChangeText={this.onChangeText}/> : <View />}
                {this.state.showNewWalletDialog ? <NewWalletDialog
                    onDoneButtonClick={this.showAddCoinDialog}
                    closeDialog={this.closeNewWalletDialog}/> : <View />}

            </View>
        );
    }
}
/**
 * Styles
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button : {
        borderWidth:1,
        marginTop : 15,
        borderColor:"#788877",
        paddingTop : 10,
        paddingBottom : 10,
        paddingRight : 40,
        paddingLeft : 40,
        borderRadius: 10
    },
    buttonText : {
        fontSize : 20,
        color : "#788877"
    }
});
