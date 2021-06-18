<template>
    <div class="compile-processing-indents">
        <div class="breadcrumb owl-margin-tb-md owl-border-radius-sm">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item>管理订单</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/manage/processing/indents' }"
                    >未发货</el-breadcrumb-item
                >
                <el-breadcrumb-item>编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 
            从管理订单页面跳转进来之后从store中获取indents对象，
            并将对象提供给owl-indents-form组件，
            owl-indents-form组件进行更新操作操作。
        -->
        <owl-indents-form
            :form="$store.state.indentsData"
            @maintain="handleMaintain"
        ></owl-indents-form>
    </div>
</template>

<script>
import { indentsService } from '@/mixin/service/indents.js'

export default {
    name: 'compile-processing-indents',
    mixins: [indentsService],
    methods: {
        /**
         * 当owl-indents-form修改了数据之后，将修改后的数据返回出来，
         * 然后将更新后的数据提交给后端进行处理。
         */
        handleMaintain(form) {
            this.maintain(form)
        }
    }
}
</script>
