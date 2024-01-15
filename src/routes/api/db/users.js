import { connectToDatabase } from '$lib/db';

export async function get(request) {
    const { db } = await connectToDatabase();
    const users = await db.collection('users').find({}).toArray();
    return {
        status: 200,
        body: users
    };
}
