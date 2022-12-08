import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670194715600 implements MigrationInterface {
    name = 'default1670194715600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tbl_UserProfile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userLastUpdateId" integer, "active" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deletedAt" TIMESTAMP, "profile" text, "edit" boolean NOT NULL DEFAULT false, "create" boolean NOT NULL DEFAULT false, "read" boolean NOT NULL DEFAULT false, "delete" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_b582c8b81950aba7ec6f7f6ddd3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tbl_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userLastUpdateId" integer, "active" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deletedAt" TIMESTAMP, "name" text NOT NULL, "nif" integer NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "company_id" uuid, "profile_id" uuid, CONSTRAINT "REL_b8ffea46554d7dc42db21b1c25" UNIQUE ("profile_id"), CONSTRAINT "PK_1262f713cac678ecfe15460073b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tbl_company" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userLastUpdateId" integer, "active" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deletedAt" TIMESTAMP, "name" text NOT NULL, "nif" integer NOT NULL, "email" text NOT NULL, CONSTRAINT "PK_0ece932c855c340ebddb2f7a9ef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tbl_user" ADD CONSTRAINT "FK_09f0d78184fc6659ad71a6c7427" FOREIGN KEY ("company_id") REFERENCES "tbl_company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tbl_user" ADD CONSTRAINT "FK_b8ffea46554d7dc42db21b1c254" FOREIGN KEY ("profile_id") REFERENCES "tbl_UserProfile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_user" DROP CONSTRAINT "FK_b8ffea46554d7dc42db21b1c254"`);
        await queryRunner.query(`ALTER TABLE "tbl_user" DROP CONSTRAINT "FK_09f0d78184fc6659ad71a6c7427"`);
        await queryRunner.query(`DROP TABLE "tbl_company"`);
        await queryRunner.query(`DROP TABLE "tbl_user"`);
        await queryRunner.query(`DROP TABLE "tbl_UserProfile"`);
    }

}
