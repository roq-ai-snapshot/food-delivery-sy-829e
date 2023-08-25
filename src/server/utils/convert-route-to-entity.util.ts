const mapping: Record<string, string> = {
  discounts: 'discount',
  orders: 'order',
  reservations: 'reservation',
  restaurants: 'restaurant',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
