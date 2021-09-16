<template>
  <div>
    <h1>{{$store.getters.gettext}}</h1>
    <div v-html="$store.getters.gettext"></div>

    
    <QuillEditor />
  </div>
  
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
