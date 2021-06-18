<template>
    <div class="container owl-margin-top-lg owl-font-size-md">
        <el-form
            size="mini"
            :label-position="'left'"
            :rules="rules"
            :model="form"
            label-width="85px"
        >
            <el-form-item label="单价">
                <el-input
                    placeholder="书籍的单价"
                    v-model="form.price"
                ></el-input>
            </el-form-item>
            <el-form-item label="折扣">
                <el-input
                    placeholder="如果书籍不折扣输入0，折扣的取值范围在0.1~0.9之间"
                    v-model="form.discount"
                ></el-input>
            </el-form-item>
            <el-form-item label="满减">
                <el-select v-model="form.tags" multiple placeholder="请选择">
                    <el-option
                        v-for="item in tagsOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="封面">
                <el-input
                    placeholder="为书籍设置封面"
                    v-model="form.cover"
                ></el-input>
            </el-form-item>
            <el-form-item label="简介">
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    maxlength="220"
                    placeholder="为书籍添加简介"
                    v-model="form.profile"
                ></el-input>
            </el-form-item>
            <el-form-item label="类别">
                <el-select v-model="form.types" multiple placeholder="请选择">
                    <el-option
                        v-for="item in typeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="作者">
                <div class="box flex align-center" style="flex-flow: wrap">
                    <div class="flex owl-margin-rg-lg" style="flex-flow: wrap">
                        <div
                            class="flex owl-margin-rg-lg-lc owl-margin-bm-sm"
                            v-for="(item, index) in form.authors"
                            :key="index"
                        >
                            <el-input
                                :placeholder="'作者名 ' + (index + 1)"
                                :key="index"
                                v-model="form.authors[index]"
                            ></el-input>
                            <el-button
                                icon="el-icon-minus"
                                class="delete-author-btn owl-margin-rg-lg-lc"
                                type="text"
                                @click="deleteAuthor(index)"
                            ></el-button>
                        </div>
                    </div>
                    <div class="owl-margin-bm-sm">
                        <el-button
                            icon="el-icon-plus"
                            plain
                            type="primary"
                            circle
                            @click="appendAuthor"
                        ></el-button>
                    </div>
                </div>
            </el-form-item>
            <el-form-item label="预览图">
                <div class="box flex align-center" style="flex-flow: wrap">
                    <div class="flex owl-margin-rg-lg" style="flex-flow: wrap">
                        <div
                            class="flex owl-margin-rg-lg-lc owl-margin-bm-sm"
                            v-for="(item, index) in form.previews"
                            :key="index"
                        >
                            <el-input
                                :key="index"
                                v-model="form.previews[index]"
                                :placeholder="'预览图URL地址' + (index + 1)"
                            >
                            </el-input>
                            <el-button
                                icon="el-icon-minus"
                                class="delete-author-btn owl-margin-rg-lg-lc"
                                type="text"
                                @click="deletePreview(index)"
                            ></el-button>
                        </div>
                    </div>
                    <div class="owl-margin-bm-sm">
                        <el-button
                            icon="el-icon-plus"
                            plain
                            type="primary"
                            circle
                            @click="appendPreview"
                        ></el-button>
                    </div>
                </div>
            </el-form-item>
            <el-form-item label="书籍名">
                <el-input placeholder="书籍名" v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="出版社">
                <el-input
                    placeholder="书籍的出版社"
                    v-model="form.press"
                ></el-input>
            </el-form-item>
            <el-form-item label="出版日期">
                <el-date-picker
                    value="yyyy-M"
                    value-format="yyyy-M"
                    v-model="form.pressDate"
                    type="month"
                    placeholder="选择出版日期"
                >
                </el-date-picker>
            </el-form-item>
            <el-form-item label="出版社ID">
                <el-input
                    placeholder="出版社的ID，与出版社关联起来"
                    v-model="form.pressId"
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
    name: 'owl-bookshelf-form',
    props: {
        form: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            typeOptions: [
                {
                    value: 'literature',
                    label: '文学'
                },
                {
                    value: 'living',
                    label: '生活'
                },
                {
                    value: 'computer',
                    label: '计算机'
                },
                {
                    value: 'language',
                    label: '外语'
                },
                {
                    value: 'business',
                    label: '经营'
                },
                {
                    value: 'motivation',
                    label: '励志'
                },
                {
                    value: 'social',
                    label: '社科'
                },
                {
                    value: 'academic',
                    label: '学术'
                },
                {
                    value: 'children',
                    label: '儿童'
                },
                {
                    value: 'art',
                    label: '艺术'
                },
                {
                    value: 'origin',
                    label: '原版'
                },
                {
                    value: 'technology',
                    label: '科技'
                },
                {
                    value: 'examine',
                    label: '考试'
                },
                {
                    value: 'encyclopedia',
                    label: '生活百科'
                }
            ],
            tagsOptions: [
                {
                    value: '300减40',
                    label: '300减40'
                },
                {
                    value: '200减20',
                    label: '200减20'
                },
                {
                    value: '99减10',
                    label: '99减10'
                },
                {
                    value: '50减5',
                    label: '50减5'
                }
            ],
            rules: {}
        }
    },
    methods: {
        deleteAuthor(index) {
            this.form.authors.splice(index, 1)
        },
        deletePreview(index) {
            this.form.previews.splice(index, 1)
        },
        appendPreview() {
            this.form.previews.push('')
        },
        appendAuthor() {
            this.form.authors.push('')
        },
        handleClick() {
            this.$emit('maintain', this.form)
        }
    }
}
</script>

<style lang="scss" scoped>
.delete-author-btn {
    border-color: #dcdfe6;
    border-style: solid;
    border-width: 1px 1px 1px 0;
    border-radius: 0 5px 5px 0;
}
</style>
