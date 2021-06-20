<template>
    <div class="compile-press">
        <div class="breadcrumb owl-margin-tb-md owl-border-radius-sm">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item :to="{ path: '/manage/presses' }"
                    >管理出版社</el-breadcrumb-item
                >
                <el-breadcrumb-item>编辑出版社</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <owl-presses-form
            :form="$store.state.pressData"
            @maintain="handleMaintain"
        ></owl-presses-form>
    </div>
</template>

<script>
export default {
    name: 'compile-press',
    methods: {
        handleMaintain(form) {
            this.$axios
                .post('/update/press', form)
                .then(res => {
                    this.$message({
                        type: 'success',
                        message: '保存成功!'
                    })
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '保存失败，服务器错误!'
                    })
                })
        }
    }
}
</script>

<style scoped></style>
