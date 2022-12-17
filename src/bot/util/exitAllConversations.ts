import { MyContext } from "../types"

export async function exitAllConversations(ctx: MyContext) {
   try {
      const dialogs = await ctx.conversation.active();
      for (const key of Object.keys(dialogs)) {
         await ctx.conversation.exit(key);
      }
   } catch (e) {
      if (e instanceof Error) ctx.reply(e.message);
   }
}