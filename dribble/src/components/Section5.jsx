import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Section5(){
    //Ayesha Mehmood
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
      };
    const caseStudies = [
      {
        image: 'path/to/image1.jpg',
        company: 'Medtronic',
        text: `"We have used services from Xurya for most of our stations..."`,
        name: 'Jeniffer Kolobaly',
        title: 'CTO EV Medtronic'
      },
      {
        image: 'path/to/image2.jpg',
        company: 'Company 2',
        text: `"Their services have been excellent..."`,
        name: 'John Doe',
        title: 'CEO, Company 2'
      },
      {
        image: 'path/to/image3.jpg',
        company: 'Company 3',
        text: `"A reliable partner for solar solutions..."`,
        name: 'Jane Smith',
        title: 'Director, Company 3'
      }
    ];
  
    return (
      <div className="w-11/12 mx-auto text-center">
        <Slider {...settings}>
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="flex lg:flex border items-center gap-6 lg:gap-10 p-6">
              <div className="lg:w-1/2 border">
                <h2 className="text-2xl font-semibold mb-4">{caseStudy.company}</h2>
                <p className="text-lg italic mb-4">{caseStudy.text}</p>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                  View case study
                </button>
                <h5 className="mt-4 font-medium text-gray-600">
                  {caseStudy.name} – {caseStudy.title}
                </h5>
              </div>
              <div className="lg:w-1/2 border">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.company}
                  className="w-full h-full max-w-sm mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
  
        {/* Custom Progress Indicator */}
        <div className="flex justify-center gap-3 mt-6">
          {caseStudies.map((_, index) => (
            <div
              key={index}
              className={`w-40 h-2 rounded-2xl ${
                currentSlide === index ? 'bg-green-500' : 'bg-gray-300'
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    );
}

export default Section5