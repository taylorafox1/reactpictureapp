import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID d93ad5620b3d4ffedd963d392d1f216b8d47f2d96193d202d631010abad87faf'
  }
});
