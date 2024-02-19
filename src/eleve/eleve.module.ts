import { Module } from '@nestjs/common';
import { EleveController } from './eleve.controller';
import { EleveService } from './eleve.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Eleve } from './eleve.model';

@Module({
  imports : [SequelizeModule.forFeature([Eleve])],
  controllers: [EleveController],
  providers: [EleveService]
})
export class EleveModule {}
