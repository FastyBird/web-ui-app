import{o as h,d}from"./index-Dg9quNvz.js";import{h as l}from"./web-ui-components.es-nLJZCm2K.js";import{n as e}from"./web-ui-constants.es-Bfh99ZXh.js";const m={component:l,title:"Components/Basic/Icon with child",argTypes:{variant:{type:{name:"string",required:!1},control:{type:"select"},options:[e.DEFAULT,e.PRIMARY,e.INFO,e.SUCCESS,e.WARNING,e.DANGER],description:"child icon variant",table:{type:{summary:"string"},defaultValue:{summary:e.DEFAULT}}},size:{type:{name:"number",required:!1},control:{type:"text"},description:"main icon size",table:{type:{summary:"number"},defaultValue:{summary:"-"}}},color:{type:{name:"string",required:!1},control:{type:"text"},description:"main icon color",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},args:{variant:e.DEFAULT},excludeStories:/.*Data$/},i={parameters:{docs:{source:{code:`
<template>
    <fb-icon-with-child :size="50">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="${e.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="${e.INFO}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="${e.SUCCESS}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="${e.WARNING}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="${e.DANGER}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
</template>

<style scoped>
.icon {
    color: var(--fb-color-default-light-5);
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbIconWithChild:l,FasBell:h,FasEnvelope:d},template:`
<div class="fb-icon-with-child-story-block">
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="${e.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="${e.INFO}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="${e.SUCCESS}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="${e.WARNING}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="${e.DANGER}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>`})},t={parameters:{docs:{source:{code:`
<template>
    <fb-icon-with-child :size="80" variant="${e.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="${e.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="40" variant="${e.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="30" variant="${e.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child variant="${e.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
</template>

<style scoped>
.icon {
    color: var(--fb-color-default-light-5);
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbIconWithChild:l,FasBell:h,FasEnvelope:d},template:`
<div class="fb-icon-with-child-story-block">
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="80" variant="${e.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="${e.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="40" variant="${e.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="30" variant="${e.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child variant="${e.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>`})};var a,c,n;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-icon-with-child :size="50">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="\${VariantTypes.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="\${VariantTypes.INFO}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="\${VariantTypes.SUCCESS}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="\${VariantTypes.WARNING}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="\${VariantTypes.DANGER}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
</template>

<style scoped>
.icon {
    color: var(--fb-color-default-light-5);
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbIconWithChild,
      FasBell,
      FasEnvelope
    },
    template: \`
<div class="fb-icon-with-child-story-block">
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="\${VariantTypes.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="\${VariantTypes.INFO}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="\${VariantTypes.SUCCESS}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="\${VariantTypes.WARNING}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="\${VariantTypes.DANGER}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>\`
  })
}`,...(n=(c=i.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var o,s,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-icon-with-child :size="80" variant="\${VariantTypes.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" variant="\${VariantTypes.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="40" variant="\${VariantTypes.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="30" variant="\${VariantTypes.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child variant="\${VariantTypes.PRIMARY}">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
</template>

<style scoped>
.icon {
    color: var(--fb-color-default-light-5);
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbIconWithChild,
      FasBell,
      FasEnvelope
    },
    template: \`
<div class="fb-icon-with-child-story-block">
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="80" variant="\${VariantTypes.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" variant="\${VariantTypes.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="40" variant="\${VariantTypes.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="30" variant="\${VariantTypes.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child variant="\${VariantTypes.PRIMARY}">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>\`
  })
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const f=["BasicUsage","Sizes"],w=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:i,Sizes:t,__namedExportsOrder:f,default:m},Symbol.toStringTag,{value:"Module"}));export{i as B,w as I,t as S};
