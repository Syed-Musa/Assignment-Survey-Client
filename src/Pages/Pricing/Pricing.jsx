import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Pricing = () => {
    return (
        <div>
            <Helmet>
                <title>SURVEYPOLLING | PRICING</title>
            </Helmet>
            <h1 className="text-5xl font-bold uppercase italic text-orange-600 text-center my-10">Pay to Voted</h1>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Pricing;