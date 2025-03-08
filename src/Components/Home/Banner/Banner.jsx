import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className=" max-w-[1250px] mx-auto mt-14">
            <div className="relative">
                <Slider {...settings}>
                    {/* Slide 1 */}
                    <div className="relative">
                        <img
                            src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_484,c_limit/0d79895a-93a4-4c90-b867-8be7dbe15cbe/the-best-nike-football-boots.jpg"
                            alt="Football Gear"
                            className="w-full h-[500px] object-cover rounded-t-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                            <h2 className="text-white text-3xl font-bold">Get the Best Football Gear!</h2>
                            <p className="text-white text-sm mt-2">Upgrade your game with high-quality football equipment.</p>
                            <button className="mt-4 px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                                Try Demo
                            </button>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="relative">
                        <img
                            src="https://s.alicdn.com/@sc04/kf/H8029de3f949e402d856abc5ae511fac4S.jpg_300x300.jpg"
                            alt="Basketball Equipment"
                            className="w-full h-[500px] object-cover rounded-t-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                            <h2 className="text-white text-3xl font-bold">Top-Quality Basketball Accessories</h2>
                            <p className="text-white text-sm mt-2">Find the best gear for your next basketball match.</p>
                            <button className="mt-4 px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                                Try Demo
                            </button>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="relative">
                        <img
                            src="https://images.ctfassets.net/ipjoepkmtnha/7qhgn8NfNZjCvUFOCq7Nsm/3f763414f1165d7ea1324f86a8bc309f/home-gym-hero_3_darken.jpg"
                            alt="Gym Equipment"
                            className="w-full h-[500px] object-cover rounded-t-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                            <h2 className="text-white text-3xl font-bold">Build Strength with Premium Gym Equipment</h2>
                            <p className="text-white text-sm mt-2">Achieve your fitness goals with the best workout gear.</p>
                            <button className="mt-4 px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                                Try Demo
                            </button>
                        </div>
                    </div>
                </Slider>

                {/* Achievements Section */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 3 }}
                    className="absolute bottom-0 left-0 right-0 text-white text-center rounded-b-xl p-6 shadow-lg"
                >
                    <h3 className="text-2xl md:text-3xl font-bold">Our Achievements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {/* Card 1 */}
                        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                            <h4 className="text-3xl font-bold">1.2M</h4>
                            <p className="text-sm">Members worldwide</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                            <h4 className="text-3xl font-bold">95%</h4>
                            <p className="text-sm">Customer satisfaction rate</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                            <h4 className="text-3xl font-bold">3500+</h4>
                            <p className="text-sm">Transactions processed daily</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
