<template>
    <div>
        <!--slot sin nombre -->
        <slot></slot>
        <!--slot  nombre -->
        <slot name="precio">$</slot>
    </div>
</template>

<script>

  export default  {
    name: 'SlotPrueba',
    props: {
        titulo: String        
    }
}


</script>

<style scoped >

</style>
