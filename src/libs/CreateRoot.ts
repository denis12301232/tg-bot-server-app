import UserModel from "@/models/UserModel"
import bcrypt from 'bcrypt'

export async function CreateRoot() {
   const user = await UserModel.findOne({ email: 'root@root.root' }, { email: 1 }).lean();
   if (!user) {
      const hashPassword: string = await bcrypt.hash('rootroot', 5);
      await UserModel.create({
         name: 'root',
         email: 'root@root.root',
         password: hashPassword,
         isActivated: true,
         roles: ['user', 'admin'],
      });
   }
}