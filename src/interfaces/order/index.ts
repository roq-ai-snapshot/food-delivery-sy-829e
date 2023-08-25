import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_id: string;
  restaurant_id: string;
  delivery_driver_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user_order_customer_idTouser?: UserInterface;
  restaurant?: RestaurantInterface;
  user_order_delivery_driver_idTouser?: UserInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  restaurant_id?: string;
  delivery_driver_id?: string;
  status?: string;
}
