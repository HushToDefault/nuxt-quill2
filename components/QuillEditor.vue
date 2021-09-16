<template>
  <div>
    <h1>Dick</h1>

    <client-only>
      <VueEditor
        v-model="content"
        :editor-toolbar="customToolbar"
      />
    </client-only>
    <v-btn small @click="testlog(content)"></v-btn>

    <h1>------------</h1>
    <div style="width:300px">{{ content }}</div>
        <v-btn @click="VueXText(content)">กด</v-btn>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "<h1>Some initial content</h1>",

      customToolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ['link', 'image','video'],
        ["blockquote", "code-block"],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        // [{ font: [] }],
        ['link', 'image']
        ["clean"]
      ]
    };
  },
  methods: {
    VueXText(content){
          this.$store.dispatch("acTextEditer", content);
    },
    testlog(x) {
      console.log("test", x);
    }
  }
};
</script>

<style></style>
