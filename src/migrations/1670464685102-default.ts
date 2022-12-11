import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670464685102 implements MigrationInterface {
    name = 'default1670464685102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tbl_Address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userLastUpdateId" integer, "active" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deletedAt" TIMESTAMP, "number" integer NOT NULL, "street" text NOT NULL, "postalCode" text NOT NULL, "complement" text NOT NULL, "neighborhood" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "country" text NOT NULL, "register_id" uuid, CONSTRAINT "REL_7fa61046f97c7ba7bc8d1527a9" UNIQUE ("register_id"), CONSTRAINT "PK_19081d1cb572163f230ec047793" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tbl_Address" ADD CONSTRAINT "FK_7fa61046f97c7ba7bc8d1527a93" FOREIGN KEY ("register_id") REFERENCES "tbl_Register"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_Address" DROP CONSTRAINT "FK_7fa61046f97c7ba7bc8d1527a93"`);
        await queryRunner.query(`DROP TABLE "tbl_Address"`);
    }

}
