<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu
            default-active="1"
            class="el-menu-vertical"
            @open="handleOpen"
            @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <span>基础</span>
            </template>
            <el-menu-item @click="handleSelect('icon')">图标</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import {onMounted} from 'vue';
import router from "@/routes";

const handleOpen = (key: string, keyPath: string[]) => {
}

const handleClose = (key: string, keyPath: string[]) => {
}

const handleSelect = (menu: any) => {
  router.push(menu)
}

onMounted(() => {
});
</script>

<style scoped lang="scss">
.common-layout {
  display: flex;
  width: 100%;
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-main {
  padding: 20px;
  background-color: #f0f2f5;
  height: 100%;
  overflow-y: auto;
}
</style>
