import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterDesign from "../../Components/FooterDesign/FooterDesign";
import Loader from "../../Components/Loader";
import "./Home.css";
import Button from "../../Components/Button";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigateToConversion = async () => {
    setLoading(true);
    await simulateLoading();
    navigate("/Chat");
  };

  const simulateLoading = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="home-page">
          <p className="Enterprise">ChatGPT Enterprise</p>
          <h1 className="heading">Redefine work in the age of AI</h1>
          <h4>
            Enterprise-grade security and privacy and the most powerful version
            of ChatGPT yet.
          </h4>

          <Button
            onClick={handleNavigateToConversion}
            disabled={loading}
            aria-disabled={loading}
          />
        </main>
      )}
      <FooterDesign />
    </>
  );
};

export default Home;
