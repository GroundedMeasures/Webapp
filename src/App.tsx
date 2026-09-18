import Deliverables from "./components/Deliverables";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Samples from "./components/Samples";
import UploadDesk from "./components/UploadDesk";
import UtilityBar from "./components/UtilityBar";

function App() {
  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen font-body text-sm md:text-base selection:bg-amber-100 selection:text-amber-900 blueprint-grid antialiased">
      <UtilityBar />
      <Header />
      <main className="w-full">
        <Hero />
        <Deliverables />
        <Pricing />
        <Samples />
        <UploadDesk />
      </main>
      <Footer />
    </div>
  );
}

export default App;
