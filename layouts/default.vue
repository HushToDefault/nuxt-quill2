<template>
  <div>
    <h1>{{$store.getters.gettext}}</h1>
    
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
