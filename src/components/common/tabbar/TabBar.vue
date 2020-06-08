<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#tab-bar {
    display: flex;
    z-index: 9;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgb(100,100,100, .1);
  }
 
</style>