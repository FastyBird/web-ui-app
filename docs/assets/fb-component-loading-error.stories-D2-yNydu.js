import{i as m}from"./web-ui-components.es-nLJZCm2K.js";import{t as e}from"./web-ui-constants.es-Bfh99ZXh.js";import"./vue.esm-bundler-DEpQrfwO.js";const g={component:m,title:"Components/Feedback/Component loading error",argTypes:{size:{type:{name:"string",required:!1},control:{type:"select"},options:[e.LARGE,e.DEFAULT,e.SMALL],description:"loading result size",table:{type:{summary:"string"},defaultValue:{summary:e.DEFAULT}}}},args:{size:e.DEFAULT},excludeStories:/.*Data$/},o={},n={parameters:{docs:{source:{code:`
<template>
    <fb-component-loading-error size="${e.LARGE}" />
    <fb-component-loading-error />
    <fb-component-loading-error size="${e.SMALL}" />
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbComponentLoadingError:m},template:`
<div style="max-width: 600px;">
    <div>
        <fb-component-loading-error size="${e.LARGE}" />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading-error />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading-error size="${e.SMALL}" />
    </div>
</div>`})};var r,t,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var a,s,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-component-loading-error size="\${ComponentSizeTypes.LARGE}" />
    <fb-component-loading-error />
    <fb-component-loading-error size="\${ComponentSizeTypes.SMALL}" />
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
        <fb-component-loading-error size="\${ComponentSizeTypes.LARGE}" />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading-error />
    </div>
    <div style="margin-top: 20px;">
        <fb-component-loading-error size="\${ComponentSizeTypes.SMALL}" />
    </div>
</div>\`
  })
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const L=["Component","Sizes"];export{o as Component,n as Sizes,L as __namedExportsOrder,g as default};
