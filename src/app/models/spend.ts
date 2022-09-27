import { User } from './user';
export class Spend{
  id: number;
  description: string;
  user: User;
  userId: number;
  cost:number;
  date:Date;
}
