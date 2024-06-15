/* eslint-disable prettier/prettier */
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserSettingsInput {
    @Field((type) => Int)
    userId: number;

    @Field({ nullable: true, defaultValue: false })
    receiveNotification: boolean;

    @Field({ nullable: true, defaultValue: false })
    receiveEmails: boolean
}
