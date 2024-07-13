import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import{d as a}from"./index-lrOdeWXn.js";import{w as l,b as c,E as p}from"./web-ui-components.es-BzAzVG0z.js";const f={component:l,title:"Components/Data/Media item",argTypes:{left:{type:{name:"string",required:!1},control:{type:"text"},description:"Item left box content slot",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},right:{type:{name:"string",required:!1},control:{type:"text"},description:"Item right box content slot",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},heading:{type:{name:"string",required:!1},control:{type:"text"},description:"Item heading slot",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},description:{type:{name:"string",required:!1},control:{type:"text"},description:"Item description slot",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},action:{type:{name:"string",required:!1},control:{type:"text"},description:"Item action slot",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},args:{},excludeStories:/.*Data$/},t={tags:["hideInSidebar"],render:e=>({components:{ElButton:c,ElIcon:p,FbMediaItem:l,FasWandMagicSparkles:a},template:`
<fb-media-item>
    ${e.left!==null&&typeof e.left<"u"?`<template #left>${e.left}</template>`:""}
    ${e.right!==null&&typeof e.right<"u"?`<template #right>${e.right}</template>`:""}
    ${e.heading!==null&&typeof e.heading<"u"?`<template #heading>${e.heading}</template>`:""}
    ${e.description!==null&&typeof e.description<"u"?`<template #description>${e.description}</template>`:""}
    ${e.action!==null&&typeof e.action<"u"?`<template #action>${e.action}</template>`:""}
</fb-media-item>`}),args:{left:'<el-icon size="35"><fas-wand-magic-sparkles /></el-icon>',heading:"All created items",description:"Here could find all created items stored in database",action:"<el-button>Reload</el-button>"}},n={parameters:{docs:{source:{code:`
<template>
    <fb-media-item>
        <template #left>
            <el-icon size="35">
                <fas-wand-magic-sparkles />
            </el-icon>
        </template>
        <template #heading>
            All created items
        </template>
        <template #description>
            Here could find all created items stored in database
        </template>
        <template #action>
            <el-button @click.prevent="handleClick">Reload</el-button>
        </template>
    </fb-media-item>
</template>

<script setup lang="ts">
const handleClick = (): void => {
    console.log('Button clicked');
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{ElButton:c,ElIcon:p,FbMediaItem:l,FasWandMagicSparkles:a},setup:()=>({onClick:u("button-clicked"),FasWandMagicSparkles:a}),template:`
<fb-media-item>
    <template #left>
        <el-icon size="35">
            <fas-wand-magic-sparkles />
        </el-icon>
    </template>
    <template #heading>
        All created items
    </template>
    <template #description>
        Here could find all created items stored in database
    </template>
    <template #action>
        <el-button @click.prevent="onClick">Reload</el-button>
    </template>
</fb-media-item>`})};var i,o,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ["hideInSidebar"],
  render: args => ({
    components: {
      ElButton,
      ElIcon,
      FbMediaItem,
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
    left: '<el-icon size="35"><fas-wand-magic-sparkles /></el-icon>',
    heading: "All created items",
    description: "Here could find all created items stored in database",
    action: "<el-button>Reload</el-button>"
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var d,r,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-media-item>
        <template #left>
            <el-icon size="35">
                <fas-wand-magic-sparkles />
            </el-icon>
        </template>
        <template #heading>
            All created items
        </template>
        <template #description>
            Here could find all created items stored in database
        </template>
        <template #action>
            <el-button @click.prevent="handleClick">Reload</el-button>
        </template>
    </fb-media-item>
</template>

<script setup lang="ts">
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
      ElButton,
      ElIcon,
      FbMediaItem,
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
        <el-icon size="35">
            <fas-wand-magic-sparkles />
        </el-icon>
    </template>
    <template #heading>
        All created items
    </template>
    <template #description>
        Here could find all created items stored in database
    </template>
    <template #action>
        <el-button @click.prevent="onClick">Reload</el-button>
    </template>
</fb-media-item>\`
  })
}`,...(m=(r=n.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const g=["Component","BasicUsage"],k=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:n,Component:t,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{n as B,t as C,k as M};
