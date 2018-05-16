// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $userInputDate = document.querySelector("#dateTime");
var $userInputCity = document.querySelector("#city");
var $userInputState = document.querySelector("#state");
var $userInputCountry = document.querySelector("#country");
var $userInputShape = document.querySelector("#shape");
var $submitBtn = document.querySelector("#search");
var $clearBtn = document.querySelector("#clearSearch");


// Start the table body with a blank HTML
$tbody.innerHTML = "";

// Start the table body with a blank HTML
var arrStateNames = [];
var arrCityNames = [];
var arrCountryNames = [];
var arrDateTime = [];
var arrshape = [];

queryDataSet();

var filteredAddress = dataSet

function queryDataSet() {
    dataSet.forEach(function (item) {
        //push the name string in the array
        arrStateNames.push(item.state);
        arrCityNames.push(item.city);
        arrCountryNames.push(item.country);
        arrDateTime.push(item.datetime);
        arrshape.push(item.shape);
    });
    queryDataSet_1();

    function queryDataSet_1() {
        var uniqueStates = arrStateNames.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
        var uniqueCities = arrCityNames.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
        var uniqueCountries = arrCountryNames.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
        var uniqueDates= arrDateTime.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
        var uniqueShapes = arrshape.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
        uniqueStates.sort();
        for(var a = 0; a < uniqueStates.length;a++){
            var $Option = document.createElement("Option");  
            $Option.innerText = uniqueStates[a];
            $userInputState.appendChild($Option); 
        };
        uniqueCities.sort();
        for(var a = 0; a < uniqueCities.length;a++){
            var $Option = document.createElement("Option");  
            $Option.innerText = uniqueCities[a];
            $userInputCity.appendChild($Option); 
        };
        uniqueCountries.sort();
        for(var a = 0; a < uniqueCountries.length;a++){
            var $Option = document.createElement("Option");  
            $Option.innerText = uniqueCountries[a];
            $userInputCountry.appendChild($Option); 
        };
        uniqueStates.sort();
        for(var a = 0; a < uniqueStates.length;a++){
            var $Option = document.createElement("Option");  
            $Option.innerText = uniqueStates[a];
            $userInputState.appendChild($Option); 
        };

        uniqueDates.sort();
        
        for(var a = 0; a < uniqueDates.length;a++){
            var $Option = document.createElement("Option");  
            $Option.innerText = uniqueDates[a];
            $userInputDate.appendChild($Option); 
        };

        uniqueShapes.sort();

        for(var a = 0; a < uniqueShapes.length;a++){
            var $Option = document.createElement("Option");  
            $Option.innerText = uniqueShapes[a];
            $userInputShape.appendChild($Option); 
        };
       
        
       
    }
}

function RenderTable_Default(){
    filteredAddress = dataSet.filter(function (address){ 
        return  (address.country.toLowerCase() === 'us') && (address.state.toLowerCase() === 'ca');});
      // The outer loop fills the rows
      // The inner loop fills the cells for each row
      for (var i = 0; i < filteredAddress.length; i++) {
        // Insert a row into the table at position i
        var $row = $tbody.insertRow(i);
        // Insert five cells into the newly created row
        var rowEntry = Object.values(filteredAddress[i])
      //console.log(rowEntry.length);
      for (var j = 0; j < rowEntry.length; j++) {

          var $cell = $row.insertCell(j);
          $cell.innerText = rowEntry[j]; 
        } 
      }
      };
function RenderTable(){
        // The outer loop fills the rows
        // The inner loop fills the cells for each row
        for (var i = 0; i < filteredAddress.length; i++) {
          // Insert a row into the table at position i
          var $row = $tbody.insertRow(i);
          // Insert five cells into the newly created row
          var rowEntry = Object.values(filteredAddress[i])
        console.log(rowEntry.length);
        for (var j = 0; j < rowEntry.length; j++) {
  
            var $cell = $row.insertCell(j);
            $cell.innerText = rowEntry[j]; 
          } 
        }
        };
// When the submit button is clicked, call the handleSubmitClick function
$submitBtn.addEventListener("click", handleSubmitClick);
$clearBtn.addEventListener("click", handleClearSearchClick);

function handleClearSearchClick(event) {
    // The default behavior of a button clicked inside of a form is to try to submit the form somewhere (which we don't want)
    event.preventDefault();
    $userInputDate.value = "" ;
    $userInputCity.value = "";
    $userInputState.value = "";
    $userInputCountry.value = "";
    $userInputShape.value = "";
    RenderTable_Default();
  
  }

function handleSubmitClick(event) {
  // The default behavior of a button clicked inside of a form is to try to submit the form somewhere (which we don't want)
  event.preventDefault();
  filteredAddress = dataSet;
  $tbody.innerHTML = "";

  // Get user input
  
  var searchCriteria = {'state' : $userInputState.value.trim(),
    'city' : $userInputCity.value.trim(),
    'country' : $userInputCountry.value.trim(),
    'datetime' : $userInputDate.value.trim(),
    'shape' : $userInputShape.value.trim()

     };
 // narrow down the search criteria based on the what the user chose to use as filter.
  var filteredSearchCritera1 = searchCriteria;
      for (var key in filteredSearchCritera1) {
        if (filteredSearchCritera1[key].length == 0) delete filteredSearchCritera1[key];
      }
  

  filteredAddress1 = dataSet;

  arrCriteria = Object.keys(filteredSearchCritera1);
  if(arrCriteria.length > 0){
  arrCriteriaValues = Object.values(filteredSearchCritera1);

      for (i=0;i<arrCriteria.length;i++)
        {
            console.log(arrCriteria[i] + "  arrCriteria[i]")
              switch(arrCriteria[i]) 
                {
                  case 'state':
                    filteredAddress1 = filteredAddress.filter(function (address){ 
                      return  address.state.toLowerCase() === arrCriteriaValues[i].toLowerCase();}
                    );        
                   
                    break;
                  case 'city':
                      filteredAddress1 = filteredAddress.filter(function (address){
                        return  address.city.toLowerCase() === arrCriteriaValues[i].toLowerCase() ;}
                      );
                      
                    break;
                 case 'country':
                    filteredAddress1 = filteredAddress.filter(function (address){
                      return  address.country.toLowerCase() === arrCriteriaValues[i].toLowerCase() ;}
                    );
                    
                  break;
                case 'shape':
                      filteredAddress1 = filteredAddress.filter(function (address){
                        return  address.shape.toLowerCase() === arrCriteriaValues[i].toLowerCase() ;}
                      );
                      
                break;
                case 'datetime':
                      filteredAddress1 = filteredAddress.filter(function (address){
                        return  address.datetime === arrCriteriaValues[i] ;}
                      );
                      
                break;
                
                }
          filteredAddress = filteredAddress1;  
        }

  filteredAddress = filteredAddress1;

  if(filteredAddress.length ==0) {
      alert ("No results found. Please change your serach critera!"); 
      $userInputDate.value = "" ;
      $userInputCity.value = "";
      $userInputState.value = "";
      $userInputCountry.value = "";
      $userInputShape.value = "";
      RenderTable_Default();

     }
    else{RenderTable();};
  
  
    }
    else {RenderTable_Default()}

}
console.log('Results Returned '+ filteredAddress.length)
RenderTable_Default();
