import React from "react";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import mobileDevImg from "../../custom-assets/tech-consultancy.jpg"
const MobileDev = () => {
  return (
    <div>
      <ServiceComponent
        title={"Mobile Development"}
        firstText={
          "Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth the master-builder of human happiness. No one rejects dislikes"
        }
        secondText={
          "Born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth the master-builder."
        }
        imgSrc={mobileDevImg}
      />
    </div>
  );
};

export default MobileDev;
