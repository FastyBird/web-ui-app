import{r}from"./vue.esm-bundler-DEpQrfwO.js";import{k as i,A as f,S as $}from"./web-ui-components.es-nLJZCm2K.js";import{t as o}from"./web-ui-constants.es-Bfh99ZXh.js";const R={component:i,title:"Components/Form/Radio",excludeStories:/.*Data$/},n={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-radio-group v-model="radio1">
            <fb-radio value="1" size="${o.LARGE}">Option 1</fb-radio>
            <fb-radio value="2" size="${o.LARGE}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio2">
            <fb-radio value="1">Option 1</fb-radio>
            <fb-radio value="2">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio3">
            <fb-radio value="1" size="${o.SMALL}">Option 1</fb-radio>
            <fb-radio value="2" size="${o.SMALL}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio3" disabled>
            <fb-radio value="1" size="${o.SMALL}">Option 1</fb-radio>
            <fb-radio value="2" size="${o.SMALL}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbRadio:i,FbRadioGroup:f},setup:()=>{const a=r("1"),e=r("1"),d=r("1");return{radio1:a,radio2:e,radio3:d}},template:`
<div class="fb-radio-story-block">
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio1">
            <fb-radio value="1" size="${o.LARGE}">Option 1</fb-radio>
            <fb-radio value="2" size="${o.LARGE}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio2">
            <fb-radio value="1">Option 1</fb-radio>
            <fb-radio value="2">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio3">
            <fb-radio value="1" size="${o.SMALL}">Option 1</fb-radio>
            <fb-radio value="2" size="${o.SMALL}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio3" disabled>
            <fb-radio value="1" size="${o.SMALL}">Option 1</fb-radio>
            <fb-radio value="2" size="${o.SMALL}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
</div>`})},b={parameters:{docs:{source:{code:`
<template>
    <fb-radio v-model="radio" disabled value="disabled">Option A</fb-radio>
    <fb-radio v-model="radio" disabled value="selected and disabled">Option B</fb-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref('selected and disabled');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbRadio:i},setup:()=>({radio:r("selected and disabled")}),template:`
<div class="fb-radio-story-block">
    <fb-radio v-model="radio" disabled value="disabled">Option A</fb-radio>
    <fb-radio v-model="radio" disabled value="selected and disabled">Option B</fb-radio>
</div>`})},t={parameters:{docs:{source:{code:`
<template>
    <fb-radio-group v-model="radio">
        <fb-radio :value="3">Option A</fb-radio>
        <fb-radio :value="6">Option B</fb-radio>
        <fb-radio :value="9">Option C</fb-radio>
    </fb-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref(3)
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbRadio:i,FbRadioGroup:f},setup:()=>({radio:r(3)}),template:`
<div class="fb-radio-story-block">
    <fb-radio-group v-model="radio">
        <fb-radio :value="3">Option A</fb-radio>
        <fb-radio :value="6">Option B</fb-radio>
        <fb-radio :value="9">Option C</fb-radio>
    </fb-radio-group>
</div>`})},s={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-radio-group v-model="radio1" size="${o.LARGE}">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio2">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio3" size="${o.SMALL}">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" disabled />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref('New York');
const radio2 = ref('New York');
const radio3 = ref('New York');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbRadio:i,FbRadioGroup:f,FbRadioButton:$},setup:()=>{const a=r("New York"),e=r("New York"),d=r("New York");return{radio1:a,radio2:e,radio3:d}},template:`
<div class="fb-radio-story-block">
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio1" size="${o.LARGE}">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio2">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio3" size="${o.SMALL}">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" disabled />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
</div>`})},l={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-radio-group v-model="radio1">
            <fb-radio value="1" size="${o.LARGE}" border>Option A</fb-radio>
            <fb-radio value="2" size="${o.LARGE}" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio2">
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio3" size="${o.SMALL}">
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border disabled>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio4" size="${o.SMALL}" disabled>
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
const radio4 = ref('1');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbRadio:i,FbRadioGroup:f},setup:()=>{const a=r("1"),e=r("1"),d=r("1"),_=r("1");return{radio1:a,radio2:e,radio3:d,radio4:_}},template:`
<div class="fb-radio-story-block">
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio1">
            <fb-radio value="1" size="${o.LARGE}" border>Option A</fb-radio>
            <fb-radio value="2" size="${o.LARGE}" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio2">
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio3" size="${o.SMALL}">
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border disabled>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio4" size="${o.SMALL}" disabled>
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
</div>`})};var p,u,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-radio-group v-model="radio1">
            <fb-radio value="1" size="\${ComponentSizeTypes.LARGE}">Option 1</fb-radio>
            <fb-radio value="2" size="\${ComponentSizeTypes.LARGE}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio2">
            <fb-radio value="1">Option 1</fb-radio>
            <fb-radio value="2">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio3">
            <fb-radio value="1" size="\${ComponentSizeTypes.SMALL}">Option 1</fb-radio>
            <fb-radio value="2" size="\${ComponentSizeTypes.SMALL}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio3" disabled>
            <fb-radio value="1" size="\${ComponentSizeTypes.SMALL}">Option 1</fb-radio>
            <fb-radio value="2" size="\${ComponentSizeTypes.SMALL}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbRadio,
      FbRadioGroup
    },
    setup: () => {
      const radio1 = ref("1");
      const radio2 = ref("1");
      const radio3 = ref("1");
      return {
        radio1,
        radio2,
        radio3
      };
    },
    template: \`
<div class="fb-radio-story-block">
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio1">
            <fb-radio value="1" size="\${ComponentSizeTypes.LARGE}">Option 1</fb-radio>
            <fb-radio value="2" size="\${ComponentSizeTypes.LARGE}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio2">
            <fb-radio value="1">Option 1</fb-radio>
            <fb-radio value="2">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio3">
            <fb-radio value="1" size="\${ComponentSizeTypes.SMALL}">Option 1</fb-radio>
            <fb-radio value="2" size="\${ComponentSizeTypes.SMALL}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio3" disabled>
            <fb-radio value="1" size="\${ComponentSizeTypes.SMALL}">Option 1</fb-radio>
            <fb-radio value="2" size="\${ComponentSizeTypes.SMALL}">Option 2</fb-radio>
        </fb-radio-group>
    </div>
</div>\`
  })
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var c,m,g;b.parameters={...b.parameters,docs:{...(c=b.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-radio v-model="radio" disabled value="disabled">Option A</fb-radio>
    <fb-radio v-model="radio" disabled value="selected and disabled">Option B</fb-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref('selected and disabled');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbRadio
    },
    setup: () => {
      const radio = ref("selected and disabled");
      return {
        radio
      };
    },
    template: \`
<div class="fb-radio-story-block">
    <fb-radio v-model="radio" disabled value="disabled">Option A</fb-radio>
    <fb-radio v-model="radio" disabled value="selected and disabled">Option B</fb-radio>
</div>\`
  })
}`,...(g=(m=b.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var L,A,O;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-radio-group v-model="radio">
        <fb-radio :value="3">Option A</fb-radio>
        <fb-radio :value="6">Option B</fb-radio>
        <fb-radio :value="9">Option C</fb-radio>
    </fb-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref(3)
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbRadio,
      FbRadioGroup
    },
    setup: () => {
      const radio = ref(3);
      return {
        radio
      };
    },
    template: \`
<div class="fb-radio-story-block">
    <fb-radio-group v-model="radio">
        <fb-radio :value="3">Option A</fb-radio>
        <fb-radio :value="6">Option B</fb-radio>
        <fb-radio :value="9">Option C</fb-radio>
    </fb-radio-group>
</div>\`
  })
}`,...(O=(A=t.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var z,S,k;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-radio-group v-model="radio1" size="\${ComponentSizeTypes.LARGE}">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio2">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio3" size="\${ComponentSizeTypes.SMALL}">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" disabled />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref('New York');
const radio2 = ref('New York');
const radio3 = ref('New York');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbRadio,
      FbRadioGroup,
      FbRadioButton
    },
    setup: () => {
      const radio1 = ref("New York");
      const radio2 = ref("New York");
      const radio3 = ref("New York");
      return {
        radio1,
        radio2,
        radio3
      };
    },
    template: \`
<div class="fb-radio-story-block">
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio1" size="\${ComponentSizeTypes.LARGE}">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio2">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio3" size="\${ComponentSizeTypes.SMALL}">
            <fb-radio-button label="New York" value="New York" />
            <fb-radio-button label="Washington" value="Washington" disabled />
            <fb-radio-button label="Los Angeles" value="Los Angeles" />
            <fb-radio-button label="Chicago" value="Chicago" />
        </fb-radio-group>
    </div>
</div>\`
  })
}`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var h,y,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-radio-group v-model="radio1">
            <fb-radio value="1" size="\${ComponentSizeTypes.LARGE}" border>Option A</fb-radio>
            <fb-radio value="2" size="\${ComponentSizeTypes.LARGE}" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio2">
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio3" size="\${ComponentSizeTypes.SMALL}">
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border disabled>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div>
        <fb-radio-group v-model="radio4" size="\${ComponentSizeTypes.SMALL}" disabled>
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
const radio4 = ref('1');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbRadio,
      FbRadioGroup
    },
    setup: () => {
      const radio1 = ref("1");
      const radio2 = ref("1");
      const radio3 = ref("1");
      const radio4 = ref("1");
      return {
        radio1,
        radio2,
        radio3,
        radio4
      };
    },
    template: \`
<div class="fb-radio-story-block">
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio1">
            <fb-radio value="1" size="\${ComponentSizeTypes.LARGE}" border>Option A</fb-radio>
            <fb-radio value="2" size="\${ComponentSizeTypes.LARGE}" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio2">
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio3" size="\${ComponentSizeTypes.SMALL}">
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border disabled>Option B</fb-radio>
        </fb-radio-group>
    </div>
    <div class="fb-radio-story-block__item">
        <fb-radio-group v-model="radio4" size="\${ComponentSizeTypes.SMALL}" disabled>
            <fb-radio value="1" border>Option A</fb-radio>
            <fb-radio value="2" border>Option B</fb-radio>
        </fb-radio-group>
    </div>
</div>\`
  })
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const w=["BasicUsage","Disabled","RadioGroup","Button","Bordered"],G=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:n,Bordered:l,Button:s,Disabled:b,RadioGroup:t,__namedExportsOrder:w,default:R},Symbol.toStringTag,{value:"Module"}));export{n as B,b as D,G as R,t as a,s as b,l as c};
