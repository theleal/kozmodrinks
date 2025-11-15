import BePartner from "@/src/partials/BePartner";
import Carousel from "@/src/partials/Carousel";
import DrinkDetails from "@/src/partials/DrinkDetails";
import Feedbacks from "@/src/partials/Feedbacks";
import Footer from "@/src/partials/Footer";
import Home from "@/src/partials/Hero";
import KosmoEvents from "@/src/partials/KosmoEvents";
import SpinnerText from "@/src/partials/Spinner";

export default function Page() {
  return (
    <>
      <Home />
      <SpinnerText className="bg-primary" />
      <DrinkDetails />
      <KosmoEvents />
      <Carousel className="bg-purplebg" />
      <Feedbacks />
      <BePartner />
      <Footer />
    </>
  );
}
