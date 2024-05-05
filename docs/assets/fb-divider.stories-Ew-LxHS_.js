import{g}from"./index-Dg9quNvz.js";import{c as r,M as T,$ as e,L as w,T as n,C as I}from"./web-ui-components.es-nLJZCm2K.js";const R={component:r,title:"Components/Layout/Divider",argTypes:{direction:{type:{name:"string",required:!1},control:{type:"select"},options:T,description:"set divider's direction",table:{type:{summary:"string"},defaultValue:{summary:e.HORIZONTAL}}},borderStyle:{type:{name:"string",required:!1},control:{type:"text"},description:"set the style of divider",table:{type:{summary:"string"},defaultValue:{summary:"solid"}}},contentPosition:{type:{name:"string",required:!1},control:{type:"select"},options:w,description:"the position of the customized content on the divider line",table:{type:{summary:"string"},defaultValue:{summary:n.CENTER}}},gradient:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"determine whether show divider with gradient effect",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{direction:e.HORIZONTAL,borderStyle:"solid",contentPosition:n.CENTER,gradient:!1},excludeStories:/.*Data$/},s={parameters:{docs:{source:{code:`
<template>
    <span>
        I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.
    </span>
    <fb-divider />
    <span>
        There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.
    </span>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbDivider:r},template:`
<span>
    I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.
</span>
<fb-divider />
<span>
    There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.
</span>`})},a={parameters:{docs:{source:{code:`
<template>
    <span>What you are you do not see, what you see is your shadow. </span>
    <fb-divider content-position="${n.LEFT}">Rabindranath Tagore</fb-divider>
    <span>
        My wishes are fools, they shout across thy song, my Master. Let me but listen.
    </span>
    <fb-divider>
        <fb-icon><fas-star /></fb-icon>
    </fb-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <fb-divider content-position="${n.RIGHT}">Rabindranath Tagore</fb-divider>
</template>

<script lang="ts" setup>
import { FasStar } from '@fastybird/web-ui-icons';
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbDivider:r,FbIcon:I,FasStar:g},template:`
<span>What you are you do not see, what you see is your shadow. </span>
<fb-divider content-position="${n.LEFT}">Rabindranath Tagore</fb-divider>
<span>
    My wishes are fools, they shout across thy song, my Master. Let me but listen.
</span>
<fb-divider>
    <fb-icon><fas-star /></fb-icon>
</fb-divider>
<span>I cannot choose the best. The best chooses me.</span>
<fb-divider content-position="${n.RIGHT}">Rabindranath Tagore</fb-divider>`})},t={parameters:{docs:{source:{code:`
<template>
    <div>
        <span>What language is thine, O sea?</span>
        <fb-divider border-style="dashed" />
        <span>The language of eternal question.</span>
    </div>
    <fb-divider border-style="dotted" />
    <span>What language is thy answer, O sky?</span>
    <fb-divider border-style="double" />
    <span>The language of eternal silence.</span>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbDivider:r},template:`
<div>
    <span>What language is thine, O sea?</span>
    <fb-divider border-style="dashed" />
    <span>The language of eternal question.</span>
</div>
<fb-divider border-style="dotted" />
<span>What language is thy answer, O sky?</span>
<fb-divider border-style="double" />
<span>The language of eternal silence.</span>`})},i={parameters:{docs:{source:{code:`
<template>
    <div class="row">
        <span>Rain</span>
        <fb-divider direction="${e.VERTICAL}" />
        <span>Home</span>
        <fb-divider direction="${e.VERTICAL}" border-style="dashed" />
        <span>Grass</span>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbDivider:r},template:`
<div class="fb-divider-story-block--vertical">
    <span>Rain</span>
    <fb-divider direction="${e.VERTICAL}" />
    <span>Home</span>
    <fb-divider direction="${e.VERTICAL}" border-style="dashed" />
    <span>Grass</span>
</div>`})};var o,d,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <span>
        I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.
    </span>
    <fb-divider />
    <span>
        There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.
    </span>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbDivider
    },
    template: \`
<span>
    I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.
</span>
<fb-divider />
<span>
    There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.
</span>\`
  })
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,c,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <span>What you are you do not see, what you see is your shadow. </span>
    <fb-divider content-position="\${DividerContentPositionTypes.LEFT}">Rabindranath Tagore</fb-divider>
    <span>
        My wishes are fools, they shout across thy song, my Master. Let me but listen.
    </span>
    <fb-divider>
        <fb-icon><fas-star /></fb-icon>
    </fb-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <fb-divider content-position="\${DividerContentPositionTypes.RIGHT}">Rabindranath Tagore</fb-divider>
</template>

<script lang="ts" setup>
import { FasStar } from '@fastybird/web-ui-icons';
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbDivider,
      FbIcon,
      FasStar
    },
    template: \`
<span>What you are you do not see, what you see is your shadow. </span>
<fb-divider content-position="\${DividerContentPositionTypes.LEFT}">Rabindranath Tagore</fb-divider>
<span>
    My wishes are fools, they shout across thy song, my Master. Let me but listen.
</span>
<fb-divider>
    <fb-icon><fas-star /></fb-icon>
</fb-divider>
<span>I cannot choose the best. The best chooses me.</span>
<fb-divider content-position="\${DividerContentPositionTypes.RIGHT}">Rabindranath Tagore</fb-divider>\`
  })
}`,...(h=(c=a.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var b,m,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <span>What language is thine, O sea?</span>
        <fb-divider border-style="dashed" />
        <span>The language of eternal question.</span>
    </div>
    <fb-divider border-style="dotted" />
    <span>What language is thy answer, O sky?</span>
    <fb-divider border-style="double" />
    <span>The language of eternal silence.</span>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbDivider
    },
    template: \`
<div>
    <span>What language is thine, O sea?</span>
    <fb-divider border-style="dashed" />
    <span>The language of eternal question.</span>
</div>
<fb-divider border-style="dotted" />
<span>What language is thy answer, O sky?</span>
<fb-divider border-style="double" />
<span>The language of eternal silence.</span>\`
  })
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var f,u,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div class="row">
        <span>Rain</span>
        <fb-divider direction="\${DividerDirectionTypes.VERTICAL}" />
        <span>Home</span>
        <fb-divider direction="\${DividerDirectionTypes.VERTICAL}" border-style="dashed" />
        <span>Grass</span>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbDivider
    },
    template: \`
<div class="fb-divider-story-block--vertical">
    <span>Rain</span>
    <fb-divider direction="\${DividerDirectionTypes.VERTICAL}" />
    <span>Home</span>
    <fb-divider direction="\${DividerDirectionTypes.VERTICAL}" border-style="dashed" />
    <span>Grass</span>
</div>\`
  })
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const D=["BasicUsage","CustomContent","DashedLine","VerticalDivider"],S=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:s,CustomContent:a,DashedLine:t,VerticalDivider:i,__namedExportsOrder:D,default:R},Symbol.toStringTag,{value:"Module"}));export{s as B,a as C,S as D,i as V,t as a};
