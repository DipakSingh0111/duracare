import HomeBanner from "@/components/HomeBanner";
import AboutSection from "@/components/common/AboutSection";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import OurBlog from "@/components/OurBlog";

export default function Page() {
  return (
    <>
      <HomeBanner />
      <AboutSection />
      <Services limit={4} />
      <Achievements />
      <OurBlog />
    </>
  );
}
