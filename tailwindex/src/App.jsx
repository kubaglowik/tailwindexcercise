import Nav from './components/Nav';
import { Hero,PopularProducts,SuperQuality,Services,SpecialOffers,CustomerReviews,Subscribe,Footer } from './sections'
const app   = () => (
  <main className="relative">
    <Nav/>
    <section className="xl: padding-1 wide: padding-r padding-b"><Hero/></section>
    <section className="padding" ><PopularProducts /></section>
    <section className="padding-x py-10" ><Services /></section>
    <section className="padding-x padding-t bg-black pb-8" ><Footer /></section>
  </main>
);
export default app; 