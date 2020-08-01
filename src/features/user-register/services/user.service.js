import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  getAllVolunteers(){
    return axios.get(API_URL + "volunteers");
  }

  searchVolunteer(name){
    return axios.post(API_URL + "volunteers", {name});
  }

  searchEvent(name){
    return axios.post(API_URL + "events", {name});
  }

  searchVolunteerById(id){
    return axios.post(API_URL + "volunteer", {id});
  }

  addEventToVolunteer(startingDate, endingDate, hours, institution, description, volunteer, event){
    return axios.post(API_URL + "addVolunteerEvent", {startingDate, endingDate, hours, institution, description, volunteer, event});
  }

  searchVolunteerEvents(volunteer, eventName){
    return axios.post(API_URL + "getVolunteerEvents", {volunteer, eventName});
  }

}


export default new UserService();