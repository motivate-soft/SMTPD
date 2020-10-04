import {toRefs, reactive} from 'vue';
import useFetch from './use-fetch';
import Config from '../config';

export default function() {
  let breweries = reactive({planList: [], error: null, fetching: false});
  const loadPlan = async () => {
    const {response, error, fetchData, fetching} = useFetch(
      `${Config.apiURL}/billing/plans`,
      {}
    );
    fetchData();
    breweries.planList = response;
    breweries.error = error;
    breweries.fetching = fetching;
  };
  return {loadPlan, ...toRefs(breweries)};
}
