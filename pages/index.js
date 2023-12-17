// import CardHeader from "../components/card-header";
import ContainerBiodataHeaders from "../components/container-biodata-headers";
import TechContainer from "../components/tech-container";
import Navbar from "../components/navbar";

const ResponsiveLandingPage = () => {
  return (
    <div className="relative bg-gray-100 w-full overflow-hidden flex flex-col items-start justify-start px-[0rem] pb-[0rem] box-border text-left text-[1rem] text-white font-open-sans sm:box-border">
      <div className="absolute my-0 mx-[!important] top-[9.13rem] left-[-13.75rem] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_194,_46,_0.37),_rgba(255,_194,_46,_0))] w-[22.63rem] h-[23.06rem] z-[0]" />
      <div className="absolute my-0 mx-[!important] top-[34.19rem] right-[-8.25rem] rounded-[50%] [background:linear-gradient(155.09deg,_rgba(59,_2,_131,_0.84),_rgba(47,_0,_106,_0))] w-[28.94rem] h-[28.94rem] z-[1]" />
      <div className="absolute my-0 mx-[!important] top-[42.16rem] left-[-4.01rem] rounded-[50%] [background:linear-gradient(155.09deg,_rgba(145,_4,_148,_0.48),_rgba(47,_0,_106,_0))] w-[19.24rem] h-[19.45rem] [transform:_rotate(-14.88deg)] [transform-origin:0_0] z-[2]" />
      <div className="absolute my-0 mx-[!important] top-[-13.75rem] right-[-18.62rem] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(67,_97,_238,_0.32),_rgba(67,_97,_238,_0))] w-[40.19rem] h-[41rem] z-[3]" />
      <Navbar />
      <ContainerBiodataHeaders />
      <TechContainer />
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[1.44rem] px-[0rem] gap-[0.63rem] z-[7]">
        <div className="relative text-[1.88rem] font-semibold">My Projects</div>
        <div className="self-stretch [background:linear-gradient(99.48deg,_#9edd18,_#00cb8e)] overflow-hidden flex flex-row flex-wrap items-start justify-center py-[2.63rem] px-[3.94rem] gap-[2.5rem] text-darkslategray-100">
          <img
            className="relative w-[42.86rem] h-[25.67rem] object-cover sm:flex-1 sm:self-stretch sm:h-auto sm:max-w-[30rem]"
            alt=""
            src="/screenshot-20231109-023745-1@2x.png"
          />
          <div className="flex-1 h-[21.8rem] overflow-hidden flex flex-col items-start justify-between p-[0.63rem] box-border min-w-[25.13rem] max-w-[30.06rem]">
            <b className="relative text-[2.56rem] inline-block w-[24.56rem]">
              BlueJack Pharmacy
            </b>
            <b className="relative text-[1.25rem]">E-Commerce for Pharmacy</b>
            <div className="self-stretch relative">
              Our group made a project for the semester assignment by creating
              an ecommerce application for bluejack pharmacy. We used native
              Java language to create the application and retrieved JSON data
              from the website using REST API technique.
            </div>
            <div className="self-stretch relative">
              I also used LottieFiles for a few animations in app.
            </div>
            <div className="overflow-hidden flex flex-row flex-wrap items-start justify-start py-[0rem] px-[0.31rem] gap-[0.94rem] text-center text-black">
              <div className="rounded-2xs bg-lightgray overflow-hidden flex flex-col items-start justify-start py-[0.81rem] px-[1.31rem]">
                <div className="relative">Mobile Developer</div>
              </div>
              <div className="rounded-2xs bg-lightgray overflow-hidden flex flex-col items-start justify-start py-[0.81rem] px-[1.31rem]">
                <div className="relative">JAVA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch [background:linear-gradient(99.48deg,_#f4d538,_#fc9e47)] overflow-hidden flex flex-row flex-wrap items-start justify-center py-[2.63rem] px-[3.94rem] gap-[2.5rem] text-darkslategray-200">
          <img
            className="relative w-[46.63rem] h-[32.94rem] object-cover sm:w-full sm:h-full sm:max-w-[30rem] sm:flex-1"
            alt=""
            src="/homepage-1@2x.png"
          />
          <div className="flex-1 h-[27.69rem] overflow-hidden flex flex-col items-start justify-between p-[0.63rem] box-border min-w-[25.13rem] max-w-[30.06rem]">
            <b className="relative text-[2.81rem]">Gamers Paredise</b>
            <b className="relative text-[1.25rem]">Internet Cafe Website</b>
            <div className="self-stretch relative">{`Gamers paredise is a modern internet cafe in South Jakarta that has many facilities for gamers, a cafe and various tournament events. `}</div>
            <div className="self-stretch relative">
              Because the owner of the place wants to have a website, my friend
              aymeric collaborated with me to create a website that is modern,
              attractive and has a similar concept to the place. This website
              has some information about the internet cafe such as seat rental
              prices, facilities, restaurant menu, and upcoming tournament
              events. In the future, this website will also facilitate online
              booking.
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start py-[0rem] px-[0.31rem] text-center text-white">
              <div className="rounded-2xs bg-gray-200 overflow-hidden flex flex-col items-start justify-start py-[0.81rem] px-[1.31rem]">
                <div className="relative">UI/UX</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch [background:linear-gradient(99.48deg,_#35bbca,_#5002b3)] overflow-hidden flex flex-row flex-wrap items-start justify-center py-[2.63rem] px-[3.94rem] gap-[2.5rem]">
          <img
            className="relative w-[38.75rem] h-[21.71rem] object-cover sm:w-full sm:max-w-full sm:h-auto"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="flex-1 h-[21.71rem] overflow-hidden flex flex-col items-start justify-between p-[0.63rem] box-border min-w-[25.13rem] max-w-[30.06rem]">
            <b className="relative text-[2.81rem]">HE Fish</b>
            <b className="relative text-[1.25rem]">
              E-Commerce for Ornamental Fish
            </b>
            <div className="self-stretch relative">
              Our group made a project for the semester assignment by creating
              an application that facilitates selling ornamental fish online. We
              used Dart language and Flutter framework to create the
              application, Express JS to create API and MySQL as a database.
            </div>
            <div className="self-stretch relative">
              I also used LottieFiles for a few animations in app.
            </div>
            <div className="overflow-hidden flex flex-row items-start justify-start py-[0rem] px-[0.31rem] gap-[0.94rem] text-center text-black">
              <div className="rounded-2xs bg-lightgray overflow-hidden flex flex-col items-start justify-start py-[0.81rem] px-[1.31rem]">
                <div className="relative">Mobile Developer</div>
              </div>
              <div className="rounded-2xs bg-lightgray overflow-hidden flex flex-col items-start justify-start py-[0.81rem] px-[1.31rem]">
                <div className="relative">Flutter</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch [background:linear-gradient(99.48deg,_#8952ff,_#41128e)] overflow-hidden flex flex-row flex-wrap items-start justify-center py-[2.63rem] px-[3.94rem] gap-[2.5rem]">
          <img
            className="relative w-[38.75rem] h-[27.66rem] object-cover sm:max-w-full sm:h-auto"
            alt=""
            src="/rareskills-hp-1@2x.png"
          />
          <div className="flex-1 h-[27.66rem] overflow-hidden flex flex-col items-start justify-between p-[0.63rem] box-border min-w-[25.13rem] max-w-[30.06rem]">
            <b className="relative text-[2.81rem]">Rareskills</b>
            <b className="relative text-[1.25rem]">Web 3.0 Gas Contest</b>
            <div className="self-stretch relative">
              RareSkills is a graduate school of web3 engineering. We focus on
              teaching both timeless foundational theoretical concepts and the
              rapidly changing techniques and technologies for which there is
              little to no documentation. RareSkills also works with blockchain
              technology companies seeking talent recruitment, in-house
              developer training, and the creation of compelling developer
              resources.
            </div>
            <div className="self-stretch relative">
              Same as before, my friend aymeric collaborated with me to create a
              modern website, dark theme based, and futuristic.
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start py-[0rem] px-[0.31rem] text-center text-black">
              <div className="rounded-2xs bg-lightgray overflow-hidden flex flex-col items-start justify-start py-[0.81rem] px-[1.31rem]">
                <div className="relative">UI/UX</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch [background:linear-gradient(99.48deg,_#fdd46b,_#e66d11)] overflow-hidden flex flex-row flex-wrap items-start justify-center py-[2.63rem] px-[3.94rem] gap-[2.5rem]">
          <img
            className="relative w-[42.73rem] h-[28.73rem] object-cover sm:max-w-full sm:h-auto"
            alt=""
            src="/image-1@2x.png"
          />
          <div className="flex-1 h-[24.75rem] overflow-hidden flex flex-col items-start justify-between p-[0.63rem] box-border min-w-[25.13rem] max-w-[30.06rem]">
            <b className="relative text-[2.81rem]">DM Pro</b>
            <b className="relative text-[1.25rem]">
              DIgital Marketing Property Academy
            </b>
            <div className="self-stretch relative">
              DM Pro (Digital Marketing Property Academy) by DIVI Event
              Organiser is a mentorship product with mentors to focus on
              learning property marketing digitally. The team from DIVI EO and I
              created a Landing Page website that is fast and easy to understand
              by the property market.
            </div>
            <div className="self-stretch relative">
              I used wordpress and elementor to make the website fast, and used
              OrderOnline as payment gateway.
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start py-[0rem] px-[0.31rem] text-center text-black">
              <div className="rounded-2xs bg-lightgray overflow-hidden flex flex-col items-start justify-start py-[0.81rem] px-[1.31rem]">
                <div className="relative">Full-stack Web Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLandingPage;
