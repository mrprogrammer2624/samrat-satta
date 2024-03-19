import { useState } from "react";
import { Container, SSButton, SSModal } from "../../components";
import { desawer, gamesType } from "../../constants";
import { Link } from "react-router-dom";

const Desawer = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Container className="flex flex-col gap-3">
        {desawer.map((content, index) => {
          return (
            <SSButton
              handelChange={() => setIsActive(!isActive)}
              key={index}
              className="py-5 min-w-[80%] rounded-3xl mx-auto flex flex-col gap-4 items-center justify-center
            bg-[linear-gradient(187deg,_rgba(252,67,8,1)_0%,_rgba(248,21,57,1)_53%)]"
            >
              <div className="p-4 bg-white rounded-xl">{content.icons}</div>
              <h3 className="text-white">{content.title}</h3>
            </SSButton>
          );
        })}
      </Container>
      <SSModal
        open={isActive}
        titleClassName="bg-primary text-white text-center py-2 rounded-md mb-3"
        close={() => setIsActive(false)}
        title={"Select game Type"}
      >
        <div className="grid grid-cols-2 gap-4 text-center items-center justify-between">
          {gamesType.map((game, index) => (
            <Link
              to={"/jodi-desawer"}
              key={index + game.title}
              className="bg-white shadow-lg rounded-2xl py-3"
            >
              <h3>{game.title}</h3>
            </Link>
          ))}
        </div>
      </SSModal>
    </>
  );
};

export default Desawer;
