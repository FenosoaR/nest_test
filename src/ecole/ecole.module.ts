import { Module } from '@nestjs/common';
import { EcoleController } from './ecole.controller';
import { EcoleService } from './ecole.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ecole } from './ecole.model';

@Module({
  imports : [SequelizeModule.forFeature([Ecole])],
  controllers: [EcoleController],
  providers: [EcoleService]
})
export class EcoleModule {}
