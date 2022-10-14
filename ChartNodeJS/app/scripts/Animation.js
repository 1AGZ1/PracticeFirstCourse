// devices buttons
function DevicesAnim(id){
    switch (id) {
        case 0://Barom
            let barom = document.querySelector("div#Barom");
            if(BaromObj.BoolSwitch){
                barom.className = "Press";
            }else{
                barom.className = "NoPress";
            }
            break;
        case 1://HydraL
            let HL = document.querySelector("div#HL");
            if(HLObj.BoolSwitch){
                HL.className = "Press";
            }else{
                HL.className = "NoPress";
            }
            break;
        case 2://HydraL1
            let HL1 = document.querySelector("div#HL1");
            if(HL1Obj.BoolSwitch){
                HL1.className = "Press";
            }else{
                HL1.className = "NoPress";
            }
            break;
        case 3://Studio
            let Stud = document.querySelector("div#TS");
            if(StudioObj.BoolSwitch){
                Stud.className = "Press";
            }else{
                Stud.className = "NoPress";
            }
            break;
        case 4://Rosa
            let RK2 = document.querySelector("div#RK2");
            if(RosaObj.BoolSwitch){
                RK2.className = "Press";
            }else{
                RK2.className = "NoPress";
            }
            break;
        case 5://Air
            let TA = document.querySelector("div#TA");
            if(TestAirObj.BoolSwitch){
                TA.className = "Press";
            }else{
                TA.className = "NoPress";
            }
            break;
        default:
            alert("DevicesAnim error: out of id");
    }
}

// Measurements buttons
function MeasurementsAnim(id){
    let el = document.querySelector(".PressM");
    switch (id) {
        case 0://temperature
            let Tem = document.querySelector("#Tem");
            el.className = "NoPressM";
            Tem.className = "PressM";
            break;
        case 1://pressure
            let Pre = document.querySelector("#Pre");
            el.className = "NoPressM";
            Pre.className = "PressM";
            break;
        case 2://humidity
            let Hum = document.querySelector("#Hum");
            el.className = "NoPressM";
            Hum.className = "PressM";
            break;
        case 3://color
            let Col = document.querySelector("#Col");
            el.className = "NoPressM";
            Col.className = "PressM";
            break;
        case 4://luminos
            let Lum = document.querySelector("#Lum");
            el.className = "NoPressM";
            Lum.className = "PressM";
            break;
        default:
            alert("Measurements error: out of id");
    }
}

// Average buttons
// function AverageAnim(id){
//     switch (id) {
//         case 0:
//
//             break;
//         case 1:
//
//             break;
//         case 2:
//
//             break;
//         case 3:
//
//             break;
//         case 4:
//
//             break;
//         default:
//             alert("Average error: out of id");
//     }
// }

// choosing the number of graphs buttons
// function OneGrafAnim(id){
//     if(id !== AllInOneID){
//         let el1 = document.querySelector("div.OneApartButton");
//         let el2 = document.querySelector("div.ClickOneApart");
//
//         el1.className = "ClickOneApart";
//         el2.className = "OneApartButton";
//     }
// }