import { connectToDatabase } from '$lib/db';

// GET request: Fetch all users
export async function get(request) {
    const { db } = await connectToDatabase();
    const users = await db.collection('users').find({}).toArray();
    return {
        status: 200,
        body: users
    };
}

// POST request: Add a new user
export async function post(request) {
    const { db } = await connectToDatabase();
    const user = await request.json();
    await db.collection('users').insertOne(user);
    return {
        status: 201,
        body: { message: 'User added successfully' }
    };
}