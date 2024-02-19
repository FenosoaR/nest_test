import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { EcoleModule } from './ecole/ecole.module';
import { EleveModule } from './eleve/eleve.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      autoLoadModels: true,
      synchronize: true,
      models :[]
    }),
    
    UtilisateurModule,
    EcoleModule,
    EleveModule,
    
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
