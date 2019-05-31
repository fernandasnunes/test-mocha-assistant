const AssistantV1 = require("watson-developer-cloud/assistant/v1");

var assistant = new AssistantV1({
    iam_apikey: "tmX4iC1oIh6024Eetl5Kf8IoXKDVjlWQtxyii5n30-ub",
    version: "2018-09-20",
    url: "https://gateway-wdc.watsonplatform.net/assistant/api"
  });

function SendMessage( req) {
     console.log(req.body)
  //ABAIXO CREDENCIAIS
  return new Promise((resolve, reject) => {
    assistant.message(
        {
          workspace_id: "7b218be1-0418-4dfc-b6e1-2c81fee9d665",
          input: { text: req.message },
          context: req.context
        },
        function(err, response) {
            console.log(response)
            console.log(err)
           !err ? resolve(response) : reject(err)
        }
      );
  })
}

module.exports = { SendMessage };
