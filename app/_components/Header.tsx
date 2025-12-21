"use client";

import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { useParams, usePathname } from "next/navigation";
import axios from "axios";
import { Course } from "../(routes)/courses/_components/CourseList";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const { user } = useUser();
  const path = usePathname();
  const [courses, setCourses] = useState<Course[]>();
  const { exerciseslug } = useParams();
  useEffect(() => {
    GetCourses();
  }, []);

  const GetCourses = async () => {
    const result = await axios.get("/api/course");
    setCourses(result.data);
  };

  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full">
      <div className="flex gap-2 items-center">
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        <h2 className="font-bold text-3xl font-game">CodeBox</h2>
      </div>
      {!exerciseslug && courses ? (
        <NavigationMenu>
          <NavigationMenuList className=" gap-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]">
                  {courses.map((course, index) => (
                    <Link href={`/courses/${course?.id}`} key={index}>
                      <div
                        key={index}
                        className="p-2 hover:bg-accent rounded-xl cursor-pointer"
                      >
                        <h2 className="font-medium">{course.title}</h2>
                        <p className="text-xs text-gray-400">{course.desc}</p>
                      </div>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/contact-us">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <h2 className="text-2xl">
          {exerciseslug?.toString().replace("-", " ").toUpperCase()}
        </h2>
      )}
      {!user ? (
        <Link href="/sign-up">
          <Button className="font-game text-2xl" variant="pixel">
            Signup
          </Button>
        </Link>
      ) : (
        <div className="flex gap-4 items-center">
          <Link href="/dashboard">
            <Button className="font-game text-2xl" variant="pixel">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      )}
    </div>
  );
};

export default Header;
