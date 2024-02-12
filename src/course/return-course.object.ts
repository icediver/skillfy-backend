import { Prisma } from '@prisma/client';
import { returnUserObject } from 'src/user/dto/return-user.object';
import { videoReturnObject } from 'src/video/return-video.object';

export const courseReturnObject: Prisma.CourseSelect = {
  images: true,
  lessons: true,
  description: true,
  id: true,
  title: true,
  price: true,
  createdAt: true,
  slug: true,
  // category: { select: returnCategoryObject },
  category: { select: { name: true } },
  videos: { select: videoReturnObject, orderBy: { title: 'asc' } },
  teacher: { select: returnUserObject },
  reviews: {
    select: {
      user: { select: { avatarPath: true, name: true } },
      createdAt: true,
      rating: true,
      text: true,
    },
    orderBy: { createdAt: 'desc' },
  },
  views: true,
};

export const courseReturnObjectFullest: Prisma.CourseSelect = {
  ...courseReturnObject,
};
