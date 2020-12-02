import axios from 'axios';

// const Schedule_API_BASE_URL = "http://localhost:8080/scheduledFlight";

class ScheduleService {

    // getScheduledFlight(){
    //     return axios.get(Schedule_API_BASE_URL + '/' + 'all');
    // }

    // createScheduledFlight(scheduledFlight){
    //     return axios.post(Schedule_API_BASE_URL + '/' + 'newflight', scheduledFlight);
    // }

    // updateScheduledFlight(scheduledFlight, entryNo){
    //     return axios.put(Schedule_API_BASE_URL + '/' + 'updateFlight' + '/' + entryNo, scheduledFlight);
    // }

    // deleteScheduledFlight(scheduledFlightId){
    //     return axios.delete(Schedule_API_BASE_URL + '/' + 'deleteflight' + '/' + scheduledFlightId);
    // }

    getScheduledFlight(){
        return axios.get( 'http://localhost:8080/scheduledFlight/all');
    }

    getScheduledFlightById(entryNo){
        return axios.get(`http://localhost:8080/scheduledFlight/getflight/${entryNo}`);
    }

    createScheduledFlight(scheduledFlight){
        return axios.post('http://localhost:8080/scheduledFlight/newflight', scheduledFlight);
    }

    updateScheduledFlight(scheduledFlight, entryNo){
            return axios.put(`http://localhost:8080/scheduledFlight/updateFlight/${entryNo}` , scheduledFlight);
    }

     deleteScheduledFlight(entryNo){
        return axios.delete(`http://localhost:8080/scheduledFlight/deleteflight/${entryNo}`);
    }
}

export default new ScheduleService()