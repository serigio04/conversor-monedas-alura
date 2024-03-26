const convertir = () => {

    const input = parseFloat(document.getElementById("amount").value);
    const select = parseInt(document.getElementById("coinType").value);
    // const p = document.getElementsById("convertResult");

    var objtCurrency = {
        dollar: 7.85,
        euro: 8.45,
        yen: 0.052
    }

    let convert;

    const convertCoin = () => {
        switch (select){
            case 1:
                convert = input / objtCurrency.dollar;
                break;
            case 2:
                convert = input / objtCurrency.euro;
                break;
            case 3:
                convert = input / objtCurrency.yen;
                break;
            default:
                return 0;
        }
        n =  convert.toFixed(2)
        console.log(n)
    }
    convertCoin();
    
};