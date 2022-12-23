import { Footer, Navbar } from "../components";
import styles from "../styles";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-purple-700 overflow-hidden ">
    <div>
      <Navbar />
      <Hero />

      <div className={`${styles.videoDiv}`}>
        <video autoPlay loop muted className={`${styles.video}`}>
          <source src="/bg-video-1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="relative">
      <About />
      <div className={`${styles.videoDiv}`}>
        <video autoPlay loop muted className={`${styles.video}`}>
          <source src="/bg-video-2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-05 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>

);

export default Page;
