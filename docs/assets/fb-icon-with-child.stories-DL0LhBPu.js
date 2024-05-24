import{b as p,c as h}from"./index-D1wgMhN9.js";import{g as t}from"./web-ui-components.es-DsqV6eIk.js";const m={component:t,title:"Components/Basic/Icon with child",argTypes:{type:{type:{name:"string",required:!1},control:{type:"select"},options:["default","primary","info","success","warning","danger"],description:"child icon type",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{type:{name:"number",required:!1},control:{type:"text"},description:"main icon size",table:{type:{summary:"number"},defaultValue:{summary:"-"}}},color:{type:{name:"string",required:!1},control:{type:"text"},description:"main icon color",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},args:{type:"default"},excludeStories:/.*Data$/},e={parameters:{docs:{source:{code:`
<template>
    <fb-icon-with-child :size="50">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="primary">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="info">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="success">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="warning">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="danger">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
</template>

<style scoped>
.icon {
    color: var(--fb-color-default-light-5);
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbIconWithChild:t,FasBell:p,FasEnvelope:h},template:`
<div class="fb-icon-with-child-story-block">
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="info">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="success">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="warning">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="danger">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>`})},i={parameters:{docs:{source:{code:`
<template>
    <fb-icon-with-child :size="80" type="primary">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="primary">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="40" type="primary">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="30" type="primary">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child type="primary">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
</template>

<style scoped>
.icon {
    color: var(--fb-color-default-light-5);
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbIconWithChild:t,FasBell:p,FasEnvelope:h},template:`
<div class="fb-icon-with-child-story-block">
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="80" type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="40" type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="30" type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>`})};var l,c,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-icon-with-child :size="50">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="primary">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="info">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="success">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="warning">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="danger">
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
        <fb-icon-with-child :size="50" type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="info">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="success">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="warning">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="danger">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>\`
  })
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var a,o,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-icon-with-child :size="80" type="primary">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="primary">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="40" type="primary">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="30" type="primary">
        <template #icon><fas-envelope class="icon" /></template>
        <template #child><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child type="primary">
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
        <fb-icon-with-child :size="80" type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="40" type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="30" type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child type="primary">
            <template #icon><fas-envelope class="icon-color" /></template>
            <template #child><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>\`
  })
}`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const d=["BasicUsage","Sizes"],b=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,Sizes:i,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{e as B,b as I,i as S};
