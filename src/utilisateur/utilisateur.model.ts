import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class Utilisateur extends Model {
  @Column
  nom: string;

  @Column
  email: string;

  @Column
  mot_de_passe: string;
}