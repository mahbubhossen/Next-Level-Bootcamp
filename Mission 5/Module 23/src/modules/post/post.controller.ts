import { NextFunction, Request, Response } from "express";
import { PostStatus } from "../../../generated/prisma/client";
import paginationSortingHelper from "../../helpers/paginationSortingHelper";
import { UserRole } from "../../middlewares/auth";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({
        error: "unAuthorized",
      });
    }
    const result = await postService.createPost(req.body, user.id as string);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    const searchString = typeof search === "string" ? search : undefined;
    const tags = req.query.tags ? (req.query.tags as string).split(",") : [];

    // true or false
    const isFeatured = req.query.isFeatured
      ? req.query.isFeatured === "true"
        ? true
        : req.query.isFeatured === "false"
          ? false
          : undefined
      : undefined;

    const status = req.query.status as PostStatus | undefined;

    const authorId = req.query.authorId as string | undefined;

    const { page, limit, skip, sortBy, sortOrder } = paginationSortingHelper(
      req.query,
    );

    const result = await postService.getAllPost({
      search: searchString,
      tags,
      isFeatured,
      status,
      authorId,
      page,
      limit,
      skip,
      sortBy,
      sortOrder,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: "Post Creation failed",
      details: error,
    });
  }
};

const getPostById = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    // if (!postId) {
    //   throw new Error("Post id is required");
    // }
    const result = await postService.getPostById(postId as string);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: "Post Creation failed",
      details: error,
    });
  }
};

const getMyPosts = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      throw new Error(" you are unAuthorized");
    }

    const result = await postService.getMyPosts(user?.id as string);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Post  fetched  failed",
      details: error,
    });
  }
};

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user;
    if (!user) {
      throw new Error(" you are unAuthorized");
    }

    const { postId } = req.params;
    const isAdmin = user.role === UserRole.ADMIN;
    const result = await postService.updatePost(
      postId as string,
      req.body,
      user?.id as string,
      isAdmin,
    );
    res.status(200).json(result);
  } catch (error: any) {
    next(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      throw new Error(" you are unAuthorized");
    }

    const { postId } = req.params;
    const isAdmin = user.role === UserRole.ADMIN;
    const result = await postService.deletePost(
      postId as string,
      user?.id as string,
      isAdmin,
    );
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({
      error: error.message || "Post   delete   failed",
      details: error,
    });
  }
};

const getStats = async (req: Request, res: Response) => {
  try {
    const result = await postService.getStats();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({
      error: error.message || "Stats fetched failed ",
      details: error,
    });
  }
};

export const PostController = {
  createPost,
  getAllPost,
  getPostById,
  getMyPosts,
  updatePost,
  deletePost,
  getStats,
};
