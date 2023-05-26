import React from 'react';
import PropTypes from 'prop-types';
import RepeatYearlyOn from './On';
import RepeatYearlyOnThe from './OnThe';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';

const RepeatYearly = ({
  id,
  yearly: {
    mode,
    interval,
    on,
    onThe,
    options,
  },
  handleChange,
  translations
}) => {
  const isTheOnlyOneMode = option => options.modes === option;
  const isOptionAvailable = option => !options.modes || isTheOnlyOneMode(option);
  return (
    <div>

      <div className="form-group row d-flex align-items-sm-center">
        <div className="col-sm-1 offset-sm-2">
          {translateLabel(translations, 'repeat.yearly.every')}
        </div>
        <div className="col-sm-3">
          <input
            id={`${id}-interval`}
            name="repeat.yearly.interval"
            aria-label="Repeat yearly interval"
            className="form-control"
            value={interval}
            onChange={numericalFieldHandler(handleChange)}
          />
        </div>
        <div className="col-sm-1">
          {translateLabel(translations, 'repeat.yearly.years')}
        </div>
      </div>

      {isOptionAvailable('on') && (
        <RepeatYearlyOn
          id={`${id}-on`}
          mode={mode}
          on={on}
          hasMoreModes={!isTheOnlyOneMode('on')}
          handleChange={handleChange}
          translations={translations}
        />
      )}
      {isOptionAvailable('on the') && (
        <RepeatYearlyOnThe
          id={`${id}-onThe`}
          mode={mode}
          onThe={onThe}
          hasMoreModes={!isTheOnlyOneMode('on the')}
          handleChange={handleChange}
          translations={translations}
        />
      )}
    </div>
  );
};
RepeatYearly.propTypes = {
  id: PropTypes.string.isRequired,
  yearly: PropTypes.shape({    
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    interval: PropTypes.number.isRequired,
    on: PropTypes.object.isRequired,
    onThe: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.oneOf(['on', 'on the']),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatYearly;
