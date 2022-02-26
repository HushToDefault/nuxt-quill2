<template>
  <v-app light>
    <!-- <div class="d-flex justify-center flex-wrap width100">
      <div class="width100 maxwidthf1920px">
        <div>
    <h1>{{ $store.getters.gettext }}</h1> -->
    <div>
      <h1>BTN TEST url</h1>
          <v-btn to="/test1" small elevation="" color="">TEST1</v-btn>
          <v-btn to="/test1/suptest1" small elevation="" color="">TESTSUP1</v-btn>
          <v-btn to="/test2" small elevation="" color="">TEST2</v-btn>
          <v-btn to="/test2/suptest2/test" small elevation="" color="">TESTSUP2</v-btn>
          <v-btn to="/test3" small elevation="" color="">TEST3</v-btn>
          <v-btn to="/" small elevation="" color="">Home</v-btn>
    </div>
    <!-- <div v-html="$store.getters.gettext"></div>

    <QuillEditor />
    <h1>-------------------------</h1>
    <dropzone
      v-model="droped"
      @vdropzone-file-added="onFileAdded"
      @vdropzone-error="onError"
      @vdropzone-success="onSuccess"
      @vdropzone-complete="onComplete"
      ref="myDropzone"
      id="dropzone"
      :options="dropzoneOptions"
    />
    <v-btn @click="updataCreditUser()">droped</v-btn>

    <img style="width:100px" src="@/assets/101.webp" />
  </div> -->
        <nuxt />
<!--         
      </div>
    </div> -->
  </v-app>

</template>

<script>
export default {
  data() {
    return {
      eee:"",
      droped: "",
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
        addRemoveLinks: true,
        dictDefaultMessage:
          "<img style='width:100px;height:100px;' src='/_nuxt/assets/101.webp' />ควยไรสัส"
      }
    };
  },
  methods: {
    onFileAdded(e) {
      this.eee = e
      console.log("onFileAdded", e);
    },
    onError(e) {},
    onSuccess(e) {},
    onComplete(e) {},
    async updataCreditUser() {
      let formData = new FormData();
      formData.append("id", '023d1c80-16d4-11ec-8cc3-57cff25a3d9f');
      formData.append("uuid", '6013c680-f364-11eb-804a-a935099cd9d1');
      formData.append("uploadFileimg", this.eee);
      formData.append("useraccount", '0816026566');
      formData.append("banknumber", '0373819506');
      var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInVzZXJuYW1lIjoiYm9zcyIsInV1aWQiOiJib3NzIiwiaWF0IjoxNjMxNzg1OTA4fQ.tnKDO61DygaeT5D6nUsBcqNoDnP8cClHPvnODFDwlWI"
      this.$axios.setHeader("token", token);
      const response = await this.$axios.$post(
        "https://apiv2-dev.oneslot.bet/api/fiance/deposit/updateapi",
        formData
      );
      if (response) {
        console.log("response",response);
      }
    }
  }
};
</script>
