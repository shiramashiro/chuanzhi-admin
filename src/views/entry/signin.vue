<template>
    <div class="signin">
        <div class="session-body">
            <div class="session-sidebox">
                <div class="session-sidebox__container">
                    <div class="session-sidebox__header">
                        <el-image
                            src="https://owl-town.oss-cn-chengdu.aliyuncs.com/img/logo/logo.png"
                            :fit="'fill'"
                        ></el-image>
                        <h2 class="explain">
                            传智书城后台管理系统
                        </h2>
                    </div>
                    <div class="session-sidebox__content">
                        时光滴答，梦想渐行渐远。利用好每一分钟，多学一分钟的知识，金钱就多加一分。
                        ——郑人滏
                    </div>
                    <div class="session-sidebox__footer"></div>
                </div>
            </div>
            <div class="session-form flex justify-center align-center">
                <div class="session-form__container">
                    <el-form>
                        <el-form-item>
                            <h2>登陆</h2>
                        </el-form-item>
                        <el-form-item>
                            <el-input
                                v-model="form.username"
                                placeholder="管理员"
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input
                                type="password"
                                v-model="form.password"
                                placeholder="请输入密码"
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button
                                @click="signin"
                                plain
                                style="width: 100%"
                                type="primary"
                                >登 陆</el-button
                            >
                        </el-form-item>
                        <el-form-item>
                            <el-link
                                :underline="false"
                                class="flex align-center owl-full-he-wi"
                                >忘记密码？联系超级管理员</el-link
                            >
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'signin',
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    mounted() {
        let user = sessionStorage.getItem('user')
        if (user !== null) {
            this.$message({
                type: 'warning',
                message: '您已登录，无需再登录'
            })
            this.$router.push('/')
        }
    },
    methods: {
        signin() {
            this.$axios.post('/signin', this.form).then(res => {
                let flag = 'success'
                if (res.data.code === 200) {
                    sessionStorage.setItem(
                        'user',
                        JSON.stringify(res.data.data)
                    )
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 1500)
                } else {
                    flag = 'error'
                }
                this.$message({
                    type: flag,
                    message: res.data.message
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.signin {
    min-height: 99.9vh;
    background-image: url('https://generic-data.oss-cn-chengdu.aliyuncs.com/img/work.png');
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
    background-position: 100% 100%;

    .session-body {
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%);
        border-radius: 15px;
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 900px;
        padding: 0;
        z-index: 1;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .session-sidebox {
        border-radius: 15px 0 0 15px;
        position: relative;
        color: #fff;
        background: linear-gradient(0deg, #0ba29a 0%, #607089 100%);

        .session-sidebox__container {
            position: relative;
            z-index: 1;
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;

            .session-sidebox__header {
                .explain {
                    margin-top: 30px;
                }
            }
        }
    }

    .session-form {
        border-radius: 0 15px 15px 0;
        position: relative;
        background-color: white;
        color: #40485b;

        .session-form__container {
            width: 100%;
        }
    }

    .session-sidebox,
    .session-form {
        padding: 80px 80px 48px;
        margin: 0 auto;
        width: 50%;
        min-height: 564px;
    }
}
</style>
