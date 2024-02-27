import { Prisma } from '@prisma/client';

export const returnUserObject: Prisma.UserSelect = {
  id: true,
  email: true,
  name: true,
  avatarPath: true,
  password: false,
  isAdmin: true,
  isEmailVerified: true,
  purchases: {
    select: {
      id: true,
      title: true,
      slug: true,
      images: true,
      videos: true,
      teacher: true,
      price: true,
      sale: true,
      category: {
        select: {
          slug: true,
          name: true,
        },
      },
    },
  },
};
