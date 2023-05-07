import HeroBanner from "../components/HeroBanner";
import Wrapper from "../components/Wrapper";

const home = () => {
  return (
    <div>
      <HeroBanner />
      <Wrapper>
        {/* heading paragraph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Nike Unveils Revolutionary
          </div>
          <div className="text-md md:text-xl">
            Nike has done it again, pushing the boundaries of shoe design with their latest release. Nike has done it again.
          </div>
        </div>
        {/* heading paragraph end */}
      </Wrapper>
    </div>
  );
};

export default home;
