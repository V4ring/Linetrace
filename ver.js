let tg = window.Telegram.WebApp

tg.expand();

tg.MainButton.show();
tg.MainButton.text = "Changed Text";
tg.MainButton.setText("Changed Texto");
tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#000000";
tg.MainButton.setParams({"color": "#000000"});

btn.addEventListener('click', function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.show()
    }
});
