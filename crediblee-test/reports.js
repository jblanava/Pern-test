"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const client_1 = __importDefault(require("@prisma/client"));
const url_1 = require("url");
const path_1 = require("path");
const path_2 = __importDefault(require("path"));
const __filename = (0, url_1.fileURLToPath)(import.meta.url);
const __dirname = (0, path_1.dirname)(__filename);
const { PrismaClient } = client_1.default;
const prisma = new PrismaClient();
// A `main` function so that you can use async/await
const router = express.Router();
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO You can use a tenancyId or a checkId to retrieve the report associated to that check or tenancy.
    // In a multi-tenancy scenario, all the checks from all the users will be added to the report. If only the report for a particular user is required you can use the checkId instead of the tenancyId.
    // i.e.: {{BASE_URL}}/reports/b20e3180-bbf5-4ff5-a177-3d5652c5fdcb
    // where b20e3180-bbf5-4ff5-a177-3d5652c5fdcb is an example of a tenancyId or checkId
    const id = String(req.params.id);
    const check = yield prisma.referenceCheck.findFirst({
        where: {
            id: id,
            agencyId: req.agency_id
        }
    });
    const tenancy = yield prisma.tenancy.findFirst({
        where: {
            id: check.tenancyId,
            agencyId: check.agencyId
        }
    });
    const user = yield prisma.user.findFirst({
        where: {
            id: check.userId,
            agencyId: check.agencyId
        }
    });
    const agency = yield prisma.agency.findFirst({
        where: { id: req.agency_id }
    });
    // check object data is last so it overwrites user data. This is important so employerName is taken from check (verified) and not from user data.
    const data = Object.assign({}, tenancy, user, check, agency);
    // Add overrides 
    data.employerName = check.employerName;
    console.log(data);
    res.render(path_2.default.join(__dirname, './views/', "report-template.ejs"), data);
}));
exports.default = router;
