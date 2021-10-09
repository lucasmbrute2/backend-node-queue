import Queue from "./lib/Queue.js"
import RegistrationMail from "./jobs/registrationMail"
Queue.process(RegistrationMail.handle)