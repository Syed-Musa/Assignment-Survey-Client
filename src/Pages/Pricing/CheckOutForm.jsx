import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card == null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error){
            console.log('payment error', error);
            setError(error.message);
        }else{
            console.log('payment method', paymentMethod);
            setError('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement >
                option={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            </CardElement>
            <button className="btn bg-orange-500 text-white font-bold italic uppercase w-full mt-2" type="submit" disabled={!stripe }>Pay</button>
            <p className="text-red-600 font-bold italic uppercase">{error}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;