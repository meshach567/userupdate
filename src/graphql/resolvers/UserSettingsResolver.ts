/* eslint-disable prettier/prettier */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { UserSettingService } from '../../users/UserSettingService';

@Resolver()
export class UserSettingsResolver {
  constructor(private userSettingsService: UserSettingService) {}

  @Mutation((returns) => UserSetting)
  async createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    const userSetting = await this.userSettingsService.createUserSettings(
      createUserSettingsData,
    );
    return userSetting;
  }
}
