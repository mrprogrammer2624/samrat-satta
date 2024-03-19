import { SwiperSlide } from "swiper/react";
import { Container, SSButton, SSSwiper } from "../../components";
import { SwiperImg, gamesDetails } from "../../constants";
import { SSGameCard } from "../../components/SSGameCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let changePath = useNavigate();
  return (
    <Container>
      <div className="flex flex-col gap-8 h-[calc(100dvh-60px-50px-24px-32px)] overflow-auto scrollbarNone py-4">
        <div>
          <SSSwiper
            pagination={{ clickable: true }}
            autoplay={true}
            grabCursor={true}
          >
            {SwiperImg.map((item, index) => (
              <SwiperSlide
                key={index}
                className="relative rounded-lg w-full before:block before:pb-[45%]"
              >
                <img
                  src={item.img}
                  alt={item.img}
                  width={"100%"}
                  height={"100%"}
                  className="left-0 w-full rounded-lg h-full absolute top-0 object-cover object-top"
                />
              </SwiperSlide>
            ))}
          </SSSwiper>
        </div>
        <SSButton
          rounded
          variant={"primary"}
          id={"Hello"}
          handelChange={() => changePath("/jodi-desawer")}
        >
          Play Game
        </SSButton>
        <div className="flex flex-col gap-4 p-2">
          {gamesDetails.map((game, index) => (
            <SSGameCard
              key={index}
              close={game.close}
              result={game.result}
              gameName={game.gameName}
              gameNumber={game.gameNumber}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
