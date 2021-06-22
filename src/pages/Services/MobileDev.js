import React from "react";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import mobileDevImg from "../../assets/custom-assets/tech-consultancy.jpg";
const MobileDev = () => {
  return (
    <div>
      <ServiceComponent
        title={"Mobile Development"}
        firstText={
          "We pride ourselves in building stellar applications that helps your business connect with your current and prospective customers, thus, driving high engagement levels for your business. We are specialist when it comes to building Android, iOS and Windows Applications."
        }
        secondText={
          "From global reports and studies, consumers will continue to expand and increase their use of mobile applications, whether for browsing, game-playing, checking social media, or conducting business and smartphone is universal. We create enterprise-class application that helps our clients with separating themselves on the lookout, create new income streams and upgrade productivity. Our creative designers and software engineers have the in-depth skills needed to design, develop, integrate and deploy mobile applications on all industry-driving platforms such as Android and iOS."
        }
        imgSrc={mobileDevImg}
      />
    </div>
  );
};

export default MobileDev;
