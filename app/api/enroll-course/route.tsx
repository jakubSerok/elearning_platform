import { NextRequest, NextResponse } from "next/server";
import { EnrolledCourse } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/config/db";

export async function POST(req: NextRequest) {
  const { courseId } = await req.json();
  const user = await currentUser();

  const result = await db
    .insert(EnrolledCourse)
    .values({
      courseId: courseId,
      userId: user?.primaryEmailAddress?.emailAddress,
      xpEarned: 0,
    })
    .returning();

  return NextResponse.json(result);
}
