import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import fontHelperStyles from '../../utils/fontHelper';
import AppColors from '../../utils/appbg';

const LoginComponent = (props) => {
    return(
        <SafeAreaView style={[AppColors.appBg,styles.component]}>
            <View style={styles.container}>
                <Text style={fontHelperStyles.h1}>Login</Text>
                <View style={styles.lineStyles}>
                    <View style={[styles.line1,styles.lineWidth1,styles.line]}/>
                    <View style={[styles.line2,styles.lineWidth2]} />
                    <View style={[styles.line2,styles.lineWidth2]} />
                </View>
            </View>
            <View style={styles.textInputViewStyles}>
                <View style={styles.textBox}>
                    <TextInput label="Name"mode="outlined" style={styles.textInputStyles} placeholder="Enter the Name"/>
                </View>
                <View style={styles.textBox}>
                    <TextInput label="Password" mode="outlined"  secureTextEntry right={<TextInput.Icon name="eye" />} style={styles.textInputStyles} placeholder="Enter the password"/>
                </View>
                <View style={styles.buttonComponent}>
                    <Button icon='login' mode='contained' dark={true} style={[styles.button,styles.textInputStyles]} onPress={() => props.navigation.navigate('Home')}> Login </Button>
                </View>
                <View style={styles.register}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                        <Text style={fontHelperStyles.link}>New User ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.password}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPass')}>
                        <Text style={fontHelperStyles.link}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    component:{
        flex:1
    },
    container:{
        paddingTop:'50%'
    },
    line:{
        marginLeft:'55%',
    },
    line1:{
        borderWidth:2,
        backgroundColor:'#800020',
        borderColor:'#800020'
    },
    line2:{
        marginLeft:'3%',
        borderWidth:2,
        backgroundColor:'#800020',
        borderColor:'#800020'
    },
    textInputStyles:{
        width:'70%',
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center'
    },
    textInputViewStyles:{
        paddingTop:'20%'
    },
    textBox:{
        padding:'2%'
    },
    buttonComponent:{
        padding:'2%'
    },
    button:{
        width:'50%'
    },
    lineStyles:{
        flexDirection:'row'
    },
    lineWidth1:{
        width:'20%',
    },
    lineWidth2:{
        width:'3%'
    },
    register:{
        marginLeft:'60%'
    },
    password:{
        marginLeft:'50%'
    }
})

export default LoginComponent;