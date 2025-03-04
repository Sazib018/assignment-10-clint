import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="w-full max-w-[1100px] mt-14 mx-auto ">
            <div className="relative">
                <Slider {...settings}>
                    <div className="relative">
                        <img
                            src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_484,c_limit/0d79895a-93a4-4c90-b867-8be7dbe15cbe/the-best-nike-football-boots.jpg"
                            alt="Football Gear"
                            className="w-full h-[500px] object-cover rounded-t-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                            <h2 className="text-white text-3xl font-bold">Get the Best Football Gear!</h2>
                            <p className="text-white text-sm mt-2">Upgrade your game with high-quality football equipment.</p>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="https://s.alicdn.com/@sc04/kf/H8029de3f949e402d856abc5ae511fac4S.jpg_300x300.jpg"
                            alt="Basketball Equipment"
                            className="w-full h-[500px] object-cover rounded-t-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                            <h2 className="text-white text-3xl font-bold">Top-Quality Basketball Accessories</h2>
                            <p className="text-white text-sm mt-2">Find the best gear for your next basketball match.</p>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.ctfassets.net/ipjoepkmtnha/7qhgn8NfNZjCvUFOCq7Nsm/3f763414f1165d7ea1324f86a8bc309f/home-gym-hero_3_darken.jpg"
                            alt="Gym Equipment"
                            className="w-full h-[500px] object-cover rounded-t-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                            <h2 className="text-white text-3xl font-bold">Build Strength with Premium Gym Equipment</h2>
                            <p className="text-white text-sm mt-2">Achieve your fitness goals with the best workout gear.</p>
                        </div>
                    </div>
                </Slider>

                <div className="absolute bottom-0 left-0 right-0 bg-orange-700 text-white text-center rounded-b-xl p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold">Our Achievements</h3>
                    <div className="flex flex-wrap justify-center md:justify-around mt-4 gap-4">
                        <div className="w-1/2 md:w-auto">
                            <h4 className="text-2xl md:text-3xl font-bold">1.2M</h4>
                            <p className="text-sm md:text-base">Members worldwide</p>
                        </div>
                        <div className="w-1/2 md:w-auto">
                            <h4 className="text-2xl md:text-3xl font-bold">95%</h4>
                            <p className="text-sm md:text-base">Customer satisfaction rate</p>
                        </div>
                        <div className="w-full md:w-auto">
                            <h4 className="text-2xl md:text-3xl font-bold">3500+</h4>
                            <p className="text-sm md:text-base">Transactions processed daily</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
