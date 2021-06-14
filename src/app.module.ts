import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { YuresModule } from './yures/yures.module';
import { SomethingModule } from './something/something.module';

import config from './config/config';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoUrl),
    UsersModule,
    ProductsModule,
    AuthModule,
    YuresModule,
    SomethingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
