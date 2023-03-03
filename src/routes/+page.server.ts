import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';

const prisma = new PrismaClient();

export const load = (async () => {
  const users = await prisma.user.findMany();
  return {users}
}) satisfies PageServerLoad