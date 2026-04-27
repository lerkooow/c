import { useEffect, useRef, useState } from "react";
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

import audio from "./assets/music.mp3";
import flowers from "./assets/flowers.svg";

import s from "./App.module.scss";

function App() {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <audio ref={audioRef} src={audio} />
      <PageLoader isVisible={isLoaderVisible} onStart={() => setIsLoaderVisible(false)} audioRef={audioRef} />
      <div className={s.page}>
        <div className={s.page__container}>
          <WelcomeSection />
          <Greetings audioRef={audioRef} />
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
