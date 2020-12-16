import Axios from "axios";

class MailRunner {
  constructor(config){
    this.config = config;
  }

  send(data) {
   return new Promise((resolve, reject) => {
      try {
        const {appUsername, appPassword, host, port} = this.config;
        const {from, siteName, toUser, title, message} = data;

        // Configuration
        if (!appUsername) throw Error("Input an application Username")
        if (!appPassword) throw Error("Input an application Password")
        if (!host) throw Error("Input an host")
        if (!port) throw Error("Input an application port")

        // Body
        if(!from) throw Error("Input from whom the mail should read");
        if(!siteName) throw Error("Input the site Name");
        if(!toUser) throw Error("Input the user's email");
        if(!title) throw Error("Input the title of the mail");
        if(!message) throw Error("Input the message")
        
        const payload = { ...data, config: this.config };
        Axios.post("https://mail-runner.herokuapp.com/api/v1/send", payload)
          .then((res) => {
            const response = res.data;
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default MailRunner;
