import { Prisma } from '@prisma/client';

export const reviewReturnObject: Prisma.ReviewSelect = {
  user: {
    select: {
      id: true,
      name: true,
      avatarPath: true,
    },
  },
  createdAt: true,
  text: true,
  rating: true,
  id: true,
};
