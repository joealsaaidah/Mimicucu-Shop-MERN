import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To MiMiCuCU-shop",
  description: "We selling the great products with best quality for cheap",
  keywords:
    "electronics, buy electronics, good quality electronics, cheap electronics",
};

export default Meta;
