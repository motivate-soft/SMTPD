<template>
  <p class="content-block__title mb-2 right-fontsize">
    {{title}}
  </p>
  <ul class="list-unstyled mt-3 p-0">
    <li class="block-8__li d-flex align-items-center"  v-for="list in lists" v-bind:key="list">
      <span class="block-8__li-icon">
        <svg
          class="bi bi-check2-circle"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </span>
      <div class="px-2"></div>
      <span class="block__paragraph">{{list.text}}</span
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      title:'Included with your 14 day Free Trial',
      lists: [
        { text: '$300 in credit,no credit card requred'},
        { text: 'Streaming Ingest'},
        { text: 'Auto-scaling memory and compute for every GiB of data'},
        { text: 'Highly available replica sets'},
        { text: 'Encryption'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
