import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface DiscountInterface {
  id?: string;
  code: string;
  description?: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface DiscountGetQueryInterface extends GetQueryInterface {
  id?: string;
  code?: string;
  description?: string;
  restaurant_id?: string;
}
