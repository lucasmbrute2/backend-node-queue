import Queue from "bull"
import RedisConfig from "../config/redis.js"

import * as jobs from "../jobs"

const queues = Object.values(jobs).map(job=>({
    bull:  new Queue(job.key,RedisConfig),
    name: job.key,
    handle:  job.handle 
}))

export default {
    queues,
    add(name,data){
        const queue = this.queues.find(queue=> queue.name===name)
        return queue.bull.add(data)
    },
    process(){
        return this.queues.forEach(queue=>{
            queue.bull.process(queue.handle);
            queue.bull.on('failed',(job, err)=>{
                console.log("Job Failed" ,job.data)
                console.log(err)
            })
        })
    }
}
