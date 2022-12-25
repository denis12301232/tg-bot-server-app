import { MyContext } from "../types"

export async function exitAllConversations(ctx: MyContext) {
   try {
      return ctx.conversation.exit();
   } catch (e) {
      if (e instanceof Error) ctx.reply(e.message);
   }
}