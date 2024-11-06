import AboutPage from "@/app/(WithCommonLayout)/(user)/user/dashboard/about/page";
import { Tabs, Tab } from "@nextui-org/react";

export default function ProfileTap() {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        className="text-red-400"
        key={"light"}
        variant={"light"}
        aria-label="Tabs variants"
      >
        <Tab key="profile" title="Profile">
          <AboutPage />
        </Tab>
        <Tab key="music" title="Music" />
        <Tab key="videos" title="Videos" />
      </Tabs>
    </div>
  );
}
