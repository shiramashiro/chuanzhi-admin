<template>
    <div class="manage-delivering-indents">
        <div class="breadcrumb owl-margin-tb-md owl-border-radius-sm">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item>管理订单</el-breadcrumb-item>
                <el-breadcrumb-item>已发货</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <owl-manage-indents
            :data="indents"
            :compileRouter="'/compile/delivering/indents'"
            @handle-compile="handleCompile"
            @handle-cutoff="handleCutoff"
        ></owl-manage-indents>
        <el-pagination
            class="owl-margin-top-lg"
            layout="prev, pager, next"
            :total="1000"
        >
        </el-pagination>
    </div>
</template>

<script>
import { indentsService } from '@/mixin/service/indents.js'

export default {
    name: 'manage-delivering-indents',
    mixins: [indentsService],
    mounted() {
        this.getIndents('delivering')
    },
    methods: {
        handleCompile(e) {
            this.compile(e.row, e.router)
        },
        handleCutoff(e) {
            this.cutoff(e.row, e.index)
        }
    }
}
</script>

<style scoped>
/deep/ .cell {
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
