require(['underscore', 'core/lib/yammer_bootstrap'], function (_, boot) {
  'use strict';

  boot.run(
    function (currentUser, currentNetwork, allNetworks) {
      yam.ready.configure(_.extend({"assetHost":"https://s0.assets-yammer.com","cdnAssetHost":"https://s0.assets-yammer.com","mugshotHost":"https://www.yammer.com/mugshot","cdnMugshotHost":"https://mug0.assets-yammer.com/mugshot","polarisHost":"https://polaris.yammer.com/","baseURI":"https://www.yammer.com","apiBaseURI":"https://api.yammer.com","videoStreamingUri":"rtmpt://s1fqyiixzut1oy.cloudfront.net:80/cfx/st","reportAuthorizationHeader":"Receiver MTosLDIzQTBEMTA1LTM4RUItNDcyMS05RTM2LTQxNEY5QUI1RTQ3MyA=","reportPerfRequestUri":"https://receiver.yamalytics.yammer.com/prod/web_ui","filesHost":"https://filesng.yammer.com/v2/files","paddieHost":"https://pad0.assets-yammer.com"}, {
        currentUser: currentUser,
        currentNetwork: currentNetwork,
        allNetworks: allNetworks
      }));
    },
    function () {
      console && console.log(arguments);
    }
  );
});
