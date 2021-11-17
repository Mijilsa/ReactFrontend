import axios from 'axios';

const TASK_API_BASE_URL = "http://localhost:8080/api/v1/tasks";


class TaskService{

    getAllTasks(){
        return axios.get(TASK_API_BASE_URL);
      }

      createTask(task){
        return axios.post(TASK_API_BASE_URL, task);
      }

      deleteTask(taskId){
        return axios.delete(TASK_API_BASE_URL +'/'+taskId);
      }

      getEmployeeById(taskId){
           return axios.get(TASK_API_BASE_URL+'/'+taskId);
      }

      completeTask(status,taskId){
        return axios.put(TASK_API_BASE_URL+'/'+taskId,status);
      }
}
export default new TaskService()