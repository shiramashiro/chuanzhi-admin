<template>
    <div class="manage-processing-indents">
        <div class="breadcrumb owl-margin-tb-md owl-border-radius-sm">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item>管理订单</el-breadcrumb-item>
                <el-breadcrumb-item>未发货</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <owl-manage-indents
            :data="indents"
            :compileRouter="'/compile/processing/indents'"
            @handle-compile="handleCompile"
            @handle-cutoff="handleCutoff"
        ></owl-manage-indents>
    </div>
</template>

<script>
import { indentsService } from '@/mixin/service/indents.js'

export default {
    name: 'manage-processing-indents',
    mixins: [indentsService],
    mounted() {
        this.getIndents('processing')
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

<style lang="css" scoped></style>
