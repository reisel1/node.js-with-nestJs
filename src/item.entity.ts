import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiHideProperty,} from '@nestjs/swagger';

export class Item {

  @IsNumber() @IsOptional() readonly id?: number;

  /**
 * @example "Salad"
 */
  @IsString() readonly name: string;

  /**
 * @example 4.99
 */
  @IsNumber() readonly price: number;

  /**
 * @example "Fresh"
 */
  @IsString() readonly description: string;

  /**
 * @example "https://cdn.auth0.com/blog/whatabyte/salad-sm.png"
 */
  @IsString() readonly image: string;
}