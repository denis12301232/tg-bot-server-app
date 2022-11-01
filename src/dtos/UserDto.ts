import { Document } from 'mongoose'
import { IUser } from '@/interfaces/interfaces'

export default class UserDto {
    readonly email: string;
    readonly _id: string;
    readonly isActivated: boolean;
    readonly name: string;
    readonly roles: string[];

    constructor(model: Document<any, any, IUser> & IUser) {
        this.email = model.email;
        this._id = model._id;
        this.isActivated = model.isActivated;
        this.name = model.name;
        this.roles = model.roles;
    }
}