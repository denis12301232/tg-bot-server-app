import { AssistanceForm } from '../types'
import Constants from '@/libs/Constants'

export function showForm(form: any) {
   return Object.entries(form).reduce((box, [key, value]) => {
      return [...box, `${Constants.assistance[key as keyof AssistanceForm].display}: ${value}`];
   }, [] as string[]).join('\n');
}