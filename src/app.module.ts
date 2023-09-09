import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SimpleInsertService } from './simple-insert.service';
import { BatchInsertService } from './batch-insert.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './persona';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host: 'localhost',
      port : 3306,
      username : 'root',
      password : '12345678',
      database : '4sd',
      autoLoadEntities : true
   }),
   TypeOrmModule.forFeature([Persona]),
  ],
  controllers: [AppController],
  providers: [SimpleInsertService, BatchInsertService],
})
export class AppModule {}
