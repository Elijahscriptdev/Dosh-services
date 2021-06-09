import React from "react";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import techTrainingImg from "../../custom-assets/tech-training.jpg"
const TechTraining = () => {
  return (
    <div>
      <ServiceComponent
        title={"Tech Training"}
        firstText={
          "Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth the master-builder of human happiness. No one rejects dislikes"
        }
        secondText={
          "Born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth the master-builder."
        }
        imgSrc={techTrainingImg}
      />
    </div>
  );
};

export default TechTraining;
