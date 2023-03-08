import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from 'src/controllers/users/users.controller';
import { User, UserSchema } from 'src/schemas/users.schema';
import { UsersService } from 'src/services/users/users.service';
import { TaskModule } from './task.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        TaskModule,
    ],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
