import {toRefs, reactive} from 'vue';
import useFetch from './use-fetch';
import Config from '../config';

export default function() {
  let responseValue = reactive({signupResp: null, signupError: null, signupFetching: false});
  const doSignUp = async (options) => {    
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
    responseValue.signupResp = response;
    responseValue.signupError = error;
    responseValue.signupFetching = fetching;    
  };
  return {doSignUp, ...toRefs(responseValue)};
}
