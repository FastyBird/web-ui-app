import{c as m}from"./index-Dg9quNvz.js";import{K as b,Y as d}from"./web-ui-components.es-nLJZCm2K.js";const s={component:b,title:"Components/Navigation/Breadcrumb",excludeStories:/.*Data$/},e={parameters:{docs:{source:{code:`
<template>
    <fb-breadcrumb separator="/">
        <fb-breadcrumb-item :to="{ path: '/' }">homepage</fb-breadcrumb-item>
        <fb-breadcrumb-item>
            <a href="/">promotion management</a>
        </fb-breadcrumb-item>
        <fb-breadcrumb-item>promotion list</fb-breadcrumb-item>
        <fb-breadcrumb-item>promotion detail</fb-breadcrumb-item>
    </fb-breadcrumb>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbBreadcrumb:b,FbBreadcrumbItem:d},template:`
<div class="fb-breadcrumb-story-block">
    <div class="fb-breadcrumb-story-block__item">
        <fb-breadcrumb separator="/">
            <fb-breadcrumb-item :to="{ path: '/' }">homepage</fb-breadcrumb-item>
            <fb-breadcrumb-item>
                <a href="/">promotion management</a>
            </fb-breadcrumb-item>
            <fb-breadcrumb-item>promotion list</fb-breadcrumb-item>
            <fb-breadcrumb-item>promotion detail</fb-breadcrumb-item>
        </fb-breadcrumb>
    </div>
</div>`})},r={parameters:{docs:{source:{code:`
<template>
    <fb-breadcrumb :separator-icon="FasChevronRight">
        <fb-breadcrumb-item :to="{ path: '/' }">homepage</fb-breadcrumb-item>
        <fb-breadcrumb-item>promotion management</fb-breadcrumb-item>
        <fb-breadcrumb-item>promotion list</fb-breadcrumb-item>
        <fb-breadcrumb-item>promotion detail</fb-breadcrumb-item>
    </fb-breadcrumb>
</template>

<script lang="ts" setup>
import { FasChevronRight } from '@fastybird/web-ui-icons';
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbBreadcrumb:b,FbBreadcrumbItem:d,FasChevronRight:m},setup:()=>({FasChevronRight:m}),template:`
<div class="fb-breadcrumb-story-block">
    <div class="fb-breadcrumb-story-block__item">
        <fb-breadcrumb :separator-icon="FasChevronRight">
            <fb-breadcrumb-item :to="{ path: '/' }">homepage</fb-breadcrumb-item>
            <fb-breadcrumb-item>promotion management</fb-breadcrumb-item>
            <fb-breadcrumb-item>promotion list</fb-breadcrumb-item>
            <fb-breadcrumb-item>promotion detail</fb-breadcrumb-item>
        </fb-breadcrumb>
    </div>
</div>`})};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-breadcrumb separator="/">
        <fb-breadcrumb-item :to="{ path: '/' }">homepage</fb-breadcrumb-item>
        <fb-breadcrumb-item>
            <a href="/">promotion management</a>
        </fb-breadcrumb-item>
        <fb-breadcrumb-item>promotion list</fb-breadcrumb-item>
        <fb-breadcrumb-item>promotion detail</fb-breadcrumb-item>
    </fb-breadcrumb>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbBreadcrumb,
      FbBreadcrumbItem
    },
    template: \`
<div class="fb-breadcrumb-story-block">
    <div class="fb-breadcrumb-story-block__item">
        <fb-breadcrumb separator="/">
            <fb-breadcrumb-item :to="{ path: '/' }">homepage</fb-breadcrumb-item>
            <fb-breadcrumb-item>
                <a href="/">promotion management</a>
            </fb-breadcrumb-item>
            <fb-breadcrumb-item>promotion list</fb-breadcrumb-item>
            <fb-breadcrumb-item>promotion detail</fb-breadcrumb-item>
        </fb-breadcrumb>
    </div>
</div>\`
  })
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var n,i,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-breadcrumb :separator-icon="FasChevronRight">
        <fb-breadcrumb-item :to="{ path: '/' }">homepage</fb-breadcrumb-item>
        <fb-breadcrumb-item>promotion management</fb-breadcrumb-item>
        <fb-breadcrumb-item>promotion list</fb-breadcrumb-item>
        <fb-breadcrumb-item>promotion detail</fb-breadcrumb-item>
    </fb-breadcrumb>
</template>

<script lang="ts" setup>
import { FasChevronRight } from '@fastybird/web-ui-icons';
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbBreadcrumb,
      FbBreadcrumbItem,
      FasChevronRight
    },
    setup: () => {
      return {
        FasChevronRight
      };
    },
    template: \`
<div class="fb-breadcrumb-story-block">
    <div class="fb-breadcrumb-story-block__item">
        <fb-breadcrumb :separator-icon="FasChevronRight">
            <fb-breadcrumb-item :to="{ path: '/' }">homepage</fb-breadcrumb-item>
            <fb-breadcrumb-item>promotion management</fb-breadcrumb-item>
            <fb-breadcrumb-item>promotion list</fb-breadcrumb-item>
            <fb-breadcrumb-item>promotion detail</fb-breadcrumb-item>
        </fb-breadcrumb>
    </div>
</div>\`
  })
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const u=["BasicUsage","IconSeparator"],l=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,IconSeparator:r,__namedExportsOrder:u,default:s},Symbol.toStringTag,{value:"Module"}));export{l as B,r as I,e as a};
