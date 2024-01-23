import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { NestModule } from '@nestjs/common'
import { LoginValidationMiddleware } from './middleware/login-validation.middleware';
@Module({
  imports: [PassportModule, UserModule, JwtModule.register({
    secret: process.env.JWT_KEY,
    signOptions: {expiresIn: '24h'}
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
     consumer.apply(LoginValidationMiddleware).forRoutes('login') 
  }
}
