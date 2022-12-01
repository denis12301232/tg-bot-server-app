import mongoose from 'mongoose'
import { IToken } from '@/interfaces/interfaces'

const { Schema, model } = mongoose;

const TokenSchema = new Schema<IToken>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },
    refreshToken: {
        type: String,
        required: true,
    }
});

export default model<IToken>('Token', TokenSchema);