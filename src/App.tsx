import React from "react";
import Header from "./components/header";
import { content } from "../src/function/Content";
import "./styles/home.css";
import Section from "./components/section";
import Footer from "./components/footer";

function App() {
  return (
    <div className="main">
      <div className="container">
        <Header
          imagePath={content.imagePath}
          title={content.title}
          subtitle={content.subTitle}
        />
        <Section
          text={content.text}
          value={content.valueSubscription}
          title={content.subscription}
        />
        <Footer
          contactTitle={content.contactTitle}
          email={content.email}
          addressTitle={content.addressTitle}
          address={content.addressCity}
          number={content.addressNumber}
        />
      </div>
    </div>
  );
}

export default App;
