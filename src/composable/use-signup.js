import {toRefs, reactive} from 'vue';
import useFetch from './use-fetch';
import Config from '../config';

export default function() {
  let response = reactive({data: null, error: null, fetching: false});
  const doSignUp = async (options) => {
    console.log(options);
    const {response, error, fetchData, fetching} = useFetch(
      `${Config.apiURL}/account`,
      {
        method: 'post', 
        headers: new Headers({
          'Authorization': 'Bearer RPqH8iq9xHd7ayjQc2Qkg4j>jv/HUdWH', 
          'Content-Type': 'application/json'
        }), 
        body:JSON.stringify(options)
      }
    );
    fetchData();
    response.data = response;
    response.error = error;
    response.fetching = fetching;
  };
  return {doSignUp, ...toRefs(response)};
}
