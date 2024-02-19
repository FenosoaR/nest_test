import { Test, TestingModule } from '@nestjs/testing';
import { EcoleController } from './ecole.controller';

describe('EcoleController', () => {
  let controller: EcoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EcoleController],
    }).compile();

    controller = module.get<EcoleController>(EcoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
