<template>
  <div v-if="linkurl!=''">
    <h1>Home</h1>
    <h3>h3{{linkurl}}</h3>
    <img :src="this.$hello('https://youtu.be/dQw4w9WgXcQ')" alt="Red dot" />
    <p>From wikipedia</p>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
        //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      linkurl:""
    }
  },
  created(){
    this.linkurl = this.$hello('https://youtu.be/dQw4w9WgXcQ')
    console.log("testing",this.$hello('https://youtu.be/dQw4w9WgXcQ'));

  },
  mounted() {
  },
  methods:{
    testqr(msg){
          var QRCode = require("qrcode");
    QRCode.toDataURL(msg, function(err, url) {
      console.log("url",url);
      return url;
    });
    }
  }
}
</script>

<style>

</style>
