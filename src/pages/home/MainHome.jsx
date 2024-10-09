import ExploreServices from "./home-components/ExploreServices";
import GetInTouch from "./home-components/GetInTouch";
import Hero from "./home-components/Hero";
import Partners from "./home-components/Partners";
import Updates from "./home-components/Updates";
import WhoWeServe from "./home-components/WhoWeServe";
import WelcomeToAshaAgro from "./home-components/WelcomeToAsha";

const MainHome = () => {
  return (
    <div>
      <Hero />
      <br />
      <br />
      <WelcomeToAshaAgro/>
      <br />
      <br />
      <ExploreServices />
      <br />
      <br />
      <Updates />
      <br />
      <br />
      <WhoWeServe />
      <br />
      <br />
      <GetInTouch />

      <Partners />
    </div>
  );
};

export default MainHome;
