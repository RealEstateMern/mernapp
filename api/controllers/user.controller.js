import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  //   console.log("test");
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get users" });
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  //   console.log(id);
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update users" });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserID = req.userID;
  const { password, avatar, ...inputs } = req.body;

  if (id !== tokenUserID) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  let updatedPassword = null;
  try {
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }),
        ...(avatar && { avatar }),
      },
    });

    const { password: userPassword, ...rest } = updatedUser;
    res.status(200).json(rest);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update user" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserID = req.userID;

  if (id !== tokenUserID) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  try {
    await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get users" });
  }
};

export const savePost = async (req, res) => {
  const postId = req.body.postId;
  const tokenUserID = req.userID;

  // if (id !== tokenUserID) {
  //   return res.status(403).json({ message: "Not Authorized" });
  // }

  try {
    const savedPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserID,
          postId,
        },
      },
    });

    if (savedPost) {
      await prisma.savedPost.delete({
        where: {
          id: savedPost.id,
        },
      });
      res.status(200).json({ message: "UPost removed from saved user list" });
    } else {
      await prisma.savedPost.create({
        data: {
          userId: tokenUserID,
          postId,
        },
      });
      res.status(200).json({ message: "Post saved successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get users" });
  }
};

export const profilePosts = async (req, res) => {
  const tokenUserId = req.params.userID;
  console.log(tokenUserId);
  try {
    const userPosts = await prisma.post.findMany({
      where: { userId: tokenUserId },
    });
    const saved = await prisma.savedPost.findMany({
      where: { userId: tokenUserId },
      include: {
        post: true,
      },
    });

    const savedPosts = saved.map((item) => item.post);
    res.status(200).json({ userPosts, savedPosts });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Failed to get profile posts", error: err });
  }
};
