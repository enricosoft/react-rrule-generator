import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatDaily = ({
  daily: {
    interval,
  },
  handleChange,
}) => (
  <div className="form-group row d-flex align-items-sm-center">
    <div className="col-sm-2" />
    <div className="col-sm-1">
      every
    </div>
    <div className="col-sm-2">
      <input
        name="repeat.daily.interval"
        className="form-control"
        value={interval}
        onChange={numericalFieldHandler(handleChange)}
      />
    </div>
    <div className="col-sm-1">
      day(s)
    </div>

  </div>
);
RepeatDaily.propTypes = {
  daily: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatDaily;
