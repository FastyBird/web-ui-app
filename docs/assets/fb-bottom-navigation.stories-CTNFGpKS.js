import{a as b}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{q as a,G as l,v as c}from"./web-ui-components.es-nLJZCm2K.js";import{r}from"./vue.esm-bundler-DEpQrfwO.js";const m={component:a,title:"Components/Navigation/Bottom navigation",excludeStories:/.*Data$/},t={parameters:{docs:{source:{code:`
<template>
</template>

<script lang="ts" setup>
<\/script>

<style scoped>
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbBottomNavigation:a,FbBottomNavigationHeading:l,FbButton:c},setup:()=>{const i=r(!1),s=b("button-clicked");return{show:i,onClick:s}},template:`
<div class="fb-bottom-navigation-story-block">
    <fb-button @click="show = true">Open menu</fb-button>

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
            <fb-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option one
            </fb-button>
        </fb-bottom-navigation-content>

        <fb-bottom-navigation-content :teleport="false">
            <fb-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option two
            </fb-button>
        </fb-bottom-navigation-content>

        <fb-bottom-navigation-content :teleport="false">
            <fb-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option three
            </fb-button>
        </fb-bottom-navigation-content>
    </fb-bottom-navigation>
</div>`})};var n,o,e;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
</template>

<script lang="ts" setup>
<\/script>

<style scoped>
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbBottomNavigation,
      FbBottomNavigationHeading,
      FbButton
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
    <fb-button @click="show = true">Open menu</fb-button>

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
            <fb-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option one
            </fb-button>
        </fb-bottom-navigation-content>

        <fb-bottom-navigation-content :teleport="false">
            <fb-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option two
            </fb-button>
        </fb-bottom-navigation-content>

        <fb-bottom-navigation-content :teleport="false">
            <fb-button
                style="font-size: 1.8rem; padding: 1rem;"
                link
                block
                @click.prevent="onClick"
            >
                Option three
            </fb-button>
        </fb-bottom-navigation-content>
    </fb-bottom-navigation>
</div>\`
  })
}`,...(e=(o=t.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};const f=["BasicUsage"],v=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:f,default:m},Symbol.toStringTag,{value:"Module"}));export{v as B,t as a};
