import axios, { AxiosResponse } from 'axios'
import type { SendFormResponse, AssistanceForm } from '../types'

export default class ApiCalls {
   static async saveForm(form: AssistanceForm): Promise<AxiosResponse<SendFormResponse>> {
      const response = await axios.post<SendFormResponse>(`${process.env.SERVER_URL}/api/assistance`, { form });
      return response;
   }
}