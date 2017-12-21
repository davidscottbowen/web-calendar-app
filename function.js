var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dates = new Array(42);
var d = new Date();
var weekday = d.getDay();
var month = d.getMonth();
var date = d.getDate();
var year = d.getFullYear();
var currentMonth = month;
var dt = new Date(monthNames[month] + '/' + 01 + '/' + year);

var todayMonth = month + 1;
var todayDate = todayMonth.toString() + '/' + date.toString() + '/' + year.toString();
var eventdate1 = "12/24/2017";
var event1 = "Christmas Eve";
var eventdate2 = "12/25/2017";
var event2 = "Christmas Day";
var eventdate3 = "12/27/2017";
var event3 = "Bryce B-Day";
var eventdate4 = "12/31/2017";
var event4 = "New Years Eve";


$(function () {
    var totalMonthDays = daysInMonth(month, year);
    var previousMonthDays = daysInMonth(month - 1, year);
    emptyArray();
    dayofweekswitch();
    $("#month").empty();
    $("#month").append(monthNames[month] + ' ' + year);

    for (i = 0; i < 42; i++) {
        $('#day' + i).empty();
        if (dates[i] >= 1 && dates[i] <= totalMonthDays) {
            var eventmonth = month + 1;
            var wholeDate = eventmonth.toString() + '/' + dates[i].toString() + '/' + year.toString();
            if (wholeDate == todayDate) {
                $('#day' + i).append("Today")
            } else if (wholeDate == eventdate1) {
                $('#day' + i).append(event1)
            } else if (wholeDate == eventdate2) {
                $('#day' + i).append(event2)
            } else if (wholeDate == eventdate3) {
                $('#day' + i).append(event3)
            } else if (wholeDate == eventdate4) {
                $('#day' + i).append(event4)
            } else {
                $('#day' + i).append(dates[i])
            }
        }

    }

    $("button#nextmonth").click(function (ev) {
        emptyArray();
        month = month + 1;
        if (month > 11) {
            month = 0
            year = year + 1
        };
        dt = new Date(monthNames[month] + '/' + 01 + '/' + year);
        var totalMonthDays = daysInMonth(month, year);

        dayofweekswitch();

        for (i = 0; i < 42; i++) {
            $('#day' + i).empty();
            if (dates[i] >= 1 && dates[i] <= totalMonthDays) {
                var eventmonth = month + 1;
                var wholeDate = eventmonth.toString() + '/' + dates[i].toString() + '/' + year.toString();
                if (wholeDate == todayDate) {
                    $('#day' + i).append("Today")
                } else if (wholeDate == eventdate1) {
                    $('#day' + i).append(event1)
                } else if (wholeDate == eventdate2) {
                    $('#day' + i).append(event2)
                } else if (wholeDate == eventdate3) {
                    $('#day' + i).append(event3)
                } else if (wholeDate == eventdate4) {
                    $('#day' + i).append(event4)
                } else {
                    $('#day' + i).append(dates[i])
                }
            }
        }
        $("#month").empty();
        $("#month").append(monthNames[month] + ' ' + year);
    });


    $("button#previousmonth").click(function (ev) {
        emptyArray();
        month = month - 1;
        if (month < 0) {
            month = 11
            year = year - 1
        };

        dt = new Date(monthNames[month] + '/' + 01 + '/' + year);

        var totalMonthDays = daysInMonth(month, year);
        dayofweekswitch();
        for (i = 0; i < 42; i++) {
            $('#day' + i).empty();
            if (dates[i] >= 1 && dates[i] <= totalMonthDays) {
                var eventmonth = month + 1;
                var wholeDate = eventmonth.toString() + '/' + dates[i].toString() + '/' + year.toString();
                if (wholeDate == todayDate) {
                    $('#day' + i).append("Today")
                } else if (wholeDate == eventdate1) {
                    $('#day' + i).append(event1)
                } else if (wholeDate == eventdate2) {
                    $('#day' + i).append(event2)
                } else if (wholeDate == eventdate3) {
                    $('#day' + i).append(event3)
                } else if (wholeDate == eventdate4) {
                    $('#day' + i).append(event4)
                } else {
                    $('#day' + i).append(dates[i])
                }
            }
        }
        $("#month").empty();
        $("#month").append(monthNames[month] + ' ' + year);
    });

    function daysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    };

    function emptyArray() {
        for (i = 0; i < dates.length; i++) {
            dates[i] = 0
        }
    };

    function dayofweekswitch() {
        switch (dt.getDay()) {
            case 0:
                day = "Sunday";
                dates[0] = 1
                x = 2;
                for (i = 1; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x = x + 1;
                }
                break;
            case 1:
                day = "Monday";
                dates[1] = 1
                x = 2;
                for (i = 2; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x = x + 1;
                }
                break;
            case 2:
                day = "Tuesday";
                dates[2] = 1
                x = 2;
                for (i = 3; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x = x + 1;
                }
                break;
            case 3:
                day = "Wednesday";
                dates[3] = 1
                x = 2;
                for (i = 4; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x = x + 1;
                }
                break;
            case 4:
                day = "Thursday";
                dates[4] = 1
                x = 2;
                for (i = 5; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x = x + 1;
                }
                break;
            case 5:
                day = "Friday";
                dates[5] = 1
                x = 2;
                for (i = 6; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x = x + 1;
                }
                break;
            case 6:
                day = "Saturday";
                dates[6] = 1
                x = 2
                for (i = 7; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x = x + 1;
                }
        }
    }

});