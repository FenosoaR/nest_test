import { Model, Column, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Utilisateur } from 'src/utilisateur/utilisateur.model';

@Table
export class Ecole extends Model {
  @Column
  nom: string;

  @ForeignKey(() =>  Utilisateur )
  @Column
  UtilisateurId: number;

  @BelongsTo(() =>  Utilisateur )
  utilisateur : Utilisateur
}