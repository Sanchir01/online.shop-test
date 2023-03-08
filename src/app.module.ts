import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AurhModule } from './aurh/aurh.module'
import { PrismaService } from './prisma.service'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module';

@Module({
	imports: [AurhModule, ConfigModule.forRoot(), UserModule],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule {}
