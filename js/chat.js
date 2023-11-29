document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementsByClassName("touts__grid__tout__chapter__icon")[2];
    button.setAttribute('tabindex', '0'); // Make the element focusable
    console.log(button);
  
    button.addEventListener('focusout', function() {
        console.log("test")
    });
  
    button.addEventListener('click', function() {
        var a = document.getElementsByClassName("spacer spacer--medium")[0]
        a.innerHTML = '<iframe src="https://deadsimplechat.com/RxMOTUUMK" width="100%" height="600px"></iframe>'
        a.style.margin = "0px 0px 500px 10px"
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState !== "visible") {
                var a = document.getElementsByClassName("spacer spacer--medium")[0]
                a.innerHTML = ''
                a.style.margin = "0px 0px 0px 0px"
            }
        })
    });

    
});


(async () => {
    const sdk = new DSChatSDK("RxMOTUUMK", "chat-frame", "pub_4f436d3476376370524c382d5f53456530305a4134717739536b61474a754f4e4b416e30535f72687a4d5251347a5439")
    await sdk.connect();
});