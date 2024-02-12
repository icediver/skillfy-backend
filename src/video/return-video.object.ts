import { Prisma } from '@prisma/client';

export const videoReturnObject: Prisma.VideoSelect = {
  source: true,
  chapter: true,
  slug: true,
  title: true,
  overview: true,
};

export const videoReturnObjectFullest: Prisma.VideoSelect = {
  ...videoReturnObject,
};
