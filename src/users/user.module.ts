/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { User } from '../graphql/models/Users';
import { UserSettingService } from '../users/UserSettingService';
import { UserSetting } from '../graphql/models/UserSetting';
import { UserSettingsResolver } from '../graphql/resolvers/UserSettingsResolver';

@Module({
    imports: [TypeOrmModule.forFeature([User, UserSetting])],
    providers: [
        UserResolver,
        UserService,
        UserSettingService,
        UserSettingsResolver,
    ],
})
export class UsersModule { }