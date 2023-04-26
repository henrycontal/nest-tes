import { Model } from 'mongoose';
import { Customer } from './schemas/customer.schema';
export declare class CustomerService {
    private customerModel;
    constructor(customerModel: Model<Customer>);
    findAll(): Promise<Customer[]>;
}
