import { BaseEntity } from './base-entity';

export class OrderEntity extends BaseEntity {

    private _date: Date;
    private _pair: string; // Not sure the type
    private _orderType: string; // need to defined order types in enum
    private _price: number;
    private _ammount: number;
    private _filled: boolean;
    private _total: number;
    private _orderId: string;

    constructor() {
        super();
    }

    public get date(): Date {
        return this._date;
    }

    public set pair(pair: string) {
        this._pair = pair;
    }

    public get pair(): string {
        return this._pair;
    }

    public set date(date: Date) {
        this._date = date;
    }

    public get orderId(): string {
        return this._orderId;
    }

    public set orderId(id: string) {
        this._orderId = id;
    }

}
