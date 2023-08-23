import React from "react";
import laptop from "../images/laptop.png";
import pulse from "../images/pulse.png";
import colab from "../images/colab.png";
import secure from "../images/secure.png";
import horizontal_bar from "../images/horizontal_bar.png";
import alexa from "../images/alexa.png";
import john from "../images/john.png";
import logo from "../assets/semlogo.png";
import FeatureComponent from "../components/FeatureComponent";
import TestimonialComponent from "../components/TestimonialComponent";

function LandingPage() {
  const handleLogin = async () => {
    try {
      window.open("${process.env.REACT_APP_BACKEND_URL}auth/github", "_self");
    } catch (error) {
      console.error("Error during GitHub login:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <section className="bg-white flex justify-evenly pb-5">
        <div className="h-full w-1/2">
          <div className="flex items-center h-80">
            <div>
              <p className="text-4xl font-bold">Welcome to GitPulse</p>
              <p className="text-4xl font-bold">In-depth Metrics Analysis for GitHub</p>
              <p className="mt-5">Dive deep into your GitHub repositories with comprehensive coding and collaborative metrics.</p>
            </div>
          </div>
          <div className="space-x-10">
            <button onClick={handleLogin} className="bg-[#00BB78] h-16 w-48 font-bold text-xl text-white rounded-lg">Get Started</button>
            <span className="text-xl font-bold">Learn More</span>
          </div>
        </div>
        <img src={laptop} className="w-1/3"></img>
      </section>
      <section className="bg-black pb-11">
        <p className="text-4xl font-bold text-white mt-10 text-center">Key Features</p>
        <div className="flex justify-evenly mt-10">
          <FeatureComponent logo={pulse} title={'Coding Metrics'} description1={'Analyze code quality, frequency,'} description2={'and other vital statistics.'}></FeatureComponent>
          <FeatureComponent logo={colab} title={'Collaborative Metrics'} description1={'Measure team collaboration, PR'} description2={'reviews, and more.'}></FeatureComponent>
          <FeatureComponent logo={secure} title={'Secure Authentication'} description1={'OAuth 2.0 ensures your credentials'} description2={'remain private.'}></FeatureComponent>
        </div>
      </section>
      <section className="bg-white pb-10">
        <div className="flex justify-between ml-20 mr-20 mt-5">
          <div className="ml-10">
            <p className="text-4xl font-bold">Why Choose GitPulse?</p>
            <img className="h-2 mt-2" src={horizontal_bar}></img>
          </div>
          <div className="text-[#00BB78] text-lg">
            <p>GitPulse offers an intuitive platform tailored for developers and</p>
            <p>project managers alike. With a focus on transparency and security,</p> 
            <p>we ensure your data is both insightful and safe.</p>
          </div>
        </div>
        <div className="flex justify-between ml-10 mr-10 mt-10">
          <div className="flex flex-col space-y-4">
            <div className="ml-20">
              <p className="text-lg font-bold">Intuitive Design</p>
              <p className="text-[#00BB78]">Easy-to-navigate dashboards and metrics visualization.</p>
            </div>
            <div className="ml-20">
              <p className="text-lg font-bold">Top-notch Security</p>
              <p className="text-[#00BB78]">Your credentials are never stored or shared.</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="mr-48">
              <p className="text-lg font-bold">Data Transparency</p>
              <p className="text-[#00BB78]">Know exactly what data we access and how we use it.</p>
            </div>
            <div className="mr-48">
              <p className="text-lg font-bold">GitHub Integration</p>
              <p className="text-[#00BB78]">Seamless integration with your GitHub repositories.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black pb-10">
        <p className="text-4xl font-bold text-white mt-10 text-center">Testimonials</p>
        <div className="flex justify-between ml-32 mr-28 space-x-32 mt-5 pb-10">
          <TestimonialComponent photo={alexa} name={"Alexa Smith"} role={"Software Engineer"} review={"GitPulse provides invaluable insights into our codebase. It's a game-changer for our team's productivity."}></TestimonialComponent>
          <TestimonialComponent photo={john} name={"John Doe"} role={"Product Manager"} review={"GitPulse has revolutionized the way we approach our coding workflow. Our team couldn't be more grateful for such a powerful tool."}></TestimonialComponent>
        </div>
      </section>
      <footer className="bg-white pb-4">
        <div className="flex justify-between ml-24 mr-24 pb-18 mt-10">
          <div className="ml-8 flex mr-5 pr-10">
            <img src={logo} height="50px" width="50px"></img>
            <p className="text-4xl font-bold">GitPulse</p>
          </div>
          <div className="flex space-x-10">
            <ul>
              <p className="text-lg font-bold">Follow Us</p>
              <li className="flex flex-col">
                <a href="" className="hover:text-[#009DDE]">Github</a>
                <a href="" className="hover:text-[#009DDE]">Discord</a>
              </li>
            </ul>
            <ul>
              <p className="text-lg font-bold">Legal</p>
              <li className="flex flex-col">
                <a href="" className="hover:text-[#009DDE]">Privacy Policy</a>
                <a href="" className="hover:text-[#009DDE]">Terms & Conditions</a>
              </li>
            </ul>
            <ul>
              <p className="text-lg font-bold">Resources</p>
              <li className="flex flex-col">
                <a href="https://www.pluralsight.com/blog/software-development/software-engineering-metrics" target="_blank" className="hover:text-blue-500">Metrics</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="ml-32 mr-24 mt-8"></hr>
        <p className="ml-32 mt-5">© 2023 GitPulse — Metrics Analysis for GitHub</p>
      </footer>
    </div>
  );
}

export default LandingPage;
