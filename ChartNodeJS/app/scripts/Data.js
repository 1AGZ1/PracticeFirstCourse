function UnameVerify(uname){
    for(let i = 0; i < arrVerify.length; i++){
        if(uname===arrVerify[i]){
            return true;
        }
    }
    return false;
}

function SortingData(arr){//0123-56-89 12:45:78

    let n = arr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let omlet = Number(arr[i].Date.slice(11, 13) + arr[i].Date.slice(14, 16) + arr[i].Date.slice(17));
        let current = arr[i].Date;
        // The last element of our sorted subarray
        let j = i-1;
        while ((j > -1) && (omlet < Number(arr[j].Date.slice(11, 13) + arr[j].Date.slice(14, 16) + arr[j].Date.slice(17)))) {
            arr[j+1].Date = arr[j].Date;
            j--;
        }
        arr[j+1].Date = current;
    }
    return arr;
}

function DateInc(date){
    //0123-56-89
    if ((Number(date.slice(8))+1)>31){
        date = date.slice(0, 6) + (Number(date.slice(6,7))+1).toString() + "-01";
    }else{
        date = date.slice(0, 8) + (Number(date.slice(8))+1).toString();
    }

    return date;
}

function DateDiffer(Begin, End){
    let dif;
    //0123-56-89
    //month
    if(Begin.slice(5,7)===End.slice(5,7)){
        // day
        dif = Number(End.slice(8)) - Number(Begin.slice(8)) + 1;
    }else{
        // day
        dif = Number(End.slice(8)) + 33 - Number(Begin.slice(8))
    }
    return dif;
}

async function DataToString(){
    let BeginDate = document.querySelector('input[class="CalendarStart"]');
    let EndDate = document.querySelector('input[class="CalendarEnd"]');

    let DateNow = BeginDate.value;

    let p1 = new Promise(resolve=>{
        resolve(0);
    });

    let N = DateDiffer(BeginDate.value, EndDate.value);
    (await async function () {
        for (let a = 0; a < N; a++) {
            await (async function (foo) {
                await p1.then(id => {
                    return foo + id;
                }).then(id => {
                    return DateNow;
                }).then(date => {
                    return ("app/json/" + date + ".json");
                }).then(path => {
                    const fs = require('fs');
                    return fs.readFileSync(path, 'utf8', (err, data) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        return data;
                    });
                }).then(data => {
                    let Obj = JSON.parse(data);
                    return Obj;
                }).then(data => {
                    if (AllInOneID === 0) {//one
                        // Barom
                        if (BaromObj.BoolSwitch) {
                            arrVerify.push("Опорный барометр");
                        }
                        // HydraL
                        if (HLObj.BoolSwitch) {
                            arrVerify.push("Hydra-L");
                        }
                        //HydraL1
                        if (HL1Obj.BoolSwitch) {
                            arrVerify.push("Hydra-L1");
                        }
                        //Тест Студии
                        if (StudioObj.BoolSwitch) {
                            arrVerify.push("Тест Студии");
                        }
                        //РОСА К-2
                        if (RosaObj.BoolSwitch) {
                            arrVerify.push("РОСА К-2");
                        }
                        //Тест воздуха
                        if (TestAirObj.BoolSwitch) {
                            arrVerify.push("Тест воздуха");
                        }
                        let ArrJSON = [];
                        for (let i in data) {
                            (function (key) {
                                let PreObj;
                                if (UnameVerify(data[key].uName)) {
                                    switch (MeasurementsID) {
                                        case 0://temperature BME280_temp, weather_temp_mediana, weather_temp, BME280_temp
                                            switch (data[key].uName) {
                                                case "Тест Студии":
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.BME280_temp)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                                case "Hydra-L1":
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.BME280_temp)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                                case "Тест воздуха":
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.BME280_temp)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                                case "Hydra-L"://BME280_temp
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.BME280_temp)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                                case "Опорный барометр"://weather_temp_mediana
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.weather_temp_mediana)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                                case "РОСА К-2"://weather_temp
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.weather_temp)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                            }
                                            break;
                                        case 1://pressure
                                            switch (data[key].uName) {
                                                case "Опорный барометр"://weather_pressure_mediana
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.weather_pressure_mediana)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                                case "Hydra-L", "Тест воздуха", "Hydra-L1"://BME280_pressure
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.BME280_pressure)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                                case "Тест Студии"://BMP280_pressure
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.BMP280_pressure)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                                case "РОСА К-2"://weather_pressure
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.weather_pressure)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                            }
                                            break;
                                        case 2://humidity
                                            switch (data[key].uName) {
                                                case "Hydra-L1", "Тест воздуха", "Hydra-L", "Тест Студии"://BME280_humidity
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.BME280_humidity)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                                case "РОСА К-2"://weather_humidity
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.weather_humidity)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                            }
                                            break;
                                        case 3://color
                                            switch (data[key].uName) {
                                                case "Тест Студии"://TCS34725_colorTempCT
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.TCS34725_colorTempCT)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                                case "РОСА К-2"://color_tempCT
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.color_tempCT)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                            }
                                            break;
                                        case 4://luminos
                                            switch (data[key].uName) {
                                                case "Тест Студии"://TCS34725_lux
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.TCS34725_lux)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                                case "РОСА К-2"://light_lux
                                                    PreObj = {
                                                        uName: data[key].uName,
                                                        Date: data[key].Date,
                                                        Data: Number(data[key].data.light_lux)
                                                    };
                                                    ArrJSON.push(PreObj);
                                                    delete data[key];
                                                    break;
                                            }
                                            break;
                                    }
                                }
                            }(i));
                        }
                        Array.prototype.push.apply(ArrChart, SortingData(ArrJSON));
                        if (foo === (N - 1)) {
                            return "Chart";
                        } else {
                            return 0;
                        }

                    }
                }).then(chart => {
                    if (chart !== 0) {
                        let ObjData = {
                            label: chart,
                            data: []
                        }
                        for (let i = 0; i < ArrChart.length; i++) {
                            let tmp = {
                                x: ArrChart[i].Date,
                                y: ArrChart[i].Data
                            }
                            ObjData.data.push(tmp);
                        }
                        myChart.data.datasets.push(ObjData);
                        return 0;
                    } else {
                        return 0;
                    }
                }).then(id => {
                    myChart.update();
                    return id;
                }).then(id => {
                    DateNow = DateInc(DateNow);
                    return id;
                })
            }(a));
        }
    }());
}







