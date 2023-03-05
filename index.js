/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeData) {
  return {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(arr) {
  return arr.map(createEmployeeRecord);
}

function createTimeInEvent(record, dateStamp) {
  const [date, hour] = dateStamp.split(" ");

  record.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  });

  return record;
}

function createTimeOutEvent(record, dateStamp) {
  const [date, hour] = dateStamp.split(" ");

  record.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  });

  return record;
}

function hoursWorkedOnDate(record, date) {
  const timeInEvent = record.timeInEvents.find(event => event.date === date);
  const timeOutEvent = record.timeOutEvents.find(
    event => event.date === date
  );

  return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

// function wagesEarnedOnDate(record, date) {
//   const hoursWorked = hoursWorkedOnDate(record, date);

//   return hoursWorked * record.payPerHour;
// }

// function allWagesFor(record) {
//   const datesWorked = record.timeInEvents.map(event => event.date);
//   const wages = datesWorked.reduce((total, date) => {
//     return total + wagesEarnedOnDate(record, date);
//   }, 0);

//   return wages;
// }

// function findEmployeeByFirstName(srcArray, firstName) {
//   return srcArray.find(record => record.firstName === firstName);
// }

// function calculatePayroll(records) {
//   return records.reduce((total, record) => {
//     return total + allWagesFor(record);
//   }, 0);
// }

