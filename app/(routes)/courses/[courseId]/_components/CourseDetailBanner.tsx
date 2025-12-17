"use client";

import React, { useState } from "react";
import { Course } from "../../_components/CourseList";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { tr } from "date-fns/locale";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";
type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
  refreshData: () => void;
};
const CourseDetailBanner = ({ loading, courseDetail, refreshData }: Props) => {
  const [loading_, setLoading_] = useState(false);

  const EnrollCourse = async () => {
    setLoading_(true);
    const result = await axios.post("/api/enroll-course", {
      courseId: courseDetail?.courseId,
    });
    toast.success("Cours Enrolled");
    refreshData();
    setLoading_(false);
  };
  return (
    <div>
      {!courseDetail ? (
        <Skeleton className="w-full h-[300px]" />
      ) : (
        <div className="relative">
          <Image
            src={courseDetail?.bannerImage}
            width={1400}
            height={300}
            alt={`${courseDetail?.title} banner`}
            className="w-full h-[350px] object-cover"
          />
          <div className="font-game  absolute top-0 pt-24 p-20 md:px-24 lg:px-36 bg-linear-to-r from-black/80 to-white/50 h-full">
            <h2 className="text-6xl">{courseDetail?.title}</h2>
            <p className="text-3xl text-gray-300 mt-4">{courseDetail?.desc}</p>
            {!courseDetail?.userEnrolled ? (
              <Button
                className="text-2xl mt-7"
                variant={"pixel"}
                size={"lg"}
                onClick={EnrollCourse}
                disabled={loading_}
              >
                {loading_ && <Loader2Icon className="animate-spin" />}
                Enroll Now
              </Button>
            ) : (
              <Button className="text-2xl mt-7" size={"lg"} variant={"pixel"}>
                Continue Learning..
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailBanner;
