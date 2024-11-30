import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { postagem } from './postagem.entity';

@Injectable()
export class postagemService {
  constructor(
    @InjectRepository(postagem)
    private readonly userRepository: Repository<postagem>,
  ) { }

  findAll(): Promise<postagem[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<postagem> {
    return this.userRepository.findOneBy({ id });
  }

  create(user: postagem): Promise<postagem> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: postagem): Promise<postagem> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  delete(id: number): Promise<void> {
    return this.userRepository.delete(id).then(() => undefined);
  }
}