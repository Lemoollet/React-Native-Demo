import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Login = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({...data, email: val, check_textInputChange: true});
    } else {
      setData({...data, email: val, check_textInputChange: false});
    }
  };

  const handlePasswordChange = val => {
    setData({...data, password: val});
  };

  const updateSecureTextEntry = () => {
    setData({...data, secureTextEntry: !data.secureTextEntry});
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Icon name="team" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize={'none'}
            onChangeText={val => textInputChange(val)}
          />
          {data.check_textInputChange && (
            <Icon name="check" size={20} color="green" />
          )}
        </View>

        <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
          <Icon name="lock" size={20} />
          <TextInput
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize={'none'}
            onChangeText={val => handlePasswordChange(val)}
          />
          <Icon
            name={data.secureTextEntry ? 'QQ' : 'aliwangwang-o1'}
            size={20}
            color="green"
            onPress={updateSecureTextEntry}
          />
        </View>
        <View style={styles.button}>
          <LinearGradient
            style={styles.signIn}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#000', '#3F3D56']}>
            <Text style={[styles.textSign, {color: '#fff'}]}>Sign in</Text>
          </LinearGradient>
          <TouchableOpacity
            style={[
              styles.signIn,
              {borderColor: '#000', borderWidth: 1, marginTop: 15},
            ]}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textSign}>Sign Up </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
