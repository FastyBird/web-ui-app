import{r as e,j as K}from"./vue.esm-bundler-DEpQrfwO.js";import{a2 as o,J as w,O as S}from"./web-ui-components.es-nLJZCm2K.js";import{t as p,n}from"./web-ui-constants.es-Bfh99ZXh.js";const Q={component:o,title:"Components/Form/Slider",excludeStories:/.*Data$/},a={parameters:{docs:{source:{code:`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Default value
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value1" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Customized initial value
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value2" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Hide Tooltip
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value3" :show-tooltip="false" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Format Tooltip
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value4" :format-tooltip="formatTooltip" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Disabled
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value5" disabled />
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(0);
const value2 = ref(0);
const value3 = ref(0);
const value4 = ref(0);
const value5 = ref(0);

const formatTooltip = (val: number) => {
    return val / 100;
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSlider:o,FbRow:w,FbCol:S},setup:()=>{const l=e(0),r=e(0),s=e(0),t=e(0),g=e(0);return{value1:l,value2:r,value3:s,value4:t,value5:g,formatTooltip:k=>k/100}},template:`
<div class="fb-slider-story-block">
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Default value
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value1" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Customized initial value
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value2" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Hide Tooltip
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value3" :show-tooltip="false" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Format Tooltip
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value4" :format-tooltip="formatTooltip" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Disabled
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value5" disabled />
        </fb-col>
    </fb-row>
</div>`})},d={parameters:{docs:{source:{code:`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Breakpoints not displayed
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value1" :step="10" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Breakpoints displayed
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value2" :step="10" show-stops />
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(0);
const value2 = ref(0);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSlider:o,FbRow:w,FbCol:S},setup:()=>{const l=e(0),r=e(0);return{value1:l,value2:r}},template:`
<div class="fb-slider-story-block">
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Breakpoints not displayed
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value1" :step="10" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Breakpoints displayed
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value2" :step="10" show-stops />
        </fb-col>
    </fb-row>
</div>`})},i={parameters:{docs:{source:{code:`
<template>
    <fb-slider v-model="value" show-input />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSlider:o},setup:()=>({value:e(0)}),template:`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" show-input />
    </div>
</div>`})},m={parameters:{docs:{source:{code:`
<template>
    <fb-slider v-model="value" show-input size="${p.LARGE}" />
    <fb-slider v-model="value" show-input />
    <fb-slider v-model="value" show-input size="${p.SMALL}" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSlider:o},setup:()=>({value:e(0)}),template:`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" show-input size="${p.LARGE}" />
    </div>
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" show-input />
    </div>
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" show-input size="${p.SMALL}" />
    </div>
</div>`})},c={parameters:{docs:{source:{code:`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Primary
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value1" variant="${n.PRIMARY}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Default
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value2" variant="${n.DEFAULT}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Info
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value3" :show-tooltip="false" variant="${n.INFO}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Success
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value4" :format-tooltip="formatTooltip" variant="${n.SUCCESS}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Warning
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value5" variant="${n.WARNING}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Danger
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value6" variant="${n.DANGER}" />
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(0);
const value2 = ref(0);
const value3 = ref(0);
const value4 = ref(0);
const value5 = ref(0);
const value6 = ref(0);

const formatTooltip = (val: number) => {
    return val / 100;
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSlider:o,FbRow:w,FbCol:S},setup:()=>{const l=e(20),r=e(10),s=e(50),t=e(30),g=e(40),y=e(20);return{value1:l,value2:r,value3:s,value4:t,value5:g,value6:y,formatTooltip:q=>q/100}},template:`
<div class="fb-slider-story-block">
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Primary
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value1" variant="${n.PRIMARY}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Default
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value2" variant="${n.DEFAULT}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Info
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value3" :show-tooltip="false" variant="${n.INFO}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Success
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value4" :format-tooltip="formatTooltip" variant="${n.SUCCESS}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Warning
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value5" variant="${n.WARNING}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Danger
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value6" variant="${n.DANGER}" />
        </fb-col>
    </fb-row>
</div>`})},f={parameters:{docs:{source:{code:`
<template>
    <fb-slider v-model="value1" />
    <fb-slider v-model="value2" placement="bottom" />
    <fb-slider v-model="value3" placement="right" />
    <fb-slider v-model="value4" placement="left" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(10);
const value2 = ref(20);
const value3 = ref(30);
const value4 = ref(40);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSlider:o},setup:()=>{const l=e(10),r=e(20),s=e(30),t=e(40);return{value1:l,value2:r,value3:s,value4:t}},template:`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value1" />
    </div>
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value2" placement="bottom" />
    </div>
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value3" placement="right" />
    </div>
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value4" placement="left" />
    </div>
</div>`})},b={parameters:{docs:{source:{code:`
<template>
    <fb-slider v-model="value" range show-stops :max="10" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref([4, 8]);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSlider:o},setup:()=>({value:e([4,8])}),template:`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" range show-stops :max="10" />
    </div>
</div>`})},v={parameters:{docs:{source:{code:`
<template>
    <fb-slider v-model="value" vertical height="200px" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSlider:o},setup:()=>({value:e(0)}),template:`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" vertical height="200px" />
    </div>
</div>`})},u={parameters:{docs:{source:{code:`
<template>
    <fb-slider v-model="value" range :marks="marks" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { CSSProperties } from 'vue';

interface Mark {
  style: CSSProperties
  label: string
}

type Marks = Record<number, Mark | string>;

const value = ref([30, 60]);

const marks = reactive<Marks>({
    0: '0°C',
    8: '8°C',
    37: '37°C',
    50: {
        style: {
            color: '#1989FA',
        },
        label: '50%',
    },
});
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSlider:o},setup:()=>{const l=e([30,60]),r=K({0:"0°C",8:"8°C",37:"37°C",50:{style:{color:"#1989FA"},label:"50%"}});return{value:l,marks:r}},template:`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" range :marks="marks" />
    </div>
</div>`})};var h,_,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Default value
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value1" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Customized initial value
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value2" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Hide Tooltip
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value3" :show-tooltip="false" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Format Tooltip
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value4" :format-tooltip="formatTooltip" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Disabled
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value5" disabled />
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(0);
const value2 = ref(0);
const value3 = ref(0);
const value4 = ref(0);
const value5 = ref(0);

const formatTooltip = (val: number) => {
    return val / 100;
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSlider,
      FbRow,
      FbCol
    },
    setup: () => {
      const value1 = ref(0);
      const value2 = ref(0);
      const value3 = ref(0);
      const value4 = ref(0);
      const value5 = ref(0);
      const formatTooltip = (val: number) => {
        return val / 100;
      };
      return {
        value1,
        value2,
        value3,
        value4,
        value5,
        formatTooltip
      };
    },
    template: \`
<div class="fb-slider-story-block">
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Default value
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value1" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Customized initial value
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value2" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Hide Tooltip
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value3" :show-tooltip="false" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Format Tooltip
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value4" :format-tooltip="formatTooltip" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Disabled
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value5" disabled />
        </fb-col>
    </fb-row>
</div>\`
  })
}`,...(T=(_=a.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var F,C,I;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Breakpoints not displayed
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value1" :step="10" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Breakpoints displayed
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value2" :step="10" show-stops />
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(0);
const value2 = ref(0);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSlider,
      FbRow,
      FbCol
    },
    setup: () => {
      const value1 = ref(0);
      const value2 = ref(0);
      return {
        value1,
        value2
      };
    },
    template: \`
<div class="fb-slider-story-block">
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Breakpoints not displayed
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value1" :step="10" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="6">
            Breakpoints displayed
        </fb-col>
        <fb-col :sm="12" :md="10">
            <fb-slider v-model="value2" :step="10" show-stops />
        </fb-col>
    </fb-row>
</div>\`
  })
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var R,$,A;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-slider v-model="value" show-input />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSlider
    },
    setup: () => {
      const value = ref(0);
      return {
        value
      };
    },
    template: \`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" show-input />
    </div>
</div>\`
  })
}`,...(A=($=i.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var D,M,z;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-slider v-model="value" show-input size="\${ComponentSizeTypes.LARGE}" />
    <fb-slider v-model="value" show-input />
    <fb-slider v-model="value" show-input size="\${ComponentSizeTypes.SMALL}" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSlider
    },
    setup: () => {
      const value = ref(0);
      return {
        value
      };
    },
    template: \`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" show-input size="\${ComponentSizeTypes.LARGE}" />
    </div>
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" show-input />
    </div>
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" show-input size="\${ComponentSizeTypes.SMALL}" />
    </div>
</div>\`
  })
}`,...(z=(M=m.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var x,B,E;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Primary
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value1" variant="\${VariantTypes.PRIMARY}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Default
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value2" variant="\${VariantTypes.DEFAULT}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Info
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value3" :show-tooltip="false" variant="\${VariantTypes.INFO}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Success
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value4" :format-tooltip="formatTooltip" variant="\${VariantTypes.SUCCESS}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Warning
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value5" variant="\${VariantTypes.WARNING}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Danger
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value6" variant="\${VariantTypes.DANGER}" />
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(0);
const value2 = ref(0);
const value3 = ref(0);
const value4 = ref(0);
const value5 = ref(0);
const value6 = ref(0);

const formatTooltip = (val: number) => {
    return val / 100;
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSlider,
      FbRow,
      FbCol
    },
    setup: () => {
      const value1 = ref(20);
      const value2 = ref(10);
      const value3 = ref(50);
      const value4 = ref(30);
      const value5 = ref(40);
      const value6 = ref(20);
      const formatTooltip = (val: number) => {
        return val / 100;
      };
      return {
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        formatTooltip
      };
    },
    template: \`
<div class="fb-slider-story-block">
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Primary
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value1" variant="\${VariantTypes.PRIMARY}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Default
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value2" variant="\${VariantTypes.DEFAULT}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Info
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value3" :show-tooltip="false" variant="\${VariantTypes.INFO}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Success
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value4" :format-tooltip="formatTooltip" variant="\${VariantTypes.SUCCESS}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Warning
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value5" variant="\${VariantTypes.WARNING}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="3">
            Danger
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-slider v-model="value6" variant="\${VariantTypes.DANGER}" />
        </fb-col>
    </fb-row>
</div>\`
  })
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var P,V,L;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-slider v-model="value1" />
    <fb-slider v-model="value2" placement="bottom" />
    <fb-slider v-model="value3" placement="right" />
    <fb-slider v-model="value4" placement="left" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(10);
const value2 = ref(20);
const value3 = ref(30);
const value4 = ref(40);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSlider
    },
    setup: () => {
      const value1 = ref(10);
      const value2 = ref(20);
      const value3 = ref(30);
      const value4 = ref(40);
      return {
        value1,
        value2,
        value3,
        value4
      };
    },
    template: \`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value1" />
    </div>
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value2" placement="bottom" />
    </div>
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value3" placement="right" />
    </div>
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value4" placement="left" />
    </div>
</div>\`
  })
}`,...(L=(V=f.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var N,G,W;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-slider v-model="value" range show-stops :max="10" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref([4, 8]);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSlider
    },
    setup: () => {
      const value = ref([4, 8]);
      return {
        value
      };
    },
    template: \`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" range show-stops :max="10" />
    </div>
</div>\`
  })
}`,...(W=(G=b.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var U,O,H;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-slider v-model="value" vertical height="200px" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSlider
    },
    setup: () => {
      const value = ref(0);
      return {
        value
      };
    },
    template: \`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" vertical height="200px" />
    </div>
</div>\`
  })
}`,...(H=(O=v.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var Y,j,J;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-slider v-model="value" range :marks="marks" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { CSSProperties } from 'vue';

interface Mark {
  style: CSSProperties
  label: string
}

type Marks = Record<number, Mark | string>;

const value = ref([30, 60]);

const marks = reactive<Marks>({
    0: '0°C',
    8: '8°C',
    37: '37°C',
    50: {
        style: {
            color: '#1989FA',
        },
        label: '50%',
    },
});
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSlider
    },
    setup: () => {
      interface Mark {
        style: CSSProperties;
        label: string;
      }
      type Marks = Record<number, Mark | string>;
      const value = ref([30, 60]);
      const marks = reactive<Marks>({
        0: "0°C",
        8: "8°C",
        37: "37°C",
        50: {
          style: {
            color: "#1989FA"
          },
          label: "50%"
        }
      });
      return {
        value,
        marks
      };
    },
    template: \`
<div class="fb-slider-story-block">
    <div class="fb-slider-story-block__item">
        <fb-slider v-model="value" range :marks="marks" />
    </div>
</div>\`
  })
}`,...(J=(j=u.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};const X=["BasicUsage","Discrete","WithInput","Sizes","Variants","Placement","RangeSelection","Vertical","Marks"],ne=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:a,Discrete:d,Marks:u,Placement:f,RangeSelection:b,Sizes:m,Variants:c,Vertical:v,WithInput:i,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{a as B,d as D,u as M,f as P,b as R,ne as S,c as V,i as W,m as a,v as b};
