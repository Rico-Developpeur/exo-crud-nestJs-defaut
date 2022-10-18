import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDefautDto } from './dto/create-defaut.dto';
import { Defaut } from './interfaces/defaut.interface';

@Injectable()
export class DefautsService {
  defauts: Defaut[] = [
    {
      id: 1,
      station: 'Nantes',
      description: 'tag',
    },
    {
      id: 2,
      station: 'Paris Montparnasse',
      description: 'écran cassé',
    },
  ];

  findAll(): Defaut[] {
    return this.defauts;
  }

  findOne(id: string) {
    return this.defauts.find((defaut) => defaut.id === Number(id));
  }

  create(defaut: CreateDefautDto) {
    this.defauts = [...this.defauts, defaut];
  }

  update(id: string, defaut: Defaut) {
    const defautToUpdate = this.defauts.find((el) => el.id === Number(id));
    if (!defautToUpdate) {
      return new NotFoundException('booo did you find this todo');
    }
    if (defaut.station) {
      defautToUpdate.station = defaut.station;
    }
    if (defaut.description) {
      defautToUpdate.description = defaut.description;
    }
    const updatedDefauts = this.defauts.map((el) =>
      el.id !== Number(id) ? el : defautToUpdate,
    );
    this.defauts = [...updatedDefauts];
    return { updatedDefaut: 1, defaut: defautToUpdate };
  }

  delete(id: string) {
    const nbOfDefautsBeforeDelete = this.defauts.length;
    this.defauts = [...this.defauts.filter((el) => el.id !== Number(id))];
    if (this.defauts.length < nbOfDefautsBeforeDelete) {
      return { deletedDefauts: 1, nbDefauts: this.defauts.length };
    } else {
      return { deletedDefauts: 0, nbDefauts: this.defauts.length };
    }
  }
}
