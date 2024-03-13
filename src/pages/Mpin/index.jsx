import { Container, SSButton, SSHead, SSInput } from "../../components";

const Mpin = () => {
  return (
    <>
      <SSHead />
      <section className="flex min-h-dvh">
        <Container className="m-auto">
          {/* Img Part */}
          <div>
            <img src="" alt="" />
          </div>
          {/* Bottom Part */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-extrabold text-primary">Create Your MPIN</h1>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <SSInput
                  variant="secondary"
                  placeholder="Create Your MPIN"
                  type="number"
                />
              </div>
              <div>
                <SSInput
                  variant="secondary"
                  placeholder="Re enter Your MPIN"
                  type="password"
                />
              </div>
            </div>
            <div>
              <SSButton variant="primary">Continue</SSButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Mpin;
