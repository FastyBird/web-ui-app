import{a as s}from"./chunk-454WOBUV-CM0pFb8Z.js";import{c as a,b as c,h as r}from"./web-ui-components.es-f1tHOnHV.js";import{f as b}from"./vue.esm-bundler-CCHDJWTD.js";const m={component:a,title:"Components/Navigation/Bottom navigation",excludeStories:/.*Data$/},t={parameters:{docs:{source:{code:`
<template>
</template>

<script setup lang="ts">
<\/script>

<style scoped>
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{ElButton:c,FbBottomNavigation:a,FbBottomNavigationHeading:r},setup:()=>{const i=b(!1),l=s("button-clicked");return{show:i,onClick:l}},template:`
<div class="fb-bottom-navigation-story-block">
    <el-button @click="show = true">Open menu</el-button>

    <fb-bottom-navigation
        :show="show"
        @close="show = false"
    >
        <template #heading>
            <fb-bottom-navigation-heading :teleport="false">
                Select one from items
            </fb-bottom-navigation-heading>
        </template>

        <fb-bottom-navigation-content :teleport="false">
            <el-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option one
            </el-button>
        </fb-bottom-navigation-content>

        <fb-bottom-navigation-content :teleport="false">
            <el-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option two
            </el-button>
        </fb-bottom-navigation-content>

        <fb-bottom-navigation-content :teleport="false">
            <el-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option three
            </el-button>
        </fb-bottom-navigation-content>
    </fb-bottom-navigation>
</div>`})};var n,o,e;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
</template>

<script setup lang="ts">
<\/script>

<style scoped>
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      ElButton,
      FbBottomNavigation,
      FbBottomNavigationHeading
    },
    setup: () => {
      const show = ref<boolean>(false);
      const onClick = action("button-clicked");
      return {
        show,
        onClick
      };
    },
    template: \`
<div class="fb-bottom-navigation-story-block">
    <el-button @click="show = true">Open menu</el-button>

    <fb-bottom-navigation
        :show="show"
        @close="show = false"
    >
        <template #heading>
            <fb-bottom-navigation-heading :teleport="false">
                Select one from items
            </fb-bottom-navigation-heading>
        </template>

        <fb-bottom-navigation-content :teleport="false">
            <el-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option one
            </el-button>
        </fb-bottom-navigation-content>

        <fb-bottom-navigation-content :teleport="false">
            <el-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option two
            </el-button>
        </fb-bottom-navigation-content>

        <fb-bottom-navigation-content :teleport="false">
            <el-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option three
            </el-button>
        </fb-bottom-navigation-content>
    </fb-bottom-navigation>
</div>\`
  })
}`,...(e=(o=t.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};const p=["BasicUsage"],u=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{u as B,t as a};
