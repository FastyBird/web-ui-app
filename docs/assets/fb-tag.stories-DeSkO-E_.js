import{r as a,D as j}from"./vue.esm-bundler-DEpQrfwO.js";import{a4 as r,v as B,d as H,ac as q}from"./web-ui-components.es-nLJZCm2K.js";import{n as e,t as s,a as n}from"./web-ui-constants.es-Bfh99ZXh.js";const J={component:r,title:"Components/Data/Tag",excludeStories:/.*Data$/},g={tags:["hideInSidebar"]},b={parameters:{docs:{source:{code:`
<template>
    <fb-tag variant="${e.PRIMARY}">Tag 1</fb-tag>
    <fb-tag variant="${e.INFO}">Tag 2</fb-tag>
    <fb-tag variant="${e.SUCCESS}">Tag 3</fb-tag>
    <fb-tag variant="${e.WARNING}">Tag 4</fb-tag>
    <fb-tag variant="${e.DANGER}">Tag 5</fb-tag>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTag:r},template:`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-tag variant="${e.PRIMARY}">Tag 1</fb-tag>
        <fb-tag variant="${e.INFO}">Tag 2</fb-tag>
        <fb-tag variant="${e.SUCCESS}">Tag 3</fb-tag>
        <fb-tag variant="${e.WARNING}">Tag 4</fb-tag>
        <fb-tag variant="${e.DANGER}">Tag 5</fb-tag>
    </div>
</div>`})},f={parameters:{docs:{source:{code:`
<template>
    <fb-tag variant="${e.PRIMARY}" closable>Tag 1</fb-tag>
    <fb-tag variant="${e.INFO}" closable>Tag 2</fb-tag>
    <fb-tag variant="${e.SUCCESS}" closable>Tag 3</fb-tag>
    <fb-tag variant="${e.WARNING}" closable>Tag 4</fb-tag>
    <fb-tag variant="${e.DANGER}" closable>Tag 5</fb-tag>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTag:r},template:`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-tag variant="${e.PRIMARY}" closable>Tag 1</fb-tag>
        <fb-tag variant="${e.INFO}" closable>Tag 2</fb-tag>
        <fb-tag variant="${e.SUCCESS}" closable>Tag 3</fb-tag>
        <fb-tag variant="${e.WARNING}" closable>Tag 4</fb-tag>
        <fb-tag variant="${e.DANGER}" closable>Tag 5</fb-tag>
    </div>
</div>`})},d={parameters:{docs:{source:{code:`
<template>
    <fb-tag
        v-for="tag in dynamicTags"
        :key="tag"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
    >
        {{ tag }}
    </fb-tag>

    <fb-input
        v-if="inputVisible"
        ref="InputRef"
        v-model="inputValue"
        size="${s.SMALL}"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
    />

    <fb-button v-else size="${s.SMALL}" @click="showInput">
        + New Tag
    </fb-button>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { FbButton, FbInput } from '@fastybird/web-ui-components';

const inputValue = ref('');
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof FbInput>>();

const handleClose = (tag: string) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
}

const showInput = () => {
    inputVisible.value = true

    nextTick(() => {
        InputRef.value!.input!.focus()
    });
}

const handleInputConfirm = () => {
    if (inputValue.value) {
        dynamicTags.value.push(inputValue.value);
    }

    inputVisible.value = false;
    inputValue.value = '';
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTag:r,FbButton:B,FbInput:H},setup:()=>{const i=a(""),c=a(["Tag 1","Tag 2","Tag 3"]),o=a(!1),l=a();return{inputValue:i,dynamicTags:c,inputVisible:o,InputRef:l,handleClose:k=>{c.value.splice(c.value.indexOf(k),1)},showInput:async()=>{o.value=!0,await j(),l.value.input.focus()},handleInputConfirm:()=>{i.value&&c.value.push(i.value),o.value=!1,i.value=""}}},template:`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-tag
            v-for="tag in dynamicTags"
            :key="tag"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
        >
            {{ tag }}
        </fb-tag>

        <fb-input
            v-if="inputVisible"
            ref="InputRef"
            v-model="inputValue"
            size="${s.SMALL}"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
        />

        <fb-button v-else size="${s.SMALL}" @click="showInput">
            + New Tag
        </fb-button>
    </div>
</div>`})},p={parameters:{docs:{source:{code:`
<template>
    <fb-tag size="${s.LARGE}">Large</fb-tag>
    <fb-tag>Default</fb-tag>
    <fb-tag size="${s.SMALL}">Small</fb-tag>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTag:r},template:`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-tag size="${s.LARGE}">Large</fb-tag>
        <fb-tag>Default</fb-tag>
        <fb-tag size="${s.SMALL}">Small</fb-tag>
    </div>
</div>`})},v={parameters:{docs:{source:{code:`
<template>
    <div>
        <span>Dark</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.DARK}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div>
        <span>Light</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.LIGHT}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div>
        <span>Plain</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.PLAIN}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import type { TagProps } from '@fastybird/web-ui-components'

type Item = { variant: TagProps['variant']; label: string };

const items = ref<Array<Item>>([
    { variant: VariantTypes.PRIMARY, label: 'Tag 1' },
    { variant: VariantTypes.INFO, label: 'Tag 2' },
    { variant: VariantTypes.SUCCESS, label: 'Tag 3' },
    { variant: VariantTypes.WARNING, label: 'Tag 4' },
    { variant: VariantTypes.DANGER, label: 'Tag 5' },
]);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTag:r,FbButton:B,FbInput:H},setup:()=>({items:a([{variant:e.PRIMARY,label:"Tag 1"},{variant:e.INFO,label:"Tag 2"},{variant:e.SUCCESS,label:"Tag 3"},{variant:e.WARNING,label:"Tag 4"},{variant:e.DANGER,label:"Tag 5"}])}),template:`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <span>Dark</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.DARK}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div class="fb-tag-story-block__item">
        <span>Light</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.LIGHT}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div class="fb-tag-story-block__item">
        <span>Plain</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.PLAIN}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
</div>`})},m={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.DARK}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.LIGHT}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.PLAIN}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import type { TagProps } from '@fastybird/web-ui-components'

type Item = { variant: TagProps['variant']; label: string };

const items = ref<Array<Item>>([
    { variant: VariantTypes.PRIMARY, label: 'Tag 1' },
    { variant: VariantTypes.INFO, label: 'Tag 2' },
    { variant: VariantTypes.SUCCESS, label: 'Tag 3' },
    { variant: VariantTypes.WARNING, label: 'Tag 4' },
    { variant: VariantTypes.DANGER, label: 'Tag 5' },
]);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTag:r},setup:()=>({items:a([{variant:e.PRIMARY,label:"Tag 1"},{variant:e.INFO,label:"Tag 2"},{variant:e.SUCCESS,label:"Tag 3"},{variant:e.WARNING,label:"Tag 4"},{variant:e.DANGER,label:"Tag 5"}])}),template:`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.DARK}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div class="fb-tag-story-block__item">
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.LIGHT}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div class="fb-tag-story-block__item">
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="${n.PLAIN}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
</div>`})},u={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-check-tag checked>Checked</fb-check-tag>
        <fb-check-tag :checked="checked" @change="onChange">Toggle me</fb-check-tag>
    </div>
    <div>
        <fb-check-tag :checked="checked1" type="primary" @change="onChange1">
            Tag 1
        </fb-check-tag>
        <fb-check-tag :checked="checked2" type="success" @change="onChange2">
            Tag 2
        </fb-check-tag>
        <fb-check-tag :checked="checked3" type="info" @change="onChange3">
            Tag 3
        </fb-check-tag>
        <fb-check-tag :checked="checked4" type="warning" @change="onChange4">
            Tag 4
        </fb-check-tag>
        <fb-check-tag :checked="checked5" type="danger" @change="onChange5">
            Tag 5
        </fb-check-tag>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';

const checked = ref(false);
const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
const checked4 = ref(true);
const checked5 = ref(true);

const onChange = (status: boolean): void => {
  checked.value = status;
}

const onChange1 = (status: boolean): void => {
  checked1.value = status;
}

const onChange2 = (status: boolean): void => {
  checked2.value = status;
}

const onChange3 = (status: boolean): void => {
  checked3.value = status;
}

const onChange4 = (status: boolean): void => {
  checked4.value = status;
}

const onChange5 = (status: boolean): void => {
  checked5.value = status;
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCheckTag:q},setup:()=>{const i=a(!1),c=a(!0),o=a(!0),l=a(!0),h=a(!0),T=a(!0);return{checked:i,checked1:c,checked2:o,checked3:l,checked4:h,checked5:T,onChange:t=>{i.value=t},onChange1:t=>{c.value=t},onChange2:t=>{o.value=t},onChange3:t=>{l.value=t},onChange4:t=>{h.value=t},onChange5:t=>{T.value=t}}},template:`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-check-tag checked>Checked</fb-check-tag>
        <fb-check-tag :checked="checked" @change="onChange">Toggle me</fb-check-tag>
    </div>
    <div class="fb-tag-story-block__item">
        <fb-check-tag :checked="checked1" type="primary" @change="onChange1">
            Tag 1
        </fb-check-tag>
        <fb-check-tag :checked="checked2" type="success" @change="onChange2">
            Tag 2
        </fb-check-tag>
        <fb-check-tag :checked="checked3" type="info" @change="onChange3">
            Tag 3
        </fb-check-tag>
        <fb-check-tag :checked="checked4" type="warning" @change="onChange4">
            Tag 4
        </fb-check-tag>
        <fb-check-tag :checked="checked5" type="danger" @change="onChange5">
            Tag 5
        </fb-check-tag>
    </div>
