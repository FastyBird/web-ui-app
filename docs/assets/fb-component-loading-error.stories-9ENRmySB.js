import{v as d}from"./web-ui-components.es-DljdZIV1.js";import"./vue.esm-bundler-OG2PKN0J.js";const l={component:d,title:"Components/Feedback/Component loading error",argTypes:{size:{type:{name:"string",required:!1},control:{type:"select"},options:["large","default","small"],description:"loading result size",table:{type:{summary:"string"},defaultValue:{summary:"default"}}}},args:{size:"default"},excludeStories:/.*Data$/},e={},o={parameters:{docs:{source:{code:`
<template>
    <fb-component-loading-error size="large" />
    <fb-component-loading-error />
    <fb-component-loading-error size="small" />
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbComponentLoadingError:d},template:`
<div style="max-width: 600px;">
    <div>
        <fb-component-loading-error size="large" />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading-error />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading-error size="small" />
    </div>
</div>`})};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-component-loading-error size="large" />
    <fb-component-loading-error />
    <fb-component-loading-error size="small" />
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbComponentLoadingError
    },
    template: \`
<div style="max-width: 600px;">
    <div>
        <fb-component-loading-error size="large" />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading-error />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading-error size="small" />
    </div>
</div>\`
  })
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const c=["Component","Sizes"];export{e as Component,o as Sizes,c as __namedExportsOrder,l as default};
