import{a5 as a}from"./web-ui-components.es-nLJZCm2K.js";import{t as e,n}from"./web-ui-constants.es-Bfh99ZXh.js";const f={component:a,title:"Components/Feedback/Spinner",argTypes:{size:{type:{name:"string",required:!1},control:{type:"select"},options:[e.LARGE,e.DEFAULT,e.SMALL],description:"spinner size",table:{type:{summary:"string"},defaultValue:{summary:e.DEFAULT}}},variant:{type:{name:"string",required:!1},control:{type:"select"},options:[n.DEFAULT,n.PRIMARY,n.INFO,n.SUCCESS,n.WARNING,n.DANGER],description:"spinner variant",table:{type:{summary:"string"},defaultValue:{summary:n.DEFAULT}}},bg:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"determine whether the spinner background color is always on",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{size:e.DEFAULT,variant:n.DEFAULT,bg:!0},excludeStories:/.*Data$/},s={tags:["hideInSidebar"]},r={parameters:{docs:{source:{code:`
<template>
    <fb-spinner size="${e.LARGE}" />
    <fb-spinner />
    <fb-spinner size="${e.SMALL}" />
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSpinner:a},template:`
<div class="fb-spinner-story-block">
    <div class="fb-spinner-story-block__item">
        <fb-spinner size="${e.LARGE}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner size="${e.SMALL}" />
    </div>
</div>`})},i={parameters:{docs:{source:{code:`
<template>
    <fb-spinner variant="${n.PRIMARY}" />
    <fb-spinner variant="${n.DEFAULT}" />
    <fb-spinner variant="${n.INFO}" />
    <fb-spinner variant="${n.SUCCESS}" />
    <fb-spinner variant="${n.WARNING}" />
    <fb-spinner variant="${n.DANGER}" />
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSpinner:a},template:`
<div class="fb-spinner-story-block">
    <div class="fb-spinner-story-block__item">
        <fb-spinner variant="${n.PRIMARY}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner variant="${n.DEFAULT}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner variant="${n.INFO}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner variant="${n.SUCCESS}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner variant="${n.WARNING}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner variant="${n.DANGER}" />
    </div>
</div>`})};var t,o,p;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  tags: ["hideInSidebar"]
}`,...(p=(o=s.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var b,c,d;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-spinner size="\${ComponentSizeTypes.LARGE}" />
    <fb-spinner />
    <fb-spinner size="\${ComponentSizeTypes.SMALL}" />
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
        <fb-spinner size="\${ComponentSizeTypes.LARGE}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner size="\${ComponentSizeTypes.SMALL}" />
    </div>
</div>\`
  })
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,v;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-spinner variant="\${VariantTypes.PRIMARY}" />
    <fb-spinner variant="\${VariantTypes.DEFAULT}" />
    <fb-spinner variant="\${VariantTypes.INFO}" />
    <fb-spinner variant="\${VariantTypes.SUCCESS}" />
    <fb-spinner variant="\${VariantTypes.WARNING}" />
    <fb-spinner variant="\${VariantTypes.DANGER}" />
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
        <fb-spinner variant="\${VariantTypes.PRIMARY}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner variant="\${VariantTypes.DEFAULT}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner variant="\${VariantTypes.INFO}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner variant="\${VariantTypes.SUCCESS}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner variant="\${VariantTypes.WARNING}" />
    </div>
    <div class="fb-spinner-story-block__item">
        <fb-spinner variant="\${VariantTypes.DANGER}" />
    </div>
</div>\`
  })
}`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const y=["Component","Sizes","Variants"],u=Object.freeze(Object.defineProperty({__proto__:null,Component:s,Sizes:r,Variants:i,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{s as C,u as S,i as V,r as a};
