import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Menu, Provider, Divider } from 'react-native-paper';
import fontHelperStyles from './fontHelper';
import AppColors from './appbg';

const HeaderMenu = () => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return(
        <View style={[styles.container, AppColors.appBg]}>
            <View style={styles.menuView}>
                <View>
                    <Provider>
                        <Menu visible={visible} onDismiss={closeMenu} anchor={<TouchableOpacity onPress={openMenu}>
                            <Icon name="three-bars" size={30} color="#900" />
                        </TouchableOpacity>} contentStyle={styles.menuItems}>
                        <Menu.Item onPress={() => {}} title=" "/>
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Item 1"/>
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Item 2"/>
                        <Divider />
                        <View>
                            <MatIcons name='logout' size={20} color="#900"/>
                            <Menu.Item onPress={() => {}} title="Logout" />
                        </View>
                        </Menu>
                    </Provider>
                </View>
                <Text>Rogi mitra</Text>
                <TouchableOpacity>
                    <Ionicons name="ios-notifications" size={30} color="#900" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MatIcons name="face-man-profile" size={30} color="#900" />
                </TouchableOpacity>
            </View>
            <View style={styles.line}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    line:{
        borderWidth:1,
        backgroundColor:'#F57C00',
        borderColor:'#F57C00'
    },
    menuView:{
        flexDirection:'row',
        padding:'5%',
        justifyContent:'space-between'
    },
    menuItems:{
        backgroundColor:'#F57C00',
        width:'100%',
        color:'#101010'
    }
})

export default HeaderMenu;