interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Delivery Driver'],
  tenantName: 'Startup',
  applicationName: 'Food Delivery System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
