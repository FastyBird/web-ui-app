import{r as e}from"./vue.esm-bundler-DEpQrfwO.js";import{r as a,J as ce,O as le,a7 as re,P as _}from"./web-ui-components.es-nLJZCm2K.js";import{z as ve,e as me,B as ue,C as fe}from"./index-Dg9quNvz.js";import{t as c,n}from"./web-ui-constants.es-Bfh99ZXh.js";const de={component:a,title:"Components/Form/Switch",argTypes:{disabled:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether switch is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether switch is in loading state",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},size:{type:{name:"string",required:!1},control:{type:"select"},options:[c.LARGE,c.DEFAULT,c.SMALL],description:"spinner size",table:{type:{summary:"string"},defaultValue:{summary:c.DEFAULT}}},width:{type:{name:"string",required:!1},control:{type:"text"},description:"width of switch",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},inlinePrompt:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether icon or text is displayed inside dot, only the first character will be rendered for text",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},activeText:{type:{name:"string",required:!1},control:{type:"text"},description:"text displayed when in `on` state",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},inactiveText:{type:{name:"string",required:!1},control:{type:"text"},description:"text displayed when in `off` state",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},activeValue:{type:{name:"string",required:!1},control:{type:"text"},description:"switch value when in `on` state",table:{type:{summary:"string"},defaultValue:{summary:!0}}},inactiveValue:{type:{name:"string",required:!1},control:{type:"text"},description:"switch value when in `off` state",table:{type:{summary:"string"},defaultValue:{summary:!1}}},name:{type:{name:"string",required:!1},control:{type:"text"},description:"input name of switch",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},args:{disabled:!1,loading:!1,size:c.DEFAULT,inlinePrompt:!1,activeValue:"true",inactiveValue:"false"},excludeStories:/.*Data$/},l={tags:["hideInSidebar"]},r={parameters:{docs:{source:{code:`
<template>
    <fb-switch v-model="value1" />
    <fb-switch v-model="value2" class="switch-colors" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);
<\/script>

<style scoped>
.switch-colors {
    --fb-switch-on-color: #13ce66;
    --fb-switch-off-color: #ff4949
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSwitch:a},setup:()=>{const t=e(!0),s=e(!0);return{value1:t,value2:s}},template:`
<div class="fb-switch-story-block">
    <fb-switch v-model="value1" class="fb-switch-story-block__row-item" />
    <fb-switch v-model="value2"  class="switch-colors fb-switch-story-block__row-item" />
</div>`})},v={parameters:{docs:{source:{code:`
<template>
    <fb-switch
        v-model="value"
        size="large"
        active-text="Open"
        inactive-text="Close"
    />

    <fb-switch v-model="value" active-text="Open" inactive-text="Close" />

    <fb-switch
        v-model="value"
        size="small"
        active-text="Open"
        inactive-text="Close"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(true);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSwitch:a},setup:()=>({value:e(!0)}),template:`
<div class="fb-switch-story-block">
    <div class="fb-switch-story-block__item">
        <fb-switch
            v-model="value"
            size="large"
            active-text="Open"
            inactive-text="Close"
        />
    </div>
    <div class="fb-switch-story-block__item">
        <fb-switch v-model="value" active-text="Open" inactive-text="Close" />
    </div>
    <div class="fb-switch-story-block__item">
        <fb-switch
            v-model="value"
            size="small"
            active-text="Open"
            inactive-text="Close"
        />
    </div>
</div>`})},m={parameters:{docs:{source:{code:`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Primary
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.PRIMARY}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Default
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.DEFAULT}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Info
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.INFO}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Success
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.SUCCESS}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Warning
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.WARNING}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Danger
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.DANGER}" />
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(true);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSwitch:a,FbRow:ce,FbCol:le},setup:()=>({value:e(!0)}),template:`
<div class="fb-switch-story-block">
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Primary
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.PRIMARY}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Default
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.DEFAULT}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Info
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.INFO}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Success
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.SUCCESS}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Warning
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.WARNING}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Danger
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="${n.DANGER}" />
        </fb-col>
    </fb-row>
