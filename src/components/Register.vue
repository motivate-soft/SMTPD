<template>
  <form    
    v-on:submit.prevent
    class="cta-input mt-4 mb-2 p-0"
    style="border-style: none;"
  >
    <div id="input-list">
      <label class="block-41__li-heading mt-2">Account Name</label>
      <input type="text" class="cta-input__input flex-grow-1 mb-3 input-style" v-model="accountName" placeholder="Account Name" required>
      <label class="block-41__li-heading mt-2">Work Email</label>
      <input type="email" class="cta-input__input flex-grow-1 mb-3 input-style" v-model="email" placeholder="Work Email" required>
      <label class="block-41__li-heading mt-2">First Name</label>
      <input type="test" class="cta-input__input flex-grow-1  mb-3 input-style" v-model="firstName" placeholder="First Name" required>
      <label class="block-41__li-heading mt-2">Last Name</label>
      <input type="text" class="cta-input__input flex-grow-1  mb-3 input-style" v-model="surName" placeholder="Last Name" required>
      <label class="block-41__li-heading mt-2">Password</label>
      <input type="password" class="cta-input__input flex-grow-1  mb-3 input-style" v-model="password" placeholder="Password" required>
      <label class="block-41__li-heading mt-2">MobilePhone Number</label>                        
      <input type="text" class="cta-input__input flex-grow-1  mb-3 input-style" v-model="mobileNumber" placeholder="MobilePhone Number" required>
      <label class="block-41__li-heading mt-2">Phone Number</label>
      <VueTelInput wrapperClasses="input-style" inputClasses="cta-input__input flex-grow-1 input-style" @input="onPhoneNumberInput"/>
                              <label class="block-41__li-heading mt-2">Plan</label>
      <select class="cta-input__input flex-grow-1  mb-3 input-style" v-model="planID">
        <option disabled value="">Please select one</option>
        <option v-bind:key="option.plan_id" v-for="option in planList" v-bind:value="option.plan_id">
          {{ `${option.plan_name} /  $${option.price_usd_per_month}`}}
        </option>
      </select>                        
    </div>
    <div v-show="messageError!=null" class="alert alert-danger" role="alert">
      {{messageError}}
    </div>
    <label class="checkbox-container mt-2"
      >I agree to Rockset's Terms of Service and Privacy Policy
      <input type="checkbox" v-model="bAgreed"/>
      <span class="checkmark"></span>
    </label>
    <button @click="onSignUp" class="cta-input__btn mt-2">Get Started Free</button>
  </form>
</template>

<script>
import {onMounted} from 'vue';
import usePlanList from "../composable/use-plan-list";
import useSignUp from "../composable/use-signup";
import VueTelInput from "./telInput/vue-tel-input"
export default{
  components:{
    VueTelInput
  },
  data(){
        return{
            accountName:'dsfg',
            email:'fdsgsdf@gmail.com',
            firstName:'sdf',
            surName:'sdfs',
            password:'sdffs',
            mobileNumber:'123123',
            phoneCountryCode:'',
            phoneNumber:'',
            countryISO:'',
            planID:'',      
            bAgreed: false,
            messageError: null      
        }
    },
  setup(){
    const {loadPlan, planList, error, fetching } = usePlanList();
    onMounted(()=>{
      loadPlan();
    });

    const {doSignUp, signupResp, signupError, signupFetching } = useSignUp();
    return {
        loadPlan,
        planList,        
        planError:error,
        planFetching:fetching,
        doSignUp,
        signupResp,
        signupError,
        signupFetching
    };
  },

  methods:{
    onPhoneNumberInput(formattedNumber, inputNumber) {
        if(inputNumber !== undefined){
          const { number, country } = inputNumber;
          this.phoneNumber = number.international;        
          this.phoneCountryCode = country.dialCode;
          this.countryISO = country.iso2;             
          //console.log(number, valid, country);
        }        
      },
      onSignUp(event){
        event.preventDefault();
        this.messageError = null;
        if(this.bAgreed){
          this.doSignUp({surname: this.surName,
                  first_name:this.firstName,
                  plan_id:this.planID,
                  country:this.countryISO,
                  phone_number:{
                    number:this.phoneNumber,
                    type:"mobile",
                    country_code: this.phoneCountryCode},                    
                  password:this.password,
                  email_address:this.email,
                  account_name:this.accountName}
                  );
        }
        else{
          //alert("You need to agree terms & policy!");
          this.messageError="You need to agree terms & policy!";
        }
        
      }
  },
 
  watch:{
  
    planError(error){
      console.log(error);
    },
    
    signupResp(resp){
      console.log(resp);
      const {message, account_id} = resp;
        if(account_id){
          this.messageError = "Signup Success!";
        }
        if(message){          
          this.messageError = resp["message"];
        }
    },
    signupError(error){
      this.messageError = error;      
    }
  }
}
</script>

<style scoped>
/* The container */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 8px;
  height: 13px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
