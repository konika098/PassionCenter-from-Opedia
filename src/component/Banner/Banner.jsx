import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="flex text-white gap-14 items-center   justify-center mx-auto">
        <div className="w-[625px] h-[429px]">
          <h1 className="font-bold text-[64px] leading-[83.2px]">
            Experience the Power of <span  className="text-[#F7550E]">Unified Prayer</span>
          </h1>
          <p  className="leading-[28px] text-xl mt-6 mb-12">
            Join the 3rd Day resurrection global prayer portal as we pursue
            God's presence and unlock the impossible!
          </p>
          <button className="px-[32px] py-[14px] rounded-lg bg-[#F7550E] text-[#FFFFFF] border-none text-lg font-medium">Contact Now</button>
        </div>
        <div>
          <img className="w-[738px] h-[481px]" src="https://i.ibb.co/kQHF9h7/banner.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
