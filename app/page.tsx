import BePartner from "@/src/components/partials/BePartner";
import DrinkDetails from "@/src/components/partials/DrinkDetails";
import Feedbacks from "@/src/components/partials/Feedbacks";
import Home from "@/src/components/partials/Hero";
import SpinnerText from "@/src/components/partials/Spinner";

export default function Page() {
  return (
    <>
      <Home />
      <SpinnerText className="bg-primary" />
      <DrinkDetails />
      {/* <KosmoEvents /> */}
      {/* <Carousel className="bg-purplebg" /> */}
      <Feedbacks />
      <BePartner />
      {/* <Footer /> */}
    </>
  );
}
