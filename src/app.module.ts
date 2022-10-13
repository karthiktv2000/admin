import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:  [
    MongooseModule.forRoot('mongodb://localhost:27017/Employee_Data'),
  
  AdminModule,
  
  EmployeeModule],

  
})
export class AppModule {}
