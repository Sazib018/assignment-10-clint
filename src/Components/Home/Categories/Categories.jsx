import React, { useEffect, useState, useRef } from 'react';

const categories = [
    { id: 1, name: 'Football', image: 'https://i.ibb.co.com/TBLqDpZf/pj70fktg-fifa-world-cup-2022-ball-afp-625x300-01-April-22.webp' },
    { id: 2, name: 'Basketball', image: 'https://i.ibb.co.com/zTbN2psV/basketball-background-illustration-ai-generative-free-photo.jpg' },
    { id: 3, name: 'Tennis', image: 'https://i.ibb.co.com/DPvPDhGd/istockphoto-1362488100-612x612.jpg' },
    { id: 4, name: 'Cricket', image: 'https://i.ibb.co.com/Y7B2qf0f/b41bea44-1d37-494f-a9ea-75b55ddc5035-large.webp' },
    { id: 5, name: 'Baseball', image: 'https://i.ibb.co.com/JR5MZNvB/images-5.jpg' },
    { id: 6, name: 'Swimming', image: 'https://i.ibb.co.com/Q3N7YSvJ/photo-1622629797619-c100e3e67e2e.jpg' },
    { id: 7, name: 'Hockey', image: 'https://i.ibb.co.com/1YH2Tb8g/HOCKI-1.jpg' },
    { id: 8, name: 'Judo', image: 'https://i.ibb.co.com/1GJPLtB4/istockphoto-621819278-612x612.jpg' },
];

const Categories = () => {
    const [show, setShow] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="my-10 max-w-[1250px] mx-auto mt-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-6"> Sports Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {categories.map((category, index) => (
                    <div
                        key={category.id}
                        className={`relative rounded-lg overflow-hidden shadow-lg transform transition duration-1000 ease-in-out ${
                            show
                                ? index < 4
                                    ? 'translate-x-0'
                                    : 'translate-y-0'
                                : index < 4
                                ? '-translate-x-full'
                                : 'translate-y-full'
                        } hover:scale-105 hover:translate-x-2 hover:translate-y-2`}
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-48 object-cover transition duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <p className="text-white text-xl font-semibold">{category.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
