import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function handler(req, res) {
  const method = req.method;
  const email = req.body.email;
  return new Promise(async (resolve) => {
    switch (method) {
      case "POST":
      case "OPTION": {
        try {
          const result = await prisma.botRequest.findUnique({
            where: {
              email: email,
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
