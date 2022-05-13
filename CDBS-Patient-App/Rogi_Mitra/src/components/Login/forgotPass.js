import React, {useState}from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import fontHelperStyles from '../../utils/fontHelper';
import AppColors from '../../utils/appbg';

const ForgotPass = () => {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [shouldShowOTP, setShowOTP] = useState(false);
    const [shouldShowPass, setShowPass] = useState(true);
    const [shouldshowPassReset, setShowPassReset] = useState(false);

    const resetPw = () => {
        setShowPass(false);
        setShowOTP(true);
    }

    const validateOTP = () => {
        setShowOTP(false);
        setShowPassReset(true);
    }

    const resetPassword = () => {

    }

    return(
        <View style={[AppColors.appBg, styles.container]}>
            <View style={styles.header}>
                <Text style={fontHelperStyles.h1}>Forgot Password ?</Text>
            </View>
            <View style={styles.body}>
                {shouldShowPass ? (
                    <View style={styles.viewStyles}>
                        <View style={styles.textInputStyles}>
                            <TextInput mode='flat' placeholder='Email Address' label="Email" style={fontHelperStyles.inputText}/>
                        </View>
                        <View style={styles.textInputStyles}>
                            <TextInput mode='flat' placeholder='Aahaar Number' label="Aadhaar number" style={fontHelperStyles.inputText}/>
                        </View>
                        <View style={styles.textInputStyles}>
                            <Button icon='reset' mode='contained' dark={true} style={[styles.button]} onPress={() => resetPw()}> Reset Password </Button>
                        </View>
                    </View>
                ):null}
            </View>
            <View style={styles.body}>
                {shouldShowOTP ? (
                    <View style={styles.viewStyles}>
                        <View style={styles.textInputStyles}>
                            <TextInput mode='flat' placeholder='OTP' label="OTP" />
                        </View>
                        <View style={styles.textInputStyles}>
                            <Button icon="" mode='contained' dark={true} style={[styles.button]} onPress={() => validateOTP()}>Generate New Passwrod</Button>
                        </View>
                    </View>
                ):null}
            </View>
            <View style={styles.body}>
                {shouldshowPassReset ? (
                    <View style={styles.viewStyles}>
                        <View style={styles.textInputStyles}>
                            <TextInput mode='flat' placeholder='New Password' label='Enter New Password'/>
                        </View>
                        <View style={styles.textInputStyles}>
                            <TextInput mode='flat' placeholder='Confirm Password' label='Confirm Password'/>
                        </View>
                        <View style={styles.textInputStyles}>
                            <Button icon='' mode='contained' dark={true} onPress={() => resetPassword()}>Reset Password</Button>
                        </View>
                    </View>
                ):null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    header:{
        flex:0.1,
        justifyContent:'center'
    },
    body:{
        margin:'5%',
        flex:0.3
    },
    textInputStyles:{
        margin:'2%'
    },
    viewStyles:{
        flex:1
    }
})

export default ForgotPass