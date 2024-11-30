import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { postagem } from './postagem.entity';

@Injectable()
export class postagemService {
  constructor(
    @InjectRepository(postagem)
    private readonly postRepository: Repository<postagem>,
  ) { }

  findAll(): Promise<postagem[]> {
    return this.postRepository.find();
  }

  findOne(id: number): Promise<postagem> {
    return this.postRepository.findOneBy({ id });
  }

  create(post: postagem): Promise<postagem> {
    return this.postRepository.save(post);
  }

  async update(id: number, user: postagem): Promise<postagem> {
    await this.postRepository.update(id, user);
    return this.findOne(id);
  }

  delete(id: number): Promise<void> {
    return this.postRepository.delete(id).then(() => undefined);
  }
}