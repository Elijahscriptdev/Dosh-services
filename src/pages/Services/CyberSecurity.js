import React from "react";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import cyberSecurityImg from "../../custom-assets/cyber-security.jpg"
const CyberSecurity = () => {
  return (
    <div>
      <ServiceComponent
        title={"Cyber Security"}
        firstText={
          "We provide digital protection and improve security strategy by checking for bugs and loopholes on your mobile and web platform. We design, install and support complete and progressive solutions."
        }
        secondText={
          "Our goal is to protect the usability, reliability, integrity and safety of your network and data by providing to you a good logical security. We will help you to improve the speed of your hardware and software system, make sure that all computer systems on the network are updated, and undertake any troubleshooting in order to prevent system problems."
        }
        imgSrc={cyberSecurityImg}
      />
    </div>
  );
};

export default CyberSecurity;
