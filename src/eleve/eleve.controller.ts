import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EleveService } from './eleve.service';

@Controller('eleve')
export class EleveController {
  constructor(private readonly eleveService: EleveService) {}

  @Post('creer_eleve/:EcoleId/:UtilisateurId')
  async creer(
    @Body() body: any,
    @Param('EcoleId') EcoleId: string,
    @Param('UtilisateurId') UtilisateurId: string,
  ) {
    const { nom, prenom, classe, age } = body;
    return this.eleveService.creer(
      nom,
      prenom,
      classe,
      age,
      EcoleId,
      UtilisateurId,
    );
  }
  @Get('liste_eleve/:EcoleId/:UtilisateurId')
  async liste(
    @Param('EcoleId') EcoleId: string,
    @Param('UtilisateurId') UtilisateurId: string,
  ) {
    return this.eleveService.findAll(EcoleId, UtilisateurId);
  }
  @Delete('supprimer_eleve/:id/:EcoleId/:UtilisateurId')
  async supprimer(
    @Param('id') id: string,
    @Param('EcoleId') EcoleId: string,
    @Param('UtilisateurId') UtilisateurId: string,
  ) {
    return this.eleveService.remove(id, EcoleId, UtilisateurId);
  }
  @Patch('update_eleve/:id/:EcoleId/:UtilisateurId')
  async update(
    @Param('id') id: string,
    @Param('EcoleId') EcoleId: string,
    @Param('UtilisateurId') UtilisateurId: string,
    @Body() body: any,
  ) {
    const { nom, prenom, classe, age } = body;
    return this.eleveService.update(
      id,
      nom,
      prenom,
      classe,
      age,
      EcoleId,
      UtilisateurId,
    );
  }
  @Get('tri_par_classe/:EcoleId/:UtilisateurId')
  async trieParClasse(
    @Param('EcoleId') EcoleId: string,
    @Param('UtilisateurId') UtilisateurId: string,
  ) {
    return this.eleveService.findAll(EcoleId, UtilisateurId);
  }
}
