import{o as m}from"./web-ui-components.es-nLJZCm2K.js";import{t as e}from"./web-ui-constants.es-Bfh99ZXh.js";import"./vue.esm-bundler-DEpQrfwO.js";const g={component:m,title:"Components/Feedback/Component loading",argTypes:{size:{type:{name:"string",required:!1},control:{type:"select"},options:[e.LARGE,e.DEFAULT,e.SMALL],description:"loading status size",table:{type:{summary:"string"},defaultValue:{summary:e.DEFAULT}}}},args:{size:e.DEFAULT},excludeStories:/.*Data$/},n={},o={parameters:{docs:{source:{code:`
<template>
    <fb-component-loading size="${e.LARGE}" />
    <fb-component-loading />
    <fb-component-loading size="${e.SMALL}" />
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbComponentLoading:m},template:`
<div style="max-width: 600px;">
    <div>
        <fb-component-loading size="${e.LARGE}" />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading size="${e.SMALL}" />
    </div>
</div>`})};var t,i,a;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,p,r;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-component-loading size="\${ComponentSizeTypes.LARGE}" />
    <fb-component-loading />
    <fb-component-loading size="\${ComponentSizeTypes.SMALL}" />
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
        <fb-component-loading size="\${ComponentSizeTypes.LARGE}" />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading size="\${ComponentSizeTypes.SMALL}" />
    </div>
</div>\`
  })
}`,...(r=(p=o.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};const L=["Component","Sizes"];export{n as Component,o as Sizes,L as __namedExportsOrder,g as default};
