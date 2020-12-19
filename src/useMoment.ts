import moment from "moment";
import timeZone from "moment-timezone";
import { useEffect } from "react";


export default () => {
    useEffect(() => {
        updateLocale();
    }, []);

    const updateLocale = () => {
        const SERVER_LONGDATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
        const CALENDAR = {
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
        moment.calendarFormat = function (m) {
            const timeZoneInput = timeZone.parseZone(m, timeZone.tz.guess());
            const timeZoneNow = Date.now();

            const firstDayOfWeek = moment(timeZoneNow).startOf('isoWeek');
            const lastDayoFWeek = moment(timeZoneNow).endOf('isoWeek');
            let diff = moment(timeZoneInput).diff(firstDayOfWeek, 'days', true);
            const diff2 = moment(timeZoneInput).diff(lastDayoFWeek, 'days', true);

            if (-6 <= diff && diff <= -1)
                return "lastWeek";
            else if (diff < -6)
                return "sameElse";
            else if (diff2 > 0)
                return "nextWeek";

            diff = moment(timeZoneInput).diff(timeZoneNow, 'days', true);

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

        moment.updateLocale("en", {
            calendar: CALENDAR,
            week: {
                dow: 1,// Monday is the first day of the week
            },
        });


    };
};