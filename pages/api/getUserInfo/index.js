import { connectToDatabase } from "../../../lib/mongodb";
import { getSession } from "next-auth/client";



export default async function handler(req, res) {
    const { client } = await connectToDatabase();
    const { user } = await getSession({ req })

    const db = client.db("Aniflix");
    const col = db.collection("Users");

    const myDoc = await col.findOne({ _id: user.email});
    
    res.status(200).json({ message: myDoc })
}