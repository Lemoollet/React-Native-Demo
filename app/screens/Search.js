import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, TextInput, Alert, Button} from 'react-native';
//import {StripeProvider, useStripe} from '@stripe/stripe-react-native';

const Searchbar = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  //const [clientSec, setClientSec] = useState();

  //const {initPaymentSheet, presentPaymentSheet, confirmPayment} = useStripe();

  useEffect(() => {
    //fetchPaymentIntentClientSecret();
  }, []);

  const fetchPaymentIntentClientSecret = async () => {
    const response = await axios.post(
      'http://206.189.64.83:1687/functions/stripeOxxo',
      {},
      {
        headers: {
          'X-Parse-Application-Id': 'aVcbcdaMSITLDSmqDLKCrRr3sFRefjUpPW8p8qmJ',
        },
      },
    );
    console.log(response);
    setClientSec(response.data.result);
    const {clientSecret} = await response.data.result;

    return {clientSecret};
  };

  const handlePayPress = async () => {
    console.log(clientSec);
    const billingDetails = {
      name,
      email,
    };
    const {error, paymentIntent} = await confirmPayment(clientSec, {
      type: 'Oxxo',
      billingDetails,
    });

    console.log(paymentIntent);
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
      console.log('Payment confirmation error', error.message);
    } else if (paymentIntent) {
      if (paymentIntent.status === PaymentIntents.Status.RequiresAction) {
        Alert.alert(
          'Success',
          `The OXXO voucher was created successfully. Awaiting payment from customer.`,
        );
      } else {
        Alert.alert('Payment intent status:', paymentIntent.status);
      }
    }
  };

  return (
    <StripeProvider publishableKey="pk_test_j7GwQKYRNOrcib8kn36DMeRS00oXziliBS">
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          onChange={value => setName(value.nativeEvent.text)}
        />
        <TextInput
          placeholder="E-mail"
          onChange={value => setEmail(value.nativeEvent.text)}
        />
        <Button
          variant="primary"
          title="Checkout" /* onPress={handlePayPress}  */
        />
      </View>
    </StripeProvider>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'purple',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
});
