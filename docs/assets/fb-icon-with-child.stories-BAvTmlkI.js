import{b as p,c as r}from"./index-CCt2Qn-w.js";import{y as i}from"./web-ui-components.es-BCo1uCuo.js";const m={component:i,title:"Components/Basic/Icon with child",argTypes:{type:{type:{name:"string",required:!1},control:{type:"select"},options:["default","primary","info","success","warning","danger"],description:"child icon type",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{type:{name:"number",required:!1},control:{type:"text"},description:"main icon size",table:{type:{summary:"number"},defaultValue:{summary:"-"}}},color:{type:{name:"string",required:!1},control:{type:"text"},description:"main icon color",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},args:{type:"default"},excludeStories:/.*Data$/},e={parameters:{docs:{source:{code:`
<template>
    <fb-icon-with-child :size="50">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="info">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="success">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="warning">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="danger">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
</template>

<style scoped>
.icon {
    color: var(--fb-color-default-light-5);
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbIconWithChild:i,FasBell:p,FasEnvelope:r},template:`
<div class="fb-icon-with-child-story-block">
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="primary">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="info">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="success">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="warning">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="danger">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>`})},t={parameters:{docs:{source:{code:`
<template>
    <fb-icon-with-child :size="80" type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="40" type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="30" type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
</template>

<style scoped>
.icon {
    color: var(--fb-color-default-light-5);
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbIconWithChild:i,FasBell:p,FasEnvelope:r},template:`
<div class="fb-icon-with-child-story-block">
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="80" type="primary">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="primary">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="40" type="primary">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="30" type="primary">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child type="primary">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>`})};var l,a,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-icon-with-child :size="50">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="info">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="success">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="warning">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="danger">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
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
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="primary">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="info">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="success">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="warning">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="danger">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>\`
  })
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-icon-with-child :size="80" type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="50" type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="40" type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child :size="30" type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
    </fb-icon-with-child>
    <fb-icon-with-child type="primary">
        <template #primary><fas-envelope class="icon" /></template>
        <template #secondary><fas-bell /></template>
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
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="50" type="primary">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="40" type="primary">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child :size="30" type="primary">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
    <div class="fb-icon-with-child-story-block__item">
        <fb-icon-with-child type="primary">
            <template #primary><fas-envelope class="icon-color" /></template>
            <template #secondary><fas-bell /></template>
        </fb-icon-with-child>
    </div>
</div>\`
  })
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const d=["BasicUsage","Sizes"],y=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,Sizes:t,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{e as B,y as I,t as S};
