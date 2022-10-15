import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';
export default function Payment(){
  const PUBLIC_KEY="pk_test_51Ln3CySCdV1U8WonW86h5JWrAIjO3CkJ1aqiv7Dr8lVU6Iyo7n5vsJKwHgiWWoLMdetEvmxVcUvE37eYCIh4MeTl007H1arebP"
  const stripeTestPromise=loadStripe(PUBLIC_KEY)
  return (
     <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
     </Elements>
  );
};