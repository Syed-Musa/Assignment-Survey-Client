import { useState, useEffect } from "react";
import FAqCard from "./FAqCard";

const FAq = () => {

    const [faq, setfaq] = useState([]);

    useEffect(()=>{
        fetch('https://assignment-survey-resource-server.vercel.app/faq')
        .then(res => res.json())
        .then(data => setfaq(data))
    }, [])

    return (
        <div>
            <h2 className="text-5xl text-center my-10 font-bold italic text-orange-600">Frequiently Asked Questions(FAQ)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    faq?.map(faq => <FAqCard key={faq.id} faq={faq}></FAqCard>)
                }
            </div>
        </div>
    );
};

export default FAq;