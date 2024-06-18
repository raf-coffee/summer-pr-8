import { Author } from "./components/Author/Author";
import { Description } from "./components/Description/Description";
import { Feedback } from "./components/Feedback/Feedback";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Map } from "./components/Map/Map";
import { MeetingPoint } from "./components/MeetingPoint/MeetingPoint";
import { PhotoGallery } from "./components/PhotoGallery/PhotoGallery";
import { Time } from "./components/Time/Time";

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <main className="d-flex flex-column">
        <Hero />
        <Description />
        <PhotoGallery />
        <Author />
        <Time />
        <Map />
        <MeetingPoint />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}
export default App;
