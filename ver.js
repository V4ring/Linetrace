let tg = window.Telegram.WebApp

tg.expand();

tg.MainButton.show();
tg.MainButton.text = "Changed Text";
tg.MainButton.setText("Changed Texto");
tg.MainButton.textColor = "White";
tg.MainButton.color = "Green";
tg.MainButton.setParams({"color": "Green"});

btn.addEventListener('click', function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.show()
    }
});
