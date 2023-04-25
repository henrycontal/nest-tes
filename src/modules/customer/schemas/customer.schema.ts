import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DateTime } from 'luxon';
import { HydratedDocument } from 'mongoose';
import { ICustomer } from '../interfaces/customer.interface';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({
    versionKey: false,
    timestamps: true,
})
export class Customer implements ICustomer {
    @Prop({
        required: true,
    })
    customerNumber: string;

    @Prop({
        required: true,
    })
    firstName: string;

    @Prop({
        required: true,
    })
    lastName: string;

    @Prop({
        required: true,
    })
    emailAddress: string;

    @Prop({
        required: true,
    })
    userKey: string;

    @Prop({
        required: true,
    })
    personKey: string;

    @Prop({
        default: 'es-MX',
    })
    preferredLanguage: string;

    @Prop({
        required: true,
        set: (date: Date) => {
            return DateTime.fromJSDate(date).toISO();
        },
    })
    passwordLastChanged: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
