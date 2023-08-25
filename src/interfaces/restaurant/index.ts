import { DiscountInterface } from 'interfaces/discount';
import { OrderInterface } from 'interfaces/order';
import { ReservationInterface } from 'interfaces/reservation';
import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  name: string;
  location: string;
  menu: string;
  startup_id: string;
  created_at?: any;
  updated_at?: any;
  discount?: DiscountInterface[];
  order?: OrderInterface[];
  reservation?: ReservationInterface[];
  startup?: StartupInterface;
  _count?: {
    discount?: number;
    order?: number;
    reservation?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  menu?: string;
  startup_id?: string;
}
