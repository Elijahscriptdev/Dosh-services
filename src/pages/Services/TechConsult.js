import React from "react";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import techConsultImg from "../../assets/custom-assets/tech-consultancy.jpg";
const TechConsult = () => {
  return (
    <div>
      <ServiceComponent
        title={"Tech Consultancy"}
        firstText={
          "At Dosh, we give advice to organizations on how best to use information technology in achieving their business objectives as well as helping them keep up with tech standards and trends. From requirement assembling to IT framework strategy, we furnish our clients with fair-minded and target perspective to adjust technology to their business goals. We can help you in accomplishing your business goals using technology and build out your digital transformation roadmap."
        }
        secondText={
          "We enable our clients with more brilliant methods of working together and frictionless ways of delivering an extraordinary customer experience to their customers. We bring years of experience across various industry and sectors, as well as a wealth of experience in involving digital technology solutions, giving approaches to our clients to maximize value creation across resource and activities while improving profitability. We equally work with businesses seeking to meet up with the latest technology standard and trends."
        }
        imgSrc={techConsultImg}
      />
    </div>
  );
};

export default TechConsult;
