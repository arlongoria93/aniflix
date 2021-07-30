import { connectToDatabase } from "../../../util/mongodb";
import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const { user } = await getSession({ req });
  const { id } = req.query;

  const db = client.db("Aniflix");
  const col = db.collection("Users");

  const response = await col.findOneAndUpdate(
    { _id: user.email },
    {
      $push: {
        favorites: {
          $each: [id],
        },
      },
    }
  );

  res.status(200).json({ message: "await response" });
}
