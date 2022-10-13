import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';

import { EmployeeSchema } from 'src/Schema/employee_schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports:[MongooseModule.forFeature([
    {
      name: 'Employee',
      schema: EmployeeSchema,
    },
  ]),],
  providers: [EmployeeService],
  exports:[EmployeeService]
  
})
export class EmployeeModule {}
