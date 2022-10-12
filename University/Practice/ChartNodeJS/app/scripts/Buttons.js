//chosen device buttons
    function DevicePress(id){
        switch (id) {
            case 0://Barom
                BaromObj.BoolSwitch = !BaromObj.BoolSwitch;
                DevicesAnim(id);
                break;
            case 1://HydraL
                HLObj.BoolSwitch = !HLObj.BoolSwitch;
                DevicesAnim(id);
                break;
            case 2://HydraL1
                HL1Obj.BoolSwitch = !HL1Obj.BoolSwitch;
                DevicesAnim(id);
                break;
            case 3://Studio
                StudioObj.BoolSwitch = !StudioObj.BoolSwitch;
                DevicesAnim(id);
                break;
            case 4://Rosa
                RosaObj.BoolSwitch = !RosaObj.BoolSwitch;
                DevicesAnim(id);
                break;
            case 5://Air
                TestAirObj.BoolSwitch = !TestAirObj.BoolSwitch;
                DevicesAnim(id);
                break;
            default:
                alert("DevicePress error: out of id");
        }
    }
//chosen parameters buttons
    function ChosenMeasurements(n){
        MeasurementsID = n;
        console.log(n);
        //animation function call
        MeasurementsAnim(n);
    }
//chosen average buttons
//     function ChosenAverage(n){
//         AverageID = n;
//         //animation function call
//         // AverageAnim(n);
//     }

// choosing the number of graphs buttons
//     function OneGraf(n){
//         OneGrafAnim(n);
//         AllInOneID = n;
//     }

//graph construct button
function Constructor(){
    alert("постройка Графика")
    Reset_Variables();
    DataToString();
}



//getting today's date
function GetToday(){
    let today = new Date();
    let now = today.toLocaleString().replace(/[/]|[:]/g, "-").replace(/,| PM| AM/g, "");

    return now;
}

//json/csv  Save
function SaveJSON(){
    const fs = require('fs');

    let path ="save/" + GetToday() + ".json"

    fs.writeFile(path, JSON.stringify(ArrChart), err => {
        if(err){
            console.err;
            return 0;
        }
    });
    alert(path + " - успешно сохранено!");
}

function SaveCSV(){
    const fs = require('fs');
    let path ="save/" + GetToday() + ".csv"

    let json = ArrChart
    let fields = Object.keys(json[0])
    let replacer = function(key, value) { return value === null ? '' : value }
    let csv = json.map(function(row){
        return fields.map(function(fieldName){
            return JSON.stringify(row[fieldName], replacer)
        }).join(';')
    })
    csv.unshift(fields.join(';')) // add header column
    csv = csv.join('\r\n');


    fs.writeFile(path, csv, err => {
        if(err){
            console.err;
            return 0;
        }
    });
    alert(path + " - успешно сохранено!");
}