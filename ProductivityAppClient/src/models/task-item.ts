export class TaskItem{
    taskId:number;
    taskName:string;
    taskDesc:string;
    dueDate:Date;

    constructor(taskId:number,taskName:string,taskDesc:string,dueDate:Date)
    {
        this.taskId=taskId;
        this.taskName=taskName;
        this.taskDesc=taskDesc;
        this.dueDate=dueDate;
    }
}