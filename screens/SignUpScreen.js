  
import React, { Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image, Dimensions, ScrollView, } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Loader from '../components/Loader';
import bgImage from '../assets/images/background2.png';
import logo from '../assets/images/sunbank.png';

const { width: WIDTH } = Dimensions.get('window'); 
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: '',
            showPass: true,
            press: false,
            isVisible: false,
            chosenDate: ''
        }
    }

    static navigationOptions = {
        header: null
      };

      static get options() {
        return {
          topBar: {
            visible: false,
            animate: false
          }
        };
      }

    handleFirstNameInput = (name) => {
        this.setState({ name });
    }

    handleLastNameInput = (lastName) => {
        this.setState({ lastName });
    }

    handlePhoneInput = (phone) => {
        this.setState({ phone });
    }

    handlePasswordInput = (password) => {
        this.setState({ password });
    }

    handleDatePicker = (date) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(date).format('MMMM, Do YYYY')
        })
    };

    hideDateTimePicker = () => {
        this.setState({
            isVisible: true
        })
    };

    showPicker = () => {
        this.setState({
             isVisible: true
        })
    };

    componentDidMount(){
        setTimeout(() => {
            this.setState({
              loading: false
            });
          }, 3000);
    };

    render() {

        const { navigate } = this.props.navigation;
        return (
            <ImageBackground style={styles.backgroundContainer}>
              <Loader loading={this.state.loading} />
                <KeyboardAwareScrollView>
                <View style={styles.logoContainer}>
                    <Text style={styles.WelcomeText}>Bienvenue chèr(e) client(e) !</Text>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.introText}>Changez votre mot de passe!</Text>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome name={'bank'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Entrez mdp actuel'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <Text style={styles.tipText2}>Choisissez un nouveau mot de passe.</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name={'ios-person'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Nouveau mdp'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name={'ios-person'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Confirmez nouveau mdp'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                












                <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={styles.text}>Valider</Text>
                    </TouchableOpacity>
                    <Text style={styles.tipText} onPress={() => this.props.navigation.navigate('SignIn')} >mdp deja modifié? S'authentifier</Text>
                    </KeyboardAwareScrollView>
            </ImageBackground>
        )
    }
}


const styles = {
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        backgroundColor: '#062b50',
        marginTop: 40
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10
    },
    logo: {
        width: 120,
        height: 120 
    },
    logoText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    WelcomeText: {
        color: 'white',
        fontSize: 25,
        marginTop: 50,
        padding: 5
    },
    introText: {
        color: 'white',
        fontSize: 15,
        marginTop: 10,
        padding: 5
    },
    tipText: {
        color: '#fcbb16',
        fontSize: 15,
        marginTop: 5,
        padding: 10,
        textDecorationLine: 'underline'
    },
    tipText2: {
        color: '#fcbb16',
        fontSize: 15,
        marginTop: 5,
        padding: 10,
        
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'white',
        marginHoriontal: 25
    },
    dateText: {
        color: 'white',
        fontSize: 15,
        marginTop: 14,
        paddingLeft: 70
    },
    dateContainer: {
        borderColor: 'black',
        borderWidth: 1,
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37 
    },
    inputContainer: {
        marginTop: 5
    },
    btnEye: {
        position: 'absolute',
        top: 10,
        right: 37  
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#fcbb16',
        justifyContent: 'center',
         marginTop: 20
    },
    text: {
        color: 'white',
         fontSize: 16,
         textAlign: 'center'

    }
}

 
export default SignUp;
