/* User model queries (Prisma etc)
import { prisma } from "~/utils/db.server";

export async function getProjects() {
  return prisma.project.findMany();
}
 */