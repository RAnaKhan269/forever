import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/frontend_assets/assets';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="About Us" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever is a leading e-commerce platform, delivering high-quality products worldwide. Our mission is to offer a seamless shopping experience with a curated range of products for our global community.
          </p>
          <p>
            Forever is not just an online store; it's a trusted marketplace focused on quality, innovation, and customer service. We aim to revolutionize online shopping and make it accessible to everyone.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to provide an exceptional online shopping experience. We connect people with products they love and focus on quality, affordability, and convenience to build long-term relationships with our customers.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US '} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We prioritize quality in everything we offer. Each product undergoes rigorous checks to meet the highest standards. We work with trusted manufacturers to deliver reliable products.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Our platform is designed for ease. From a user-friendly interface to fast shipping, we ensure that your shopping experience is smooth and stress-free.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our customer service team is here to help at every step. Whether you need product information or post-purchase support, we're committed to providing quick and helpful responses.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
