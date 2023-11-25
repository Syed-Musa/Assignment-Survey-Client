import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from 'react-icons/fa';

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimoniel = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("featured.json")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);


    return (
        <section className="my-20">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map((review) => (
                    <SwiperSlide key={review._id} review={review}>
                        <div className="my-20 flex flex-col items-center">
                            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                            <img className="w-14 h-14 rounded-3xl" src={review.image} alt="" />
                            <h3 className="text-2xl text-orange-600">{review.name}</h3>
                            <p className="py-5 text-center w-96">{review.details}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimoniel;