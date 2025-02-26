import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 403 };
    }

    const currentUSer = await db.user.findUnique({
      where: {
        clerkid: user.id,
      },
    });

    if (currentUSer) {
      return { status: 200, user: currentUSer };
    }

    //if no currentUSer, create one
    const newUser = await db.user.create({
      data: {
        clerkid: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstname: user.firstName,
        lastname: user.lastName,
      },
    });

    if (newUser) {
      return { status: 201, user: newUser };
    }

    return { status: 400, error: "Error creating user" };
  } catch (error) {
    return {
      status: 500,
      error: `Error from onAuthenticateUser()! Error: ${error}`,
    };
  }
};
