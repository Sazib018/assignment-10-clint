import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const blogData = [
  {
    id: 1,
    title: "Sports Equipment Buying Guide",
    image: "https://i.ibb.co.com/zLGPjN3/images-3.jpg",
    description: "Learn what equipment is needed for each sport.",
  },
  {
    id: 2,
    title: "Cricket Bat Selection Tips",
    image: "https://i.ibb.co.com/0ps62NkY/images-4.jpg",
    description: "Easy tips for choosing the perfect bat.",
  },
  {
    id: 3,
    title: "How to Choose a Football",
    image: "https://i.ibb.co.com/RG5w960n/0029962-how-to-choose-a-football-for-your-team-or-club.jpg",
    description: "Know the differences between various footballs.",
  },
  {
    id: 4,
    title: "Best Badminton Rackets",
    image: "https://i.ibb.co.com/d0Dt3LSK/images-6.jpg",
    description: "Find the best racket based on your play style.",
  },
  {
    id: 5,
    title: "Swimming Gear Selection",
    image: "https://i.ibb.co.com/Q3N7YSvJ/photo-1622629797619-c100e3e67e2e.jpg",
    description: "Learn about the best swimming goggles, caps, and fins.",
  },
  {
    id: 6,
    title: "Running Shoe Buying Guide",
    image: "https://i.ibb.co.com/TMXg1WN2/images-7.jpg",
    description: "Essential tips for choosing the right running shoes.",
  },
  {
    id: 7,
    title: "Tennis Racket Selection",
    image: "https://i.ibb.co.com/DPvPDhGd/istockphoto-1362488100-612x612.jpg",
    description: "Understand different racket types and their benefits.",
  },
];

const BlogSection = () => {
  return (
    <div className="container max-w-[1250px] mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Sports Blog</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
       
      >
        {blogData.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="bg-orange-50 shadow-md rounded-lg p-4 flex flex-col 
             items-center h-[400px]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-[80%] h-[200px] object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-center">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-2 text-center">{blog.description}</p>
              <button className="mt-auto px-4 py-2 bg-orange-700 text-white rounded-lg">
                Read More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSection;
