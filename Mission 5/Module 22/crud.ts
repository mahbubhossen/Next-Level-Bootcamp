import { prisma } from "./lib/prisma";

async function run() {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       name: "jhankar mahbub",
  //       email: "jkr@prisma.com",
  //     },
  //   });
  //   console.log("Creted user: ", createUser);
  // create post for user id = 1
  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: "This is title!",
  //       content: "This is a big content!",
  //       authorId: 1,
  //     },
  //   });
  //   console.log("Created post: ", createPost);
  // create profile
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "I am a developer",
  //       userId: 1,
  //     },
  //   });
  //   console.log("Created profile: ", createProfile);

  // retrieve all user

  //   const users = await prisma.user.findMany({
  //     // include: {
  //     //   posts: true,
  //     //   profile: true,
  //     // },

  //     select: {
  //       id: true,
  //       name: true,
  //       email: true,
  //       posts: true,
  //       profile: true,
  //     },
  //   });
  //   console.dir(users, { depth: Infinity });

  // update user data
  //   const updateUser = await prisma.profile.update({
  //     where: {
  //       userId: 1,
  //     },
  //     data: {
  //       bio: "I am a vibeCoder and developer",
  //       dateOfBirth: "2026-04-04T07:43:51.239Z",
  //     },
  //     select: {
  //       id: true,
  //       bio: true,
  //       user: {
  //         select: {
  //           name: true,
  //           email: true,
  //         },
  //       },
  //     },
  //   });

  //   console.dir(updateUser, { depth: Infinity });

  // delete user
  //   const deleteUser = await prisma.user.delete({
  //     where: {
  //       id: 3,
  //     },
  //   });
  //   console.dir(deleteUser, { depth: Infinity });

  // get user data by id
  //   const getUserDataById = await prisma.user.findUnique({
  //     where: {
  //       id: 3,
  //     },
  //     include: {
  //       posts: true,
  //       profile: true,
  //     },
  //   });

  //   console.dir(getUserDataById, { depth: Infinity });

  // use of upsert
  const upsertUser = await prisma.user.upsert({
    where: {
      email: "mahbub@prisma.com",
    },
    update: {
      name: "jhankar Mahbub 2",
    },
    create: {
      name: "Jhankar Mahbub",
      email: "mahbub@prisma.com",
    },
  });
  console.log(upsertUser);
}

run();
