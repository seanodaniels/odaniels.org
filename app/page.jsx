import HomeRegular from "./home/page";
import siteTitle from "@/data/siteTitle";
export const metadata = {
  title:
    `Home || ${siteTitle.title}`,
};
export default function Home() {
  // return <Preview />;
  return <HomeRegular />;

}
