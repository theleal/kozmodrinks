import BePartner from "@/src/components/BePartner";
import Carousel from "@/src/components/Carousel";
import DrinkDetails from "@/src/components/DrinkDetails";
import Feedbacks from "@/src/components/Feedbacks";
import Footer from "@/src/components/Footer";
import KosmoEvents from "@/src/components/KosmoEvents";
import SpinnerText from "@/src/components/Spinner";
import Home from "@/src/components/Home";
import Icon from "@/src/icons";

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
