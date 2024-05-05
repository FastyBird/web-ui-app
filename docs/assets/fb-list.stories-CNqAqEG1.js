import{r as h}from"./vue.esm-bundler-DEpQrfwO.js";import{a as S}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{q as i,r as l}from"./index-Dg9quNvz.js";import{n as p,p as c,v as g,r as C,C as L,u as e}from"./web-ui-components.es-nLJZCm2K.js";import{t,n as m}from"./web-ui-constants.es-Bfh99ZXh.js";const w={component:p,subcomponents:{FbListItem:c},title:"Components/Data/List",excludeStories:/.*Data$/},a={parameters:{docs:{source:{code:`
<template>
    <fb-list>
        <template #heading>List of awesome items</template>
        <template #subheading>Subheading of awesome items</template>
        <template #buttons>
            <fb-button size="${t.SMALL}" @click.prevent="onClick">Add</fb-button>
            <fb-button size="${t.SMALL}" variant="${m.WARNING}" :icon="FasGear" @click.prevent="onClick" />
        </template>
        <fb-list-item @click="onClick">
            <template #title>Temperature</template>
            <template #subtitle>Master room measured temperature</template>
            <template #detail>23 °C</template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick">
            <template #title>Humidity</template>
            <template #subtitle>Master room measured humidity</template>
            <template #detail>43 %</template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick">
            <template #title>Heater</template>
            <template #subtitle>Master room heater switch</template>
            <template #button>
                <fb-switch v-model="switchState" />
            </template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
    </fb-list>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const switchState = ref(true);

const onClick = () => {
    console.log('clicked')
};
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbList:p,FbListItem:c,FbButton:g,FbSwitch:C,FbIcon:L,FasGear:i,FasPlug:l},setup:()=>{const s=h(!0),o=S("button-clicked");return{switchState:s,onClick:o,FasGear:i,FasPlug:l}},template:`
<fb-list>
    <template #heading>List of awesome items</template>
    <template #subheading>Subheading of awesome items</template>
    <template #buttons>
        <fb-button size="${t.SMALL}" @click.prevent="onClick">Add</fb-button>
        <fb-button size="${t.SMALL}" variant="${m.WARNING}" :icon="FasGear" @click.prevent="onClick" />
    </template>
    <fb-list-item @click="onClick">
        <template #title>Temperature</template>
        <template #subtitle>Master room measured temperature</template>
        <template #detail>23 °C</template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick">
        <template #title>Humidity</template>
        <template #subtitle>Master room measured humidity</template>
        <template #detail>43 %</template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick">
        <template #title>Heater</template>
        <template #subtitle>Master room heater switch</template>
        <template #button>
            <fb-switch v-model="switchState" />
        </template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
</fb-list>`})},n={parameters:{docs:{source:{code:`
<template>
    <fb-list>
        <template #heading>List of awesome items</template>
        <template #subheading>Subheading of awesome items</template>
        <template #buttons>
            <fb-button size="${t.SMALL}" @click.prevent="onClick">Add</fb-button>
            <fb-button size="${t.SMALL}" variant="${m.WARNING}" :icon="FasGear" @click.prevent="onClick" />
        </template>
        <fb-list-item @click="onClick" variant="${e.LIST}">
            <template #title>Temperature</template>
            <template #subtitle>Master room measured temperature</template>
            <template #detail>23 °C</template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick" variant="${e.LIST}">
            <template #title>Humidity</template>
            <template #subtitle>Master room measured humidity</template>
            <template #detail>43 %</template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick" variant="${e.LIST}">
            <template #title>Heater</template>
            <template #subtitle>Master room heater switch</template>
            <template #button>
                <fb-switch v-model="switchState" />
            </template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
    </fb-list>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const switchState = ref(true);

const onClick = () => {
    console.log('clicked')
};
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbList:p,FbListItem:c,FbButton:g,FbSwitch:C,FbIcon:L,FasGear:i,FasPlug:l},setup:()=>{const s=h(!0),o=S("button-clicked");return{switchState:s,onClick:o,FasGear:i,FasPlug:l}},template:`
<fb-list>
    <template #heading>List of awesome items</template>
    <template #subheading>Subheading of awesome items</template>
    <template #buttons>
        <fb-button size="${t.SMALL}" @click.prevent="onClick">Add</fb-button>
        <fb-button size="${t.SMALL}" variant="${m.WARNING}" :icon="FasGear" @click.prevent="onClick" />
    </template>
    <fb-list-item @click="onClick" variant="${e.LIST}">
        <template #title>Temperature</template>
        <template #subtitle>Master room measured temperature</template>
        <template #detail>23 °C</template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick" variant="${e.LIST}">
        <template #title>Humidity</template>
        <template #subtitle>Master room measured humidity</template>
        <template #detail>43 %</template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick" variant="${e.LIST}">
        <template #title>Heater</template>
        <template #subtitle>Master room heater switch</template>
        <template #button>
            <fb-switch v-model="switchState" />
        </template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
</fb-list>`})};var r,b,f;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-list>
        <template #heading>List of awesome items</template>
        <template #subheading>Subheading of awesome items</template>
        <template #buttons>
            <fb-button size="\${ComponentSizeTypes.SMALL}" @click.prevent="onClick">Add</fb-button>
            <fb-button size="\${ComponentSizeTypes.SMALL}" variant="\${VariantTypes.WARNING}" :icon="FasGear" @click.prevent="onClick" />
        </template>
        <fb-list-item @click="onClick">
            <template #title>Temperature</template>
            <template #subtitle>Master room measured temperature</template>
            <template #detail>23 °C</template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick">
            <template #title>Humidity</template>
            <template #subtitle>Master room measured humidity</template>
            <template #detail>43 %</template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick">
            <template #title>Heater</template>
            <template #subtitle>Master room heater switch</template>
            <template #button>
                <fb-switch v-model="switchState" />
            </template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
    </fb-list>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const switchState = ref(true);

