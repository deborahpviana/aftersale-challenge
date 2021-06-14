import { HttpService, Injectable } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
// import { Product } from './entities/product.entity';

import config from '../config/config';

@Injectable()
export class ProductsService {
  constructor(private httpService: HttpService) {}

  // create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }

  async findAll() {
    const { data } = await this.httpService.get(config.shopifyUrl).toPromise();
    return data;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
