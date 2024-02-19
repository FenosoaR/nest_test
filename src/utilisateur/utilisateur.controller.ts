import { Body, Controller, Post } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}
  @Post('inscription')
  async inscription(@Body() body: any) {
    const { nom, email, mot_de_passe } = body;
    // console.log(body)
    return this.utilisateurService.inscription(nom, email, mot_de_passe);
  }
  @Post('connexion')
  async connexion(@Body() body: any) {
    const { email, mot_de_passe } = body;
    return this.utilisateurService.connexion(email, mot_de_passe);
  }
}
