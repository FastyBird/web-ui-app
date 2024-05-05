import{a as U}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{f as W}from"./index-B-T0PRdw.js";import{N as a}from"./web-ui-components.es-nLJZCm2K.js";import{n as e,a as t}from"./web-ui-constants.es-Bfh99ZXh.js";const G={component:a,title:"Components/Feedback/Alert",argTypes:{title:{type:{name:"string",required:!1},control:{type:"text"},description:"content of the alert title",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},description:{type:{name:"string",required:!1},control:{type:"text"},description:"content of the alert description",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},icon:{type:{name:"string",required:!1},control:{type:"text"},description:"slot for inserting custom icon. this slot will override default component icon",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},default:{type:{name:"string",required:!1},control:{type:"text"},description:"slot for inserting custom content. This slot will override `title` and `description` slots",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},variant:{type:{name:"string",required:!1},control:{type:"select"},options:[e.DEFAULT,e.PRIMARY,e.INFO,e.SUCCESS,e.WARNING,e.ERROR],description:"alert variant",table:{type:{summary:"string"},defaultValue:{summary:e.DEFAULT}}},effect:{type:{name:"string",required:!1},control:{type:"select"},options:[t.LIGHT,t.DARK],description:"alert theme style",table:{type:{summary:"string"},defaultValue:{summary:t.LIGHT}}},center:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether content is placed in the center",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},closable:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether alert can be dismissed",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},closeText:{type:{name:"string",required:!1},control:{type:"text"},description:"customized close button text",table:{type:{summary:"string"},defaultValue:{summary:void 0}}},onClose:{table:{disable:!0}}},args:{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc massa, sollicitudin eget ex eget, pellentesque ultrices felis.",variant:e.DEFAULT,effect:t.LIGHT,center:!1,closable:!1,onClose:W()},excludeStories:/.*Data$/},D={onClose:U("close")},r={tags:["hideInSidebar"],args:{description:"A simple default alert — check it out!"}},l={parameters:{docs:{source:{code:`
<template>
    <fb-alert>
        <template #description>A simple default alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.INFO}">
        <template #description>A simple info alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.SUCCESS}">
        <template #description>A simple success alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.WARNING}">
        <template #description>A simple warning alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.ERROR}">
        <template #description>A simple error alert — check it out!</template>
    </fb-alert>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbAlert:a},template:`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert>
            <template #description>A simple default alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.INFO}">
            <template #description>A simple info alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.SUCCESS}">
            <template #description>A simple success alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.WARNING}">
            <template #description>A simple warning alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.ERROR}">
            <template #description>A simple error alert — check it out!</template>
        </fb-alert>
    </div>
</div>`})},i={parameters:{docs:{source:{code:`
<template>
    <fb-alert effect="${t.DARK}">
        <template #description>A simple default alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.INFO}" effect="${t.DARK}">
        <template #description>A simple info alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.SUCCESS}" effect="${t.DARK}">
        <template #description>A simple success alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.WARNING}" effect="${t.DARK}">
        <template #description>A simple warning alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.ERROR}" effect="${t.DARK}">
        <template #description>A simple error alert — check it out!</template>
    </fb-alert>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbAlert:a},template:`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert effect="${t.DARK}">
            <template #description>A simple default alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.INFO}" effect="${t.DARK}">
            <template #description>A simple info alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.SUCCESS}" effect="${t.DARK}">
            <template #description>A simple success alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.WARNING}" effect="${t.DARK}">
            <template #description>A simple warning alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.ERROR}" effect="${t.DARK}">
            <template #description>A simple error alert — check it out!</template>
        </fb-alert>
    </div>
</div>`})},n={parameters:{docs:{source:{code:`
<template>
    <fb-alert :closable="false">
        <template #description>Unclosable alert</template>
    </fb-alert>
    <fb-alert variant="${e.SUCCESS}" close-text="Gotcha">
        <template #description>Customized close text</template>
    </fb-alert>
    <fb-alert variant="${e.WARNING}" @close="hello">
        <template #description>Alert with callback</template>
    </fb-alert>
</template>

<script lang="ts" setup>
const hello = (): void => {
    alert("Hi! I'm on close callback");
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbAlert:a},methods:{hello:()=>{alert("Hi! I'm on close callback")}},template:`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert :closable="false">
            <template #description>Unclosable alert</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.SUCCESS}" close-text="Gotcha">
            <template #description>Customized close text</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.WARNING}" @close="hello">
            <template #description>Alert with callback</template>
        </fb-alert>
    </div>
</div>`})},s={parameters:{docs:{source:{code:`
<template>
    <fb-alert variant="${e.INFO}" icon>
        <template #description>A simple info alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.SUCCESS}" icon>
        <template #description>A simple success alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.WARNING}" icon>
        <template #description>A simple warning alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.ERROR}" icon>
        <template #description>A simple error alert — check it out!</template>
    </fb-alert>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbAlert:a},template:`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.INFO}">
            <template #description>A simple info alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.SUCCESS}" icon>
            <template #description>A simple success alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.WARNING}" icon>
            <template #description>A simple warning alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.ERROR}" icon>
            <template #description>A simple error alert — check it out!</template>
        </fb-alert>
    </div>
</div>`})},c={parameters:{docs:{source:{code:`
<template>
    <fb-alert center>
        <template #description>A simple default alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.INFO}" center icon>
        <template #description>A simple info alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.SUCCESS}" center icon>
        <template #description>A simple success alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.WARNING}" center icon>
        <template #description>A simple warning alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="${e.ERROR}" center icon>
        <template #description>A simple error alert — check it out!</template>
    </fb-alert>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbAlert:a},template:`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert center icon>
            <template #description>A simple default alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.INFO}" center icon>
            <template #description>A simple info alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.SUCCESS}" center icon>
            <template #description>A simple success alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.WARNING}" center icon>
            <template #description>A simple warning alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.ERROR}" center icon>
            <template #description>A simple error alert — check it out!</template>
        </fb-alert>
    </div>
</div>`})},o={parameters:{docs:{source:{code:`
<template>
    <fb-alert variant="${e.INFO}">
        <template #title>With title</template>
        <template #description>This is a description.</template>
    </fb-alert>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbAlert:a},template:`
<div class="fb-alert-story-block">
    <fb-alert variant="${e.INFO}">
        <template #title>With title</template>
        <template #description>This is a description.</template>
    </fb-alert>
</div>`})},p={parameters:{docs:{source:{code:`
<template>
    <fb-alert variant="${e.INFO}" icon>
        <template #title>Info alert</template>
        <template #description>More text description</template>
    </fb-alert>
    <fb-alert variant="${e.SUCCESS}" icon>
        <template #title>Success alert</template>
        <template #description>More text description</template>
    </fb-alert>
    <fb-alert variant="${e.WARNING}" icon>
        <template #title>Warning alert</template>
        <template #description>More text description</template>
    </fb-alert>
    <fb-alert variant="${e.ERROR}" icon>
        <template #title>Error alert</template>
        <template #description>More text description</template>
    </fb-alert>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbAlert:a},template:`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.INFO}" icon>
            <template #title>Info alert</template>
            <template #description>More text description</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.SUCCESS}" icon>
            <template #title>Success alert</template>
            <template #description>More text description</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.WARNING}" icon>
            <template #title>Warning alert</template>
            <template #description>More text description</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="${e.ERROR}" icon>
            <template #title>Error alert</template>
            <template #description>More text description</template>
        </fb-alert>
    </div>
</div>`})};var m,d,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ["hideInSidebar"],
  args: {
    description: "A simple default alert — check it out!"
  }
}`,...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var b,u,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-alert>
        <template #description>A simple default alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.INFO}">
        <template #description>A simple info alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.SUCCESS}">
        <template #description>A simple success alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.WARNING}">
        <template #description>A simple warning alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.ERROR}">
        <template #description>A simple error alert — check it out!</template>
    </fb-alert>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbAlert
    },
    template: \`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert>
            <template #description>A simple default alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.INFO}">
            <template #description>A simple info alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.SUCCESS}">
            <template #description>A simple success alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.WARNING}">
            <template #description>A simple warning alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.ERROR}">
            <template #description>A simple error alert — check it out!</template>
        </fb-alert>
    </div>
</div>\`
  })
}`,...(v=(u=l.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var y,k,A;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-alert effect="\${EffectTypes.DARK}">
        <template #description>A simple default alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.INFO}" effect="\${EffectTypes.DARK}">
        <template #description>A simple info alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.SUCCESS}" effect="\${EffectTypes.DARK}">
        <template #description>A simple success alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.WARNING}" effect="\${EffectTypes.DARK}">
        <template #description>A simple warning alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.ERROR}" effect="\${EffectTypes.DARK}">
        <template #description>A simple error alert — check it out!</template>
    </fb-alert>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbAlert
    },
    template: \`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert effect="\${EffectTypes.DARK}">
            <template #description>A simple default alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.INFO}" effect="\${EffectTypes.DARK}">
            <template #description>A simple info alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.SUCCESS}" effect="\${EffectTypes.DARK}">
            <template #description>A simple success alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.WARNING}" effect="\${EffectTypes.DARK}">
            <template #description>A simple warning alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.ERROR}" effect="\${EffectTypes.DARK}">
            <template #description>A simple error alert — check it out!</template>
        </fb-alert>
    </div>
</div>\`
  })
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var h,$,R;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-alert :closable="false">
        <template #description>Unclosable alert</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.SUCCESS}" close-text="Gotcha">
        <template #description>Customized close text</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.WARNING}" @close="hello">
        <template #description>Alert with callback</template>
    </fb-alert>
</template>

<script lang="ts" setup>
const hello = (): void => {
    alert("Hi! I'm on close callback");
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbAlert
    },
    methods: {
      hello: () => {
        alert("Hi! I'm on close callback");
      }
    },
    template: \`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert :closable="false">
            <template #description>Unclosable alert</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.SUCCESS}" close-text="Gotcha">
            <template #description>Customized close text</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.WARNING}" @close="hello">
            <template #description>Alert with callback</template>
        </fb-alert>
    </div>
</div>\`
  })
}`,...(R=($=n.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var _,S,I;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-alert variant="\${VariantTypes.INFO}" icon>
        <template #description>A simple info alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.SUCCESS}" icon>
        <template #description>A simple success alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.WARNING}" icon>
        <template #description>A simple warning alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.ERROR}" icon>
        <template #description>A simple error alert — check it out!</template>
    </fb-alert>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbAlert
    },
    template: \`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.INFO}">
            <template #description>A simple info alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.SUCCESS}" icon>
            <template #description>A simple success alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.WARNING}" icon>
            <template #description>A simple warning alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.ERROR}" icon>
            <template #description>A simple error alert — check it out!</template>
        </fb-alert>
    </div>
</div>\`
  })
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var N,T,g;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-alert center>
        <template #description>A simple default alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.INFO}" center icon>
        <template #description>A simple info alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.SUCCESS}" center icon>
        <template #description>A simple success alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.WARNING}" center icon>
        <template #description>A simple warning alert — check it out!</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.ERROR}" center icon>
        <template #description>A simple error alert — check it out!</template>
    </fb-alert>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbAlert
    },
    template: \`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert center icon>
            <template #description>A simple default alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.INFO}" center icon>
            <template #description>A simple info alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.SUCCESS}" center icon>
            <template #description>A simple success alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.WARNING}" center icon>
            <template #description>A simple warning alert — check it out!</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.ERROR}" center icon>
            <template #description>A simple error alert — check it out!</template>
        </fb-alert>
    </div>
</div>\`
  })
}`,...(g=(T=c.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var C,E,V;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-alert variant="\${VariantTypes.INFO}">
        <template #title>With title</template>
        <template #description>This is a description.</template>
    </fb-alert>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbAlert
    },
    template: \`
<div class="fb-alert-story-block">
    <fb-alert variant="\${VariantTypes.INFO}">
        <template #title>With title</template>
        <template #description>This is a description.</template>
    </fb-alert>
</div>\`
  })
}`,...(V=(E=o.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var O,F,x;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-alert variant="\${VariantTypes.INFO}" icon>
        <template #title>Info alert</template>
        <template #description>More text description</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.SUCCESS}" icon>
        <template #title>Success alert</template>
        <template #description>More text description</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.WARNING}" icon>
        <template #title>Warning alert</template>
        <template #description>More text description</template>
    </fb-alert>
    <fb-alert variant="\${VariantTypes.ERROR}" icon>
        <template #title>Error alert</template>
        <template #description>More text description</template>
    </fb-alert>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbAlert
    },
    template: \`
<div class="fb-alert-story-block">
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.INFO}" icon>
            <template #title>Info alert</template>
            <template #description>More text description</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.SUCCESS}" icon>
            <template #title>Success alert</template>
            <template #description>More text description</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.WARNING}" icon>
            <template #title>Warning alert</template>
            <template #description>More text description</template>
        </fb-alert>
    </div>
    <div class="fb-alert-story-block__item">
        <fb-alert variant="\${VariantTypes.ERROR}" icon>
            <template #title>Error alert</template>
            <template #description>More text description</template>
        </fb-alert>
    </div>
</div>\`
  })
}`,...(x=(F=p.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const w=["actionsData","Component","BasicUsage","Dark","CloseButton","Icon","Center","Title","TitleIcon"],L=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:l,Center:c,CloseButton:n,Component:r,Dark:i,Icon:s,Title:o,TitleIcon:p,__namedExportsOrder:w,actionsData:D,default:G},Symbol.toStringTag,{value:"Module"}));export{L as A,l as B,r as C,i as D,s as I,o as T,n as a,c as b,p as c};
