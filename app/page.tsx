import Category from "./components/widget/Categorys";
import Hero from "./components/widget/Hero";
import Testimonials from "./components/widget/Testimonials";
import TopSelling from "./components/widget/TopSelling";
import BookTrip from "@/app/components/widget/BookTrip";
function Home(){
  return(
    <main>
      <Hero/>
      <Category/>
      <TopSelling/>
      <BookTrip/>
      <Testimonials/>
    </main>
    
  )
}
export default Home;