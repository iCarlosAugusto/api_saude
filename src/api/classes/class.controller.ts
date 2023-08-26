import { ClassService } from './class.service';
import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateClassDto } from './dtos/create-class.dto';
import { UpdateClassDto } from './dtos/update-class.dto';
import { DeleteClassDto } from './dtos/delete-class.dto';
import { FindAllClassesByDateDto } from './dtos/find-classes_by_date.dto';
import { BookClassDto } from './dtos/book-class.dto';
import { CancelClientClassDto } from './dtos/cancel-client-class.dto';
import { FindAllClassesDto } from './dtos/find-all-classes.dto';
import { FindNextClientClassDto } from './dtos/find-next-client-class.dto';
import { FindScheduledClassesDto } from './dtos/findScheduledClasses.dto';
import { FindScheduledClassesAndConsultsDto } from './dtos/find-scheduled-classes-and-consults.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('/create')
  create(
    @Body() createClass: CreateClassDto,
    @UploadedFile() file: Express.Multer.File,
  ){
    return this.classService.createClass(createClass, file);
  }

  @Post('/update')
  update(@Body() updateClassDto: UpdateClassDto){
    return this.classService.update(updateClassDto);
  }

  @Post('/delete')
  delete(@Body() deleteClassDto: DeleteClassDto){
    return this.classService.delete(deleteClassDto);
  }

  @Post('/findAll')
  findAllClasses(@Body() findAllClassesDto: FindAllClassesDto){
    return this.classService.findAllClassses(findAllClassesDto);
  }

  @Post('/findAllClassesByDate')
  findAllClassesByDate(
    @Body() findAllClassesByDate: FindAllClassesByDateDto
  ){
    return this.classService.findAllClassesByDate(findAllClassesByDate)
  }

  @Post('/bookClass')
  bookClass(@Body() bookClassDto: BookClassDto){
    return this.classService.bookClass(bookClassDto);
  }

  @Get('/findClientNextClasss')
  findClientNextClass(@Body() findNextClientClassDto: FindNextClientClassDto) {
    return this.classService.findNextClientClass(findNextClientClassDto);
  }

  @Post('/findScheduledClasses')
  findScheduledClasses(@Body() findScheduledClasses: FindScheduledClassesDto) {
    return this.classService.findScheduledClasses(findScheduledClasses);
  }

  @Post("/findScheduledClassesAndConsults")
  findScheduledClassesAndConsults(@Body() findScheduledClassesAndConsultsDto: FindScheduledClassesAndConsultsDto){
    return this.classService.findScheduledClassesAndServices(findScheduledClassesAndConsultsDto);
  }

  @Post('/cancel')
  cancel(
    @Body() cancelClientClass: CancelClientClassDto
  ){
    return this.classService.cancelClass(cancelClientClass);
  }

  // @Get('/findAll')') findClientsOnClass: FindAllClientsOnClass
  // ){
  //   return this.classService.findClientsOnClass(findClientsOnClass);
  // }
}
