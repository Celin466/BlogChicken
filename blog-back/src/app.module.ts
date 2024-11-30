import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { PostagemModule } from './Postagem/postagem.module'
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'unicesumar',
      password: 'unicesumar',
      database: 'blog',
      entities: [User],
      synchronize: true,
    }),
    UserModule, PostagemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
