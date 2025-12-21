import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import EnrolledCourses from "./_components/EnrolledCourses";
import ExploreMore from "./_components/ExploreMore";
import InviteFriend from "./_components/InviteFriend";
import UserStatus from "./_components/UserStatus";
import UpgradeToPro from "./_components/UpgradeToPro";
import ExploreMoreCourse from "./_components/ExploreMoreCourse";
const Dashboard = () => {
  return (
    <div className="p-10 md:px-20 lg:px-36 xl:pg-48">
      <div className="grid grid-cols-3 gap-7">
        <div className="col-span-2">
          <WelcomeBanner />
          <EnrolledCourses />
          <ExploreMoreCourse />
          <ExploreMore />
          <InviteFriend />
        </div>
        <div>
          <UserStatus />
          <UpgradeToPro />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
