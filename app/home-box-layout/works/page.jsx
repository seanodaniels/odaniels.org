import dynamic from "next/dynamic";
import SidebarInfo from "@/components/about/about2/SidebarInfo";
import HeaderTwoNavigation from "@/components/header/HeaderTwoNavigation";
import HeaderTwo from "@/components/header/HeaderTwo";
import Footer from "@/components/footer/Footer";
import Works2 from "@/components/works/Works2";
import siteTitle from "@/data/siteTitle";

export const metadata = {
  title:
    `Works || ${siteTitle.title}`,
};
const index = () => {
  return (
    <section className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      {/* End Head for Seo */}

      <HeaderTwo />
      {/* End header */}

      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
          {/* profile sidebar */}
          <SidebarInfo />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <HeaderTwoNavigation />

          <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <div data-aos="fade">
              <div className="container mb-8   px-4 sm:px-5 md:px-10 lg:px-[60px]">
                <div className="py-12">
                  <h2 className="after-effect  after:left-48 mt-12  lg:mt-0">
                    Portfolio
                  </h2>
                  <Works2 />
                </div>
              </div>
              {/* End Portfolio */}

              <Footer />
              {/* Common Footer call here */}
            </div>
            {/* End fade */}
          </div>
          {/* End common-wrap */}
        </div>
      </div>
      {/* End main continer */}
    </section>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
