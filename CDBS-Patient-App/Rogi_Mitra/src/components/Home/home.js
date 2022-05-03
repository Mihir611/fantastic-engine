import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';
import AppColors from '../../utils/appbg';
import fontHelperStyles from '../../utils/fontHelper';
import HeaderMenu from '../../utils/menu';

const Home = () => {
    return(
        <View style={[AppColors.appBg, styles.container]}>
            <View style={styles.menuContainer}>
                <HeaderMenu />
            </View>
            <View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    menuContainer:{
        flex:0.1
    }
})

export default Home;