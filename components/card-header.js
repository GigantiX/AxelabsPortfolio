const CardHeader = () => {
  return (
    <header
      className="self-stretch overflow-hidden flex flex-row items-center justify-between pt-[0rem] px-[6.25rem] pb-[2.5rem] z-[4] text-center text-[1.13rem] text-white font-open-sans sm:gap-[0rem] sm:pl-[1.25rem] sm:pr-[0.63rem] sm:box-border"
      id="NavBar"
    >
      <img
        className="relative w-[9rem] h-[2rem] object-cover lg:w-[9rem] md:w-[6.25rem] md:h-full sm:w-[6.25rem] sm:h-full"
        alt=""
        src="/logo-axelabs-white-v2-1@2x.png"
      />
      <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[1.88rem]">
        <b className="relative text-yellow sm:hidden">Home</b>
        <div className="relative font-medium sm:hidden">Contact Me</div>
        <div className="relative font-medium sm:hidden">Portfolio</div>
        <div className="flex flex-row items-center justify-center py-[0.81rem] px-[1.81rem] text-left sm:hidden">
          <div className="relative font-medium">Download CV</div>
        </div>
        <img
          className="relative w-[3.75rem] h-[3.75rem] overflow-hidden shrink-0 hidden sm:flex sm:w-[3rem]"
          alt=""
          src="/hamburgermenu-svgrepocom.svg"
        />
      </div>
    </header>
  );
};

export default CardHeader;
