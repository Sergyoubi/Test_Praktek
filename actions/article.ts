"use server";
import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
type Data = {
  title: string;
  description: string;
};

export const createArticle = async ({ title, description }: Data) => {
  try {
    const user = await currentUser();
    if (!user) return { status: 403 };

    const newArticle = await db.article
      .create({
        data: {
          title: title,
          details: description,
          userId: user.id,
        },
      })
      .catch((error) => {
        console.error("Prisma Error:", error);
      });

    if (newArticle) {
      return { status: 201, message: "Article created" };
    }
    return { status: 403, error: "Error Creating article" };
  } catch (error) {
    return {
      status: 500,
      error: `Error creating article: ${error}`,
    };
  }
};
