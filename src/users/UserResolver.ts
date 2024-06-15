/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { User } from '../graphql/models/Users';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { mockUserSettings } from 'src/__mocks__/mockUserSetting';
import { UserSetting } from '../graphql/models/UserSetting';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';

export let incrementalId = 3;

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true, name: 'getUserById' })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @ResolveField(returns => UserSetting, {
    name: "settings",
    nullable: true
  })
  getUserSettings(@Parent() user: User) {
    console.log(User);

    return mockUserSettings.find((setting) => setting.userId === user.id)
  }

  @Mutation(returns => User)
  createUser(

    @Args("createUserData") createUserData: CreateUserInput
  ) {
    const { username, displayName } = createUserData;
    const newUser = { username, displayName, id: ++incrementalId };
    mockUsers.push(newUser);
    return newUser;
  }
}
