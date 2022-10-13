import { HttpException, Injectable,Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {AdminDto} from 'src/AdminDto'
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { adminDocument } from 'src/Schema/employee_schema';

@Injectable()
export class AdminService {
  [x: string]: any;
    
    constructor(
        @InjectModel('Admin') private readonly AdminModel: Model<adminDocument>,
        private jwtService:JwtService

        
      ) {}
    async cadmin(adminDto: AdminDto){
       //const createEmployee=await new this.AdminModel(adminDto);
       //return createEmployee.save();
       const existingUser = await this.AdminModel.findOne({
        adminname: adminDto.adminname,
      });
      if (existingUser) {
        throw new HttpException('Email taken', 403);
      }
      const createdAdmin = new this.AdminModel(adminDto);
  
      createdAdmin.password = await bcrypt.hash(createdAdmin.password, 10);
      return await createdAdmin.save();
      }
      async loginAdmin(adminDto: AdminDto,res): Promise<string> {
        const checkAdmin = await this.AdminModel.findOne({
          adminname: adminDto.adminname,
        });
    
        if (!checkAdmin) {
          throw new HttpException('No Admin found', 404);
        }
    
        const passwordCheck = await bcrypt.compare(
          adminDto.password,
          checkAdmin.password,
        );
        if (!passwordCheck) {
          throw new HttpException('Incorrect Password', 401);
        }
        const token= await this.GenerateJwt(
        checkAdmin.adminname);
        res.cookie('admonlogoutcookie',token) 
        return token
          
      }
      GenerateJwt( adminname:string) {
        return this.jwtService.sign({
          AdminId: adminname,
          
        });
      }
      public async logout( res) {
        res.clearCookie('admonlogoutcookie');
        res.end('Admin logged out sucessfuly');
      }
      
      
}
