import { SessionFlavor, Context } from 'grammy'
import { type Conversation, type ConversationFlavor } from '@grammyjs/conversations'

export interface SendFormResponse {
   message: string;
   saved: AssistanceForm & { _id: string };
}

export interface AssistanceForm {
   name: string;
   surname: string;
   patronymic: string;
   phone: string;
   birth: string;
   district: string;
   street: string;
   house: string;
   flat: string;
   people_num: number;
   people_fio: string[];
   invalids: string;
   children: string;
   children_age: string[];
   food: string;
   drugs: string;
   water: string;
   products_detail: string;
   gigien: string;
   gigien_num: string;
   pampers: string;
   diet: string;
   pers_data_agreement: boolean;
   photo_agreement: boolean;
}
export interface SessionData { 
   form: AssistanceForm;
}
export type MyContext = Context & SessionFlavor<SessionData> & ConversationFlavor;
export type MyConversation = Conversation<MyContext>;

export interface ConversationQuestionWithValidators {
   question: string; 
   conversation: MyConversation;
   ctx: MyContext; 
   validators: Function[];
}