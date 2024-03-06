<script>

</script>

<template>
    <div class="cabinet-analyze">
        <div class="cabinet-info"></div>
        <div class="cabinet-chart"></div>
    </div>
</template>

<style lang="scss" scoped>
    .cabinet-analyze {
        display: flex;
        justify-content: space-between;
        margin: 0 5px;

        .cabinet-info, .cabinet-chart {
            border-radius: 8px;
            background-color: #fff;
            height: 50vh;
            margin: 5px;
        }

        .cabinet-info {
            flex-basis: calc(40% - 10px);
            flex-grow: 0;
        }

        .cabinet-chart {
            flex-basis: auto;
            flex-grow: 1;
        }
    }
</style>