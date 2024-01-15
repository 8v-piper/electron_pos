import { connectToDatabase } from '$lib/db';
import { ObjectId } from 'mongodb'; // Required for querying by _id

// GET request: Fetch specific user
export async function GET({ params }) {
    const { db } = await connectToDatabase();
    const { id } = params;
    
    try {
        const user = await db.collection('users').findOne({ _id: new ObjectId(id) });
        if (user) {
            return {
                status: 200,
                body: user
            };
        } else {
            return {
                status: 404,
                body: { message: 'User not found' }
            };
        }
    } catch (error) {
        return {
            status: 500,
            body: { message: 'Error fetching user' }
        };
    }
}