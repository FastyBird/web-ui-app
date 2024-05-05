import{r as n}from"./vue.esm-bundler-DEpQrfwO.js";import{l as t,m as o}from"./web-ui-components.es-nLJZCm2K.js";import{t as e}from"./web-ui-constants.es-Bfh99ZXh.js";const E={component:t,title:"Components/Form/Input number",excludeStories:/.*Data$/},s={parameters:{docs:{source:{code:`
<template>
    <fb-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(1);

const handleChange = (value: number) => {
    console.log(value);
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInputNumber:t},setup:()=>({num:n(1),handleChange:m=>{console.log(m)}}),template:'<fb-input-number v-model="num" :min="1" :max="10" @change="handleChange" />'})},u={parameters:{docs:{source:{code:`
<template>
    <fb-input-number v-model="num" :disabled="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(1);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInputNumber:t},setup:()=>({num:n(1)}),template:'<fb-input-number v-model="num" :disabled="true" />'})},a={parameters:{docs:{source:{code:`
<template>
    <fb-input-number v-model="num" :step="2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(5);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInputNumber:t},setup:()=>({num:n(5)}),template:'<fb-input-number v-model="num" :step="2" />'})},p={parameters:{docs:{source:{code:`
<template>
    <fb-input-number v-model="num" :step="2" step-strictly />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(2);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInputNumber:t},setup:()=>({num:n(2)}),template:'<fb-input-number v-model="num" :step="2" step-strictly />'})},i={parameters:{docs:{source:{code:`
<template>
    <fb-input-number v-model="num" :precision="2" :step="0.1" :max="10" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(1);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInputNumber:t},setup:()=>({num:n(1)}),template:'<fb-input-number v-model="num" :precision="2" :step="0.1" :max="10" />'})},c={parameters:{docs:{source:{code:`
<template>
    <fb-input-number v-model="num1" size="${e.LARGE}" />
    <fb-input-number v-model="num2" />
    <fb-input-number v-model="num3" size="${e.SMALL}" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num1 = ref(1);
const num2 = ref(2);
const num3 = ref(3);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInputNumber:t},setup:()=>{const r=n(1),d=n(2),m=n(3);return{num1:r,num2:d,num3:m}},template:`
<div class="fb-input-number-story-block">
    <fb-input-number v-model="num1" size="${e.LARGE}" />
    <fb-input-number v-model="num2" />
    <fb-input-number v-model="num3" size="${e.SMALL}" />
</div>`})},l={parameters:{docs:{source:{code:`
<template>
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        controls-position="${o.RIGHT}"
        size="${e.LARGE}"
        @change="handleChange"
    />
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        controls-position="${o.RIGHT}"
        @change="handleChange"
    />
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        size="${e.SMALL}"
        controls-position="${o.RIGHT}"
        @change="handleChange"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(1);

const handleChange = (value: number) => {
    console.log(value);
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInputNumber:t},setup:()=>({num:n(1),handleChange:m=>{console.log(m)}}),template:`
<div class="fb-input-number-story-block">
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        controls-position="${o.RIGHT}"
        size="${e.LARGE}"
        @change="handleChange"
    />
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        controls-position="${o.RIGHT}"
        @change="handleChange"
    />
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        size="${e.SMALL}"
        controls-position="${o.RIGHT}"
        @change="handleChange"
    />
</div>`})};var b,f,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(1);

const handleChange = (value: number) => {
    console.log(value);
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInputNumber
    },
    setup: () => {
      const num = ref(1);
      const handleChange = (value: number): void => {
        console.log(value);
      };
      return {
        num,
        handleChange
      };
    },
    template: \`<fb-input-number v-model="num" :min="1" :max="10" @change="handleChange" />\`
  })
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,v,S;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input-number v-model="num" :disabled="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(1);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInputNumber
    },
    setup: () => {
      const num = ref(1);
      return {
        num
      };
    },
    template: \`<fb-input-number v-model="num" :disabled="true" />\`
  })
}`,...(S=(v=u.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var I,C,$;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input-number v-model="num" :step="2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(5);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInputNumber
    },
    setup: () => {
      const num = ref(5);
      return {
        num
      };
    },
    template: \`<fb-input-number v-model="num" :step="2" />\`
  })
}`,...($=(C=a.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var z,T,y;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input-number v-model="num" :step="2" step-strictly />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(2);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInputNumber
    },
    setup: () => {
      const num = ref(2);
      return {
        num
      };
    },
    template: \`<fb-input-number v-model="num" :step="2" step-strictly />\`
  })
}`,...(y=(T=p.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var L,x,G;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input-number v-model="num" :precision="2" :step="0.1" :max="10" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(1);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInputNumber
    },
    setup: () => {
      const num = ref(1);
      return {
        num
      };
    },
    template: \`<fb-input-number v-model="num" :precision="2" :step="0.1" :max="10" />\`
  })
}`,...(G=(x=i.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var N,R,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input-number v-model="num1" size="\${ComponentSizeTypes.LARGE}" />
    <fb-input-number v-model="num2" />
    <fb-input-number v-model="num3" size="\${ComponentSizeTypes.SMALL}" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num1 = ref(1);
const num2 = ref(2);
const num3 = ref(3);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInputNumber
    },
    setup: () => {
      const num1 = ref(1);
      const num2 = ref(2);
      const num3 = ref(3);
      return {
        num1,
        num2,
        num3
      };
    },
    template: \`
<div class="fb-input-number-story-block">
    <fb-input-number v-model="num1" size="\${ComponentSizeTypes.LARGE}" />
    <fb-input-number v-model="num2" />
    <fb-input-number v-model="num3" size="\${ComponentSizeTypes.SMALL}" />
</div>\`
  })
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var F,H,P;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        controls-position="\${InputNumberControlPositionTypes.RIGHT}"
        size="\${ComponentSizeTypes.LARGE}"
        @change="handleChange"
    />
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        controls-position="\${InputNumberControlPositionTypes.RIGHT}"
        @change="handleChange"
    />
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        size="\${ComponentSizeTypes.SMALL}"
        controls-position="\${InputNumberControlPositionTypes.RIGHT}"
        @change="handleChange"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(1);

const handleChange = (value: number) => {
    console.log(value);
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInputNumber
    },
    setup: () => {
      const num = ref(1);
      const handleChange = (value: number) => {
        console.log(value);
      };
      return {
        num,
        handleChange
      };
    },
    template: \`
<div class="fb-input-number-story-block">
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        controls-position="\${InputNumberControlPositionTypes.RIGHT}"
        size="\${ComponentSizeTypes.LARGE}"
        @change="handleChange"
    />
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        controls-position="\${InputNumberControlPositionTypes.RIGHT}"
        @change="handleChange"
    />
    <fb-input-number
        v-model="num"
        :min="1"
        :max="10"
        size="\${ComponentSizeTypes.SMALL}"
        controls-position="\${InputNumberControlPositionTypes.RIGHT}"
        @change="handleChange"
    />
</div>\`
  })
}`,...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const M=["BasicUsage","Disabled","Steps","StrictlyStep","Precision","Size","ControlsPosition"],B=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:s,ControlsPosition:l,Disabled:u,Precision:i,Size:c,Steps:a,StrictlyStep:p,__namedExportsOrder:M,default:E},Symbol.toStringTag,{value:"Module"}));export{s as B,l as C,u as D,B as I,i as P,a as S,p as a,c as b};
