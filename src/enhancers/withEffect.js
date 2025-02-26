import {useEffect} from 'react';
import {PROPS} from '../util/constants';
import generateConditionCode from '../util/generateConditionCode';

export default (fn, conditions) => ({generateNewVariable}) => {
  const fnName = generateNewVariable();
  const conditionCode = generateConditionCode(conditions);

  return {
    dependencies: {
      useEffect,
      [fnName]: fn,
    },
    initialize: `useEffect(function () {
        return ${fnName}(${PROPS});
      }, [${conditionCode}]);`,
    props: [fnName],
  };
};
