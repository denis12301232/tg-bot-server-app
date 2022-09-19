import mongoose from "mongoose"
import { IToken } from "@/interfaces/IToken"

const { Schema, model } = mongoose;

const TokenSchema = new Schema<IToken>({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    refreshToken: {
        type: String,
        required: true,
    }

});

export default model<IToken>('Token', TokenSchema);