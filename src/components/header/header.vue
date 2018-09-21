<template>
    <div class="head-nav">
        header{{msg}}
    </div> 
</template>


<script>
    export default {
     
        name: 'headerNav',
         data () {
            return {
              msg: 'Welcome '
            }
          },
        mounted(){
        console.log('header__mountedd d')
        },
        created(){
           
        }
    }

</script>