import{f as t,a as n}from"./index-Dg9quNvz.js";import{D as o,U as l,W as r,H as b,V as m,v as i,C as u}from"./web-ui-components.es-nLJZCm2K.js";import{r as c}from"./vue.esm-bundler-DEpQrfwO.js";const f={component:o,title:"Components/Navigation/App bar",excludeStories:/.*Data$/},e={parameters:{docs:{source:{code:`
<template>
</template>

<script lang="ts" setup>
<\/script>

<style scoped>
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbAppBar:o,FbAppBarHeading:l,FbAppBarButton:r,FbAppBarIcon:b,FbAppBarContent:m,FbButton:i,FbIcon:u,FasMagnifyingGlass:t,FasPenToSquare:n},setup:()=>({menuCollapsed:c(!0),FasMagnifyingGlass:t,FasPenToSquare:n}),template:`
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
                    <fb-icon size="25px">
                        <fas-pen-to-square />
                    </fb-icon>
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
                    <fb-icon>
                        <fas-magnifying-glass />
                    </fb-icon>
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
      FbAppBar,
      FbAppBarHeading,
      FbAppBarButton,
      FbAppBarIcon,
      FbAppBarContent,
      FbButton,
      FbIcon,
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
                    <fb-icon size="25px">
                        <fas-pen-to-square />
                    </fb-icon>
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
                    <fb-icon>
                        <fas-magnifying-glass />
                    </fb-icon>
                </template>
            </fb-app-bar-button>
        </template>

        <template #content>
            <fb-app-bar-content>Bottom custom content</fb-app-bar-content>
        </template>
    </fb-app-bar>
</div>\`
  })
}`,...(s=(p=e.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const d=["BasicUsage"],h=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,__namedExportsOrder:d,default:f},Symbol.toStringTag,{value:"Module"}));export{h as A,e as B};
