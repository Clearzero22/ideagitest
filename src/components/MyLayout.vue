<template>
  <div class="flex gap-4">
    <div>
      <div class="sub-title my-2 text-sm text-gray-600">
        list suggestions when activated
      </div>
      <el-autocomplete v-model="state1" :fetch-suggestions="querySearch" clearable class="inline-input w-50"
                       placeholder="Please Input" @select="handleSelect"/>
    </div>
    <div>
      <div class="sub-title my-2 text-sm text-gray-600">
        list suggestions on input
      </div>
      <el-autocomplete v-model="state2" :fetch-suggestions="querySearch" :trigger-on-focus="false" clearable
                       class="inline-input w-50" placeholder="Please Input" @select="handleSelect"/>
    </div>

    <!--        设置位置-->
    <div>
      <div class="mb-2">
        <el-button>Default</el-button>
        <el-button type="primary" :disabled="isButtonDisabled" @click="handleClick">Primary
        </el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </div>
    </div>

    <!--    图标按钮-->
    <div>
      <div class="mb-2">
        <el-button type="primary" :icon="Edit"></el-button>
        <el-button type="primary" :icon="Delete" :size="small"></el-button>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import {Delete, Edit, Search, Share, Upload} from '@element-plus/icons-vue'

interface RestaurantItem {
  value: string
  link: string
}

const state1 = ref('')
const state2 = ref('')

const restaurants = ref<RestaurantItem[]>([])

const isButtonDisabled = ref(false)
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
      ? restaurants.value.filter(createFilter(queryString))
      : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const loadAll = () => {
  return [
    {value: 'vue', link: 'https://github.com/vuejs/vue'},
    {value: 'element', link: 'https://github.com/ElemeFE/element'},
    {value: 'cooking', link: 'https://github.com/ElemeFE/cooking'},
    {value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui'},
    {value: 'vuex', link: 'https://github.com/vuejs/vuex'},
    {value: 'vue-router', link: 'https://github.com/vuejs/vue-router'},
    {value: 'babel', link: 'https://github.com/babel/babel'},
  ]
}

const handleSelect = (item: RestaurantItem) => {
  console.log(item)
}

const handleClick = () => {
  alert("这段时间禁止使用哦")
  isButtonDisabled.value = true;

  // 使用setTimeout 三秒后重新启动按钮
  setTimeout(() => {
    isButtonDisabled.value = false

  }, 3000)

  // 三秒后弹窗

}

onMounted(() => {
  restaurants.value = loadAll()
})
</script>