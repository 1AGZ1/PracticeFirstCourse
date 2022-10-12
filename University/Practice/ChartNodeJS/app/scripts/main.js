//0="Опорный барометр", 1="Hydra-L", 2="Hydra-L1", 3="Тест Студии", 4="РОСА К-2", 5="Тест воздуха",

//Array of data to upload to myChart
let ArrChart =[];

//array of selected devices to check
let arrVerify=[];

//Objects of devices uName, ID, Turn ON/OFF
let BaromObj = {
    uName: "Опорный барометр",
    ID : 0,
    BoolSwitch : false
};
let HLObj = {
    uName: "Hydra-L",
    ID : 1,
    BoolSwitch : false
}
let HL1Obj = {
    uName: "Hydra-L1",
    ID : 2,
    BoolSwitch : false
}
let StudioObj = {
    uName: "Тест Студии",
    ID : 3,
    BoolSwitch : false
}
let RosaObj = {
    uName: "РОСА К-2",
    ID : 4,
    BoolSwitch : false
}
let TestAirObj = {
    uName: "Тест воздуха",
    ID : 5,
    BoolSwitch : false
}


let MeasurementsID=0;//0=temperature,1=pressure,2=humidity,3=color,4=luminos
let AverageID=0;//0=AsIs,1=1hour,2=3hour,3=1day,4=min/max
let AllInOneID = 0;//0=one, 1=apart
