import BePartner from "@/src/components/partials/BePartner";
import Carousel from "@/src/components/partials/Carousel";
import DrinkDetails from "@/src/components/partials/DrinkDetails";
import Feedbacks from "@/src/components/partials/Feedbacks";
import Footer from "@/src/components/partials/Footer";
import KosmoEvents from "@/src/components/partials/KosmoEvents";
import SpinnerText from "@/src/components/partials/Spinner";
import Home from "@/src/components/partials/Hero";

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
