import React, { Component } from 'react';
import TaskService from '../services/TaskService';
class CreateTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: '',
            status:'created',
            val: "",
            isValid: false,
            inputs: [],
            isError: {
                task: ''
            }
            
            
        };
  
        this.changeTasks=this.changeTasks.bind(this);
        this.saveTasks=this.saveTasks.bind(this);
        //this.changeStatus=this.changeStatus(this);
       
    }

    
    patternValidation = val => {
        return /\s/g.test(val);
      };
    
    saveTasks= (e) =>{
       e.preventDefault();
       
       
       const formValid = ({ isError, ...rest }) => {
        let isValid = false;
    
    
        Object.values(rest).forEach(val => {
            if (val === null || val===' ' ) {
                isValid = false
            } else {
                isValid = true
            }
        });
    
        return isValid;
    };

    if (formValid(this.state.task)) {
        const { val } = this.state.task;
        console.log("Value: ", val);
        let task = {task:this.state.task,status:this.state.status};

       console.log('task=>'+JSON.stringify(task));

       TaskService.createTask(task); 
       window.location.reload(false);

    } else {
       
   
        console.log("Form is invalid!");
    }
      
      

    }

    changeStatus= (event) =>{
        this.setState({status:event.target.value});
 }
    

    changeTasks= (event) =>{
        const { value } = event.target;
    const isValid = this.patternValidation(value);

    this.setState({
        val: value,
      isValid
    });

    console.log(this.patternValidation(value))
        this.setState({ task:event.target.value}); 
       }

       addInput = ev => {
        this.setState(prev => ({ inputs: [...prev.inputs, 'Hi'] }))
    }

    render() {
        const { isValid, val } = this.state;
        return (
            <div>
                <h1>Task Management Application</h1><br/><br/>
                   <div className = "container">
                        <div className = "row">
                            <div className = " col-md-6 offset-md-3 offset-md-3">
                                
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                        <button className="btn btn-light" onClick={this.addInput}>Add a task</button>
                {this.state.inputs.map(node => <input  ref="task" type='text' name='task' placeholder='Tasks' value={this.state.task}  className='form-control' 
                                             onChange={this.changeTasks} required/>
                                            )}
                                            {this.state.isValid && (
              <div style={{ color: "red" }}>Empty spaces are not allowed.</div>
            )}   
                                                 </div>
                                                 <br/>
                                        <div>
                                             <input type='hidden' name='status' value='created' className='form-control' 
                                             onChange={this.changeStatus} />
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveTasks}>+</button><label className="addtas">Add Tasks</label>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateTaskComponent