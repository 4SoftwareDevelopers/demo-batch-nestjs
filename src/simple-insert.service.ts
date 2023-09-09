import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './persona';
import { Repository } from 'typeorm';

@Injectable()
export class SimpleInsertService {

  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async savePersona() {
    console.time('simple-insert-persona');
    for (let i = 0; i < 100000; i++) {
      let persona = new Persona();
      persona.nombre = 'nombre' + i;
      persona.apellido = 'apellido' + i;
      persona.direccion = 'direccion' + i;
      persona.telefono = 'telefono' + i;
      await this.personaRepository.save(persona);
    }
    console.timeEnd('simple-insert-persona');
  }
}
