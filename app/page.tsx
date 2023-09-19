import Image from 'next/image'
import Navbar from './components/Navbar';
/*import Carousel from './components/Carousel'; */
import Service from './components/Service';
import Trading from './components/Trading';
import Testimonial from './components/Testimonial';
import Awards from './components/Awards';
import Articles from './components/Articles';
import Investing from './components/Investing';
import FAQS from './components/FAQS';
import Footer from './components/Footer';

const cards = [
  {
    feedback: "“ I am Very Happy With New Platform “",
    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",
    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
];

const articles=[
  {
    cardImg:"https://res.cloudinary.com/devj4jofj/image/upload/v1694867131/Rectangle_2619_hpqagh.jpg",
    cardBtn:"Investment",
    investHeading:"Investment Tips for Short Term, Mid Term & Long Term Goals",
    name:"Post By Hans Murazi",
    date:"05 Feb 2022",
    content:"There are no shortcuts to financial success. One of the few straightforward rules for making.",
    read:"Read More",
    icon:"https://res.cloudinary.com/devj4jofj/image/upload/v1695091849/fi-br-arrow-right_qe8vvu.jpg",
  },
  {
    cardImg:"https://res.cloudinary.com/devj4jofj/image/upload/v1694867131/Rectangle_2619_hpqagh.jpg",
    cardBtn:"Investment",
    investHeading:"Investment Tips for Short Term, Mid Term & Long Term Goals",
    name:"Post By Hans Murazi",
    date:"05 Feb 2022",
    content:"There are no shortcuts to financial success. One of the few straightforward rules for making.",
    read:"Read More",
  },
  {
    cardImg:"https://res.cloudinary.com/devj4jofj/image/upload/v1694867131/Rectangle_2619_hpqagh.jpg",
    cardBtn:"Investment",
    investHeading:"Investment Tips for Short Term, Mid Term & Long Term Goals",
    name:"Post By Hans Murazi",
    date:"05 Feb 2022",
    content:"There are no shortcuts to financial success. One of the few straightforward rules for making.",
    read:"Read More",
  },
  {
    cardImg:"https://res.cloudinary.com/devj4jofj/image/upload/v1694867131/Rectangle_2619_hpqagh.jpg",
    cardBtn:"Investment",
    investHeading:"Investment Tips for Short Term, Mid Term & Long Term Goals",
    name:"Post By Hans Murazi",
    date:"05 Feb 2022",
    content:"There are no shortcuts to financial success. One of the few straightforward rules for making.",
    read:"Read More",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Service/>
      <Trading/>
      <Testimonial cards={cards}/>
      <Awards/>
      <Articles/>
      <Investing articles={articles}/>
      <FAQS/>
      <Footer/>
    </main>
  )
}
