"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var moment_timezone_1 = require("moment-timezone");
var react_1 = require("react");
exports.default = (function () {
    react_1.useEffect(function () {
        updateLocale();
    }, []);
    var updateLocale = function () {
        var SERVER_LONGDATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
        var CALENDAR = {
            twoDaysAgo: "[2天前] HH:mm",
            threeDaysAgo: "[3天前] HH:mm",
            fourDaysAgo: "[4天前] HH:mm",
            fiveDaysAgo: "[5天前] HH:mm",
            sixDaysAgo: "[6天前] HH:mm",
            sevenDaysAgo: "[7天前] HH:mm",
            lastDay: '[昨天 ] HH:mm',
            sameDay: '[今天 ] HH:mm',
            nextDay: '[明天 ] HH:mm',
            lastWeek: '[上周 ] dddd HH:mm',
            nextWeek: '[下周 ] dddd HH:mm',
            sameElse: SERVER_LONGDATETIME_FORMAT
        };
        moment_1.default.calendarFormat = function (m) {
            var timeZoneInput = moment_timezone_1.default.parseZone(m, moment_timezone_1.default.tz.guess());
            var timeZoneNow = Date.now();
            var firstDayOfWeek = moment_1.default(timeZoneNow).startOf('isoWeek');
            var lastDayoFWeek = moment_1.default(timeZoneNow).endOf('isoWeek');
            var diff = moment_1.default(timeZoneInput).diff(firstDayOfWeek, 'days', true);
            var diff2 = moment_1.default(timeZoneInput).diff(lastDayoFWeek, 'days', true);
            if (-6 <= diff && diff <= -1)
                return "lastWeek";
            else if (diff < -6)
                return "sameElse";
            else if (diff2 > 0)
                return "nextWeek";
            diff = moment_1.default(timeZoneInput).diff(timeZoneNow, 'days', true);
            return diff < -6 ? 'sevenDaysAgo'
                : diff < -5 ? 'sixDaysAgo'
                    : diff < -4 ? 'fiveDaysAgo'
                        : diff < -3 ? 'fourDaysAgo'
                            : diff < -2 ? 'threeDaysAgo'
                                : diff < -1 ? 'twoDaysAgo'
                                    : diff < 0 ? 'lastDay'
                                        : diff < 1 ? 'sameDay'
                                            : diff < 2 ? 'nextDay'
                                                : 'sameElse';
        };
        moment_1.default.updateLocale("en", {
            calendar: CALENDAR,
            week: {
                dow: 1,
            },
        });
    };
});
