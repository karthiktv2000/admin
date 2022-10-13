import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from 'src/employee/employee.module';
import { EmployeeService } from 'src/employee/employee.service';
import { AdminSchema, EmployeeSchema } from 'src/Schema/employee_schema';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';


@Module({
  imports: [JwtModule.register({
    secret: 'Employee-secret',
  }),
    
    
    MongooseModule.forFeature([
      {
        name: 'Admin',
        schema: AdminSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'Employee',
        schema: EmployeeSchema,
      },
    ]),
  ],
  controllers: [AdminController],
  providers: [AdminService, ],
  
  
})
export class AdminModule{}
  