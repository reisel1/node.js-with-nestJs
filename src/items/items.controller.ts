import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { ItemsService } from './items.service';
  import { Items } from '../items.entity';
  import { Item } from '../item.entity';
  import { AuthGuard } from '@nestjs/passport';
  import {ApiCreatedResponse, ApiResponse, ApiTags,} from '@nestjs/swagger';

  @ApiTags('items')
  @Controller('items')
  export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
  
    @Get()
    @ApiResponse({ status: 200, description: 'The items has been successfully done.'})
    async findAll(): Promise<Items> {
      return this.itemsService.findAll();
    }
  
    @Get(':id')
    @ApiResponse({ status: 200, description: 'The item has been successfully done.'})
    async find(@Param('id') id: number): Promise<Item> {
      return this.itemsService.find(id);
    }
  
    @Post()
    @ApiCreatedResponse({
      description: 'The record has been successfully created.',
      type: Item,
    })
    async create(@Body() item: Item): Promise<void> {
      this.itemsService.create(item);
    }
  
    @Put()
    @ApiResponse({ status: 200, description: 'The record has been successfully updtated.'})
    async update(@Body() item: Item): Promise<void> {
      this.itemsService.update(item);
    }
  
    // @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully deleted.'})
    async delete(@Param('id') id: number): Promise<void> {
      this.itemsService.delete(id);
    }
  }