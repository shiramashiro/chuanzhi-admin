<template>
    <div class="container owl-margin-top-lg owl-presses-form">
        <el-form
            size="mini"
            :label-position="'left'"
            :model="form"
            label-width="85px"
        >
            <el-form-item label="出版社">
                <el-input
                    placeholder="出版社的名称"
                    v-model="form.name"
                ></el-input>
            </el-form-item>
            <el-form-item label="封面地址">
                <el-input
                    placeholder="出版社的封面地址"
                    v-model="form.cover"
                ></el-input>
            </el-form-item>
            <el-form-item label="简介">
                <el-input
                    placeholder="出版社的简介"
                    v-model="form.profile"
                ></el-input>
            </el-form-item>
        </el-form>
        <div class="submit-btn flex align-center justify-center">
            <el-button type="primary" size="mini" @click="handleClick">
                提交表单
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'owl-presses-form',
    props: {
        form: {
            type: Object,
            required: false
        }
    },
    methods: {
        handleClick() {
            this.$emit('maintain', this.form)
        }
    }
}
</script>

<style scoped></style>
