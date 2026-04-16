import { useEffect, useState } from "react";
import s from "./App.module.scss";
import { WelcomeSection } from "./WelcomeSection";
import { Greetings } from "./Greetings";
import { PageLoader } from "./PageLoader";
import { DateWithPath } from "./DateWithPath";
import { Countdown } from "./Сountdown";
import { Location } from "./Location";
import { DressCode } from "./DressCode";
import { Details } from "./Details";
import { Form } from "./Form";
import { Footer } from "./Footer";

import flowers from "./assets/flowers.svg";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <PageLoader isVisible={isLoading} />
      <div className={s.page}>
        <div className={s.page__container}>
          <WelcomeSection />
          <Greetings />
          <img src={flowers} width={150} height={100} alt="flower" />
          <DateWithPath />
          <Countdown />
          <Location />
          <DressCode />
          <Details />
          <Form />
          <img src={flowers} width={150} height={100} alt="flower" />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
