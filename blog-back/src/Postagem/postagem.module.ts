import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postagemService } from './postagem.service';
import { PostagemController } from './postagem.controller';
import { postagem } from './postagem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([postagem])],
  providers: [postagemService],
  controllers: [PostagemController],
})
export class PostagemModule { }