import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Utilisateur } from './utilisateur.model';
import * as bcryt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectModel(Utilisateur)
    private readonly utilisateurModel: typeof Utilisateur,
    private jwtService: JwtService,
  ) {}

  async inscription(
    nom: string,
    email: string,
    mot_de_passe: string,
  ): Promise<any> {
    const utilisateur = await this.utilisateurModel.findOne({
      where: { email },
    });

    if (utilisateur) throw new Error('Cet email est deja utilisé');

    let mot_de_passe_hache = await bcryt.hash(mot_de_passe, 10);

    const new_utilisateur = await this.utilisateurModel.create({
      nom,
      email,
      mot_de_passe: mot_de_passe_hache,
    });

    return new_utilisateur;
  }
  async connexion(
    email: string,
    mot_de_passe: string,
  ): Promise<{ token: string; any }> {
    const utilisateur = await this.utilisateurModel.findOne({
      where: { email },
    });

    const isPasswordValid = await bcryt.compare(
      mot_de_passe,
      utilisateur.mot_de_passe,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }
    const payload = { id: utilisateur.id, email: utilisateur.email };

    return {
      token: await this.jwtService.signAsync(payload),
      any: utilisateur,
    };
  }
}
