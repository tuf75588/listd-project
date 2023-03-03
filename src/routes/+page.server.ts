import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';

const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.create({
		data: {
			name: 'andrew'
		}
	});

	console.log(user);
}

export const load = (async ({ params }) => {
	main()
		.then(async () => {
			await prisma.$disconnect();
		})
		.catch(async (e) => {
			console.error(e);

			await prisma.$disconnect();

			process.exit(1);
		});
}) satisfies PageServerLoad;
