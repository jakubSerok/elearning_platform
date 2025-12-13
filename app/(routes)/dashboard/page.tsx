import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import EnrolledCourses from "./_components/EnrolledCourses";
import ExploreMore from "./_components/ExploreMore";
const Dashboard = () => {
  return (
    <div className="p-10 md:px-20 lg:px-36 xl:pg-48">
      <div className="grid grid-cols-3 gap-7">
        <div className="col-span-2">
          <WelcomeBanner />
          <EnrolledCourses />
          <ExploreMore />
        </div>
        <div>Right</div>
      </div>
    </div>
  );
};

export default Dashboard;
