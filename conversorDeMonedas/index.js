() => {
    const input = document.getElementById("amount");
    const select = document.getElementById("coinType").value;
    const p = document.getElementsById("convertResult");
    var objtCurrency = {
        dollar: 7.85,
        euro: 8.45,
        yen: 0.052
    }
    amount = Number(input);

    const convert = 0;

    const convertCoin = () => {
        switch (select){
            case 1:
                convert = amount * objtCurrency.dollar;
                p.document
                break;
            case 2:
                convert = amount * objtCurrency.euro;
                break;
            case 3:
                convert = amount * objtCurrency.yen;
                break;
            default:
                return 0;
        }
    }
    
};