</div>`})};var y,C,I;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ["hideInSidebar"]
}`,...(I=(C=g.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var R,S,A;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tag variant="\${VariantTypes.PRIMARY}">Tag 1</fb-tag>
    <fb-tag variant="\${VariantTypes.INFO}">Tag 2</fb-tag>
    <fb-tag variant="\${VariantTypes.SUCCESS}">Tag 3</fb-tag>
    <fb-tag variant="\${VariantTypes.WARNING}">Tag 4</fb-tag>
    <fb-tag variant="\${VariantTypes.DANGER}">Tag 5</fb-tag>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTag
    },
    template: \`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-tag variant="\${VariantTypes.PRIMARY}">Tag 1</fb-tag>
        <fb-tag variant="\${VariantTypes.INFO}">Tag 2</fb-tag>
        <fb-tag variant="\${VariantTypes.SUCCESS}">Tag 3</fb-tag>
        <fb-tag variant="\${VariantTypes.WARNING}">Tag 4</fb-tag>
        <fb-tag variant="\${VariantTypes.DANGER}">Tag 5</fb-tag>
    </div>
</div>\`
  })
}`,...(A=(S=b.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var V,$,N;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tag variant="\${VariantTypes.PRIMARY}" closable>Tag 1</fb-tag>
    <fb-tag variant="\${VariantTypes.INFO}" closable>Tag 2</fb-tag>
    <fb-tag variant="\${VariantTypes.SUCCESS}" closable>Tag 3</fb-tag>
    <fb-tag variant="\${VariantTypes.WARNING}" closable>Tag 4</fb-tag>
    <fb-tag variant="\${VariantTypes.DANGER}" closable>Tag 5</fb-tag>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTag
    },
    template: \`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-tag variant="\${VariantTypes.PRIMARY}" closable>Tag 1</fb-tag>
        <fb-tag variant="\${VariantTypes.INFO}" closable>Tag 2</fb-tag>
        <fb-tag variant="\${VariantTypes.SUCCESS}" closable>Tag 3</fb-tag>
        <fb-tag variant="\${VariantTypes.WARNING}" closable>Tag 4</fb-tag>
        <fb-tag variant="\${VariantTypes.DANGER}" closable>Tag 5</fb-tag>
    </div>
</div>\`
  })
}`,...(N=($=f.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var _,L,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tag
        v-for="tag in dynamicTags"
        :key="tag"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
    >
        {{ tag }}
    </fb-tag>

    <fb-input
        v-if="inputVisible"
        ref="InputRef"
        v-model="inputValue"
        size="\${ComponentSizeTypes.SMALL}"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
    />

    <fb-button v-else size="\${ComponentSizeTypes.SMALL}" @click="showInput">
        + New Tag
    </fb-button>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { FbButton, FbInput } from '@fastybird/web-ui-components';

const inputValue = ref('');
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof FbInput>>();

const handleClose = (tag: string) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
}

const showInput = () => {
    inputVisible.value = true

    nextTick(() => {
        InputRef.value!.input!.focus()
    });
}

const handleInputConfirm = () => {
    if (inputValue.value) {
        dynamicTags.value.push(inputValue.value);
    }

    inputVisible.value = false;
    inputValue.value = '';
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTag,
      FbButton,
      FbInput
    },
    setup: (): {
      inputValue: Ref<string>;
      dynamicTags: Ref<string[]>;
      inputVisible: Ref<boolean>;
      InputRef: Ref<InstanceType<typeof FbInput>>;
      handleClose: () => void;
      showInput: () => void;
      handleInputConfirm: () => void;
    } => {
      const inputValue = ref("");
      const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);
      const inputVisible = ref(false);
      const InputRef = ref<InstanceType<typeof FbInput>>();
      const handleClose = (tag: string): void => {
        dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
      };
      const showInput = async (): Promise<void> => {
        inputVisible.value = true;
        await nextTick();
        InputRef.value!.input!.focus();
      };
      const handleInputConfirm = (): void => {
        if (inputValue.value) {
          dynamicTags.value.push(inputValue.value);
        }
        inputVisible.value = false;
        inputValue.value = "";
      };
      return {
        inputValue,
        dynamicTags,
        inputVisible,
        InputRef,
        handleClose,
        showInput,
        handleInputConfirm
      };
    },
    template: \`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-tag
            v-for="tag in dynamicTags"
            :key="tag"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
        >
            {{ tag }}
        </fb-tag>

        <fb-input
            v-if="inputVisible"
            ref="InputRef"
            v-model="inputValue"
            size="\${ComponentSizeTypes.SMALL}"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
        />

        <fb-button v-else size="\${ComponentSizeTypes.SMALL}" @click="showInput">
            + New Tag
        </fb-button>
    </div>
</div>\`
  })
}`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var F,G,P;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tag size="\${ComponentSizeTypes.LARGE}">Large</fb-tag>
    <fb-tag>Default</fb-tag>
    <fb-tag size="\${ComponentSizeTypes.SMALL}">Small</fb-tag>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTag
    },
    template: \`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-tag size="\${ComponentSizeTypes.LARGE}">Large</fb-tag>
        <fb-tag>Default</fb-tag>
        <fb-tag size="\${ComponentSizeTypes.SMALL}">Small</fb-tag>
    </div>
</div>\`
  })
}`,...(P=(G=p.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var D,M,w;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <span>Dark</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.DARK}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div>
        <span>Light</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.LIGHT}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div>
        <span>Plain</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.PLAIN}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import type { TagProps } from '@fastybird/web-ui-components'

