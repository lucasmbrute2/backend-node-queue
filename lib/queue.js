import Queue from "bull"
import RedisConfig from "../config/redis.js"

import registrationMail from "../jobs/registrationMail.js"

const mailQueue = new Queue(registrationMail.key,RedisConfig)

export default mailQueue;