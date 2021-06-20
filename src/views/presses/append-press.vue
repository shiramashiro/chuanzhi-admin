<template>
    <div class="append-presses">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/manage/presses' }"
                >管理出版社</el-breadcrumb-item
            >
            <el-breadcrumb-item>添加出版社</el-breadcrumb-item>
        </el-breadcrumb>
        <owl-presses-form
            :form="form"
            @maintain="handleMaintain"
        ></owl-presses-form>
    </div>
</template>

<script>
export default {
    name: 'append-presses',
    data() {
        return {
            form: {}
        }
    },
    methods: {
        handleMaintain(form) {
            this.$axios
                .post('/append/press', form)
                .then(res => {
                    this.$message({
                        type: 'success',
                        message: '添加成功!'
                    })
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '添加失败，服务器错误!'
                    })
                })
        }
    }
}
</script>

<style scoped></style>
