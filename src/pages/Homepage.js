import "../assets/css/animate.css"
// import "../assets/css/bootstrap.min.css"
// import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.min.css"
import "../assets/css/reset.css"
import "../assets/css/responsive.css"
import "../assets/css/style.css"
import AddressSection from "../components/AddressSection"
import Banner from "../components/Banner"
import BlogArea from "../components/BlogArea"
import ContactStart from "../components/ContactStart"
import Footer from "../components/Footer"
import "../components/Header"
import Header from "../components/Header"
import Section0 from "../components/Section0"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import TestimonialArea from "../components/TestimonialArea"


export default function pages() {
  return (
    <div>
      <div>
        <Header />
        <div className="content-wrapper one">
          <Section0 />
          <Section1 />
          <Section2 />
          <Banner />
          <Section3 />
          <TestimonialArea />
          <BlogArea />
          <ContactStart />
          <AddressSection />
        </div>
        <Footer />
      </div>

    </div>
  )
}