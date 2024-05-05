import{a as w}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{b as F}from"./index-Dg9quNvz.js";import{a as s,v as r}from"./web-ui-components.es-nLJZCm2K.js";import{n as e}from"./web-ui-constants.es-Bfh99ZXh.js";const x={component:s,title:"Components/Data/Badge",argTypes:{default:{type:{name:"string",required:!1},control:{type:"text"},description:"customize default content",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},value:{type:{name:"string",required:!1},control:{type:"text"},description:"display value",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},max:{type:{name:"number",required:!1},control:{type:"text"},description:"maximum value, shows `{max}+` when exceeded. Only works if value is a number",table:{type:{summary:"number"},defaultValue:{summary:"99"}}},isDot:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether a little dot is displayed",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},hidden:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether a badge is hidden",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},variant:{type:{name:"string",required:!1},control:{type:"select"},options:[e.DEFAULT,e.PRIMARY,e.INFO,e.SUCCESS,e.WARNING,e.DANGER],description:"badge variant",table:{type:{summary:"string"},defaultValue:{summary:e.DANGER}}},showZero:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether to show badge when value is zero",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{value:"15",max:99,isDot:!1,hidden:!1,variant:e.DANGER,showZero:!0,default:"Here is some badge"},excludeStories:/.*Data$/},B={onClose:w("close")},a={tags:["hideInSidebar"]},t={parameters:{docs:{source:{code:`
<template>
    <fb-badge :value="12">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="3">
        <fb-button>replies</fb-button>
    </fb-badge>
    <fb-badge :value="1" warning="primary">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="2" warning="warning">
        <fb-button>replies</fb-button>
    </fb-badge>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbBadge:s,FbButton:r},template:`
<div class="fb-badge-story-block">
    <fb-badge :value="12" class="fb-badge-story-block__item">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="3" class="fb-badge-story-block__item">
        <fb-button>replies</fb-button>
    </fb-badge>
    <fb-badge :value="1" warning="primary" class="fb-badge-story-block__item">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="2" warning="warning" class="fb-badge-story-block__item">
        <fb-button>replies</fb-button>
    </fb-badge>
</div>`})},b={parameters:{docs:{source:{code:`
<template>
    <fb-badge :value="200" :max="99">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="100" :max="10">
        <fb-button>replies</fb-button>
    </fb-badge>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbBadge:s,FbButton:r},template:`
<div class="fb-badge-story-block">
    <fb-badge :value="200" :max="99" class="fb-badge-story-block__item">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="100" :max="10" class="fb-badge-story-block__item">
        <fb-button>replies</fb-button>
    </fb-badge>
</div>`})},n={parameters:{docs:{source:{code:`
<template>
    <fb-badge value="new">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge value="hot" variant="${e.SUCCESS}">
        <fb-button>replies</fb-button>
    </fb-badge>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbBadge:s,FbButton:r},template:`
<div class="fb-badge-story-block">
    <fb-badge value="new" class="fb-badge-story-block__item">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge value="hot" class="fb-badge-story-block__item" variant="${e.SUCCESS}">
        <fb-button>replies</fb-button>
    </fb-badge>
</div>`})},o={parameters:{docs:{source:{code:`
<template>
    <fb-badge is-dot>query</fb-badge>
    <fb-badge is-dot>
        <fb-button :icon="FasShare" variant="${e.PRIMARY}" />
    </fb-badge>
</template>

<script lang="ts" setup>
import { FasShare } from '@fastybird/web-ui-icons';
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbBadge:s,FbButton:r},setup(){return{FasShare:F}},template:`
<div class="fb-badge-story-block">
    <fb-badge is-dot class="fb-badge-story-block__item">query</fb-badge>
    <fb-badge is-dot class="fb-badge-story-block__item">
        <fb-button :icon="FasShare" variant="${e.PRIMARY}" />
    </fb-badge>
</div>`})};var d,l,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ["hideInSidebar"]
}`,...(f=(l=a.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var u,i,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-badge :value="12">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="3">
        <fb-button>replies</fb-button>
    </fb-badge>
    <fb-badge :value="1" warning="primary">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="2" warning="warning">
        <fb-button>replies</fb-button>
    </fb-badge>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbBadge,
      FbButton
    },
    template: \`
<div class="fb-badge-story-block">
    <fb-badge :value="12" class="fb-badge-story-block__item">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="3" class="fb-badge-story-block__item">
        <fb-button>replies</fb-button>
    </fb-badge>
    <fb-badge :value="1" warning="primary" class="fb-badge-story-block__item">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="2" warning="warning" class="fb-badge-story-block__item">
        <fb-button>replies</fb-button>
    </fb-badge>
</div>\`
  })
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,g,p;b.parameters={...b.parameters,docs:{...(c=b.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-badge :value="200" :max="99">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="100" :max="10">
        <fb-button>replies</fb-button>
    </fb-badge>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbBadge,
      FbButton
    },
    template: \`
<div class="fb-badge-story-block">
    <fb-badge :value="200" :max="99" class="fb-badge-story-block__item">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge :value="100" :max="10" class="fb-badge-story-block__item">
        <fb-button>replies</fb-button>
    </fb-badge>
</div>\`
  })
}`,...(p=(g=b.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var y,v,_;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-badge value="new">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge value="hot" variant="\${VariantTypes.SUCCESS}">
        <fb-button>replies</fb-button>
    </fb-badge>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbBadge,
      FbButton
    },
    template: \`
<div class="fb-badge-story-block">
    <fb-badge value="new" class="fb-badge-story-block__item">
        <fb-button>comments</fb-button>
    </fb-badge>
    <fb-badge value="hot" class="fb-badge-story-block__item" variant="\${VariantTypes.SUCCESS}">
        <fb-button>replies</fb-button>
    </fb-badge>
</div>\`
  })
}`,...(_=(v=n.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var S,h,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-badge is-dot>query</fb-badge>
    <fb-badge is-dot>
        <fb-button :icon="FasShare" variant="\${VariantTypes.PRIMARY}" />
    </fb-badge>
</template>

<script lang="ts" setup>
import { FasShare } from '@fastybird/web-ui-icons';
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbBadge,
      FbButton
    },
    setup() {
      return {
        FasShare
      };
    },
    template: \`
<div class="fb-badge-story-block">
    <fb-badge is-dot class="fb-badge-story-block__item">query</fb-badge>
    <fb-badge is-dot class="fb-badge-story-block__item">
        <fb-button :icon="FasShare" variant="\${VariantTypes.PRIMARY}" />
    </fb-badge>
</div>\`
  })
}`,...(k=(h=o.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const C=["actionsData","Component","BasicUsage","MaxValue","Customizations","RedDot"],q=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,Component:a,Customizations:n,MaxValue:b,RedDot:o,__namedExportsOrder:C,actionsData:B,default:x},Symbol.toStringTag,{value:"Module"}));export{q as B,a as C,b as M,o as R,t as a,n as b};
