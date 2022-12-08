import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670196108431 implements MigrationInterface {
    name = 'default1670196108431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" DROP COLUMN "edit"`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" DROP COLUMN "create"`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" DROP COLUMN "read"`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" DROP COLUMN "delete"`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" ADD "prf_edit" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" ADD "prf_create" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" ADD "prf_read" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" ADD "prf_delete" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" DROP COLUMN "prf_delete"`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" DROP COLUMN "prf_read"`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" DROP COLUMN "prf_create"`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" DROP COLUMN "prf_edit"`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" ADD "delete" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" ADD "read" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" ADD "create" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "tbl_UserProfile" ADD "edit" boolean NOT NULL DEFAULT false`);
    }

}
