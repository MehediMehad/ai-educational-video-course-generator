import { db } from "@/config/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { usersTable } from "@/config/schema";

// create new user in DB
export async function POST(req: NextRequest) {
    const user = await currentUser();

    // if user already exists in DB
    const users = await db.select().from(usersTable).where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress as string));

    // if user does not exist in DB
    if (users.length === 0) {
        const users = await db.insert(usersTable).values({
            name: user?.firstName as string,
            email: user?.primaryEmailAddress?.emailAddress as string,
            credits: 2
        }).returning();

        return NextResponse.json(users[0]);
    }

    return NextResponse.json(users[0]); // user already exists
}