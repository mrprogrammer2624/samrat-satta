import { Link } from "react-router-dom";
import { SSHead, Container, SSButton, SSInput } from "../../components/";

const Login = () => {
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
              <h1 className="font-extrabold">Login</h1>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <SSInput
                  variant="primary"
                  placeholder="Enter Your Mobile Number"
                  type="number"
                />
              </div>
              <div>
                <SSInput
                  variant="primary"
                  placeholder="Enter Password"
                  type="password"
                />
              </div>
            </div>
            <div>
              <SSButton variant="primary">Continue</SSButton>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <Link to="/" className="font-bold h4 link-primary">
                I&apos;m new user, Sign Up
              </Link>
              <Link to="/" className="font-bold h4 link-primary">
                Forgot Password ?
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Login;
