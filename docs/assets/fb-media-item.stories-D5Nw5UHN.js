import{a as f}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{t as a}from"./index-Dg9quNvz.js";import{y as i,v as c,C as p}from"./web-ui-components.es-nLJZCm2K.js";const u={component:i,title:"Components/Data/Media item",argTypes:{left:{type:{name:"string",required:!1},control:{type:"text"},description:"Item left box content slot",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},right:{type:{name:"string",required:!1},control:{type:"text"},description:"Item right box content slot",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},heading:{type:{name:"string",required:!1},control:{type:"text"},description:"Item heading slot",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},description:{type:{name:"string",required:!1},control:{type:"text"},description:"Item description slot",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},action:{type:{name:"string",required:!1},control:{type:"text"},description:"Item action slot",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},args:{},excludeStories:/.*Data$/},t={tags:["hideInSidebar"],render:e=>({components:{FbMediaItem:i,FbButton:c,FbIcon:p,FasWandMagicSparkles:a},template:`
<fb-media-item>
    ${e.left!==null&&typeof e.left<"u"?`<template #left>${e.left}</template>`:""}
    ${e.right!==null&&typeof e.right<"u"?`<template #right>${e.right}</template>`:""}
    ${e.heading!==null&&typeof e.heading<"u"?`<template #heading>${e.heading}</template>`:""}
    ${e.description!==null&&typeof e.description<"u"?`<template #description>${e.description}</template>`:""}
    ${e.action!==null&&typeof e.action<"u"?`<template #action>${e.action}</template>`:""}
</fb-media-item>`}),args:{left:'<fb-icon size="35"><fas-wand-magic-sparkles /></fb-icon>',heading:"All created items",description:"Here could find all created items stored in database",action:"<fb-button>Reload</fb-button>"}},n={parameters:{docs:{source:{code:`
<template>
    <fb-media-item>
        <template #left>
            <fb-icon size="35">
                <fas-wand-magic-sparkles />
            </fb-icon>
        </template>
        <template #heading>
            All created items
        </template>
        <template #description>
            Here could find all created items stored in database
        </template>
        <template #action>
            <fb-button @click.prevent="handleClick">Reload</fb-button>
        </template>
    </fb-media-item>
</template>

<script lang="ts" setup>
const handleClick = (): void => {
    console.log('Button clicked');
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbMediaItem:i,FbButton:c,FbIcon:p,FasWandMagicSparkles:a},setup:()=>({onClick:f("button-clicked"),FasWandMagicSparkles:a}),template:`
<fb-media-item>
    <template #left>
        <fb-icon size="35">
            <fas-wand-magic-sparkles />
        </fb-icon>
    </template>
    <template #heading>
        All created items
    </template>
    <template #description>
        Here could find all created items stored in database
    </template>
    <template #action>
        <fb-button @click.prevent="onClick">Reload</fb-button>
    </template>
</fb-media-item>`})};var l,o,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ["hideInSidebar"],
  render: args => ({
    components: {
      FbMediaItem,
      FbButton,
      FbIcon,
      FasWandMagicSparkles
    },
    template: \`
<fb-media-item>
    \${args.left !== null && typeof args.left !== "undefined" ? \`<template #left>\${args.left}</template>\` : ""}
    \${args.right !== null && typeof args.right !== "undefined" ? \`<template #right>\${args.right}</template>\` : ""}
    \${args.heading !== null && typeof args.heading !== "undefined" ? \`<template #heading>\${args.heading}</template>\` : ""}
    \${args.description !== null && typeof args.description !== "undefined" ? \`<template #description>\${args.description}</template>\` : ""}
    \${args.action !== null && typeof args.action !== "undefined" ? \`<template #action>\${args.action}</template>\` : ""}
</fb-media-item>\`
  }),
  args: {
    left: '<fb-icon size="35"><fas-wand-magic-sparkles /></fb-icon>',
    heading: "All created items",
    description: "Here could find all created items stored in database",
    action: "<fb-button>Reload</fb-button>"
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var r,d,m;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-media-item>
        <template #left>
            <fb-icon size="35">
                <fas-wand-magic-sparkles />
            </fb-icon>
        </template>
        <template #heading>
            All created items
        </template>
        <template #description>
            Here could find all created items stored in database
        </template>
        <template #action>
            <fb-button @click.prevent="handleClick">Reload</fb-button>
        </template>
    </fb-media-item>
</template>

<script lang="ts" setup>
const handleClick = (): void => {
    console.log('Button clicked');
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbMediaItem,
      FbButton,
      FbIcon,
      FasWandMagicSparkles
    },
    setup: () => {
      const onClick = action("button-clicked");
      return {
        onClick,
        FasWandMagicSparkles
      };
    },
    template: \`
<fb-media-item>
    <template #left>
        <fb-icon size="35">
            <fas-wand-magic-sparkles />
        </fb-icon>
    </template>
    <template #heading>
        All created items
    </template>
    <template #description>
        Here could find all created items stored in database
    </template>
    <template #action>
        <fb-button @click.prevent="onClick">Reload</fb-button>
    </template>
</fb-media-item>\`
  })
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const b=["Component","BasicUsage"],k=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:n,Component:t,__namedExportsOrder:b,default:u},Symbol.toStringTag,{value:"Module"}));export{n as B,t as C,k as M};
