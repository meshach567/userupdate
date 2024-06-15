/* eslint-disable prettier/prettier */
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './graphql/models/Users';
import { UserSetting } from './graphql/models/UserSetting';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Tr@ilbl@zer123',
      database:
        process.env.NODE_ENV === 'TEST'
          ? 'graphql_tutorial_test'
          : 'graphql_tutorial',
      entities: [User, UserSetting],
      synchronize: true,
      logging: false,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }