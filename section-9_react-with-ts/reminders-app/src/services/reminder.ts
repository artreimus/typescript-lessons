import axios from 'axios';
import Reminder from '../models/reminder';

class ReminderService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

  async getReminders() {
    const response = await this.http.get<Reminder[]>('/todos'); // getting from server
    return response.data;
  }

  async addReminder(title: string) {
    const response = await this.http.post<Reminder>('/todos', { title }); // posting to server
    return response.data;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete('/todos' + id);
    return response.data;
  }
}

export default new ReminderService(); // we export an instance so that we don't have to instantiate when importing
