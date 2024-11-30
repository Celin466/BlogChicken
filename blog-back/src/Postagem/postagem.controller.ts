import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import  { postagemService } from './postagem.service'
import { postagem } from './postagem.entity';

@Controller('postagem')
export class PostagemController {
  constructor(private readonly postagemService: postagemService) {}

  @Get()
  findAll(): Promise<postagem[]> {
    return this.postagemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<postagem> {
    return this.postagemService.findOne(+id);
  }

  @Post()
  create(@Body() postagem: postagem): Promise<postagem> {
    return this.postagemService.create(postagem);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() postagem: postagem): Promise<postagem> {
    return this.postagemService.update(+id, postagem);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.postagemService.delete(+id);
  }
}