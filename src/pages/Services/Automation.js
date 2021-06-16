import React from "react";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import automationImg from "../../assets/custom-assets/tech-consultancy.jpg";
const Automation = () => {
  return (
    <div>
      <ServiceComponent
        title={"Automation"}
        firstText={
          "Automation manages business processes for uniformity and transparency, it can also deliver new insights into business challenges and suggest solutions. High information accuracy is guaranteed whereby, you get key production, improve data accuracy and reduce data collection costs. It provides you with the facts to make the right decisions when it comes to reducing waste and improving your processes."
        }
        secondText={
          "We understand how important customer perceptions is to sales generation in any business, hence, we developed processes that can help position the brand/products of our clients within their target audience. We have put this in place to improve the quality of your business output, help your business save on time and cost to meet your set objectives."
        }
        imgSrc={automationImg}
      />
    </div>
  );
};

export default Automation;
