import { Injectable, Req } from '@nestjs/common';
import { Ecole } from './ecole.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EcoleService {
  constructor(
    @InjectModel(Ecole)
    private readonly ecoleModel: typeof Ecole,
  ) {}
  async creer(nom: string, UtilisateurId: string): Promise<Ecole> {
    const new_ecole = await this.ecoleModel.create({ nom, UtilisateurId });
    return new_ecole;
  }
}
