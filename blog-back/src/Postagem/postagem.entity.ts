import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class postagem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;
}