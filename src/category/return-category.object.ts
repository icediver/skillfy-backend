import { Prisma } from '@prisma/client';
import { courseReturnObject } from 'src/course/return-course.object';

export const returnCategoryObject: Prisma.CategorySelect = {
  id: true,
  name: true,
  slug: true,
  description: true,
  icon: true,
  colors: true,
  courses: { select: courseReturnObject },
};
