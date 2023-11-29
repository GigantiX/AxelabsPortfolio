const TechContainer = () => {
  return (
    <div className="self-stretch [background:linear-gradient(267.91deg,_rgba(97,_97,_97,_0.41),_rgba(60,_60,_60,_0.19))] [backdrop-filter:blur(37px)] overflow-hidden flex flex-col items-center justify-center py-[1.81rem] px-[3.44rem] gap-[1.63rem] z-[6] text-left text-[1.88rem] text-silver font-open-sans sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
      <b className="relative">Tech</b>
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center py-[0rem] px-[3.75rem] gap-[7.75rem] text-[1.25rem] text-white">
        <div className="flex-1 flex flex-col items-center justify-center gap-[1.56rem]">
          <img
            className="relative w-[4.38rem] h-[4.38rem] object-cover"
            alt=""
            src="/flutter-1@2x.png"
          />
          <div className="relative font-medium">Flutter</div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-[1.56rem]">
          <img
            className="relative w-[3.23rem] h-[4.38rem] object-cover"
            alt=""
            src="/java-1@2x.png"
          />
          <div className="relative font-medium">Java</div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[0.63rem]">
          <img
            className="relative w-[5.83rem] h-[4.38rem] object-cover"
            alt=""
            src="/figma-1@2x.png"
          />
          <div className="relative font-medium">Figma</div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-[1.56rem]">
          <img
            className="relative w-[4.38rem] h-[4.38rem] object-cover"
            alt=""
            src="/html-1@2x.png"
          />
          <div className="relative font-medium">HTML</div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-[1.56rem]">
          <img
            className="relative w-[4.38rem] h-[4.38rem] object-cover"
            alt=""
            src="/reactjs-1@2x.png"
          />
          <div className="relative font-medium">React JS</div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-[1.56rem]">
          <img
            className="relative w-[3.16rem] h-[4.38rem] object-cover"
            alt=""
            src="/css-1@2x.png"
          />
          <div className="relative font-medium">CSS</div>
        </div>
      </div>
    </div>
  );
};

export default TechContainer;
