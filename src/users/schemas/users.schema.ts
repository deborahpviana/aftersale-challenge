import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  @ApiProperty({
    example: 'Déborah',
    description: 'User name',
  })
  name: string;

  @Prop({ required: true })
  @ApiProperty({
    example: 'deborah@gmail.com',
    description: 'User email',
  })
  email: string;

  @Prop({ required: true })
  @ApiProperty({
    example: 'deb123456',
    description: 'User password',
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
