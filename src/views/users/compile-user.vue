<template>
    <div class="compile-user">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/index' }">
                首页
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/manage/users' }">
                管理用户
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                编辑用户
            </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="container owl-margin-top-lg owl-font-size-md">
            <el-form
                size="mini"
                :label-position="'left'"
                :model="user"
                label-width="85px"
            >
                <el-form-item label="用户名">
                    <el-input v-model="user.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="user.password"></el-input>
                </el-form-item>
                <el-form-item label="头像地址">
                    <el-input v-model="user.profilePhoto"></el-input>
                </el-form-item>
                <el-form-item label="等级">
                    <el-select v-model="user.level">
                        <el-option
                            v-for="item in levelOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="user.email"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="user.phone"></el-input>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input v-model="user.profile"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="user.sex">
                        <el-option
                            v-for="item in sexOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="注册日">
                    <el-date-picker
                        value-format="yyyy-MM-dd HH:mm:ss"
                        format="yyyy-MM-dd HH:mm:ss"
                        v-model="user.date"
                        type="datetime"
                        placeholder="选择注册日期"
                    >
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div class="submit-btn flex align-center justify-center">
                <el-button type="primary" size="mini" @click="maintain">
                    提交表单
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'compile-user',
    data() {
        return {
            user: this.$store.state.userData,
            sexOptions: [
                {
                    value: '男',
                    label: '男'
                },
                {
                    value: '女',
                    label: '女'
                }
            ],
            levelOptions: [
                {
                    value: 1,
                    label: '1'
                },
                {
                    value: 2,
                    label: '2'
                },
                {
                    value: 3,
                    label: '3'
                },
                {
                    value: 4,
                    label: '4'
                },
                {
                    value: 5,
                    label: '5'
                },
                {
                    value: 6,
                    label: '6'
                }
            ]
        }
    },
    methods: {
        maintain() {
            this.$axios
                .post('/update/user', this.user)
                .then(res => {
                    this.$message({
                        type: 'success',
                        message: '保存成功!'
                    })
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '保存失败!'
                    })
                })
        }
    }
}
</script>

<style scoped></style>
