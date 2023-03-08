import { Module } from '@nestjs/common'
import { AurhService } from './aurh.service'
import { AurhController } from './aurh.controller'
import { PrismaService } from '../prisma.service'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getJWTConfig } from '../config/jwt.cofig'
import { JwtStrategy } from './dto/jwt.strategy'

@Module({
	controllers: [AurhController],
	providers: [AurhService, PrismaService, JwtStrategy],
	imports: [
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJWTConfig
		})
	]
})
export class AurhModule {}
