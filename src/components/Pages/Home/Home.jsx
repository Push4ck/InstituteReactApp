import { useEffect } from "react";
import PropTypes from "prop-types";
import Hero from "../../Hero/Hero";

const Home = ({ setPagename, setProgress }) => {
  useEffect(() => {
    setPagename("Dashboard");
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setPagename, setProgress]);

  return (
    <>
      <Hero />
    </>
  );
};

Home.propTypes = {
  setProgress: PropTypes.func.isRequired,
};

export default Home;
