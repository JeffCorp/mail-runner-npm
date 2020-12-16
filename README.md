## Mail-runner

Mail-runner is a package that makes sending mails seamless. Its main aim is to help those who intend on running serverless applications to send mails with ease.

### Parameters
<hr>
Usage
<br/>
<pre>
  import MailRunner from "mail-runner"

    const send = () => {
    const config = {  // The details here are gotten from your mail provider
      appUsername: "application username",
      appPassword: "application password",
      host: "host",
      port: "port", // port number
      secure: false // True or false depending on the SMTP configuration from your provider
    };
    const mailer = new MailRunner(config);
    
    mailer.send(
      {
        siteName: "My Web App" // Pass site name here
        from: "bot@domain.com", // this must be any email with your domain name as its extension
        toUser: "to@user.com",
        title: "title",
        message: "This is a test mail" // Could also take html
      }).then(res => {
        console.log("sent", res)
        // Do whatever
      }).catch(err => {
        console.log("error", err)
        // handle errors
      });
  }
</pre>