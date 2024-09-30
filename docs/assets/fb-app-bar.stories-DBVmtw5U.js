import{f as t,a as n}from"./index-CPeZypXz.js";import{t as o,E as l,r,e as b,i as m,n as i}from"./web-ui-components.es-GVlHIQdK.js";import{f as u}from"./vue.esm-bundler-DY6RS4Md.js";const c={component:o,title:"Components/Navigation/App bar",excludeStories:/.*Data$/},e={parameters:{docs:{source:{code:`
<template>
</template>

<script setup lang="ts">
<\/script>

<style scoped>
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{ElIcon:l,FbAppBar:o,FbAppBarHeading:r,FbAppBarButton:b,FbAppBarIcon:m,FbAppBarContent:i,FasMagnifyingGlass:t,FasPenToSquare:n},setup:()=>({menuCollapsed:u(!0),FasMagnifyingGlass:t,FasPenToSquare:n}),template:`
<div class="fb-app-bar-story-block">
    <fb-app-bar
        :menuCollapsed="menuCollapsed"
        @toggleMenu="menuCollapsed = !menuCollapsed"
    >
        <template #heading>
            <fb-app-bar-heading>
                <template #title>
                    Simple header content
                </template>

                <template #subtitle>
                    With short sub-header
                </template>

                <template #prepend>
                    <el-icon size="25px">
                        <fas-pen-to-square />
                    </el-icon>
                </template>
            </fb-app-bar-heading>
        </template>

        <template #button-small>
            <fb-app-bar-button small>
                Close
            </fb-app-bar-button>

            <fb-app-bar-button small right>
                Next step
            </fb-app-bar-button>
        </template>

        <template #button-left>
            <fb-app-bar-button>
                <template #icon>
                    <el-icon>
                        <fas-magnifying-glass />
                    </el-icon>
                </template>
            </fb-app-bar-button>
        </template>

        <template #content>
            <fb-app-bar-content>Bottom custom content</fb-app-bar-content>
        </template>
    </fb-app-bar>
</div>`})};var a,p,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      ElIcon,
      FbAppBar,
      FbAppBarHeading,
      FbAppBarButton,
      FbAppBarIcon,
      FbAppBarContent,
      FasMagnifyingGlass,
      FasPenToSquare
    },
    setup: () => {
      const menuCollapsed = ref<boolean>(true);
      return {
        menuCollapsed,
        FasMagnifyingGlass,
        FasPenToSquare
      };
    },
    template: \`
<div class="fb-app-bar-story-block">
    <fb-app-bar
        :menuCollapsed="menuCollapsed"
        @toggleMenu="menuCollapsed = !menuCollapsed"
    >
        <template #heading>
            <fb-app-bar-heading>
                <template #title>
                    Simple header content
                </template>

                <template #subtitle>
                    With short sub-header
                </template>

                <template #prepend>
                    <el-icon size="25px">
                        <fas-pen-to-square />
                    </el-icon>
                </template>
            </fb-app-bar-heading>
        </template>

        <template #button-small>
            <fb-app-bar-button small>
                Close
            </fb-app-bar-button>

            <fb-app-bar-button small right>
                Next step
            </fb-app-bar-button>
        </template>

        <template #button-left>
            <fb-app-bar-button>
                <template #icon>
                    <el-icon>
                        <fas-magnifying-glass />
                    </el-icon>
                </template>
            </fb-app-bar-button>
        </template>

        <template #content>
            <fb-app-bar-content>Bottom custom content</fb-app-bar-content>
        </template>
    </fb-app-bar>
</div>\`
  })
}`,...(s=(p=e.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const d=["BasicUsage"],F=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{F as A,e as B};
