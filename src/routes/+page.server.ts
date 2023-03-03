import type { PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {
    console.log('hello from the server payload')
}) satisfies PageServerLoad;