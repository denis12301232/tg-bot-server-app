import{$ as s}from"./index.8699013e.js";class c{static setNewName(t){return s.patch("/tools/name",{name:t})}static setNewEmail(t){return s.patch("/tools/email",{email:t})}static setNewPassword(t,e){return s.patch("/tools/password",{newPassword:t,oldPassword:e})}static setGoogleServiceAccountSettings(t,e,o,r){return s.post("/tools/google/service",{serviceUser:t,servicePrivateKey:e,sheetId:o,folderId:r})}static giveAdminRights(t){return s.post("/tools/giverights",{email:t})}static takeAdminRights(t){return s.post("/tools/takerights",{email:t})}static getUsers(t){return s.get("/tools/users",{params:{_id:t}})}static updateRoles(t,e){return s.post("/tools/setroles",{_id:t,roles:e})}}export{c as T};