type Item = { variant: TagProps['variant']; label: string };

const items = ref<Array<Item>>([
    { variant: VariantTypes.PRIMARY, label: 'Tag 1' },
    { variant: VariantTypes.INFO, label: 'Tag 2' },
    { variant: VariantTypes.SUCCESS, label: 'Tag 3' },
    { variant: VariantTypes.WARNING, label: 'Tag 4' },
    { variant: VariantTypes.DANGER, label: 'Tag 5' },
]);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTag,
      FbButton,
      FbInput
    },
    setup: (): {
      items: Ref<Array<{
        variant: TagProps["variant"];
        label: string;
      }>>;
    } => {
      type Item = {
        variant: TagProps["variant"];
        label: string;
      };
      const items = ref<Array<Item>>([{
        variant: VariantTypes.PRIMARY,
        label: "Tag 1"
      }, {
        variant: VariantTypes.INFO,
        label: "Tag 2"
      }, {
        variant: VariantTypes.SUCCESS,
        label: "Tag 3"
      }, {
        variant: VariantTypes.WARNING,
        label: "Tag 4"
      }, {
        variant: VariantTypes.DANGER,
        label: "Tag 5"
      }]);
      return {
        items
      };
    },
    template: \`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <span>Dark</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.DARK}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div class="fb-tag-story-block__item">
        <span>Light</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.LIGHT}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div class="fb-tag-story-block__item">
        <span>Plain</span>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.PLAIN}"
        >
            {{ item.label }}
        </fb-tag>
    </div>
</div>\`
  })
}`,...(w=(M=v.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var z,O,x;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.DARK}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.LIGHT}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div>
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.PLAIN}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import type { TagProps } from '@fastybird/web-ui-components'

