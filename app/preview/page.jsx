import dynamic from "next/dynamic";
import Preview from "@/components/preview";
import siteTitle from "@/data/siteTitle";

export const metadata = {
  title:
    `Preview || ${siteTitle.title}`,
};
const PreviewPage = () => {
  return (
    <>
      {/* End Head for Seo */}

      <Preview />
      {/* End preview page */}
    </>
  );
};

export default dynamic(() => Promise.resolve(PreviewPage), { ssr: false });
