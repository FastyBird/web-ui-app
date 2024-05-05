import{r as t,o as F}from"./vue.esm-bundler-DEpQrfwO.js";import{a1 as r,v as M,a2 as j}from"./web-ui-components.es-nLJZCm2K.js";import{a as p}from"./web-ui-constants.es-Bfh99ZXh.js";const w={component:r,title:"Components/Basic/Scrollbar",excludeStories:/.*Data$/},o={parameters:{docs:{source:{code:`
<template>
    <fb-scrollbar height="400px">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </fb-scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fb-color-primary-light-9);
  color: var(--fb-color-primary);
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbScrollbar:r},template:`
<div class="fb-scrollbar-story-block">
    <fb-scrollbar height="400px">
        <p v-for="item in 20" :key="item" class="fb-scrollbar-story-block__item">
            {{ item }}
        </p>
    </fb-scrollbar>
</div>`})},l={parameters:{docs:{source:{code:`
<template>
    <fb-scrollbar height="400px" shadow="${p.DARK}">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </fb-scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fb-color-primary-light-9);
  color: var(--fb-color-primary);
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbScrollbar:r},template:`
<div class="fb-scrollbar-story-block">
    <fb-scrollbar height="400px" shadow="${p.DARK}">
        <p v-for="item in 20" :key="item" class="fb-scrollbar-story-block__item">
            {{ item }}
        </p>
    </fb-scrollbar>
</div>`})},a={parameters:{docs:{source:{code:`
<template>
    <fb-scrollbar>
        <div class="scrollbar-flex-content">
            <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
                {{ item }}
            </p>
        </div>
    </fb-scrollbar>
</template>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fb-color-danger-light-9);
  color: var(--fb-color-danger);
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbScrollbar:r},template:`
<div class="fb-scrollbar-story-block">
    <fb-scrollbar>
        <div class="fb-scrollbar-story-block__inner">
            <p v-for="item in 50" :key="item" class="fb-scrollbar-story-block__item--vertical">
                {{ item }}
            </p>
        </div>
    </fb-scrollbar>
</div>`})},s={parameters:{docs:{source:{code:`
<template>
    <fb-button @click="add">Add Item</fb-button>
    <fb-button @click="onDelete">Delete Item</fb-button>
    <fb-scrollbar max-height="400px">
        <p v-for="item in count" :key="item" class="scrollbar-demo-item">
            {{ item }}
        </p>
    </fb-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(3);

const add = () => {
  count.value++;
}

const onDelete = () => {
  if (count.value > 0) {
    count.value--;
  }
}
<\/script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fb-color-primary-light-9);
  color: var(--fb-color-primary);
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbScrollbar:r,FbButton:M},setup:()=>{const e=t(3);return{count:e,add:()=>{e.value++},onDelete:()=>{e.value>0&&e.value--}}},template:`
<div class="fb-scrollbar-story-block">
    <fb-button @click="add">Add Item</fb-button>

    <fb-button @click="onDelete">Delete Item</fb-button>

    <fb-scrollbar max-height="400px">
        <p v-for="item in count" :key="item" class="fb-scrollbar-story-block__item">
            {{ item }}
        </p>
    </fb-scrollbar>
</div>`})},c={parameters:{docs:{source:{code:`
<template>
    <fb-scrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">
        <div ref="innerRef">
            <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
                {{ item }}
            </p>
        </div>
    </fb-scrollbar>

    <fb-slider
        v-model="value"
        :max="max"
        :format-tooltip="formatTooltip"
        @input="inputSlider"
    />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { FbScrollbar } from 'element-plus'

const max = ref(0);
const value = ref(0);
const innerRef = ref<HTMLDivElement | undefined>();
const scrollbarRef = ref<InstanceType<typeof FbScrollbar>>();

onMounted((): void => {
  max.value = innerRef.value!.clientHeight - 380;
})

const inputSlider = (value: number): void => {
  scrollbarRef.value!.setScrollTop(value);
}

const scroll = ({ scrollTop }): void => {
  value.value = scrollTop;
}

const formatTooltip = (value: number): string => {
  return \`\${value} px\`;
}
<\/script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fb-color-primary-light-9);
  color: var(--fb-color-primary);
}

.fb-slider {
  margin-top: 20px;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbScrollbar:r,FbSlider:j},setup:()=>{const e=t(0),i=t(0),b=t(),m=t();return F(()=>{e.value=b.value.clientHeight-380}),{max:e,value:i,innerRef:b,scrollbarRef:m,inputSlider:n=>{m.value.setScrollTop(n)},scroll:({scrollTop:n})=>{i.value=n},formatTooltip:n=>`${n} px`}},template:`
<div class="fb-scrollbar-story-block">
    <fb-scrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">
        <div ref="innerRef">
            <p v-for="item in 20" :key="item" class="fb-scrollbar-story-block__item">
                {{ item }}
            </p>
        </div>
    </fb-scrollbar>

    <fb-slider
        v-model="value"
        :max="max"
        :format-tooltip="formatTooltip"
        @input="inputSlider"
    />
</div>`})};var d,f,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-scrollbar height="400px">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </fb-scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fb-color-primary-light-9);
  color: var(--fb-color-primary);
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbScrollbar
    },
    template: \`
<div class="fb-scrollbar-story-block">
    <fb-scrollbar height="400px">
        <p v-for="item in 20" :key="item" class="fb-scrollbar-story-block__item">
            {{ item }}
        </p>
    </fb-scrollbar>
</div>\`
  })
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var v,g,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-scrollbar height="400px" shadow="\${EffectTypes.DARK}">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </fb-scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fb-color-primary-light-9);
  color: var(--fb-color-primary);
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbScrollbar
    },
    template: \`
<div class="fb-scrollbar-story-block">
    <fb-scrollbar height="400px" shadow="\${EffectTypes.DARK}">
        <p v-for="item in 20" :key="item" class="fb-scrollbar-story-block__item">
            {{ item }}
        </p>
    </fb-scrollbar>
</div>\`
  })
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,h,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-scrollbar>
        <div class="scrollbar-flex-content">
            <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
                {{ item }}
            </p>
        </div>
    </fb-scrollbar>
</template>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fb-color-danger-light-9);
  color: var(--fb-color-danger);
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbScrollbar
    },
    template: \`
<div class="fb-scrollbar-story-block">
    <fb-scrollbar>
        <div class="fb-scrollbar-story-block__inner">
            <p v-for="item in 50" :key="item" class="fb-scrollbar-story-block__item--vertical">
                {{ item }}
            </p>
        </div>
    </fb-scrollbar>
</div>\`
  })
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var S,_,R;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button @click="add">Add Item</fb-button>
    <fb-button @click="onDelete">Delete Item</fb-button>
    <fb-scrollbar max-height="400px">
        <p v-for="item in count" :key="item" class="scrollbar-demo-item">
            {{ item }}
        </p>
    </fb-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(3);

const add = () => {
  count.value++;
}

const onDelete = () => {
  if (count.value > 0) {
    count.value--;
  }
}
<\/script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fb-color-primary-light-9);
  color: var(--fb-color-primary);
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbScrollbar,
      FbButton
    },
    setup: () => {
      const count = ref(3);
      const add = () => {
        count.value++;
      };
      const onDelete = () => {
        if (count.value > 0) {
          count.value--;
        }
      };
      return {
        count,
        add,
        onDelete
      };
    },
    template: \`
<div class="fb-scrollbar-story-block">
    <fb-button @click="add">Add Item</fb-button>

    <fb-button @click="onDelete">Delete Item</fb-button>

    <fb-scrollbar max-height="400px">
        <p v-for="item in count" :key="item" class="fb-scrollbar-story-block__item">
            {{ item }}
        </p>
    </fb-scrollbar>
</div>\`
  })
}`,...(R=(_=s.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var T,D,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-scrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">
        <div ref="innerRef">
            <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
                {{ item }}
            </p>
        </div>
    </fb-scrollbar>

    <fb-slider
        v-model="value"
        :max="max"
        :format-tooltip="formatTooltip"
        @input="inputSlider"
    />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { FbScrollbar } from 'element-plus'

const max = ref(0);
const value = ref(0);
const innerRef = ref<HTMLDivElement | undefined>();
const scrollbarRef = ref<InstanceType<typeof FbScrollbar>>();

onMounted((): void => {
  max.value = innerRef.value!.clientHeight - 380;
})

const inputSlider = (value: number): void => {
  scrollbarRef.value!.setScrollTop(value);
}

const scroll = ({ scrollTop }): void => {
  value.value = scrollTop;
}

const formatTooltip = (value: number): string => {
  return \\\`\\$\\{value\\} px\\\`;
}
<\/script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--fb-color-primary-light-9);
  color: var(--fb-color-primary);
}

.fb-slider {
  margin-top: 20px;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbScrollbar,
      FbSlider
    },
    setup: () => {
      const max = ref<number>(0);
      const value = ref<number>(0);
      const innerRef = ref<HTMLDivElement | undefined>();
      const scrollbarRef = ref<InstanceType<typeof FbScrollbar>>();
      onMounted((): void => {
        max.value = innerRef.value!.clientHeight - 380;
      });
      const inputSlider = (value: number): void => {
        scrollbarRef.value!.setScrollTop(value);
      };
      const scroll = ({
        scrollTop
      }): void => {
        value.value = scrollTop;
      };
      const formatTooltip = (value: number): string => {
        return \`\${value} px\`;
      };
      return {
        max,
        value,
        innerRef,
        scrollbarRef,
        inputSlider,
        scroll,
        formatTooltip
      };
    },
    template: \`
<div class="fb-scrollbar-story-block">
    <fb-scrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">
        <div ref="innerRef">
            <p v-for="item in 20" :key="item" class="fb-scrollbar-story-block__item">
                {{ item }}
            </p>
        </div>
    </fb-scrollbar>

    <fb-slider
        v-model="value"
        :max="max"
        :format-tooltip="formatTooltip"
        @input="inputSlider"
    />
</div>\`
  })
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const H=["BasicUsage","WithShadow","Horizontal","MaxHeight","Manual"],L=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:o,Horizontal:a,Manual:c,MaxHeight:s,WithShadow:l,__namedExportsOrder:H,default:w},Symbol.toStringTag,{value:"Module"}));export{o as B,a as H,s as M,L as S,l as W,c as a};
