import { Document } from "mongoose";
import { IUser } from "../interfaces/IUser";

export default class UserDto {

    readonly email: string;
    readonly id: string;
    readonly isActivated: boolean;
    readonly isAdmin: boolean;
    readonly name: string;

    constructor(model: Document<any, any, IUser> & IUser) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.isAdmin = model.isAdmin;
        this.name = model.name;
    }
}