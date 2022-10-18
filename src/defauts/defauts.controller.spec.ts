import { Test, TestingModule } from '@nestjs/testing';
import { DefautsController } from './defauts.controller';

describe('DefautsController', () => {
  let controller: DefautsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefautsController],
    }).compile();

    controller = module.get<DefautsController>(DefautsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
