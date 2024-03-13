import Helmet from "react-helmet";

export const SSHead = ({ children, title }) => {
  return (
    <Helmet>
      {/* title */}
      <title>{title}</title>
      {/* Meta */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="noindex" />
      {children}
    </Helmet>
  );
};
