import { Body, Controller, Param, Post} from '@nestjs/common';
import { EcoleService } from './ecole.service';

@Controller('ecole')
export class EcoleController {
    constructor(private readonly ecoleService : EcoleService){       
    }
    @Post('creer_ecole/:UtilisateurId')
    async creerEcole(@Body() body: any , @Param('UtilisateurId') UtilisateurId : string) {
        const { nom } = body;
        return this.ecoleService.creer(nom, UtilisateurId);
    }
}
