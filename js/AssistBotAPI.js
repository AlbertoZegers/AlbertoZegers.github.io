window.watsonAssistantChatOptions = {
  integrationID: "1c65b7f7-7a0c-4c71-9885-b68f63f2366e", // The ID of this integration.
  region: "au-syd", // The region your integration is hosted in.
  serviceInstanceID: "8a1d2167-e024-4ed2-8dfb-3c093bf1aa9c", // The ID of your service instance.
  onLoad: async (instance) => {
    await instance.render();
    const button = document.getElementById("WACLauncher__Button");
    button.setAttribute("style", "position: absolute; top: -100px; left: -30px;");
  }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});