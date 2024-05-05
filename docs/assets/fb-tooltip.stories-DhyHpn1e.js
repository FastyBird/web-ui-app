import{r as o,o as J,A as P}from"./vue.esm-bundler-DEpQrfwO.js";import{a7 as t,v as n}from"./web-ui-components.es-nLJZCm2K.js";const $={component:t,title:"Components/Feedback/Tooltip",excludeStories:/.*Data$/},b={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-tooltip
            effect="dark"
            content="Top Left prompts info"
            placement="top-start"
        >
            <fb-button>top-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Top Center prompts info"
            placement="top"
        >
            <fb-button>top</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Top Right prompts info"
            placement="top-end"
        >
            <fb-button>top-end</fb-button>
        </fb-tooltip>
    </div>
    <div>
        <fb-tooltip
            effect="dark"
            content="Left Top prompts info"
            placement="left-start"
        >
            <fb-button>left-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Top prompts info"
            placement="right-start"
        >
            <fb-button>right-start</fb-button>
        </fb-tooltip>
    </div>
    <div>
        <fb-tooltip
            effect="dark"
            content="Left Center prompts info"
            placement="left"
        >
            <fb-button class="mt-3 mb-3">left</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Center prompts info"
            placement="right"
        >
            <fb-button>right</fb-button>
        </fb-tooltip>
    </div>
    <div>
        <fb-tooltip
            effect="dark"
            content="Left Bottom prompts info"
            placement="left-end"
        >
            <fb-button>left-end</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Bottom prompts info"
            placement="right-end"
        >
            <fb-button>right-end</fb-button>
        </fb-tooltip>
    </div>
    <div>
        <fb-tooltip
            effect="dark"
            content="Bottom Left prompts info"
            placement="bottom-start"
        >
            <fb-button>bottom-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Bottom Center prompts info"
            placement="bottom"
        >
            <fb-button>bottom</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Bottom Right prompts info"
            placement="bottom-end"
        >
            <fb-button>bottom-end</fb-button>
        </fb-tooltip>
    </div>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTooltip:t,FbButton:n},template:`
<div class="fb-tooltip-story-block">
    <div class="fb-tooltip-story-block__layout-row-1">
        <fb-tooltip
            effect="dark"
            content="Top Left prompts info"
            placement="top-start"
        >
            <fb-button>top-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Top Center prompts info"
            placement="top"
        >
            <fb-button>top</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Top Right prompts info"
            placement="top-end"
        >
            <fb-button>top-end</fb-button>
        </fb-tooltip>
    </div>
    <div class="fb-tooltip-story-block__layout-row-2">
        <fb-tooltip
            effect="dark"
            content="Left Top prompts info"
            placement="left-start"
        >
            <fb-button>left-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Top prompts info"
            placement="right-start"
        >
            <fb-button>right-start</fb-button>
        </fb-tooltip>
    </div>
    <div class="fb-tooltip-story-block__layout-row-3">
        <fb-tooltip
            effect="dark"
            content="Left Center prompts info"
            placement="left"
        >
            <fb-button class="mt-3 mb-3">left</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Center prompts info"
            placement="right"
        >
            <fb-button>right</fb-button>
        </fb-tooltip>
    </div>
    <div class="fb-tooltip-story-block__layout-row-4">
        <fb-tooltip
            effect="dark"
            content="Left Bottom prompts info"
            placement="left-end"
        >
            <fb-button>left-end</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Bottom prompts info"
            placement="right-end"
        >
            <fb-button>right-end</fb-button>
        </fb-tooltip>
    </div>
    <div class="fb-tooltip-story-block__layout-row-5">
        <fb-tooltip
            effect="dark"
            content="Bottom Left prompts info"
            placement="bottom-start"
        >
            <fb-button>bottom-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Bottom Center prompts info"
            placement="bottom"
        >
            <fb-button>bottom</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Bottom Right prompts info"
            placement="bottom-end"
        >
            <fb-button>bottom-end</fb-button>
        </fb-tooltip>
    </div>
</div>`})},l={parameters:{docs:{source:{code:`
<template>
    <fb-tooltip content="Top center" placement="top">
        <fb-button>Dark</fb-button>
    </fb-tooltip>

    <fb-tooltip content="Bottom center" placement="bottom" effect="light">
        <fb-button>Light</fb-button>
    </fb-tooltip>

    <fb-tooltip content="Bottom center" effect="customized-tooltip">
        <fb-button>Customized theme</fb-button>
    </fb-tooltip>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTooltip:t,FbButton:n},template:`
<fb-tooltip content="Top center" placement="top">
    <fb-button>Dark</fb-button>
</fb-tooltip>

<fb-tooltip content="Bottom center" placement="bottom" effect="light">
    <fb-button>Light</fb-button>
</fb-tooltip>

<fb-tooltip content="Bottom center" effect="customized-tooltip">
    <fb-button>Customized theme</fb-button>
</fb-tooltip>`})},p={parameters:{docs:{source:{code:`
<template>
    <fb-tooltip placement="top">
        <template #content> multiple lines<br />second line </template>
        <fb-button>Top center</fb-button>
    </fb-tooltip>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTooltip:t,FbButton:n},template:`
<fb-tooltip placement="top">
    <template #content> multiple lines<br />second line </template>
    <fb-button>Top center</fb-button>
</fb-tooltip>`})},f={parameters:{docs:{source:{code:`
<template>
    <fb-tooltip
        :disabled="disabled"
        content="click to close tooltip function"
        placement="bottom"
        effect="light"
    >
        <fb-button @click="disabled = !disabled">
            click to {{ disabled ? 'active' : 'close' }} tooltip function
        </fb-button>
    </fb-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const disabled = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTooltip:t,FbButton:n},setup:()=>({disabled:o(!1)}),template:`
<fb-tooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
    effect="light"
>
    <fb-button @click="disabled = !disabled">
        click to {{ disabled ? 'active' : 'close' }} tooltip function
    </fb-button>
</fb-tooltip>`})},r={parameters:{docs:{source:{code:`
<template>
    <fb-tooltip
        content="<span>The content can be <strong>HTML</strong></span>"
        raw-content
    >
        <fb-button>hover me</fb-button>
    </fb-tooltip>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTooltip:t,FbButton:n},template:`
<fb-tooltip
    content="<span>The content can be <strong>HTML</strong></span>"
    raw-content
>
    <fb-button>hover me</fb-button>
</fb-tooltip>`})},s={parameters:{docs:{source:{code:`
<template>
    <fb-tooltip
        v-model:visible="visible"
        content="Bottom center"
        placement="bottom"
        effect="light"
        trigger="click"
        virtual-triggering
        :virtual-ref="triggerRef"
    />

    <fb-button @click="visible = !visible">Trigger me</fb-button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

const triggerRef = ref({
    getBoundingClientRect() {
        return position.value;
    },
});

const position = ref({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
});

const mousemoveHandler = (e) => {
    position.value = DOMRect.fromRect({
        width: 0,
        height: 0,
        x: e.clientX,
        y: e.clientY,
    });
};

onMounted(() => {
    document.addEventListener('mousemove', mousemoveHandler);
});

onUnmounted(() => {
    document.removeEventListener('mousemove', mousemoveHandler);
});
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTooltip:t,FbButton:n},setup:()=>{const e=o(!1),u=o({getBoundingClientRect(){return i.value}}),i=o({top:0,left:0,bottom:0,right:0}),d=v=>{i.value=DOMRect.fromRect({width:0,height:0,x:v.clientX,y:v.clientY})};return J(()=>{document.addEventListener("mousemove",d)}),P(()=>{document.removeEventListener("mousemove",d)}),{visible:e,triggerRef:u,position:i}},template:`
<fb-tooltip
    v-model:visible="visible"
    content="Bottom center"
    placement="bottom"
    effect="light"
    trigger="click"
    virtual-triggering
    :virtual-ref="triggerRef"
/>

<fb-button @click="visible = !visible">Trigger me</fb-button>`})},a={parameters:{docs:{source:{code:`
<template>
    <fb-button
        v-for="i in 3"
        :key="i"
        @mouseover="(e) => (buttonRef = e.currentTarget)"
        @click="visible = !visible"
    >
        Click to open tooltip
    </fb-button>

    <fb-tooltip
        ref="tooltipRef"
        :visible="visible"
        :popper-options="{
            modifiers: [
                {
                    name: 'computeStyles',
                    options: {
                        adaptive: false,
                        enabled: false,
                    },
                },
            ],
        }"
        :virtual-ref="buttonRef"
        virtual-triggering
        popper-class="singleton-tooltip"
    >
        <template #content>
            <span> Some content </span>
        </template>
    </fb-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const buttonRef = ref();
const tooltipRef = ref();

const visible = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTooltip:t,FbButton:n},setup:()=>{const e=o(),u=o(),i=o(!1);return{buttonRef:e,tooltipRef:u,visible:i}},template:`
<fb-button
    v-for="i in 3"
    :key="i"
    @mouseover="(e) => (buttonRef = e.currentTarget)"
    @click="visible = !visible"
>
    Click to open tooltip
</fb-button>

<fb-tooltip
    ref="tooltipRef"
    :visible="visible"
    :popper-options="{
        modifiers: [
            {
                name: 'computeStyles',
                options: {
                    adaptive: false,
                    enabled: false,
                },
            },
        ],
    }"
    :virtual-ref="buttonRef"
    virtual-triggering
    popper-class="singleton-tooltip"
>
    <template #content>
        <span> Some content </span>
    </template>
</fb-tooltip>`})},c={parameters:{docs:{source:{code:`
<template>
    <fb-tooltip :visible="visible">
        <template #content>
            <span>Content</span>
        </template>

        <fb-button @mouseenter="visible = true" @mouseleave="visible = false">
            Hover me
        </fb-button>
    </fb-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTooltip:t,FbButton:n},setup:()=>({visible:o(!1)}),template:`
<fb-tooltip :visible="visible">
    <template #content>
        <span>Content</span>
    </template>

    <fb-button @mouseenter="visible = true" @mouseleave="visible = false">
        Hover me
    </fb-button>
</fb-tooltip>`})},m={parameters:{docs:{source:{code:`
<template>
    <fb-tooltip content="I am an fb-tooltip">
        <fb-button>Trigger me</fb-button>
    </fb-tooltip>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTooltip:t,FbButton:n},template:`
<fb-tooltip content="I am an fb-tooltip">
    <fb-button>Trigger me</fb-button>
</fb-tooltip>`})};var g,h,k;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-tooltip
            effect="dark"
            content="Top Left prompts info"
            placement="top-start"
        >
            <fb-button>top-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Top Center prompts info"
            placement="top"
        >
            <fb-button>top</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Top Right prompts info"
            placement="top-end"
        >
            <fb-button>top-end</fb-button>
        </fb-tooltip>
    </div>
    <div>
        <fb-tooltip
            effect="dark"
            content="Left Top prompts info"
            placement="left-start"
        >
            <fb-button>left-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Top prompts info"
            placement="right-start"
        >
            <fb-button>right-start</fb-button>
        </fb-tooltip>
    </div>
    <div>
        <fb-tooltip
            effect="dark"
            content="Left Center prompts info"
            placement="left"
        >
            <fb-button class="mt-3 mb-3">left</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Center prompts info"
            placement="right"
        >
            <fb-button>right</fb-button>
        </fb-tooltip>
    </div>
    <div>
        <fb-tooltip
            effect="dark"
            content="Left Bottom prompts info"
            placement="left-end"
        >
            <fb-button>left-end</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Bottom prompts info"
            placement="right-end"
        >
            <fb-button>right-end</fb-button>
        </fb-tooltip>
    </div>
    <div>
        <fb-tooltip
            effect="dark"
            content="Bottom Left prompts info"
            placement="bottom-start"
        >
            <fb-button>bottom-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Bottom Center prompts info"
            placement="bottom"
        >
            <fb-button>bottom</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Bottom Right prompts info"
            placement="bottom-end"
        >
            <fb-button>bottom-end</fb-button>
        </fb-tooltip>
    </div>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTooltip,
      FbButton
    },
    template: \`
<div class="fb-tooltip-story-block">
    <div class="fb-tooltip-story-block__layout-row-1">
        <fb-tooltip
            effect="dark"
            content="Top Left prompts info"
            placement="top-start"
        >
            <fb-button>top-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Top Center prompts info"
            placement="top"
        >
            <fb-button>top</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Top Right prompts info"
            placement="top-end"
        >
            <fb-button>top-end</fb-button>
        </fb-tooltip>
    </div>
    <div class="fb-tooltip-story-block__layout-row-2">
        <fb-tooltip
            effect="dark"
            content="Left Top prompts info"
            placement="left-start"
        >
            <fb-button>left-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Top prompts info"
            placement="right-start"
        >
            <fb-button>right-start</fb-button>
        </fb-tooltip>
    </div>
    <div class="fb-tooltip-story-block__layout-row-3">
        <fb-tooltip
            effect="dark"
            content="Left Center prompts info"
            placement="left"
        >
            <fb-button class="mt-3 mb-3">left</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Center prompts info"
            placement="right"
        >
            <fb-button>right</fb-button>
        </fb-tooltip>
    </div>
    <div class="fb-tooltip-story-block__layout-row-4">
        <fb-tooltip
            effect="dark"
            content="Left Bottom prompts info"
            placement="left-end"
        >
            <fb-button>left-end</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Right Bottom prompts info"
            placement="right-end"
        >
            <fb-button>right-end</fb-button>
        </fb-tooltip>
    </div>
    <div class="fb-tooltip-story-block__layout-row-5">
        <fb-tooltip
            effect="dark"
            content="Bottom Left prompts info"
            placement="bottom-start"
        >
            <fb-button>bottom-start</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Bottom Center prompts info"
            placement="bottom"
        >
            <fb-button>bottom</fb-button>
        </fb-tooltip>
        <fb-tooltip
            effect="dark"
            content="Bottom Right prompts info"
            placement="bottom-end"
        >
            <fb-button>bottom-end</fb-button>
        </fb-tooltip>
    </div>
</div>\`
  })
}`,...(k=(h=b.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var T,R,B;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tooltip content="Top center" placement="top">
        <fb-button>Dark</fb-button>
    </fb-tooltip>

    <fb-tooltip content="Bottom center" placement="bottom" effect="light">
        <fb-button>Light</fb-button>
    </fb-tooltip>

    <fb-tooltip content="Bottom center" effect="customized-tooltip">
        <fb-button>Customized theme</fb-button>
    </fb-tooltip>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTooltip,
      FbButton
    },
    template: \`
<fb-tooltip content="Top center" placement="top">
    <fb-button>Dark</fb-button>
</fb-tooltip>

<fb-tooltip content="Bottom center" placement="bottom" effect="light">
    <fb-button>Light</fb-button>
</fb-tooltip>

<fb-tooltip content="Bottom center" effect="customized-tooltip">
    <fb-button>Customized theme</fb-button>
</fb-tooltip>\`
  })
}`,...(B=(R=l.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var S,C,L;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tooltip placement="top">
        <template #content> multiple lines<br />second line </template>
        <fb-button>Top center</fb-button>
    </fb-tooltip>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTooltip,
      FbButton
    },
    template: \`
<fb-tooltip placement="top">
    <template #content> multiple lines<br />second line </template>
    <fb-button>Top center</fb-button>
</fb-tooltip>\`
  })
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var F,y,_;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tooltip
        :disabled="disabled"
        content="click to close tooltip function"
        placement="bottom"
        effect="light"
    >
        <fb-button @click="disabled = !disabled">
            click to {{ disabled ? 'active' : 'close' }} tooltip function
        </fb-button>
    </fb-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const disabled = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTooltip,
      FbButton
    },
    setup: (): {
      disabled: Ref<boolean>;
    } => {
      const disabled = ref(false);
      return {
        disabled
      };
    },
    template: \`
<fb-tooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
    effect="light"
>
    <fb-button @click="disabled = !disabled">
        click to {{ disabled ? 'active' : 'close' }} tooltip function
    </fb-button>
</fb-tooltip>\`
  })
}`,...(_=(y=f.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var H,I,M;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tooltip
        content="<span>The content can be <strong>HTML</strong></span>"
        raw-content
    >
        <fb-button>hover me</fb-button>
    </fb-tooltip>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTooltip,
      FbButton
    },
    template: \`
<fb-tooltip
    content="<span>The content can be <strong>HTML</strong></span>"
    raw-content
>
    <fb-button>hover me</fb-button>
</fb-tooltip>\`
  })
}`,...(M=(I=r.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var w,E,z;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tooltip
        v-model:visible="visible"
        content="Bottom center"
        placement="bottom"
        effect="light"
        trigger="click"
        virtual-triggering
        :virtual-ref="triggerRef"
    />

    <fb-button @click="visible = !visible">Trigger me</fb-button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

const triggerRef = ref({
    getBoundingClientRect() {
        return position.value;
    },
});

const position = ref({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
});

const mousemoveHandler = (e) => {
    position.value = DOMRect.fromRect({
        width: 0,
        height: 0,
        x: e.clientX,
        y: e.clientY,
    });
};

onMounted(() => {
    document.addEventListener('mousemove', mousemoveHandler);
});

onUnmounted(() => {
    document.removeEventListener('mousemove', mousemoveHandler);
});
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTooltip,
      FbButton
    },
    setup: (): {
      visible: Ref<boolean>;
      triggerRef: Ref<{
        getBoundingClientRect: () => {
          top: number;
          left: number;
          bottom: number;
          right: number;
        };
      }>;
      position: Ref<{
        top: number;
        left: number;
        bottom: number;
        right: number;
      }>;
    } => {
      const visible = ref(false);
      const triggerRef = ref({
        getBoundingClientRect() {
          return position.value;
        }
      });
      const position = ref({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      });
      const mousemoveHandler = (e): void => {
        position.value = DOMRect.fromRect({
          width: 0,
          height: 0,
          x: e.clientX,
          y: e.clientY
        });
      };
      onMounted(() => {
        document.addEventListener("mousemove", mousemoveHandler);
      });
      onUnmounted(() => {
        document.removeEventListener("mousemove", mousemoveHandler);
      });
      return {
        visible,
        triggerRef,
        position
      };
    },
    template: \`
<fb-tooltip
    v-model:visible="visible"
    content="Bottom center"
    placement="bottom"
    effect="light"
    trigger="click"
    virtual-triggering
    :virtual-ref="triggerRef"
/>

<fb-button @click="visible = !visible">Trigger me</fb-button>\`
  })
}`,...(z=(E=s.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var D,U,x;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button
        v-for="i in 3"
        :key="i"
        @mouseover="(e) => (buttonRef = e.currentTarget)"
        @click="visible = !visible"
    >
        Click to open tooltip
    </fb-button>

    <fb-tooltip
        ref="tooltipRef"
        :visible="visible"
        :popper-options="{
            modifiers: [
                {
                    name: 'computeStyles',
                    options: {
                        adaptive: false,
                        enabled: false,
                    },
                },
            ],
        }"
        :virtual-ref="buttonRef"
        virtual-triggering
        popper-class="singleton-tooltip"
    >
        <template #content>
            <span> Some content </span>
        </template>
    </fb-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const buttonRef = ref();
const tooltipRef = ref();

const visible = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTooltip,
      FbButton
    },
    setup: (): {
      buttonRef: Ref<HTMLElement | undefined>;
      tooltipRef: Ref<HTMLElement | undefined>;
      visible: Ref<boolean>;
    } => {
      const buttonRef = ref();
      const tooltipRef = ref();
      const visible = ref(false);
      return {
        buttonRef,
        tooltipRef,
        visible
      };
    },
    template: \`
<fb-button
    v-for="i in 3"
    :key="i"
    @mouseover="(e) => (buttonRef = e.currentTarget)"
    @click="visible = !visible"
>
    Click to open tooltip
</fb-button>

<fb-tooltip
    ref="tooltipRef"
    :visible="visible"
    :popper-options="{
        modifiers: [
            {
                name: 'computeStyles',
                options: {
                    adaptive: false,
                    enabled: false,
                },
            },
        ],
    }"
    :virtual-ref="buttonRef"
    virtual-triggering
    popper-class="singleton-tooltip"
>
    <template #content>
        <span> Some content </span>
    </template>
</fb-tooltip>\`
  })
}`,...(x=(U=a.parameters)==null?void 0:U.docs)==null?void 0:x.source}}};var O,A,X;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tooltip :visible="visible">
        <template #content>
            <span>Content</span>
        </template>

        <fb-button @mouseenter="visible = true" @mouseleave="visible = false">
            Hover me
        </fb-button>
    </fb-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTooltip,
      FbButton
    },
    setup: (): {
      visible: Ref<boolean>;
    } => {
      const visible = ref(false);
      return {
        visible
      };
    },
    template: \`
<fb-tooltip :visible="visible">
    <template #content>
        <span>Content</span>
    </template>

    <fb-button @mouseenter="visible = true" @mouseleave="visible = false">
        Hover me
    </fb-button>
</fb-tooltip>\`
  })
}`,...(X=(A=c.parameters)==null?void 0:A.docs)==null?void 0:X.source}}};var Y,V,j;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tooltip content="I am an fb-tooltip">
        <fb-button>Trigger me</fb-button>
    </fb-tooltip>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTooltip,
      FbButton
    },
    template: \`
<fb-tooltip content="I am an fb-tooltip">
    <fb-button>Trigger me</fb-button>
</fb-tooltip>\`
  })
}`,...(j=(V=m.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};const q=["BasicUsage","Theme","MoreContent","Advanced","HtmlContent","VirtualTrigger","Singleton","Controlled","Animations"],N=Object.freeze(Object.defineProperty({__proto__:null,Advanced:f,Animations:m,BasicUsage:b,Controlled:c,HtmlContent:r,MoreContent:p,Singleton:a,Theme:l,VirtualTrigger:s,__namedExportsOrder:q,default:$},Symbol.toStringTag,{value:"Module"}));export{f as A,b as B,c as C,r as H,p as M,a as S,N as T,s as V,l as a,m as b};
