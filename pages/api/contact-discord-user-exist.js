import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function handler(req, res) {
  const method = req.method;
  const discordUser = req.body.discordUser;
  return new Promise(async (resolve) => {
    switch (method) {
      case "POST":
      case "OPTION": {
        try {
          const result = await prisma.botRequest.findUnique({
            where: {
              discord: discordUser,
            },
          });
          if (result && result.id) {
            res.status(200).json({ status: "exist" });
            return resolve();
          }

          res.status(200).json({ status: "available" });
          return resolve();
        } catch (e) {
          res.status(400).json(e);
          return resolve();
        }
      }
    }
    res.status(405).end();
    return resolve();
  });
}
