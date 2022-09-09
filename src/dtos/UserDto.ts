import { Document } from "mongoose";
import { IUser } from "../interfaces/IUser";

export default class UserDto {

    readonly email: string;
    readonly id: string;
    readonly isActivated: boolean;
    readonly name: string;
    readonly roles: string[];

    constructor(model: Document<any, any, IUser> & IUser) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.name = model.name;
        this.roles = model.roles;
    }
}