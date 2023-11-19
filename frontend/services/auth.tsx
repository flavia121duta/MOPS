import axios from 'axios';

export default class Authentication {
  async login(email: string, password: string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    const response = await axios.post(
      'http://localhost:3000/api/login',
      formData
    );
    return response;
  }

  async logout() {
    const response = await axios.post('http://localhost:3000/api/logout');
    return response;
  }

  async register(email: string, password: string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    const response = await axios.post(
      'http://localhost:3000/api/register',
      formData
    );
    return response;
  }
}
