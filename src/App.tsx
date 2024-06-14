import { Description } from "./components/Description/Description";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <main className="d-flex flex-column">
      <Header />
      <Hero />
      <Description />
    </main>
  );
}
export default App;