type Item = { variant: TagProps['variant']; label: string };

const items = ref<Array<Item>>([
    { variant: VariantTypes.PRIMARY, label: 'Tag 1' },
    { variant: VariantTypes.INFO, label: 'Tag 2' },
    { variant: VariantTypes.SUCCESS, label: 'Tag 3' },
    { variant: VariantTypes.WARNING, label: 'Tag 4' },
    { variant: VariantTypes.DANGER, label: 'Tag 5' },
]);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTag
    },
    setup: (): {
      items: Ref<Array<{
        variant: TagProps["variant"];
        label: string;
      }>>;
    } => {
      type Item = {
        variant: TagProps["variant"];
        label: string;
      };
      const items = ref<Array<Item>>([{
        variant: VariantTypes.PRIMARY,
        label: "Tag 1"
      }, {
        variant: VariantTypes.INFO,
        label: "Tag 2"
      }, {
        variant: VariantTypes.SUCCESS,
        label: "Tag 3"
      }, {
        variant: VariantTypes.WARNING,
        label: "Tag 4"
      }, {
        variant: VariantTypes.DANGER,
        label: "Tag 5"
      }]);
      return {
        items
      };
    },
    template: \`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.DARK}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div class="fb-tag-story-block__item">
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.LIGHT}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
    <div class="fb-tag-story-block__item">
        <fb-tag
            v-for="item in items"
            :key="item.label"
            :variant="item.variant"
            effect="\${EffectTypes.PLAIN}"
            round
        >
            {{ item.label }}
        </fb-tag>
    </div>
</div>\`
  })
}`,...(x=(O=m.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var U,W,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-check-tag checked>Checked</fb-check-tag>
        <fb-check-tag :checked="checked" @change="onChange">Toggle me</fb-check-tag>
    </div>
    <div>
        <fb-check-tag :checked="checked1" type="primary" @change="onChange1">
            Tag 1
        </fb-check-tag>
        <fb-check-tag :checked="checked2" type="success" @change="onChange2">
            Tag 2
        </fb-check-tag>
        <fb-check-tag :checked="checked3" type="info" @change="onChange3">
            Tag 3
        </fb-check-tag>
        <fb-check-tag :checked="checked4" type="warning" @change="onChange4">
            Tag 4
        </fb-check-tag>
        <fb-check-tag :checked="checked5" type="danger" @change="onChange5">
            Tag 5
        </fb-check-tag>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';

const checked = ref(false);
const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
const checked4 = ref(true);
const checked5 = ref(true);

const onChange = (status: boolean): void => {
  checked.value = status;
}

const onChange1 = (status: boolean): void => {
  checked1.value = status;
}

const onChange2 = (status: boolean): void => {
  checked2.value = status;
}

const onChange3 = (status: boolean): void => {
  checked3.value = status;
}

const onChange4 = (status: boolean): void => {
  checked4.value = status;
}

const onChange5 = (status: boolean): void => {
  checked5.value = status;
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCheckTag
    },
    setup: (): {
      checked: Ref<boolean>;
      checked1: Ref<boolean>;
      checked2: Ref<boolean>;
      checked3: Ref<boolean>;
      checked4: Ref<boolean>;
      checked5: Ref<boolean>;
      onChange: (status: boolean) => void;
      onChange1: (status: boolean) => void;
      onChange2: (status: boolean) => void;
      onChange3: (status: boolean) => void;
      onChange4: (status: boolean) => void;
      onChange5: (status: boolean) => void;
    } => {
      const checked = ref(false);
      const checked1 = ref(true);
      const checked2 = ref(true);
      const checked3 = ref(true);
      const checked4 = ref(true);
      const checked5 = ref(true);
      const onChange = (status: boolean): void => {
        checked.value = status;
      };
      const onChange1 = (status: boolean): void => {
        checked1.value = status;
      };
      const onChange2 = (status: boolean): void => {
        checked2.value = status;
      };
      const onChange3 = (status: boolean): void => {
        checked3.value = status;
      };
      const onChange4 = (status: boolean): void => {
        checked4.value = status;
      };
      const onChange5 = (status: boolean): void => {
        checked5.value = status;
      };
      return {
        checked,
        checked1,
        checked2,
        checked3,
        checked4,
        checked5,
        onChange,
        onChange1,
        onChange2,
        onChange3,
        onChange4,
        onChange5
      };
    },
    template: \`
<div class="fb-tag-story-block">
    <div class="fb-tag-story-block__item">
        <fb-check-tag checked>Checked</fb-check-tag>
        <fb-check-tag :checked="checked" @change="onChange">Toggle me</fb-check-tag>
    </div>
    <div class="fb-tag-story-block__item">
        <fb-check-tag :checked="checked1" type="primary" @change="onChange1">
            Tag 1
        </fb-check-tag>
        <fb-check-tag :checked="checked2" type="success" @change="onChange2">
            Tag 2
        </fb-check-tag>
        <fb-check-tag :checked="checked3" type="info" @change="onChange3">
            Tag 3
        </fb-check-tag>
        <fb-check-tag :checked="checked4" type="warning" @change="onChange4">
            Tag 4
        </fb-check-tag>
        <fb-check-tag :checked="checked5" type="danger" @change="onChange5">
            Tag 5
        </fb-check-tag>
    </div>
</div>\`
  })
}`,...(Y=(W=u.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const Q=["Component","BasicUsage","Removable","Dynamical","Sizes","Theme","Rounded","Checkable"],se=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:b,Checkable:u,Component:g,Dynamical:d,Removable:f,Rounded:m,Sizes:p,Theme:v,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{b as B,u as C,d as D,f as R,p as S,se as T,v as a,m as b};
