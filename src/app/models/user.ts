import { Spend } from './spend';
export class User{
  idUser: number;
  username: string;
  debt:number;
  spends: Spend[];
}
