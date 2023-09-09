import { Controller, Get } from '@nestjs/common';
import { SimpleInsertService } from './simple-insert.service';
import { BatchInsertService } from './batch-insert.service';

@Controller()
export class AppController {
  constructor(private readonly simpleInsertService: SimpleInsertService, 
    private readonly batchService: BatchInsertService) {}


  @Get("/simple-insert")
  async savePersonaSimple() {
    await this.simpleInsertService.savePersona();
  }

  @Get("/batch-insert")
  async savePersonaBatch() {
    await this.batchService.savePersona();
  }

}
