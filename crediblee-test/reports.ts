import * as express from "express";
//import Prisma from '@prisma/client';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//const { PrismaClient } = Prisma;

//const prisma = new PrismaClient()

// A `main` function so that you can use async/await

const router = express.Router();

router.get('/:id', async (req: express.Request, res: any) => {

  // TODO You can use a tenancyId or a checkId to retrieve the report associated to that check or tenancy.
  // In a multi-tenancy scenario, all the checks from all the users will be added to the report. If only the report for a particular user is required you can use the checkId instead of the tenancyId.
  // i.e.: {{BASE_URL}}/reports/b20e3180-bbf5-4ff5-a177-3d5652c5fdcb
  // where b20e3180-bbf5-4ff5-a177-3d5652c5fdcb is an example of a tenancyId or checkId

  const id = String(req.params.id);
  // const check = await prisma.referenceCheck.findFirst({
  //   where: {
  //     id: id,
  //     agencyId: req.agency_id
  //   }
  // })

  // const tenancy = await prisma.tenancy.findFirst({
  //   where: {
  //     id: check.tenancyId,
  //     agencyId: check.agencyId
  //   }
  // });

  // const user = await prisma.user.findFirst({
  //   where: {
  //     id: check.userId,
  //     agencyId: check.agencyId
  //   }
  // });

  // const agency = await prisma.agency.findFirst({
  //   where: { id: req.agency_id }
  // })

  // check object data is last so it overwrites user data. This is important so employerName is taken from check (verified) and not from user data.
  // const data = Object.assign({}, tenancy, user, check, agency);
  // // Add overrides 
  // data.employerName = check.employerName;

  //console.log(data);

  res.render(path.join(__dirname, './views/', "report-template.ejs"));
});

export default router;