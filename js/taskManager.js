//create a function to tranform raw data into HTML card

function createTaskHtml(name,description,toWhom,fmDate,fmMonth,status){
    
    const htmlCard = `<div class="col-12 col-md-6 col-lg-4 gy-5">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-9">
                    <h1 class="card-title">${name}</h1>
                    <hr>
                    <p class="card-text">${description}</p>
                </div>
                <div class="col-3">
                    <h2 class="float-right">${fmDate}</h2>
                    <span id="month">${fmMonth}</span>
                </div>
            </div>
          <hr>
          <div class="row last-row gx-2">
            <div class="col-3">
              <p id="assignedTo"><strong>Assigned to</strong><br /><em>${toWhom}</em></p>
            </div>
            <div class="col-3">
                <p id="statusLayout" class=${status}><strong>Status</strong><br /><em>${status}</em></p>
            </div>
            <div class="col-3" >
                <a href="#" class="btn btn-primary btn-sm px-3" id="edit" >Edit</a>
            </div>
            <div class="col-3">
                <a href="#" class="btn btn-secondary btn-sm">Delete</a>
            </div>
          </div>
        </div>
      </div>
      <!-- end of the card -->
  </div>`

  return htmlCard;

}


class TaskManager{
    //innitialization
    constructor(currentID = 0){
        this.tasks = [];
        this.currentID = currentID;
    }

    //create a method to add new task info to the tasks[] array
    addTask(name,description,assignedTo,dueDate,status){
        const newTask ={
            id: this.currentID++,
            name:name,
            description:description,
            assignedTo:assignedTo,
            dueDate:dueDate,
            status:status
        }
        this.tasks.push(newTask);
    }

    //Create a function to tranfer colleted data to be transform to html and then store it in a array to be displayed in HTML
    render(){
        //create an array to record all the raw data that have been transformed into htmlcard
        let tasksHtmlList = [];
        
        this.tasks.forEach(element => {
            //Format the date
            const date = new Date(element.dueDate);
            //const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();''
            const formattedDate = date.getDate();
            const formattedMonth = date.toLocaleString('en-us', { month: 'short' });
            //Create the task html
            let taskHtml = createTaskHtml(
                element.name,
                element.description,
                element.assignedTo,
                formattedDate,
                formattedMonth,
                element.status
            );
            
        // Push the tranformed data (HTML backticked card) into the HTML Card list 
        tasksHtmlList.push(taskHtml);
        
        });  // end of for each iteration
        
        let cardLayout = document.querySelector("#cardLayout")
        let joinedHtmlTasks =  tasksHtmlList.join("\n");
        cardLayout.innerHTML = joinedHtmlTasks;

        // // setColor
        // let statusArray = document.querySelector(".status");
        // console.log(statusArray);
        // foreach
         

    }//end of render method

     setColor(){
         let review=document.getElementsByClassName("review");
         for (let i=0;i<review.length;i++){
             review[i].parentNode.parentNode.parentNode.style.backgroundColor="#FFFFEF";
         }

         let done=document.getElementsByClassName("done");
         for (let i=0;i<done.length;i++){
              //done[i].parentNode.parentNode.parentNode.style.backgroundColor="#FFE5FF";
             done[i].parentNode.parentNode.parentNode.style.backgroundColor="#FFECFF";
         }

         let inprogress=document.getElementsByClassName("inprogress");
         for (let i=0;i<inprogress.length;i++){
             inprogress[i].parentNode.parentNode.parentNode.style.backgroundColor="#BAFFFF";
         }

         let todo=document.getElementsByClassName("todo");
         for (let i=0;i<todo.length;i++){
             todo[i].parentNode.parentNode.parentNode.style.backgroundColor="#CCFFE5";
         }


    }//end of setColor function
}//end of class TaskManager
