import axios from 'axios';
import authHeader from './auth-header';

const API_URL = ' https://asobec-gitlab-staging.herokuapp.com/api/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  searchVolunteer(name){
    return axios.get(API_URL + 'volunteers', { params: { name } });
  }

  searchEvent(name){
    return axios.get(API_URL + "events", { params: { name } });
  }

  searchEventById(id) {
    return axios.get(API_URL + 'events/event/' + id);
  }

  createVolunteer(volunteerData){
    return axios.post(API_URL + "volunteers", { volunteerData });
  }

  createEvent(values) {
    return axios.post(API_URL + "createEvent", {name: values.name, description: values.description, inCharge: values.inCharge});
  }

  searchVolunteerById(id) {
    return axios.get(API_URL + "volunteers/volunteer/" + id);
  }

  addEventToVolunteer(startingDate, endingDate, hours, institution, description, volunteerId, eventId){
    return axios.post(API_URL + 'volunteers/volunteer/' + volunteerId + '/events', {startingDate, endingDate, hours, institution, description, eventId});
  }

  searchVolunteerEvents(volunteer, eventName){
    return axios.get(API_URL + 'volunteers/volunteer/' + volunteer + '/events', { params: { eventName } });
  }

  deleteVolunteerById(id) {
    return axios.delete(API_URL + 'volunteers/volunteer/' + id);
  }

  updateVolunteer(id, volunteer) {
    return axios.put(API_URL + 'volunteers/volunteer/' + id, volunteer);
  }

  deleteEventById(id) {
    return axios.delete(API_URL + 'events/event/' + id);
  }

  updateEvent(id, event) {
    return axios.put(API_URL + 'events/event/' + id, event);
  }

  upload(file) {
    let formData = new FormData();

    formData.append("file", file);

    return axios.post(API_URL +"upload-file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }    
    });
  }
}


export default new UserService();