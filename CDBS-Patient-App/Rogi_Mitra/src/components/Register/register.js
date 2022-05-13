import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import { TextInput, RadioButton, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import fontHelperStyles from '../../utils/fontHelper';
import AppColors from '../../utils/appbg';

const Register = () => {
    const [value, setValue] = React.useState('Male');
    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return(
        <ScrollView style={[styles.container, AppColors.appBg]}>
            <SafeAreaView>
                <View>
                    <Text style={fontHelperStyles.h1}>Register</Text>
                </View>
                <View style={styles.registerView}>
                    <View style={styles.inputBoxes}>
                        <TextInput label="First Name" mode='flat' />
                    </View>
                    <View style={styles.inputBoxes}>
                        <TextInput label="Last Name" mode='flat'/>
                    </View>
                    <View>
                        <Text>Gender</Text>
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                            <View style={styles.radioBtn}>
                                <RadioButton.Item label="Male" value="Male" labelStyle={styles.radioLabel} uncheckedColor={styles.uncheckedColor} />
                                <RadioButton.Item label="Female" value="Female" labelStyle={styles.radioLabel} uncheckedColor={styles.uncheckedColor} />
                            </View>
                        </RadioButton.Group>
                    </View>
                    <View style={styles.inputBoxes}>
                        <TextInput label="Age" mode='flat'/>
                    </View>
                    <View style={[styles.DOB, styles.inputBoxes]}>
                        <TouchableOpacity onPress={showDatepicker}>
                            <Text>Select your DOB</Text>
                        </TouchableOpacity>
                        <Text style={styles.DOBTextBox}>{date.toLocaleString()}</Text>
                            {show && (
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                // is24Hour={true}
                                onChange={onChange}
                                />
                            )}
                    </View>
                    <View style={styles.inputBoxes}>
                        <TextInput label="Phone Number" mode='flat'/>
                    </View>
                    <View style={styles.inputBoxes}>
                        <TextInput label="Address" mode='flat' multiline={true} />
                    </View>
                </View>
                <View>
                    <Button icon='login' mode='contained' dark={true} style={[styles.button,styles.textInputStyles]} onPress={() => props.navigation.navigate('Home')}> Register </Button>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    registerView:{
        padding:'10%'
    },
    radioLabel:{
        color:'#EEFFFF'
    },
    uncheckedColor:{
        color:"#00FF00"
    },
    DOB:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:'2%',
        paddingBottom:'2%'
    },
    radioBtn:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    DOBTextBox:{
        borderWidth:2
    },
    inputBoxes:{
        paddingBottom:'4%'
    },
    textInputStyles:{
        width:'80%',
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center'
    },
})

export default Register;