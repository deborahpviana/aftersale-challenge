import { IsAlphanumeric } from 'class-validator';

export class FindIdParams {
  @IsAlphanumeric()
  id: string;
}
