import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Browse our extensive menu to find your favorite dishes, from savory classics to innovative new flavors. With a variety of options available, you can easily select meals that suit your taste preferences and dietary needs.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Customize your meal plan by selecting how often you want your food delivered. Whether you prefer daily, weekly, or occasional deliveries, we offer flexible scheduling options to fit your lifestyle and ensure you always have delicious meals on hand.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy the convenience of quick deliveries right to your door. Our reliable team works diligently to ensure that your meals arrive hot and fresh, so you can savor every bite without the wait. Experience the joy of hassle-free dining with just a few clicks!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Enjoy easy dining with our straightforward process: pick your favorite meals and have them delivered right to your door.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
