<template>
    <div>
        <HeaderNav></HeaderNav>
        <div>{{msg}}</div>
    </div>
</template>

<script>

import  HeaderNav from './components/header/header.vue';

export default {
    components:{
        HeaderNav: HeaderNav
    },
    name: 'app',
    data () {
        return {
          msg: 'Welcome to Your Vue.js '
        }
      },
    mounted(){       
         console.log('mounted');
    },
    created(){
        console.log('created');
    }
}

</script>