const onClick = () => {
    console.log('clicked')
};
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbList,
      FbListItem,
      FbButton,
      FbSwitch,
      FbIcon,
      FasGear,
      FasPlug
    },
    setup: () => {
      const switchState = ref(true);
      const onClick = action("button-clicked");
      return {
        switchState,
        onClick,
        FasGear,
        FasPlug
      };
    },
    template: \`
<fb-list>
    <template #heading>List of awesome items</template>
    <template #subheading>Subheading of awesome items</template>
    <template #buttons>
        <fb-button size="\${ComponentSizeTypes.SMALL}" @click.prevent="onClick">Add</fb-button>
        <fb-button size="\${ComponentSizeTypes.SMALL}" variant="\${VariantTypes.WARNING}" :icon="FasGear" @click.prevent="onClick" />
    </template>
    <fb-list-item @click="onClick">
        <template #title>Temperature</template>
        <template #subtitle>Master room measured temperature</template>
        <template #detail>23 °C</template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick">
        <template #title>Humidity</template>
        <template #subtitle>Master room measured humidity</template>
        <template #detail>43 %</template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick">
        <template #title>Heater</template>
        <template #subtitle>Master room heater switch</template>
        <template #button>
            <fb-switch v-model="switchState" />
        </template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
</fb-list>\`
  })
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var u,d,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-list>
        <template #heading>List of awesome items</template>
        <template #subheading>Subheading of awesome items</template>
        <template #buttons>
            <fb-button size="\${ComponentSizeTypes.SMALL}" @click.prevent="onClick">Add</fb-button>
            <fb-button size="\${ComponentSizeTypes.SMALL}" variant="\${VariantTypes.WARNING}" :icon="FasGear" @click.prevent="onClick" />
        </template>
        <fb-list-item @click="onClick" variant="\${ItemVariantTypes.LIST}">
            <template #title>Temperature</template>
            <template #subtitle>Master room measured temperature</template>
            <template #detail>23 °C</template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick" variant="\${ItemVariantTypes.LIST}">
            <template #title>Humidity</template>
            <template #subtitle>Master room measured humidity</template>
            <template #detail>43 %</template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick" variant="\${ItemVariantTypes.LIST}">
            <template #title>Heater</template>
            <template #subtitle>Master room heater switch</template>
            <template #button>
                <fb-switch v-model="switchState" />
            </template>
            <template #icon>
                <fb-icon>
                    <fas-plug />
                </fb-icon>
            </template>
        </fb-list-item>
    </fb-list>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const switchState = ref(true);

const onClick = () => {
    console.log('clicked')
};
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbList,
      FbListItem,
      FbButton,
      FbSwitch,
      FbIcon,
      FasGear,
      FasPlug
    },
    setup: () => {
      const switchState = ref(true);
      const onClick = action("button-clicked");
      return {
        switchState,
        onClick,
        FasGear,
        FasPlug
      };
    },
    template: \`
<fb-list>
    <template #heading>List of awesome items</template>
    <template #subheading>Subheading of awesome items</template>
    <template #buttons>
        <fb-button size="\${ComponentSizeTypes.SMALL}" @click.prevent="onClick">Add</fb-button>
        <fb-button size="\${ComponentSizeTypes.SMALL}" variant="\${VariantTypes.WARNING}" :icon="FasGear" @click.prevent="onClick" />
    </template>
    <fb-list-item @click="onClick" variant="\${ItemVariantTypes.LIST}">
        <template #title>Temperature</template>
        <template #subtitle>Master room measured temperature</template>
        <template #detail>23 °C</template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick" variant="\${ItemVariantTypes.LIST}">
        <template #title>Humidity</template>
        <template #subtitle>Master room measured humidity</template>
        <template #detail>43 %</template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick" variant="\${ItemVariantTypes.LIST}">
        <template #title>Heater</template>
        <template #subtitle>Master room heater switch</template>
        <template #button>
            <fb-switch v-model="switchState" />
        </template>
        <template #icon>
            <fb-icon>
                <fas-plug />
            </fb-icon>
        </template>
    </fb-list-item>
</fb-list>\`
  })
}`,...(k=(d=n.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};const v=["BasicUsage","ListStyle"],$=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:a,ListStyle:n,__namedExportsOrder:v,default:w},Symbol.toStringTag,{value:"Module"}));export{a as B,$ as L,n as a};
