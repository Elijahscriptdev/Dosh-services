import React from "react";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import techTrainingImg from "../../assets/custom-assets/tech-training.jpg";
const TechTraining = () => {
  return (
    <div>
      <ServiceComponent
        title={"Tech Training"}
        firstText={
          "We train tech savvy youths and equip them with skills needed to help them bring their ideas to life and kick start their career in tech. Flexible structure and curriculum have been put in place for the trainees and its definitely worthwhile."
        }
        imgSrc={techTrainingImg}
      />
    </div>
  );
};

export default TechTraining;
