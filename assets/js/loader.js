var json_obj = [
  {
    "Id": "led-tube-1",
    "internal_code": "",
    "model_number": "LPLL/23",
    "description": "LED PLL Replacement Lamp",
    "manufacturer": "Topaz",
    "category": "LED Tubes",
    "spec_name": "led-tube-1.pdf",
    "price": ""
  },
  {
    "Id": "led-tube-2",
    "internal_code": "",
    "model_number": "ZY/T5/15W1200 BONT",
    "description": "LED T5 tube with External Driver System",
    "manufacturer": "James",
    "category": "LED Tubes",
    "spec_name": "led-tube-2.pdf",
    "price": ""
  },
  {
    "Id": "led-tube-3",
    "internal_code": "",
    "model_number": "ZY-T8(P)-10W600 BONT",
    "description": "LED T8 tube with External Driver System",
    "manufacturer": "James",
    "category": "LED Tubes",
    "spec_name": "led-tube-3.pdf",
    "price": ""
  },
  {
    "Id": "led-panel-1-1",
    "internal_code": "",
    "model_number": "F-L14/32/830/D/HP-75",
    "description": "High Perormance LED Flat Panel 1x4",
    "manufacturer": "Topaz",
    "category": "LED flat Panels",
    "spec_name": "led-panel-1.pdf",
    "price": 39
  },
  {
    "Id": "led-panel-1-2",
    "internal_code": "",
    "model_number": "F-L22/32/830/D/HP-75",
    "description": "High Perormance LED Flat Panel 2x2",
    "manufacturer": "Topaz",
    "category": "LED flat Panels",
    "spec_name": "led-panel-1.pdf",
    "price": 32.5
  },
  {
    "Id": "led-panel-2-1",
    "internal_code": "",
    "model_number": "LPL14D3635E",
    "description": "LED Flat Panel 1x4",
    "manufacturer": "Quality Light Source",
    "category": "LED flat Panels",
    "spec_name": "led-panel-2.pdf",
    "price": ""
  },
  {
    "Id": "led-panel-2-2",
    "internal_code": "",
    "model_number": "LPL22D363OE",
    "description": "LED Flat Panel 2x2",
    "manufacturer": "Quality Light Source",
    "category": "LED flat Panels",
    "spec_name": "led-panel-2.pdf",
    "price": ""
  },
  {
    "Id": "led-panel-2-3",
    "internal_code": "",
    "model_number": "LPL24D5030E",
    "description": "LED Flat Panel 2x4",
    "manufacturer": "Quality Light Source",
    "category": "LED flat Panels",
    "spec_name": "led-panel-2.pdf",
    "price": ""
  },
  {
    "Id": "led-outdoor-1",
    "internal_code": "",
    "model_number": "F-WPM-40WLED-FC-67",
    "description": "LED Outdoor Wall Pack",
    "manufacturer": "Topaz",
    "category": "Outdoor Lighting",
    "spec_name": "led-outdoor-1.pdf",
    "price": 102
  },
  {
    "Id": "led-control-1",
    "internal_code": "",
    "model_number": "EOSW-111/112",
    "description": "Wall Switch Receivers with Neutral",
    "manufacturer": "Duke",
    "category": "Lighting Control",
    "spec_name": "led-control-1.pdf",
    "price": 92.39
  },
  {
    "Id": "led-control-2",
    "internal_code": "",
    "model_number": "A515 MH",
    "description": "Springwound Auto Off In Wall Timer",
    "manufacturer": "Duke",
    "category": "Lighting Control",
    "spec_name": "led-control-2.pdf",
    "price": 25.75
  },
  {
    "Id": "led-control-3",
    "internal_code": "",
    "model_number": "EOPC-100",
    "description": "Wireless RF PIR Ocuppancy Sensor",
    "manufacturer": "Duke",
    "category": "Lighting Control",
    "spec_name": "led-control-3.pdf",
    "price": 82.28
  },
  {
    "Id": "led-control-4",
    "internal_code": "",
    "model_number": "CS-50",
    "description": "PIR Wall Switch Vacancy Sensor",
    "manufacturer": "Duke",
    "category": "Lighting Control",
    "spec_name": "led-control-4.pdf",
    "price": 20.9
  },
  {
    "Id": "led-exit-1",
    "internal_code": "",
    "model_number": "CER",
    "description": "LED Emergency Exit",
    "manufacturer": "Swift",
    "category": "Exit Signs",
    "spec_name": "led-exit-1.pdf",
    "price": 24.28
  },
  {
    "Id": "led-vapor-1",
    "internal_code": "",
    "model_number": "NUVO 65-078",
    "description": "Wall LED Vapor Proof Fixture",
    "manufacturer": "Duke",
    "category": "Vapor Lights",
    "spec_name": "led-vapor-1.pdf",
    "price": 83.95
  },
  {
    "Id": "led-vapor-2",
    "internal_code": "",
    "model_number": "NUVO 65-079",
    "description": "Ceiling LED Vapor Proof Fixture",
    "manufacturer": "Duke",
    "category": "Vapor Lights",
    "spec_name": "led-vapor-2.pdf",
    "price": 83.95
  }
];

//JSON Object End................
//Create table and fetch data from JSON Object.
        $(document).ready(function(){
            // $("button").click(function(){
              var number_of_rows = json_obj.length;
              // var k = 0;
              var table_body = '<table class="table" id="example"><thead><tr><th>Model Number</th><th>Description</th><th>Spec Sheet</th></tr></thead><tbody>';
              
              // for(j in json_obj){
              console.log(number_of_rows);

              for(var i =0;i<json_obj.length;i++){
                    table_body+='<tr>';

                    table_body +='<td>';
                    table_body +=json_obj[i]["model_number"];
                    table_body +='</td>';
                   
                    table_body +='<td>';
                    table_body +=json_obj[i]["description"];
                    table_body +='</td>';

                    table_body +='<td>';
                    table_body += '<button class="btn btn-warning"><a href="assets/cutsheets/' + json_obj[i]["spec_name"] + '" target="_blank">Open Spec Sheet</a></button>' ;
                    table_body +='</td>';
                
                    table_body+='</tr>';
              }
              // k++;
            // }
                table_body+='</tbody></table>';
               $('#tableDiv').html(table_body);
              //display data..........
            // });
// for search function.................................. only............................
        $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("table tr").filter(function(index) {
          if(index>0){
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    }
    });
});
//=================End=========================End===============================
        });