import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670464504000 implements MigrationInterface {
    name = 'default1670464504000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tbl_Register" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userLastUpdateId" integer, "active" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deletedAt" TIMESTAMP, "dateBorn" TIMESTAMP, "sex" text, "maritalStatus" text, "kids" boolean, "quantityKids" integer, "spouse" text, "ownResidence" boolean, "yearsResidence" integer, "liveWith" text, "immigrant" boolean, "passport" text, "yearsImmigrant" integer, "hasDocuments" boolean, "NIF" boolean, "NISS" boolean, "UTENTE" boolean, "VISA" boolean, "dateStartCompany" TIMESTAMP, "partner" boolean, "quantityPartners" integer, "userId" text, "companyId" text, CONSTRAINT "PK_4f527a67f1234d2ced2312ac1a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tbl_UserAddress" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userLastUpdateId" integer, "active" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deletedAt" TIMESTAMP, "number" integer NOT NULL, "street" text NOT NULL, "postalCode" text NOT NULL, "complement" text NOT NULL, "neighborhood" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "country" text NOT NULL, "register_id" uuid, CONSTRAINT "REL_9b454e68b224288a2546e81cdb" UNIQUE ("register_id"), CONSTRAINT "PK_042b4e21fdf585dfde95bcdb126" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tbl_UserAddress" ADD CONSTRAINT "FK_9b454e68b224288a2546e81cdbb" FOREIGN KEY ("register_id") REFERENCES "tbl_Register"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_UserAddress" DROP CONSTRAINT "FK_9b454e68b224288a2546e81cdbb"`);
        await queryRunner.query(`DROP TABLE "tbl_UserAddress"`);
        await queryRunner.query(`DROP TABLE "tbl_Register"`);
    }

}
