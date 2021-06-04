import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StripeProvider, useStripe} from '@stripe/stripe-react-native';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

const Profile = () => {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  const fetchPaymentSheetParams = async () => {
    const response = await axios.post(
      'http://206.189.64.83:1687/functions/stripeTest',
      {},
      {
        headers: {
          'X-Parse-Application-Id': 'aVcbcdaMSITLDSmqDLKCrRr3sFRefjUpPW8p8qmJ',
        },
      },
    );
    console.log(response);
    const {paymentIntent, ephemeralKey, customer} = await response.data.result;

    setClientSecret(paymentIntent);
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet({clientSecret});

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <StripeProvider publishableKey="pk_test_j7GwQKYRNOrcib8kn36DMeRS00oXziliBS">
      <View style={styles.container}>
        <Button
          variant="primary"
          disabled={!loading}
          title="Checkout"
          onPress={openPaymentSheet}
        />
      </View>
    </StripeProvider>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'magenta',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
});
