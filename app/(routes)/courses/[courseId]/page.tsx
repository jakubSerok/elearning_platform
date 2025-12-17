"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CourseDetailBanner from "./_components/CourseDetailBanner";
import CourseChapters from "./_components/CourseChapters";
import CourseStatus from "./_components/CourseStatus";
import axios from "axios";
import { Course } from "../_components/CourseList";
import UpgradeToPro from "../../dashboard/_components/UpgradeToPro";
import CommunityHelpSection from "./_components/CommunityHelpSection";

type courseDetailType = {};

const CourseDetail = () => {
  const { courseId } = useParams();
  const [courseDetail, setCourseDetail] = useState<Course>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    courseId && GetCourseDetail();
  }, [courseId]);

  const GetCourseDetail = async () => {
    setLoading(true);
    const result = await axios.get("/api/course?courseId=" + courseId);
    setCourseDetail(result?.data);
    setLoading(false);
  };

  return (
    <div>
      <CourseDetailBanner
        loading={loading}
        courseDetail={courseDetail}
        refreshData={() => GetCourseDetail()}
      />
      <div className="grid grid-cols-3 gap-7 p-10 md:px-24 lg:px-36">
        <div className="col-span-2">
          <CourseChapters loading={loading} courseDetail={courseDetail} />
        </div>
        <div>
          <CourseStatus courseDetail={courseDetail} />
          <UpgradeToPro />
          <CommunityHelpSection />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
