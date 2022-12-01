import { LeanDocument, Types } from 'mongoose'
import { IUser } from '@/interfaces/interfaces'

export default class UserDto {
    readonly email: string;
    readonly _id: string;
    readonly isActivated: boolean;
    readonly name: string;
    readonly roles: string[];

    constructor(model: LeanDocument<IUser & { _id: Types.ObjectId }>) {
        this.email = model.email;
        this._id = model._id.toString();
        this.isActivated = model.isActivated;
        this.name = model.name;
        this.roles = model.roles;
    }
}