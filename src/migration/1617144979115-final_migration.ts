import {MigrationInterface, QueryRunner} from "typeorm";

export class finalMigration1617144979115 implements MigrationInterface {
    name = 'finalMigration1617144979115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Restaurant` (`id` int NOT NULL AUTO_INCREMENT, `photo` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `opening_hours` (`id` int NOT NULL AUTO_INCREMENT, `day` int NOT NULL, `opening` varchar(255) NOT NULL, `closing` varchar(255) NOT NULL, `restaurantId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `restaurantId` int NOT NULL, `name` varchar(255) NOT NULL, `photo` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `price` decimal NOT NULL, `promotionalPrice` decimal NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `opening_hours` ADD CONSTRAINT `FK_e6fd43a1ef0a1cea91aa02278db` FOREIGN KEY (`restaurantId`) REFERENCES `Restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opening_hours` DROP FOREIGN KEY `FK_e6fd43a1ef0a1cea91aa02278db`");
        await queryRunner.query("DROP TABLE `product`");
        await queryRunner.query("DROP TABLE `opening_hours`");
        await queryRunner.query("DROP TABLE `Restaurant`");
    }

}
