<template>
    <div class="head-nav">
        header{{msg}}
    </div> 
</template>


<script>
import base from "./header.css";
import Util from './util.js';

    export default {
     
        name: 'headerNav',
         data () {
            return {
              msg: 'Welcome '
            }
          },
        mounted(){  
      
       
        },
        methods:{

        },
        created(){
           
        }
    }

</script>