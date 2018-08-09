import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Dimensions,
    Image,
    FlatList,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import wallet from '../../images/wallet.png'
import pencil from '../../images/pencil.png'

const { width, height } = Dimensions.get('window');

const NewWalletDialog = props => {
    return (
        <View
            style={styles.mainContainer}
            onPress={props.onPress}
        >

            <View style={{height: '60%', width:'70%', backgroundColor:'rgba(240,240,240,1)', borderRadius:10, paddingTop:30}}>
                <View style={{flex:0.8, alignItems:'center'}}>
                            <Image style={styles.dollerImageStyle} source={wallet}></Image>
                    <Text style={{fontSize:24, fontWeight:'500', color:'black', marginTop:5}}>Create new wallet</Text>
                    <Text style={{fontSize:14, color:'rgba(143,143,143,1)', marginTop:10,
                        width: '50%', textAlign:'center' }}>Make a new customer wallet to track coins of your choice</Text>

                </View>


                <View style={{flex:1, alignItems:'center'}}>



                    <View style={{height: 31.5, width: '75%', marginTop:40}}>

                        <View style={{height: 30, flexDirection:'row'}}>
                            <Image style={{height: 24, width:20, marginLeft: 2}} source={pencil}></Image>
                            <TextInput style={{height: 28, fontSize:18, color:'rgba(42,181,182,1)', paddingLeft:10,width: '80%'}} placeholder={'Wallet Name'}/>
                        </View>

                        <View style={{height: 1.5,backgroundColor:'rgba(42,181,182,1)'}}>

                        </View>

                    </View>

                </View>




                <View style={{height:1, backgroundColor:'rgba(143,143,143,1)'}} />
                <View style={{height: 50,
                    backgroundColor:'white',
                    borderBottomLeftRadius:10,
                    borderBottomRightRadius:10,
                    flexDirection:'row'}}>
                    <TouchableOpacity style={{flex: 1, alignItems:'center', justifyContent:'center'}} onPress={props.closeDialog}>
                        <Text style={{fontSize:16, color:'black'}}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex: 1, alignItems:'center', justifyContent:'center'}} onPress={props.onDoneButtonClick}>
                        <Text style={{fontSize:16, color:'black',fontWeight: '600'}}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
NewWalletDialog.propTypes = {
    closeDialog: PropTypes.func,
    coinList : PropTypes.array,
    onDoneButtonClick: PropTypes.func,
};


const styles = StyleSheet.create({
    mainContainer: {
        height,
        width,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute'
    },
    outerCircleStyle:{
        height: 80,
        width:80,
        borderRadius:40,
        borderColor:'black',
        borderWidth:3,
        alignItems:'center',
        justifyContent:'center'
    },
    innerCircleStyle:{
        height: 60,
        width:60,
        borderRadius:30,
        borderColor:'black',
        borderWidth:3,
        alignItems:'center',
        justifyContent:'center'
    },
    dollerImageStyle:{
        height:65,
        width:65
    }
});

export default NewWalletDialog;


