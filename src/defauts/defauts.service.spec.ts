import { Test, TestingModule } from '@nestjs/testing';
import { DefautsService } from './defauts.service';

describe('DefautsService', () => {
  let service: DefautsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefautsService],
    }).compile();

    service = module.get<DefautsService>(DefautsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
