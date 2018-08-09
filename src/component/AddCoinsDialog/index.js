
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
import dollerIcon from '../../images/doller.png'
import plusIcon from '../../images/plus_icon.png'
import minusIcon from '../../images/minus_icon.png'
import searchIcon from '../../images/search_icon.png'
const { width, height } = Dimensions.get('window');

const AddCoinDialog = props => {
    const renderItem = (item, index) => (
        <TouchableOpacity key = {index} style={{ height: 55, paddingLeft:40, paddingRight: 40 }}    onPress={() => props.onListItemClick(index)}>
            {item.selected ?
                <View style={{justifyContent:'space-between',
                    flexDirection:'row',
                    height: 50,
                    borderRadius:4,
                    borderWidth:1,
                    borderColor:'rgba(42,181,182,1)',
                    alignItems:'center', paddingRight:10, paddingLeft:10, backgroundColor: 'rgba(108,227,189,1)'}}>
                    <Text style={{width:'30%', color:'white'}}>{item.name}</Text>
                    <Text style={{ textAlign:'center', width:'40%', color:'white'}}>{item.type}</Text>
                    <Image style={{height:30, width:30}} source={minusIcon}></Image>

                </View> :  <View style={{justifyContent:'space-between',
                    flexDirection:'row',
                    height: 50,
                    borderRadius:4,
                    borderWidth:1,
                    borderColor:'rgba(190,190,195,1)',
                    alignItems:'center', paddingRight:10, paddingLeft:10}}>
                    <Text style={{width:'30%'}}>{item.name}</Text>
                    <Text style={{ textAlign:'center', width:'40%'}}>{item.type}</Text>
                    <Image style={{height:30, width:30}} source={plusIcon}></Image>

                </View>

            }

            </TouchableOpacity>
    );


    return (
    <View
        style={styles.mainContainer}
        onPress={props.onPress}
    >

        <View style={{height: '70%', width:'80%', backgroundColor:'rgba(240,240,240,1)', borderRadius:10, paddingTop:10}}>
                <View style={{flex:0.8, alignItems:'center'}}>
                    <View style={styles.outerCircleStyle}>
                        <View style={styles.innerCircleStyle}>
                                <Image style={styles.dollerImageStyle} source={dollerIcon}></Image>
                        </View>
                    </View>

                    <Text style={{fontSize:24, fontWeight:'500', color:'black', marginTop:5}}>Add Coins</Text>
                    <Text style={{fontSize:14, color:'rgba(143,143,143,1)', marginTop:5}}>Add a coin to your collection.</Text>

                    <View style={{height: 40,
                        backgroundColor:'white',
                        width: '75%',
                        marginTop:10,
                        flexDirection:'row',
                        alignItems:'center',
                        borderRadius: 20
                    }}>

                        <Image style={{height:25, width:25, marginLeft:16}} source={searchIcon}></Image>
                        <TextInput style={{height: 40, width, marginLeft:16}}
                                   placeholder={'Search'}
                                   onChangeText={props.onChangeText}>
                        </TextInput>
                    </View>


                </View>
            <View style={{flex:1,marginTop:30}}>


                <FlatList
                    data={props.coinList}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    extraData={props}
                />

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

                <TouchableOpacity style={{flex: 1, alignItems:'center', justifyContent:'center'}} onPress={props.closeDialog}>
                    <Text style={{fontSize:16, color:'black',fontWeight: '600'}}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
}
AddCoinDialog.propTypes = {
    closeDialog: PropTypes.func,
    coinList : PropTypes.array,
    onListItemClick: PropTypes.func,
    onChangeText : PropTypes.func
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
        height:35,
        width:35
    }
});

export default AddCoinDialog;