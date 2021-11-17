import React, { Component} from 'react'
import TaskService from '../services/TaskService';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';




class ListTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tasks: [],
                status:'complete',
               
        }

        this.addTasks=this.addTasks.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
        this.completeTask=this.completeTask.bind(this);
    }
    completeTask(id){
        
        let sts = {status:this.state.status};
        console.log('sts=>'+JSON.stringify(sts));
        TaskService.completeTask(sts,id);
        window.location.reload(false);
    }
    deleteTask(id){
           TaskService.deleteTask(id);
           window.location.reload(false);
    }
    
    componentDidMount(){
        TaskService.getAllTasks().then((res) => {
            this.setState({ tasks: res.data});

        });
       
        
        TaskService.getEmployeeById(this.state.id).then((res) => {
            let tsk=res.data;
            this.setState({task:tsk.task,
                           status:tsk.status
        
    });
    });
    }
    addTasks(){
        this.props.history.push('/add-task');
    }

render() {
    return (
        <div className="bgclr">           
            
             <div className = "row">
                    <table className = "table  ">
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task =>
                                   <tr key = {task.id} onClick={() => this.completeTask(task.id)} className={task.status === "complete" ? 'complete' : ""}  
                                    > <td><i className={task.status === "complete" ? 'fa fa-check' : "fa fa-circle-o"} ></i>  { task.task} </td> 
                                         <td>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTask(task.id)} className="btn btn-light">Delete </button>
                                         </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

             </div>

        </div>
    )
}
}
export default ListTaskComponent