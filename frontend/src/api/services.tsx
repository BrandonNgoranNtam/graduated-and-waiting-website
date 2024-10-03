import axios from 'axios';

// Set base URLs for both services
const graduationService = axios.create({
  baseURL: 'http://localhost:5000/api', // Node.js service
});

const springService = axios.create({
  baseURL: 'http://localhost:8080/api', // Spring Boot service
});

export { graduationService, springService };
