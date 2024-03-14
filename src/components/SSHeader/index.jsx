import { Container, SSButton } from "../";

export const SSHeader = () => {
  return (
    <header className="py-3">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-3">
            {/* Icons */}
            <button className="text-primary min-w-8 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
              </svg>
            </button>
            <h3 className="text-black font-medium whitespace-nowrap uppercase">
              <span className="font-semibold">samrat </span>satta
            </h3>
          </div>
          <div>
            <SSButton variant="primary" className="py-2 px-4">
              0
              <span className="bg-white p-1 text-primary rounded-md">
                <svg
                  width="18px"
                  height="18px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                </svg>
              </span>
            </SSButton>
          </div>
        </div>
      </Container>
    </header>
  );
};
