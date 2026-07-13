// Topic: Relational Joins using Prisma
// Notes: Instead of raw SQL JOINs, Prisma handles relations easily via nested reads/writes.

// const prisma = new PrismaClient();

/*
async function getAuthorWithPosts() {
  const user = await prisma.user.findUnique({
    where: { id: 1 },
    include: {
      posts: true, // This does a JOIN automatically!
    },
  });
  console.dir(user, { depth: null });
}
*/
console.log("Check comments for Prisma relationships");
