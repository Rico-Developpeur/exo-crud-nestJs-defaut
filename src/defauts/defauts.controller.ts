import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { DefautsService } from './defauts.service';
import { CreateDefautDto } from './dto/create-defaut.dto';
import { Defaut } from './interfaces/defaut.interface';

@Controller('defauts')
export class DefautsController {
  constructor(private readonly defautsService: DefautsService) {}

  @Get()
  findAll(): Defaut[] {
    return this.defautsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.defautsService.findOne(id);
  }

  @Post()
  createDefaut(@Body() newDefaut: CreateDefautDto) {
    this.defautsService.create(newDefaut);
  }

  @Put(':id')
  updateDefaut(@Param('id') id: string, @Body() defaut: CreateDefautDto) {
    return this.defautsService.update(id, defaut);
  }

  @Delete(':id')
  deleteDefaut(@Param('id') id: string) {
    return this.defautsService.delete(id);
  }
}