</div>`})},u={parameters:{docs:{source:{code:`
<template>
    <fb-switch
        v-model="value1"
        active-text="Automate mode"
        inactive-text="Manual mode"
    />

    <fb-switch
        v-model="value2"
        class="switch-colors"
        active-text="Automate mode"
        inactive-text="Manual mode"
    />

    <fb-switch
        v-model="value3"
        inline-prompt
        active-text="Yes"
        inactive-text="No"
    />

    <fb-switch
        v-model="value4"
        inline-prompt
        class="switch-colors"
        active-text="Y"
        inactive-text="N"
    />

    <fb-switch
        v-model="value5"
        width="60"
        inline-prompt
        active-text="On"
        inactive-text="Off"
    />

    <fb-switch
        v-model="value6"
        inline-prompt
        class="switch-colors"
        active-text="Switch On"
        inactive-text="Switch Off"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
const value4 = ref(true);
const value5 = ref(true);
const value6 = ref(true);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSwitch:a},setup:()=>{const t=e(!0),s=e(!0),o=e(!0),i=e(!0),y=e(!0),x=e(!0);return{value1:t,value2:s,value3:o,value4:i,value5:y,value6:x}},template:`
<div class="fb-switch-story-block">
    <div class="fb-switch-story-block__item">
        <fb-switch
            v-model="value1"
            active-text="Automate mode"
            inactive-text="Manual mode"
        />
    </div>
    <div class="fb-switch-story-block__item">
        <fb-switch
            v-model="value2"
            class="switch-colors"
            active-text="Automate mode"
            inactive-text="Manual mode"
        />
    </div>
    <div class="fb-switch-story-block__item">
        <fb-switch
            v-model="value3"
            inline-prompt
            class="fb-switch-story-block__row-item"
            active-text="Yes"
            inactive-text="No"
        />
        <fb-switch
            v-model="value4"
            inline-prompt
            class="switch-colors fb-switch-story-block__row-item"
            active-text="Y"
            inactive-text="N"
        />
        <fb-switch
            v-model="value5"
            width="60"
            inline-prompt
            active-text="On"
            inactive-text="Off"
            class="fb-switch-story-block__row-item"
        />
        <fb-switch
            v-model="value6"
            inline-prompt
            class="switch-colors fb-switch-story-block__row-item"
            active-text="Switch On"
            inactive-text="Switch Off"
        />
    </div>
</div>`})},f={parameters:{docs:{source:{code:`
<template>
    <fb-switch v-model="value1" :active-icon="FasCheck" :inactive-icon="FasXmark" class="fb-switch-story-block__row-item" />

    <fb-switch v-model="value2" inline-prompt :active-icon="FasCheck" :inactive-icon="FasXmark" class="fb-switch-story-block__row-item" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSwitch:a},setup:()=>{const t=e(!0),s=e(!0);return{FasXmark:ve,FasCheck:me,value1:t,value2:s}},template:`
<div class="fb-switch-story-block">
    <div class="fb-switch-story-block__item">
        <fb-switch v-model="value1" :active-icon="FasCheck" :inactive-icon="FasXmark" />
    </div>
    <div class="fb-switch-story-block__item">
        <fb-switch v-model="value2" inline-prompt :active-icon="FasCheck" :inactive-icon="FasXmark" />
    </div>
</div>`})},d={parameters:{docs:{source:{code:`
<template>
    <fb-switch
        v-model="value"
        :active-action-icon="FasEye"
        :inactive-action-icon="FasEyeSlash"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FasEye, FasEyeSlash } from '@fastybird/web-ui-icons';

const value = ref(true);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSwitch:a},setup:()=>{const t=e(!0);return{FasEye:ue,FasEyeSlash:fe,value:t}},template:`
<fb-switch
    v-model="value"
    :active-action-icon="FasEye"
    :inactive-action-icon="FasEyeSlash"
/>`})},b={parameters:{docs:{source:{code:`
<template>
    <fb-tooltip :content="'Switch value: ' + value" placement="top">
        <fb-switch
            v-model="value"
            class="switch-colors"
            active-value="100"
            inactive-value="0"
        />
    </fb-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('100');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSwitch:a,FbTooltip:re},setup:()=>({value:e("100")}),template:`
<div class="fb-switch-story-block">
    <fb-tooltip :content="'Switch value: ' + value" placement="top">
        <fb-switch
            v-model="value"
            class="switch-colors"
            active-value="100"
            inactive-value="0"
        />
    </fb-tooltip>
</div>`})},p={parameters:{docs:{source:{code:`
<template>
    <fb-switch v-model="value1" disabled />
    <fb-switch v-model="value2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSwitch:a},setup:()=>{const t=e(!0),s=e(!0);return{value1:t,value2:s}},template:`
<div class="fb-switch-story-block">
    <fb-switch v-model="value1" disabled class="fb-switch-story-block__row-item" />
    <fb-switch v-model="value2" class="fb-switch-story-block__row-item" />
</div>`})},w={parameters:{docs:{source:{code:`
<template>
    <fb-switch v-model="value1" loading />
    <fb-switch v-model="value2" loading />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSwitch:a},setup:()=>{const t=e(!0),s=e(!1);return{value1:t,value2:s}},template:`
<div class="fb-switch-story-block">
    <fb-switch v-model="value1" loading class="fb-switch-story-block__row-item" />
    <fb-switch v-model="value2" loading class="fb-switch-story-block__row-item" />
</div>`})},h={parameters:{docs:{source:{code:`
<template>
    <fb-switch
        v-model="value1"
        :loading="loading1"
        :before-change="beforeChange1"
    />

    <fb-switch
        v-model="value2"
        :loading="loading2"
        :before-change="beforeChange2"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(false);
const loading1 = ref(false);
const loading2 = ref(false);

const beforeChange1 = (): Promise<boolean> => {
    loading1.value = true;

    return new Promise((resolve): void => {
        setTimeout((): void => {
            loading1.value = false;

            FbMessage.success('Switch success');

            resolve(true);
        }, 1000);
    });
};

const beforeChange2 = (): Promise<boolean> => {
    loading2.value = true;

    return new Promise((_, reject): void => {
        setTimeout((): void => {
            loading2.value = false;

            FbMessage.error('Switch failed');

            reject(new Error('Error'));
        }, 1000);
    });
};
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSwitch:a},setup:()=>{const t=e(!0),s=e(!1),o=e(!1),i=e(!1);return{value1:t,value2:s,loading1:o,loading2:i,beforeChange1:()=>(o.value=!0,new Promise(S=>{setTimeout(()=>{o.value=!1,_.success("Switch success"),S(!0)},1e3)})),beforeChange2:()=>(i.value=!0,new Promise((S,ie)=>{setTimeout(()=>{i.value=!1,_.error("Switch failed"),ie(new Error("Error"))},1e3)}))}},template:`
<div class="fb-switch-story-block">
    <fb-switch
        v-model="value1"
        :loading="loading1"
        :before-change="beforeChange1"
        class="fb-switch-story-block__row-item"
    />
    <fb-switch
        v-model="value2"
        :loading="loading2"
        :before-change="beforeChange2"
        class="fb-switch-story-block__row-item"
    />
</div>`})},g={parameters:{docs:{source:{code:`
<template>
    <fb-switch v-model="value">
        <template #active-action>
            T
        </template>
        <template #inactive-action>
            F
        </template>
    </fb-switch>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(true);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSwitch:a},setup:()=>({value:e(!0)}),template:`
<div class="fb-switch-story-block">
    <fb-switch v-model="value">
        <template #active-action>
            T
        </template>
        <template #inactive-action>
            F
        </template>
    </fb-switch>
</div>`})};var C,k,F;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ["hideInSidebar"]
}`,...(F=(k=l.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var O,I,T;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-switch v-model="value1" />
    <fb-switch v-model="value2" class="switch-colors" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);
<\/script>

<style scoped>
.switch-colors {
    --fb-switch-on-color: #13ce66;
    --fb-switch-off-color: #ff4949
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSwitch
    },
    setup: () => {
      const value1 = ref(true);
      const value2 = ref(true);
      return {
        value1,
        value2
      };
    },
    template: \`
<div class="fb-switch-story-block">
    <fb-switch v-model="value1" class="fb-switch-story-block__row-item" />
    <fb-switch v-model="value2"  class="switch-colors fb-switch-story-block__row-item" />
</div>\`
  })
}`,...(T=(I=r.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var E,A,V;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-switch
        v-model="value"
        size="large"
        active-text="Open"
        inactive-text="Close"
    />

    <fb-switch v-model="value" active-text="Open" inactive-text="Close" />

    <fb-switch
        v-model="value"
        size="small"
        active-text="Open"
        inactive-text="Close"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(true);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSwitch
    },
    setup: () => {
      const value = ref(true);
      return {
        value
      };
    },
    template: \`
<div class="fb-switch-story-block">
    <div class="fb-switch-story-block__item">
        <fb-switch
            v-model="value"
            size="large"
            active-text="Open"
            inactive-text="Close"
        />
    </div>
    <div class="fb-switch-story-block__item">
        <fb-switch v-model="value" active-text="Open" inactive-text="Close" />
    </div>
    <div class="fb-switch-story-block__item">
        <fb-switch
            v-model="value"
            size="small"
            active-text="Open"
            inactive-text="Close"
        />
    </div>
</div>\`
  })
}`,...(V=(A=v.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var P,$,D;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Primary
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.PRIMARY}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Default
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.DEFAULT}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Info
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.INFO}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Success
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.SUCCESS}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Warning
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.WARNING}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Danger
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.DANGER}" />
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(true);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSwitch,
      FbRow,
      FbCol
    },
    setup: () => {
      const value = ref(true);
      return {
        value
      };
    },
    template: \`
<div class="fb-switch-story-block">
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Primary
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.PRIMARY}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Default
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.DEFAULT}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Info
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.INFO}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Success
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.SUCCESS}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Warning
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.WARNING}" />
        </fb-col>
    </fb-row>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="4">
            Danger
        </fb-col>
        <fb-col :sm="12" :md="20">
            <fb-switch v-model="value" active-text="Open" inactive-text="Close" variant="\${VariantTypes.DANGER}" />
        </fb-col>
    </fb-row>
</div>\`
  })
}`,...(D=($=m.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var N,R,M;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-switch
        v-model="value1"
        active-text="Automate mode"
        inactive-text="Manual mode"
    />

    <fb-switch
        v-model="value2"
        class="switch-colors"
        active-text="Automate mode"
        inactive-text="Manual mode"
    />

    <fb-switch
        v-model="value3"
        inline-prompt
        active-text="Yes"
        inactive-text="No"
    />

    <fb-switch
        v-model="value4"
        inline-prompt
        class="switch-colors"
        active-text="Y"
        inactive-text="N"
    />

    <fb-switch
        v-model="value5"
        width="60"
        inline-prompt
        active-text="On"
        inactive-text="Off"
    />

    <fb-switch
        v-model="value6"
        inline-prompt
        class="switch-colors"
        active-text="Switch On"
        inactive-text="Switch Off"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
const value4 = ref(true);
const value5 = ref(true);
const value6 = ref(true);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSwitch
    },
    setup: () => {
      const value1 = ref(true);
      const value2 = ref(true);
      const value3 = ref(true);
      const value4 = ref(true);
      const value5 = ref(true);
      const value6 = ref(true);
      return {
        value1,
        value2,
        value3,
        value4,
        value5,
        value6
      };
    },
    template: \`
<div class="fb-switch-story-block">
    <div class="fb-switch-story-block__item">
        <fb-switch
            v-model="value1"
            active-text="Automate mode"
            inactive-text="Manual mode"
        />
    </div>
    <div class="fb-switch-story-block__item">
        <fb-switch
            v-model="value2"
            class="switch-colors"
            active-text="Automate mode"
            inactive-text="Manual mode"
        />
    </div>
    <div class="fb-switch-story-block__item">
        <fb-switch
            v-model="value3"
            inline-prompt
            class="fb-switch-story-block__row-item"
            active-text="Yes"
            inactive-text="No"
        />
        <fb-switch
            v-model="value4"
            inline-prompt
            class="switch-colors fb-switch-story-block__row-item"
            active-text="Y"
            inactive-text="N"
        />
        <fb-switch
            v-model="value5"
            width="60"
            inline-prompt
            active-text="On"
            inactive-text="Off"
            class="fb-switch-story-block__row-item"
        />
        <fb-switch
            v-model="value6"
            inline-prompt
            class="switch-colors fb-switch-story-block__row-item"
            active-text="Switch On"
            inactive-text="Switch Off"
        />
    </div>
</div>\`
  })
}`,...(M=(R=u.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var z,L,Y;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-switch v-model="value1" :active-icon="FasCheck" :inactive-icon="FasXmark" class="fb-switch-story-block__row-item" />

    <fb-switch v-model="value2" inline-prompt :active-icon="FasCheck" :inactive-icon="FasXmark" class="fb-switch-story-block__row-item" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSwitch
    },
    setup: () => {
      const value1 = ref(true);
      const value2 = ref(true);
      return {
        FasXmark,
        FasCheck,
        value1,
        value2
      };
    },
    template: \`
<div class="fb-switch-story-block">
    <div class="fb-switch-story-block__item">
        <fb-switch v-model="value1" :active-icon="FasCheck" :inactive-icon="FasXmark" />
    </div>
    <div class="fb-switch-story-block__item">
        <fb-switch v-model="value2" inline-prompt :active-icon="FasCheck" :inactive-icon="FasXmark" />
    </div>
</div>\`
  })
}`,...(Y=(L=f.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var U,q,X;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-switch
        v-model="value"
        :active-action-icon="FasEye"
        :inactive-action-icon="FasEyeSlash"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FasEye, FasEyeSlash } from '@fastybird/web-ui-icons';

const value = ref(true);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSwitch
    },
    setup: () => {
      const value = ref(true);
      return {
        FasEye,
        FasEyeSlash,
        value
      };
    },
    template: \`
<fb-switch
    v-model="value"
    :active-action-icon="FasEye"
    :inactive-action-icon="FasEyeSlash"
/>\`
  })
}`,...(X=(q=d.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};var G,j,W;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tooltip :content="'Switch value: ' + value" placement="top">
        <fb-switch
            v-model="value"
            class="switch-colors"
            active-value="100"
            inactive-value="0"
        />
    </fb-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('100');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSwitch,
      FbTooltip
    },
    setup: () => {
      const value = ref("100");
      return {
        value
      };
    },
    template: \`
<div class="fb-switch-story-block">
    <fb-tooltip :content="'Switch value: ' + value" placement="top">
        <fb-switch
            v-model="value"
            class="switch-colors"
            active-value="100"
            inactive-value="0"
        />
    </fb-tooltip>
</div>\`
  })
}`,...(W=(j=b.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var B,J,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-switch v-model="value1" disabled />
    <fb-switch v-model="value2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSwitch
    },
    setup: () => {
      const value1 = ref(true);
      const value2 = ref(true);
      return {
        value1,
        value2
      };
    },
    template: \`
<div class="fb-switch-story-block">
    <fb-switch v-model="value1" disabled class="fb-switch-story-block__row-item" />
    <fb-switch v-model="value2" class="fb-switch-story-block__row-item" />
</div>\`
  })
}`,...(H=(J=p.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};var K,Q,Z;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-switch v-model="value1" loading />
    <fb-switch v-model="value2" loading />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSwitch
    },
    setup: () => {
      const value1 = ref(true);
      const value2 = ref(false);
      return {
        value1,
        value2
      };
    },
    template: \`
<div class="fb-switch-story-block">
    <fb-switch v-model="value1" loading class="fb-switch-story-block__row-item" />
    <fb-switch v-model="value2" loading class="fb-switch-story-block__row-item" />
</div>\`
  })
}`,...(Z=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-switch
        v-model="value1"
        :loading="loading1"
        :before-change="beforeChange1"
    />

    <fb-switch
        v-model="value2"
        :loading="loading2"
        :before-change="beforeChange2"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(false);
const loading1 = ref(false);
const loading2 = ref(false);

const beforeChange1 = (): Promise<boolean> => {
    loading1.value = true;

    return new Promise((resolve): void => {
        setTimeout((): void => {
            loading1.value = false;

            FbMessage.success('Switch success');

            resolve(true);
        }, 1000);
    });
};

const beforeChange2 = (): Promise<boolean> => {
    loading2.value = true;

    return new Promise((_, reject): void => {
        setTimeout((): void => {
            loading2.value = false;

            FbMessage.error('Switch failed');

            reject(new Error('Error'));
        }, 1000);
    });
};
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSwitch
    },
    setup: () => {
      const value1 = ref(true);
      const value2 = ref(false);
      const loading1 = ref(false);
      const loading2 = ref(false);
      const beforeChange1 = (): Promise<boolean> => {
        loading1.value = true;
        return new Promise((resolve): void => {
          setTimeout((): void => {
            loading1.value = false;
            FbMessage.success("Switch success");
            resolve(true);
          }, 1000);
        });
      };
      const beforeChange2 = (): Promise<boolean> => {
        loading2.value = true;
        return new Promise((_, reject): void => {
          setTimeout((): void => {
            loading2.value = false;
            FbMessage.error("Switch failed");
            reject(new Error("Error"));
          }, 1000);
        });
      };
      return {
        value1,
        value2,
        loading1,
        loading2,
        beforeChange1,
        beforeChange2
      };
    },
    template: \`
<div class="fb-switch-story-block">
    <fb-switch
        v-model="value1"
        :loading="loading1"
        :before-change="beforeChange1"
        class="fb-switch-story-block__row-item"
    />
    <fb-switch
        v-model="value2"
        :loading="loading2"
        :before-change="beforeChange2"
        class="fb-switch-story-block__row-item"
    />
</div>\`
  })
}`,...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,se,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-switch v-model="value">
        <template #active-action>
            T
        </template>
        <template #inactive-action>
            F
        </template>
    </fb-switch>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(true);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSwitch
    },
    setup: () => {
      const value = ref(true);
      return {
        value
      };
    },
    template: \`
<div class="fb-switch-story-block">
    <fb-switch v-model="value">
        <template #active-action>
            T
        </template>
        <template #inactive-action>
            F
        </template>
    </fb-switch>
</div>\`
  })
}`,...(oe=(se=g.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const be=["Component","Basic","Sizes","Variants","TextDescription","CustomIcons","CustomActionIcons","ValueTypes","Disabled","Loading","PreventSwitching","CustomActionSlot"],ye=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Component:l,CustomActionIcons:d,CustomActionSlot:g,CustomIcons:f,Disabled:p,Loading:w,PreventSwitching:h,Sizes:v,TextDescription:u,ValueTypes:b,Variants:m,__namedExportsOrder:be,default:de},Symbol.toStringTag,{value:"Module"}));export{r as B,l as C,p as D,w as L,h as P,ye as S,u as T,m as V,v as a,f as b,d as c,b as d,g as e};
