import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  const users = await db
    .select()
    .from(usersTable)
    //@ts-ignore
    .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));
  if (users?.length <= 0) {
    const newUser = {
      name: user?.fullName ?? "",
      email: user?.primaryEmailAddress?.emailAddress ?? "",
      points: 0,
    };
    const result = await db.insert(usersTable).values(newUser).returning();

    return NextResponse.json(result[0]);
  }
  return NextResponse.json(users[0]);
}
