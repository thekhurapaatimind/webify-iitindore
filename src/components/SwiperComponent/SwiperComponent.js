import { Swiper, SwiperSlide } from "swiper/react";
import Slides from "./Slides";
import { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import data from "../../data/data.json";

// import required modules
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";

function SwiperComponent() {
    const clipFactor = 8;
    const clipPath = `polygon(0% 100%, 100% 100%, ${100 - clipFactor}% 0%, ${clipFactor}% 0%)`

    // get all movies from the json
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const requiredMovies = [];
        Object.keys(data).forEach((genre) => {
            data[genre].forEach((movie) => {
                requiredMovies.push(movie);
            })
        })
        setMovies(requiredMovies);
    }, []);

    return (
        <>
            <div id="pastyearbooks" className="pb-5" style={{
                background: "linear-gradient(180deg, #fff 0%, #fff 60%, rgb(0, 187, 255, 0.3) 100%)",
            }}>

                <h1
                    className="text-center mt-5"
                    style={{
                        color: "black",
                        fontFamily: "Proza Libre, sans-serif",
                    }}
                >
                    MOVIE SECTION
                </h1>
                <Swiper
                    // slidesPerView={4}
                    // spaceBetween={30}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={5}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {/* {JsonData.map((d) => ( */}
                    {movies.map((movie) => {
                        return (
                            <SwiperSlide key={movie.id} className="d-flex justify-content-center align-items-center">
                                <Slides {...movie} />
                            </SwiperSlide>
                        )
                    })}
                    {/* ))} */}
                </Swiper>
            </div>
            <div className="w-100" style={{
                background: "linear-gradient(180deg, rgb(0, 187, 255, 0.3) 0%, rgb(0, 187, 255, 0.8) 100%)",
            }}>
                <div className="trapezium"
                    style={{
                        clipPath: clipPath,
                        background: "#000",
                        height: "52px",
                        padding: "10px 30px",
                        color: "white",
                        fontSize: "1.5rem",
                        justifyContent: "center",
                        display: "flex",
                    }}
                >
                </div>
            </div>
        </>
    );
};

export default SwiperComponent;