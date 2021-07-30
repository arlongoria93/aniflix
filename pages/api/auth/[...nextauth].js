import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase } from "../../../util/mongodb";

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const { client } = await connectToDatabase();

      const db = client.db("Aniflix");
      const col = db.collection("Users");

      const myDoc = await col.findOne({ _id: user.email });

      if (!myDoc) {
        const toInsert = {
          _id: user.email,
          favorites: [],
        };

        await col.insertOne(toInsert);
      }

      return true;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
