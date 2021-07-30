import { connectToDatabase } from "../../../lib/mongodb";




export default async function handler(req, res) {
    const { client } = await connectToDatabase();

    const db = client.db("Aniflix");
    const col = db.collection("Users");
    
    const myDoc = await col.findOne({ _id: "fake@email.com"});
    res.status(200).json({ message: myDoc })
}