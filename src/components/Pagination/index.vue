<template>
    <div class="pagination">
        <!--        <h1>start:{{continuesPage.start}},end:{{continuesPage.end}},当前页:{{pageNo}}</h1>-->
        <button :disabled="pageNo===1" @click="$emit('getPageno',pageNo-1)">上一页</button>
        <button v-if="continuesPage.start>1" @click="$emit('getPageno',1)" :class="{active:pageNo===1}">1</button>
        <button v-if="continuesPage.start>2">···</button>

        <!--不能一直显示，需要指定起始位置，即遍历的页码必须大于或等于开始的值-->
        <button v-for="(pages,index) in continuesPage.end" :key="index" v-if="pages>=continuesPage.start"
                @click="$emit('getPageno',pages)" :class="{active:pageNo===pages}">{{pages}}
        </button>

        <button v-if="continuesPage.end < totalPage-1">···</button>
        <button v-if="continuesPage.end < totalPage" @click="$emit('getPageno',totalPage)" :class="{active:pageNo===totalPage}">{{totalPage}}</button>
        <button :disabled="pageNo===totalPage" @click="$emit('getPageno',pageNo+1)">下一页</button>

        <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        //pageNo：当前页面数，pageSize：每页显示多少数据，total：总共多少条数据，continues：连续页面数 5/7
        props: ['pageNo', 'pageSize', 'total', 'continues'],
        computed: {
            //计算最后一页的页码数，即总页数
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            },
            //计算连续的页面数
            continuesPage() {
                let {pageNo, totalPage, continues} = this
                let start = 0;
                let end = 0;
                //当设定的连续页面数大于总页数时
                if (continues > totalPage) {
                    start = 1;
                    end = totalPage;
                } else {
                    //正常情况，需要根据continues计算显示的连续页面
                    start = pageNo - parseInt(continues / 2);
                    end = pageNo + parseInt(continues / 2);
                    //但是当前页小于continues/2这个设定的连续页的一半时，计算会出现负数或为0
                    if (start < 1) {
                        start = 1;
                        end = continues;
                    }
                    //如果当前页为总页或为总页前一页时，结束页都会大于总页数
                    if (end > totalPage) {
                        start = pageNo - continues + 1;
                        end = totalPage;
                    }

                }
                return {start, end}
            }

        }
    }
</script>

<style lang="less" scoped>
    .pagination {
        text-align: center;

        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }

    }
</style>
