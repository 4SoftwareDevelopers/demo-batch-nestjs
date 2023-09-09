import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './persona';
import { Repository } from 'typeorm';

@Injectable()
export class BatchInsertService {

  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async savePersona() {
    console.time('batch-insert-persona');
    let personas: Persona[] = [];
    for (let i = 0; i < 100000; i++) {
      personas.push({
        nombre: 'nombre' + i,
        apellido: 'apellido' + i,
        direccion: 'direccion' + i,
        telefono: 'telefono' + i,
      } as Persona);
    }
    await this.personaRepository.save(personas);
    console.timeEnd('batch-insert-persona');
  }
}
