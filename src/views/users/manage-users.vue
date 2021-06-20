<template>
    <div class="manage-users">
        <div class="breadcrumb owl-margin-tb-md owl-border-radius-sm">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/index' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item>管理用户</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-table :data="users" stripe border style="width: 100%">
                <el-table-column type="expand" label="展开" width="70">
                    <template slot-scope="props">
                        <div class="owl-font-size-lg owl-margin-tb-sm">
                            用户信息详细
                        </div>
                        <div
                            class="profile-info owl-card owl-padding-sm owl-border-radius-sm"
                        >
                            <el-form
                                label-position="left"
                                inline
                                class="demo-table-expand"
                            >
                                <el-form-item label="ID：">
                                    <span>{{ props.row.id }}</span>
                                </el-form-item>
                                <el-form-item label="等级：">
                                    <span>{{ props.row.level }}</span>
                                </el-form-item>
                                <el-form-item label="注册日：">
                                    <span>{{ props.row.date }}</span>
                                </el-form-item>
                                <el-form-item label="用户名：">
                                    <span>{{ props.row.username }}</span>
                                </el-form-item>
                                <el-form-item label="性别：">
                                    <span>{{ props.row.sex }}</span>
                                </el-form-item>
                                <el-form-item label="邮箱：">
                                    <span>{{ props.row.email }}</span>
                                </el-form-item>
                                <el-form-item label="手机号：">
                                    <span>{{ props.row.phone }}</span>
                                </el-form-item>
                                <el-form-item label="密码：">
                                    <span>{{ props.row.password }}</span>
                                </el-form-item>
                                <el-form-item label="简介：">
                                    <span>{{ props.row.profile }}</span>
                                </el-form-item>
                                <el-form-item label="头像地址：">
                                    <span>{{ props.row.profilePhoto }}</span>
                                </el-form-item>
                            </el-form>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    label="等级"
                    sortable
                    width="80"
                    prop="level"
                ></el-table-column>
                <el-table-column label="注册日" prop="date"></el-table-column>
                <el-table-column
                    label="用户名"
                    width="120"
                    prop="username"
                ></el-table-column>
                <el-table-column
                    width="80"
                    label="性别"
                    prop="sex"
                ></el-table-column>
                <el-table-column label="邮箱" prop="email"></el-table-column>
                <el-table-column
                    label="手机号"
                    width="120"
                    prop="phone"
                ></el-table-column>
                <el-table-column
                    label="密码"
                    width="150"
                    prop="password"
                ></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            plain
                            icon="el-icon-search"
                            type="primary"
                            @click="compile(scope.row)"
                            >编辑</el-button
                        >
                        <el-button
                            size="mini"
                            plain
                            icon="el-icon-close"
                            type="danger"
                            @click="cutoff(scope.row, scope.$index)"
                            >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                class="owl-margin-top-lg"
                layout="prev, pager, next"
                :total="1000"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'manage-users',
    data() {
        return {
            users: []
        }
    },
    methods: {
        compile(row) {
            this.$store.commit('setUserData', row) // 将这一行的数据临时存储到store
            this.$router.push('/compile/user') // 跳转到编辑视图进行编辑
        },
        cutoff(row, index) {
            this.$confirm('是否删除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$axios
                        .post('/cutoff/user', { id: row.id })
                        .then(res => {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                            this.users.splice(index, 1) // 删除视图上的数据
                        })
                        .catch(err => {
                            this.$message({
                                type: 'error',
                                message: '删除失败，服务器错误'
                            })
                        })
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消删除'
                    })
                })
        }
    },
    mounted() {
        this.$axios
            .post('/get/users')
            .then(res => {
                this.users = res.data.data
            })
            .catch(err => {
                this.$message({
                    type: 'error',
                    message: '获取数据失败，服务器错误!'
                })
            })
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

.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>
