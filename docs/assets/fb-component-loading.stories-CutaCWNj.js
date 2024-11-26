import{l as d}from"./web-ui-components.es-CYzxcWcv.js";import"./vue.esm-bundler-Co5bQ3ld.js";const p={component:d,title:"Components/Feedback/Component loading",argTypes:{size:{type:{name:"string",required:!1},control:{type:"select"},options:["large","default","small"],description:"loading status size",table:{type:{summary:"string"},defaultValue:{summary:"default"}}}},args:{size:"default"},excludeStories:/.*Data$/},e={},n={parameters:{docs:{source:{code:`
<template>
    <fb-component-loading size="large" />
    <fb-component-loading />
    <fb-component-loading size="small" />
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbComponentLoading:d},template:`
<div style="max-width: 600px;">
    <div>
        <fb-component-loading size="large" />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading size="small" />
    </div>
</div>`})};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var s,i,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-component-loading size="large" />
    <fb-component-loading />
    <fb-component-loading size="small" />
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbComponentLoading
    },
    template: \`
<div style="max-width: 600px;">
    <div>
        <fb-component-loading size="large" />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading size="small" />
    </div>
</div>\`
  })
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const c=["Component","Sizes"];export{e as Component,n as Sizes,c as __namedExportsOrder,p as default};
