<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'

const testfun = (param,fun) => {
    console.log(param,fun);
    return {
        aaa: 'aaa',
        bbb: 'bbb',
        ccc: function(){
            console.log('ccc被执行了')
        }
    }
}

let x = testfun('xxx', ()=>{
    console.log('回调被执行了')
    console.log(x);
})

console.log(x);


</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>