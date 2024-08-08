export class Task{
    constructor(
        public title: string,
        public description: string,
        public assignedTo: string,
        public createdAt: string,
        public priority: string,
        public status: string,
        public id?: string
    ){
        this.title = title;
        this.description = description;
        this.assignedTo = assignedTo;
        this.createdAt = createdAt;
        this.priority = priority;
        this.status = status;
        
    }
}