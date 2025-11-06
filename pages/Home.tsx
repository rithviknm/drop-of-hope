
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from '../components/UI';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const StatCounter = ({ end, label }: { end: number, label: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = (frame / totalFrames);
            const currentCount = Math.round(end * progress);
            setCount(currentCount);

            if (frame === totalFrames) {
                clearInterval(counter);
                setCount(end); // Ensure it ends on the exact number
            }
        }, frameRate);

        return () => clearInterval(counter);
    }, [end]);

    return (
        <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-brand-cyan dark:text-brand-teal">{count.toLocaleString()}+</p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">{label}</p>
        </div>
    );
};


const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const currentTestimonial: Testimonial = TESTIMONIALS[currentIndex];

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {TESTIMONIALS.map((testimonial, index) => (
                         <div key={index} className="w-full flex-shrink-0">
                            <Card className="text-center p-8 m-4">
                                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-brand-teal"/>
                                <p className="text-lg italic text-gray-600 dark:text-gray-300">"{testimonial.quote}"</p>
                                <p className="mt-4 font-bold text-brand-blue dark:text-white">{testimonial.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={prevTestimonial} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 rounded-full p-2 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextTestimonial} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 rounded-full p-2 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    );
};


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] md:min-h-[80vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/charity/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Kindness in Action
          </h1>
          <p className="text-lg md:text-2xl mt-4 max-w-3xl mx-auto">
            Donate Blood, Essentials, and Hope
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="accent" onClick={() => navigate('/donate-blood')}>Donate Blood</Button>
            <Button variant="primary" onClick={() => navigate('/kindkart')}>Donate Essentials</Button>
            <Button variant="secondary" onClick={() => navigate('/stories')}>Stories of Impact</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-light dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCounter end={10250} label="Total Donors" />
            <StatCounter end={50000} label="Items Donated" />
            <StatCounter end={25000} label="Lives Touched" />
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">Our Mission</h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                      The Drop of Hope Foundation is dedicated to providing a lifeline to the most vulnerable members of our society. We believe that every act of kindness, no matter how small, can create a ripple of positive change.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                      Through our organized blood drives and essentials donation platform, we connect generous hearts with those in critical need, helping poor children, orphans, and families facing hardship. Our mission is to deliver not just aid, but also dignity, hope, and a brighter tomorrow.
                  </p>
              </div>
              <div>
                  <img src="https://picsum.photos/seed/mission/600/400" alt="Children smiling" className="rounded-lg shadow-xl"/>
              </div>
          </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-brand-light dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-12">Words from the Heart</h2>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
};

export default Home;
