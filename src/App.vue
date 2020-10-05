<template>
  <!--7. FAQ ==================================== -->
  <div id="faq" class="block-39 space-between-blocks py-0 insert-y-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 px-0" style="background: white;">
          <div class="content-block">
            <div id="newsletter" class="block-30 space-between-blocks py-0">
              <div class="container">
                <div class="row flex-row-reverse">
                  <div class="col-lg-12 px-5 px px-xl-5 py-5 text-left">
                    <img src="./assets/mark.png" class="pb-5">
                    <h4 class="content-block__title mb-0">
                      Get started free
                    </h4>
                    <p class="hero__paragraph" style="width: 100%;">
                      No Credit Card Required
                    </p>
                    <Register />
                    <p class="block__paragraph mt-4">
                      Already have an account?
                      <span><a href="javascript:void(0)">Log in</a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-6 px-0 background-color  d-flex"
          style="align-content: center; flex-wrap: wrap;"
        >
          <div class="content-block">
            <div class="content-block">
              <!--3. Features 2 =================================== -->
              <div
                id="features"
                class="block-8 space-between-blocks background-color text-white py-0"
              >
                <div class="container">
                  <div
                    class="row px-5 align-items-center  flex-lg-row justify-content-center"
                  >
                    <!-- CONTENT -->
                    <div class="col-lg-11">
                      <Rightsideup />
                    </div>
                    <div class="col-lg-11 pt-5">
                      <Rightsidedown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "./components/Register.vue";
import Rightsideup from "./components/Rightsideup.vue";
import Rightsidedown from "./components/Rightsidedown.vue";

export default {
  components: {
    Register,
    Rightsideup,
    Rightsidedown,
  },
};
</script>
<style src="./assets/app.css"></style>

<style>
    .input-style {
        background-color: rgb(235, 242, 245);
        width: 100%;
        border-bottom: 2px solid grey;
      }
      .input-style:focus {
        border-bottom: 2px solid grey !important;
      }
      .background-color {
        background: #7540ee;
      }
      .block__paragraph {
        font-size: 1.1rem;
        line-height: 1.5;
        opacity: 1;
      }
      .cta-input {
        width: 95%;
      }
      .right-fontsize {
        font-size: 1.2rem;
      }
      .link-color {
        color: lightblue;
      }
      .link-color:hover {
        color: blue;
      }
      .pt-10 {
        padding-top: 7rem;
      }
      .insert-y-0 {
        top: 0;
        bottom: 0;
      }
      .block-8__li-icon {
        color: #fff;
        transform: scale(1.5);
      }
  </style>
