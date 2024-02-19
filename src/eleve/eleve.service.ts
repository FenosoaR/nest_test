import { Injectable } from '@nestjs/common';
import { Eleve } from './eleve.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EleveService {
    constructor(
        @InjectModel(Eleve)
        private readonly eleveModel : typeof Eleve
    ){}

    async creer(nom: string , prenom:string,classe:string , age :string , EcoleId :string ,UtilisateurId) : Promise<Eleve>{
        const new_eleve = this.eleveModel.create({nom , prenom,classe, age , EcoleId , UtilisateurId})
        return new_eleve
    }
    async findAll(EcoleId :string , UtilisateurId : string) : Promise<Eleve[]>{
        return this.eleveModel.findAll({where : {EcoleId , UtilisateurId}})
    }
    async remove(id : string , EcoleId :string , UtilisateurId : string) : Promise<void>{
         await  this.eleveModel.destroy({where : {id, EcoleId ,  UtilisateurId}})
    }
    async update(id : string , nom :string , prenom :string ,classe : string, age : number, EcoleId :string , UtilisateurId :string ) : Promise<[Eleve]>{
        await this.eleveModel.update({nom , prenom , classe,age} , {where : {id , EcoleId , UtilisateurId}})
       const updatedUser = await this.eleveModel.findOne({ where: { id } });
       return [updatedUser]
   }
   async getParClasse(EcoleId : string , UtilisateurId : string) :Promise<Eleve[]>{
        return this.eleveModel.findAll({where :{UtilisateurId , EcoleId} , order : [["classe" , "ASC"]]})
   }
}
