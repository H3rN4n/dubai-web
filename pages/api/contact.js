import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function handler(req, res) {
  const method = req.method;
  return new Promise(async (resolve) => {
    switch (method) {
      case "POST":
      case "OPTION": {
        try {
          const result = await prisma.botRequest.create({
            data: req.body,
          });
          res.status(200).json(result);
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
