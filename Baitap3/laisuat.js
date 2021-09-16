let money = parseFloat(prompt('So tien gui tiet kiem:'));
        let interest = parseFloat(prompt('Lai suat don dinh ky hang nam (%):'));
        let year = parseInt(prompt('Thơi gian gưi(nam):'));
        var moneyPay = (year * (money*(interest/100)));
        var m = (moneyPay + money);
        document.write('Tong so tien lai nhan duoc sau '+ year +' la: ' + m + ' trieu');