import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
   if (req.method === "POST") {
      const data = req.body;

      const client = await MongoClient.connect(
         "mongodb+srv://user101:1234@cluster0.29dc9g3.mongodb.net/meetups"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted!" });
   }
}

export default handler;
