import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper my-2 rounded-md w-full"
      >
        <SwiperSlide>
          <div
            className="rounded-md h-screen"
            style={{
              backgroundImage: `url('https://i.ibb.co/BC8C0sv/freepik-export-20240511121428i-Gw-M.jpg'),
              linear-gradient(to right, rgba(20, 0, 0, 0.5), rgba(0, 0, 0, 0))`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="lg:text-4xl text-2xl font-bold lg:my-5">Welcome to AltProdInsights</h1>
              <p className="lg:text-xl text-sm">Unleash the Power of Choice! See All Product Alternatives in One Place So Are You Ready to Shop?</p>
          
              <Link to="/queries" className="bg-white text-black px-4 py-2 rounded-md mt-4 lg:mt-8 inline-block">
                Start Comparing
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-md h-screen brightness-75"
            style={{
              position: "relative",
              backgroundImage: `url('https://i.ibb.co/f4Y1LvG/eid-shopping-trolley-laptops-perspective-view.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-800 rounded-full bg-gradient-to-r from-slate-50 ... p-10">
              <h1 className="lg:text-4xl text-2xl font-bold lg:my-5">Find Your Perfect Alternative</h1>
              <p className="lg:text-xl text-sm">Discover a Better Way to Shop with AltProdInsights</p>
              <Link to="/queries" className="bg-white text-black px-4 py-2 rounded-md mt-4 lg:mt-8 inline-block">
                Start Comparing
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-md h-screen"
            style={{
              position: "relative",
              backgroundImage: `url('https://i.ibb.co/NsxJZJM/top-view-cyber-monday-sale-elements-dark-background.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="lg:text-4xl text-2xl font-bold lg:my-5">Exclusive Deals Await!</h1>
              <p className="lg:text-xl text-sm">Shop Smarter with AltProdInsights</p>
              <Link to="/queries" className="bg-white text-black px-4 py-2 rounded-md mt-4 lg:mt-8 inline-block">
                Start Comparing
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-md h-screen"
            style={{
              position: "relative",
              backgroundImage: `url('https://i.ibb.co/ZfMqgBX/smiling-young-two-girls-sitting-floor-shopping-bags-gift-open-pizza-turquoise-wall.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-purple-800">
              <h1 className="lg:text-4xl text-2xl font-bold lg:my-5">Shop with Confidence</h1>
              <p className="lg:text-xl text-sm">Discover Top Alternatives at AltProdInsights</p>
              <Link to="/queries" className="bg-white text-black px-4 py-2 rounded-md mt-4 lg:mt-8 inline-block">
                Start Comparing
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
