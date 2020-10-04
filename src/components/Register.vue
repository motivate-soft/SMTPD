<template>
  <form
    onsubmit="submitForm(event)"
    class="cta-input mt-4 mb-2 p-0"
    style="border-style: none;"
  >
    <div id="input-list">
                        <label class="block-41__li-heading mt-2">Account Name</label>
                        <input type="email" class="cta-input__input flex-grow-1 mb-3 input-style" placeholder="Account Name" required>
                        <label class="block-41__li-heading mt-2">Work Email</label>
                        <input type="email" class="cta-input__input flex-grow-1 mb-3 input-style" placeholder="Work Email" required>
                        <label class="block-41__li-heading mt-2">First Name</label>
                        <input type="test" class="cta-input__input flex-grow-1  mb-3 input-style" placeholder="First Name" required>
                        <label class="block-41__li-heading mt-2">Last Name</label>
                        <input type="text" class="cta-input__input flex-grow-1  mb-3 input-style" placeholder="Last Name" required>
                        <label class="block-41__li-heading mt-2">Password</label>
                        <input type="password" class="cta-input__input flex-grow-1  mb-3 input-style" placeholder="Password" required>
                        <label class="block-41__li-heading mt-2">MobilePhone Number</label>
                        <input type="text" class="cta-input__input flex-grow-1  mb-3 input-style" placeholder="MobilePhone Number" required>
                        <label class="block-41__li-heading mt-2">Country Code</label>
                        <input type="text" class="cta-input__input flex-grow-1  mb-3 input-style" placeholder="Country Code" required>
                        <label class="block-41__li-heading mt-2">Phone Number</label>
                        <input type="text" class="cta-input__input flex-grow-1  mb-3 input-style" placeholder="Phone Number" required>
                        <label class="block-41__li-heading mt-2">Country</label>
                        <input type="text" class="cta-input__input flex-grow-1  mb-3 input-style" placeholder="Country" required>
                        <label class="block-41__li-heading mt-2">Plan</label>
                        <input type="text" class="cta-input__input flex-grow-1  mb-3 input-style" placeholder="Plan" required>
                      </div>
    <label class="checkbox-container mt-2"
      >I agree to Rockset's Terms of Service and Privacy Policy
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
    <button class="cta-input__btn mt-2">Get Started Free</button>
  </form>
</template>

<script>
export default{
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
