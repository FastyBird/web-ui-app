import{W as r}from"./web-ui-components.es-CHpbMkEl.js";const m={component:r,title:"Components/Feedback/Spinner",argTypes:{size:{type:{name:"string",required:!1},control:{type:"select"},options:["large","default","small"],description:"spinner size",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},type:{type:{name:"string",required:!1},control:{type:"select"},options:["default","primary","info","success","warning","danger"],description:"spinner type",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},bg:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"determine whether the spinner background color is always on",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{size:"default",type:"default",bg:!0},excludeStories:/.*Data$/},e={tags:["hideInSidebar"]},n={parameters:{docs:{source:{code:`
<template>
    <fb-spinner size="large" />
    <fb-spinner />
    <fb-spinner size="small" />
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSpinner:r},template:`
<div class="fb-spinner-story-block">
    <div class="fb-spinner-story-block__item">
        <fb-spinner size="large" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner size="small" />
    </div>
</div>`})},s={parameters:{docs:{source:{code:`
<template>
    <fb-spinner type="primary" />
    <fb-spinner type="default" />
    <fb-spinner type="info" />
    <fb-spinner type="success" />
    <fb-spinner type="warning" />
    <fb-spinner type="danger" />
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSpinner:r},template:`
<div class="fb-spinner-story-block">
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="primary" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="default" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="info" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="success" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="warning" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="danger" />
    </div>
</div>`})};var i,t,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ["hideInSidebar"]
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var p,o,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-spinner size="large" />
    <fb-spinner />
    <fb-spinner size="small" />
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSpinner
    },
    template: \`
<div class="fb-spinner-story-block">
    <div class="fb-spinner-story-block__item">
        <fb-spinner size="large" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner size="small" />
    </div>
</div>\`
  })
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,c,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-spinner type="primary" />
    <fb-spinner type="default" />
    <fb-spinner type="info" />
    <fb-spinner type="success" />
    <fb-spinner type="warning" />
    <fb-spinner type="danger" />
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSpinner
    },
    template: \`
<div class="fb-spinner-story-block">
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="primary" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="default" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="info" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="success" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="warning" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner type="danger" />
    </div>
</div>\`
  })
}`,...(b=(c=s.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const f=["Component","Sizes","Variants"],u=Object.freeze(Object.defineProperty({__proto__:null,Component:e,Sizes:n,Variants:s,__namedExportsOrder:f,default:m},Symbol.toStringTag,{value:"Module"}));export{e as C,u as S,s as V,n as a};
