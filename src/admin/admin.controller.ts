import { Controller,Get,Post,Res,Body, Req } from '@nestjs/common';
import { AdminDto } from 'src/AdminDto';
//import { EmployeeService } from '../employee/employee.module';
import { AdminService } from './admin.service';
//import {employee} from './employee'

@Controller('admin')
export class AdminController {
  employeeService: any;
    
    constructor (
        private adminService:AdminService,
        
    ){}
    @Post()
  async cadmin( @Res() res , @Body() adminDto: AdminDto) {
    
    res.status(201).json({
        message: 'Successfully Added Admin',
        result: await this.adminService.cadmin(adminDto),

      });
  }
  @Post('login')
  async loginAdmin(@Res() res, @Body() adminDto: AdminDto) {
    res.status(200).json({
      message: 'Logged-in Succesfully',
      result: await this.adminService.loginAdmin(adminDto,res),
    });
  }
  @Post('logout')
  public async logout( @Res() res) {
    return this.adminService.logout(res);
  }
  
}