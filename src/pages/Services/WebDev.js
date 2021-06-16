import React from "react";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import webDevImg from "../../custom-assets/web-dev.jpg"
const WebDev = () => {
  return (
    <div>
      <ServiceComponent
        title={"Web Development"}
        firstText={
          "We build top notch, responsive and user-friendly website that create credibility for your business and give you optimum result. Our websites are developed using different programming languages; (React Js, Php, Python, Node Js, Java and C++). With Dosh Services. Our execution of responsive website design practices and other present-day guidelines ensures an extraordinary user experience."
        }
        secondText={
          "The rapid increase of web browsers, cross-working system similarity and a support free approach for end users has increased the prominence of web applications throughout the last decade. Regardless of whether it's a small internal system that helps your team work more proficiently or a multi-million user consumer app, our team can assist beginning with strategy entirely through delivery and maintenance. Our web application blend industry-best practices for customers experience and performance to help your project succeed. Our goal is on device sceptic solutions that works on every platform."
        }
        imgSrc={webDevImg}
      />
    </div>
  );
};

export default WebDev;
