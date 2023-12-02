import { Typewriter, Cursor } from "react-simple-typewriter";

const ContainerBiodataHeaders = () => {

  return (
    <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center pt-10 px-[6.25rem] pb-[2.44rem] z-[5] text-left text-[1.5rem] text-white font-open-sans sm:py-[3rem] sm:px-[2rem] sm:pt-[4rem] md:pt-[5rem] sm:box-border">
      <div className="flex-1 flex flex-col items-start justify-center gap-[0.06rem] min-w-[24.38rem] z-[1]">
        <div className="relative font-medium lg:font-medium lg:font-open-sans sm:text-[1rem]">
          Hey, I’am
        </div>
        <b className="self-stretch relative text-[3.75rem] sm:text-[2.5rem]">
          Axel Ganendra
        </b>
        <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[0.44rem] px-[0rem] pb-[0.88rem] gap-[0.5rem]">
          <div className="relative font-medium sm:text-[1rem]">a</div>
          <div className="flex flex-row items-start justify-start text-gold sm:text-[1rem]">
            <div className="relative font-medium">
              <span><Typewriter words={['Mobile Developer','Front-end Developer']} loop={0}/></span>
              <Cursor cursorStyle='|' cursorColor='yellow'/>
            </div>
          </div>
          <div className="relative font-medium sm:text-[1rem]">
            from Indonesia
          </div>
        </div>
        <div className="w-full relative text-[1.13rem] tracking-[0.02em] text-paragraph inline-block max-w-[39.69rem] sm:text-[1rem]">
          Blending code and creativity, I dedicated to create a modern
          interfaces that not only look stunning but also deliver seamless
          interactions.
        </div>
        <div className="overflow-hidden flex flex-row flex-wrap items-center justify-start pt-[1.25rem] px-[0rem] pb-[0rem] gap-[1.19rem] text-[1.13rem]">
          <div className="relative w-[10.94rem] h-[3.13rem]">
            <header className="absolute top-[0rem] left-[0rem] w-[10.94rem] h-[3.13rem]" />
            <div className="absolute top-[0.81rem] left-[1.13rem] font-medium sm:text-[1rem]">
              Learn more
            </div>
            <img
              className="absolute top-[0.94rem] left-[8.81rem] w-[0.78rem] h-[1.18rem]"
              alt=""
              src="/vector.svg"
            />
          </div>
          <img
            className="relative w-[1.94rem] h-[1.94rem]"
            alt=""
            src="/github-btn.svg"
          />
          <img
            className="relative w-[1.77rem] h-[1.77rem]"
            alt=""
            src="/ig-btn.svg"
          />
          <img
            className="relative w-[2.81rem] h-[2.81rem] overflow-hidden shrink-0"
            alt=""
            src="/linkedin-btn.svg"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-center min-w-[29.13rem] z-[0]">
        <img
          className="relative w-[26.44rem] h-[26.44rem] object-cover"
          alt=""
          src="/axelabs-pic-1@2x.png"
        />
      </div>
    </div>
  );
};

export default ContainerBiodataHeaders;
