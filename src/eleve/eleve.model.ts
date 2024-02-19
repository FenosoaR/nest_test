import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Ecole } from 'src/ecole/ecole.model';
import { Utilisateur } from 'src/utilisateur/utilisateur.model';

@Table
export class Eleve extends Model {
  @Column
  nom: string;
  @Column
  prenom: string;
  @Column
  classe: string;
  @Column
  age: number;
  @ForeignKey(() => Ecole)
  @Column
  EcoleId: number;
  @ForeignKey(() => Utilisateur)
  @Column
  UtilisateurId: number;
}
