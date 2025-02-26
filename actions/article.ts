"use server";
import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
type Data = {
  articleTitle: string;
  articleDescription: string;
};

export const createArticle = async ({
  articleTitle,
  articleDescription,
}: Data) => {
  try {
    const authenticatedUser = await currentUser();
    if (!authenticatedUser) return { status: 401 };

    const user = await db.user.findUnique({
      where: {
        clerkid: authenticatedUser?.id,
      },
    });

    if (!user) return { status: 404 };

    const newArticle = await db.article.create({
      data: {
        title: articleTitle,
        details: articleDescription,
        userId: user.id,
      },
    });

    if (newArticle) {
      revalidatePath("/dashboard");
      return { status: 201, message: "Article created" };
    }

    return { status: 403, error: "Error Creating article" };
  } catch (error) {
    //console.error("Error creating article:", error.message);
    return {
      status: 500,
      error: "Error creating article",
    };
  }
};

export const getAllArticles = async () => {
  try {
    const authenticatedUser = await currentUser();
    if (!authenticatedUser) return { status: 401 };

    const user = await db.user.findUnique({
      where: {
        clerkid: authenticatedUser?.id,
      },
    });
    if (!user) return { status: 404 };

    const listOfArticles = await db.article.findMany({
      where: {
        userId: user.id,
      },
    });
    if (listOfArticles) {
      return { status: 200, data: listOfArticles };
    }

    return { status: 403 };
  } catch (error) {
    //console.error("Error fetching articles:", error.message);
    return {
      status: 500,
      error: "Error fetching article:",
    };
  }
};

export const getArticleDetail = async (params: string) => {
  try {
    const authenticatedUser = await currentUser();
    if (!authenticatedUser) return { status: 401 };

    const article = await db.article.findUnique({
      where: {
        id: params,
      },
    });

    return { status: 200, article: article };
  } catch (error) {
    //console.error("Error fetching articles:", error.message);
    return {
      status: 500,
      error: "Error fetching article:",
    };
  }
};
