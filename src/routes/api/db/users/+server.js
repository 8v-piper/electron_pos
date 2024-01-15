import { connectToDatabase } from '$lib/db';


// GET request: Fetch all users with query parameters
export async function GET({ url }) {
    const { db } = await connectToDatabase();
    const query = url.searchParams;

    // Fetching parameters from the query
    const name = query.get('name');
    const surname = query.get('surname');

    // Building the query object for MongoDB
    let searchQuery = {};
    if (name) {
        searchQuery.firstName = name; // Assuming the field in your db is 'firstName'
    }
    if (surname) {
        searchQuery.lastName = surname; // Assuming the field in your db is 'lastName'
    }

    const users = await db.collection('users').find(searchQuery).toArray();
    return {
        status: 200,
        body: users
    };
}

// POST request: Add a new user
export async function POST(request) {
    const { db } = await connectToDatabase();
    const user = await request.json();
    await db.collection('users').insertOne(user);
    return {
        status: 201,
        body: { message: 'User added successfully' }
    };
}