import React from "react";
import img1 from "../../assets/featured_photos/img_1.png";
import img2 from "../../assets/featured_photos/img_2.png";
import img3 from "../../assets/featured_photos/img_3.png";
import img4 from "../../assets/featured_photos/img_4.png";
import img5 from "../../assets/featured_photos/img_5.png";
import leftArrow from "../../assets/featured_photos/left_arrow.png";
import model from "../../assets/featured_photos/model.png";
import egypt from "../../assets/featured_photos/egypt_mummies.png";
import statue from "../../assets/featured_photos/statue.png";

const Featured = () => {
  return (
    <section className="text-[#333333]">
      <h2 className="font-medium text-[48px] mt-[4em] pb-[35px] border-solid border-b-[#333333] border-b-[0.5px]">
        Featured products
      </h2>
      <div className="grid grid-cols-2 gap-x-10 py-12">
        <div>
          <img
            src={model}
            alt="girl model"
            className="object-contain w-full h-full"
          />
        </div>
        <div>
          <h2 className="font-bold text-[40px]">The Boolean Egyptian</h2>
          <p className="py-8 w-[90%] font-normal text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <article className="flex flex-row h-[40px] items-center justify-between">
            <article className="flex flex-row h-[40px] items-center gap-2">
              <img src={img1} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img2} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img3} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img4} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img5} alt="" className=" w-[51px] h-[51px]" />
              <p className="font-medium text-[24px]">64 major creators</p>
            </article>
            <button className="w-[78px] h-[78px] rounded-[50%] border-solid border-[#333333] border-[0.5px] px-4">
              <img src={leftArrow} alt="left_arrow" />
            </button>
          </article>
        </div>
      </div>
      <div className="grid grid-cols-2  py-12 border-solid  border-t-[0.5px] sm:grid-cols-1 gap-y-10 ">
        <div>
          <h2 className="font-bold text-[40px]">The Boolean Egyptian</h2>
          <p className="py-8 w-[90%] font-normal text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <article className="flex flex-row h-[40px] items-center justify-between">
            <article className="flex flex-row h-[40px] items-center gap-2">
              <img src={img1} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img2} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img3} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img4} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img5} alt="" className=" w-[51px] h-[51px]" />
              <p className="font-medium text-[24px]">64 major creators</p>
            </article>
            <button className="w-[78px] h-[78px] rounded-[50%] border-solid border-[#333333] border-[0.5px] px-4">
              <img src={leftArrow} alt="left_arrow" />
            </button>
          </article>
        </div>
        <div className="pl-8 sm:pl-0">
          <img
            src={egypt}
            alt="girl model"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-10 py-12 border-solid border-t-[#333333] border-t-[0.5px]">
        <div>
          <img
            src={statue}
            alt="girl model"
            className="object-contain w-full h-full"
          />
        </div>
        <div>
          <h2 className="font-bold text-[40px]">The Boolean Egyptian</h2>
          <p className="py-8 w-[90%] font-normal text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <article className="flex flex-row h-[40px] items-center justify-between">
            <article className="flex flex-row h-[40px] items-center gap-2">
              <img src={img1} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img2} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img3} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img4} alt="" className="mr-[-20px] w-[51px] h-[51px]" />
              <img src={img5} alt="" className=" w-[51px] h-[51px]" />
              <p className="font-medium text-[24px]">64 major creators</p>
            </article>
            <button className="w-[78px] h-[78px] rounded-[50%] border-solid border-[#333333] border-[0.5px] px-4">
              <img src={leftArrow} alt="left_arrow" />
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Featured;
