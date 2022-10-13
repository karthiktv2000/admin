import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { employeeDocument } from 'src/Schema/employee_schema';
import { runInThisContext } from 'vm';


@Injectable()
export class EmployeeService {
    constructor(
        
        @InjectModel('Employee') private readonly EmployeeModel: Model<employeeDocument>,
       
        
      ) {}
      async getemployee(){
        return this.EmployeeModel.find().exec();
      }
}

