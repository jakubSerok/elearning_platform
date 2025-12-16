"use client";

import React from "react";
import { Course } from "../../_components/CourseList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
};
const CourseChapters = ({ loading, courseDetail }: Props) => {
  return (
    <div>
      {courseDetail?.chapters?.length === 0 ? (
        <div>
          <Skeleton className="w-full h-[100px] rounded-xl " />
          <Skeleton className="w-full mt-5 h-[100px] rounded-xl " />
        </div>
      ) : (
        <div className="p-5 border-4 rounded-2xl">
          {courseDetail?.chapters?.map((chapter, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="p-3 hover:bg-zinc-800 font-game text-4xl">
                  <div className="h-12 w-12  flex items-center justify-center rounded-full bg-zinc-800">
                    {index + 1}
                  </div>
                  {chapter?.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-7 bg-zinc-900 rounded-xl">
                    {chapter?.exercises.map((exc, indexExc) => (
                      <div className="flex items-center justify-between mb-7">
                        <div className="flex font-game items-center gap-10">
                          <h2 key={indexExc} className="text-2xl">
                            Exercise{" "}
                            {index * chapter?.exercises.length + indexExc + 1}
                          </h2>
                          <h2 className="text-2xl">{exc?.name} </h2>
                        </div>
                        <Button variant={"pixel"}>{exc?.xp} xp</Button>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant={"pixelDisabled"}>???</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-game text-lg">
                              Please Enroll first
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseChapters;
