import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Card, Paragraph, Title } from 'react-native-paper';
import { Dimensions } from "react-native";
import AppColors from '../../utils/appbg';
import fontHelperStyles from '../../utils/fontHelper';
import HeaderMenu from '../../utils/menu';

const screenWidth = Dimensions.get("window").width;

const Home = () => {
    return(
        <View style={[AppColors.appBg, styles.container]}>
            <View style={styles.menuContainer}>
                <HeaderMenu />
            </View>
            <View style={styles.barchart}>
                
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
    },
    barchart:{
        flex:0.9,
        paddingTop:'5%'
    }
})

export default Home;