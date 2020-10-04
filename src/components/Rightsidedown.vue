<template>
  <p class="content-block__title mb-2 right-fontsize">
    Additionally with a &nbsp;<span
      ><a class="link-color" href="javascript:void(0)"
        ><nobr>g<u>uided trial</u></nobr>
      </a></span
    >
    &nbsp; you get
  </p>
  <ul class="list-unstyled mt-3 p-0">
    <li class="block-8__li d-flex align-items-center" v-for="list in lists" v-bind:key="list">
      <span class="block-8__li-icon">
        <svg
          class="bi bi-check2-circle"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </span>
      <div class="px-2"></div>
      <span class="block__paragraph"
        >{{list.text}}</span
      >
    </li>
  </ul>
</template>

<script>
export default{
   data() {
       return {
           lists: [
          {
            text:
              "Dedicated environment configured for high performance and scale",
          },
          { text: "Private slack channel with technical team" },
          { text: "Dedicated solution architec to support initial pilot" },
        ]
       }
   }
}
</script>
