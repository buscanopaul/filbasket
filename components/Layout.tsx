import Header from "./header/Header";
import Score from "./home/scores/ScoresCarousel";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Score />
      <main>{children}</main>
      <Footer />
    </>
  );
}
