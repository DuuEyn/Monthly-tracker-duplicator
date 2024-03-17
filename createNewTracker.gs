var ui = SpreadsheetApp.getUi();
var sheet = SpreadsheetApp.getActiveSpreadsheet();

//List of valid inputs
const validMonths = ['January','February','March','April','May','June','July',
                      'August','September','October','November','December'];


/*
  Creates a menu named 'Custom' with an item named 'New Monthly Tracker'
  The function 'newSheet' will be executed if the item is clicked 
*/
function onOpen() {
  ui.createMenu('Custom')
    .addItem('New Monthly Tracker', 'newSheet')
    .addToUi();
}

function newSheet() {
  //Dialog window will continue to show up until the user enters a valid month or click Cancel
  do{
    /*
      Creates a dialog window prompting the user to enter a month
      The month entered will be the basis of the name of the copied sheet and the dates.
    */
    var result = ui.prompt(
      'Enter a valid month',
      ui.ButtonSet.OK_CANCEL);
    var button = result.getSelectedButton();
    var newMonth = result.getResponseText();

    /*
      Capitalizes the first letter of the user's input
      Ensures that all the other letters are in lower case.
    */
    newMonth = newMonth.charAt(0).toUpperCase() + newMonth.toLowerCase().slice(1)

    //Terminates the script if the user clicks Cancel
    if (button == ui.Button.CANCEL) {
      return;
    }
  }while(validMonths.indexOf(newMonth) == -1)
  
  /*
    The script assumes that the name of the spreadsheet file starts with [YYYY ...
    ${newYear.slice(1,5) can directly be replaced with the year instead if needed.
    The variable newDate gets the year from the file's name and creates a new Date object.
  */
  var newYear = sheet.getName();
  var newDate = new Date(`${newMonth} 1, ${newYear.slice(1,5)}`)
  if (button == ui.Button.OK) {
    //Creates a copy of the template sheet named 'Template-Monthly'
    //Change this to the name of the template sheet tab on the file this script is bound to
    var templatesheet = sheet.getSheetByName('Template-Monthly');
    sheet.insertSheet(newMonth, 1, { template: templatesheet });
    var dates = incrementDate(newDate);
    //Inserts the list of dates.
    sheet.getSheetByName(newMonth).getRange(3, 2, dates.length).setValues(dates)
    clearEmpty(newMonth);
  }
}

//Returns a list of dates within the specified month.
function incrementDate(date) {
  var dateArray = [];
  var curentMonth = date.getMonth();
  while (date.getMonth() == curentMonth) {
    dateArray.push([new Date(date)]);
    date.setDate(date.getDate() + 1);
  }
  return dateArray;
}

//Deletes the empty rows.
function clearEmpty(newMonth){
  var currentSheet = sheet.getSheetByName(newMonth);
  var data = currentSheet.getDataRange().getValues();

  for(var i = data.length; i>27;i--){
    if(data[i-1][1] == '') currentSheet.deleteRow(i)
  }
  //Adds a border to the second to the bottom of the 2nd to the last row, from col B to col J
  currentSheet.getRange(currentSheet.getLastRow()-1,2,1,9)
    .setBorder(null, null, true, null, null, null, 'black', SpreadsheetApp.BorderStyle.SOLID_MEDIUM)
}
