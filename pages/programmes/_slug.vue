<template>
  <section class="section">
    <div class="container">
      <header>
        <h1>{{ title }}</h1>
      </header>
    </div>
  </section>
</template>

 <script>
 export default {
   async asyncData ({ params }) {
     let post = await import('~/content/programmes/' + params.slug + '.json')
     return post
   }
 }
 </script>
 