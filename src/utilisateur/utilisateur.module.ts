import { Module } from '@nestjs/common';
import { UtilisateurController } from './utilisateur.controller';
import { UtilisateurService } from './utilisateur.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Utilisateur } from './utilisateur.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports : [SequelizeModule.forFeature([Utilisateur]),
  JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '1h' },
  }),
],
  controllers: [UtilisateurController],
  providers: [UtilisateurService]
})
export class UtilisateurModule {}
