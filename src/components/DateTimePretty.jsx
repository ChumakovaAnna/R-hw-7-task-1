import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import DateTime from "./DateTime"

DateTimePretty.propTypes = {
  date: PropTypes.string.isRequired,
};

function DateTimePretty({date}) {
  const oldDate = moment(date);
  const nowDate = moment();
  const durationDate = moment.duration(nowDate.diff(oldDate));
  let durationString = "";

  if (durationDate.asHours() < 0) {
    durationString = `${durationDate.asMinutes().toFixed(0)} минут назад`;
  } else if (durationDate.asHours() > 0) {
    durationString = `${durationDate.asDays().toFixed(0)} дней назад`;
  } else {
    durationString = `${durationDate.asHours().toFixed(0)} часов назад`;
  }

  return <DateTime date={durationString}></DateTime>
}

export default DateTimePretty;