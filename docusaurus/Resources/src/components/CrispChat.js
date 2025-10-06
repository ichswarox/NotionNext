import React, {useEffect} from 'react';

const CrispChat = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "97a5aaa5-a2c5-4ca5-9f48-901374a3aeaf";
    (function() {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  return null;
};

export default CrispChat;
