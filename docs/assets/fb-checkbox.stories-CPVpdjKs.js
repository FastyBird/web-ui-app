import{r as c}from"./vue.esm-bundler-DEpQrfwO.js";import{Q as i,t as x,e as R}from"./web-ui-components.es-nLJZCm2K.js";import{t as e}from"./web-ui-constants.es-Bfh99ZXh.js";const B={component:i,title:"Components/Form/Checkbox",excludeStories:/.*Data$/},a={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-checkbox v-model="checked1" label="Option 1" size="${e.LARGE}" />
        <fb-checkbox v-model="checked2" label="Option 2" size="${e.LARGE}" />
    </div>
    <div>
        <fb-checkbox v-model="checked3" label="Option 1" />
        <fb-checkbox v-model="checked4" label="Option 2" />
    </div>
    <div>
        <fb-checkbox v-model="checked5" label="Option 1" size="${e.SMALL}" />
        <fb-checkbox v-model="checked6" label="Option 2" size="${e.SMALL}" />
    </div>
    <div>
        <fb-checkbox v-model="checked7" label="Option 1" size="${e.SMALL}" disabled />
        <fb-checkbox v-model="checked8" label="Option 2" size="${e.SMALL}" disabled />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);
const checked6 = ref(false);
const checked7 = ref(false);
const checked8 = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCheckbox:i},setup:()=>{const o=c(!0),n=c(!1),b=c(!1),t=c(!1),s=c(!1),v=c(!1),l=c(!1),d=c(!1);return{checked1:o,checked2:n,checked3:b,checked4:t,checked5:s,checked6:v,checked7:l,checked8:d}},template:`
<div class="fb-checkbox-story-block">
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked1" label="Option 1" size="${e.LARGE}" />
        <fb-checkbox v-model="checked2" label="Option 2" size="${e.LARGE}" />
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked3" label="Option 1" />
        <fb-checkbox v-model="checked4" label="Option 2" />
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked5" label="Option 1" size="${e.SMALL}" />
        <fb-checkbox v-model="checked6" label="Option 2" size="${e.SMALL}" />
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked7" label="Option 1" size="${e.SMALL}" disabled />
        <fb-checkbox v-model="checked8" label="Option 2" size="${e.SMALL}" disabled />
    </div>
</div>`})},r={parameters:{docs:{source:{code:`
<template>
    <fb-checkbox v-model="checked1" disabled>Disabled</fb-checkbox>
    <fb-checkbox v-model="checked2">Not disabled</fb-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCheckbox:i},setup:()=>{const o=c(!0),n=c(!1);return{checked1:o,checked2:n}},template:`
<div class="fb-checkbox-story-block">
    <fb-checkbox v-model="checked1" disabled>Disabled</fb-checkbox>
    <fb-checkbox v-model="checked2">Not disabled</fb-checkbox>
</div>`})},h={parameters:{docs:{source:{code:`
<template>
    <fb-checkbox-group v-model="checkList">
        <fb-checkbox label="Option A" value="Value A" />
        <fb-checkbox label="Option B" value="Value B" />
        <fb-checkbox label="Option C" value="Value C" />
        <fb-checkbox label="disabled" value="Value disabled" disabled />
        <fb-checkbox
            label="selected and disabled"
            value="Value selected and disabled"
            disabled
        />
    </fb-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkList = ref(['Value selected and disabled', 'Value A']);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCheckbox:i,FbCheckboxGroup:x},setup:()=>({checkList:c(["Value selected and disabled","Value A"])}),template:`
<div class="fb-checkbox-story-block">
    <fb-checkbox-group v-model="checkList">
        <fb-checkbox label="Option A" value="Value A" />
        <fb-checkbox label="Option B" value="Value B" />
        <fb-checkbox label="Option C" value="Value C" />
        <fb-checkbox label="disabled" value="Value disabled" disabled />
        <fb-checkbox
            label="selected and disabled"
            value="Value selected and disabled"
            disabled
        />
    </fb-checkbox-group>
</div>`})},k={parameters:{docs:{source:{code:`
<template>
    <fb-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
    >
        Check all
    </fb-checkbox>
    <fb-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
    >
        <fb-checkbox
            v-for="city in cities"
            :key="city"
            :label="city"
            :value="city"
        >
            {{ city }}
        </fb-checkbox>
    </fb-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(['New York', 'Washington']);
const cities = ['New York', 'Washington', 'Los Angeles', 'Chicago'];

const handleCheckAllChange = (val: boolean) => {
    checkedCities.value = val ? cities : [];
    isIndeterminate.value = false;
};

const handleCheckedCitiesChange = (value: string[]) => {
    const checkedCount = value.length;
    checkAll.value = checkedCount === cities.length;
    isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCheckbox:i,FbCheckboxGroup:x},setup:()=>{const o=c(!1),n=c(!0),b=c(["New York","Washington"]),t=["New York","Washington","Los Angeles","Chicago"];return{checkAll:o,isIndeterminate:n,checkedCities:b,cities:t,handleCheckAllChange:l=>{b.value=l?t:[],n.value=!1},handleCheckedCitiesChange:l=>{const d=l.length;o.value=d===t.length,n.value=d>0&&d<t.length}}},template:`
<div class="fb-checkbox-story-block">
    <fb-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
    >
        Check all
    </fb-checkbox>
    <fb-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
    >
        <fb-checkbox
            v-for="city in cities"
            :key="city"
            :label="city"
            :value="city"
        >
            {{ city }}
        </fb-checkbox>
    </fb-checkbox-group>
</div>`})},f={parameters:{docs:{source:{code:`
<template>
    <fb-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <fb-checkbox
            v-for="city in cities"
            :key="city"
            :label="city"
            :value="city"
        >
            {{ city }}
        </fb-checkbox>
    </fb-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkedCities = ref(['New York', 'Washington']);
const cities = ['New York', 'Washington', 'Los Angeles', 'Chicago'];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCheckbox:i,FbCheckboxGroup:x},setup:()=>({checkedCities:c(["New York","Washington"]),cities:["New York","Washington","Los Angeles","Chicago"]}),template:`
<div class="fb-checkbox-story-block">
    <fb-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <fb-checkbox
            v-for="city in cities"
            :key="city"
            :label="city"
            :value="city"
        >
            {{ city }}
        </fb-checkbox>
    </fb-checkbox-group>
</div>`})},p={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-checkbox-group v-model="checkboxGroup1" size="${e.LARGE}">
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div>
        <fb-checkbox-group v-model="checkboxGroup2">
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div>
        <fb-checkbox-group v-model="checkboxGroup3" size="${e.SMALL}">
            <fb-checkbox-button
                v-for="city in cities"
                :key="city"
                :value="city"
                :disabled="city === 'Beijing'"
            >
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div>
        <fb-checkbox-group v-model="checkboxGroup4" size="${e.SMALL}" disabled>
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkboxGroup1 = ref(['New York']);
const checkboxGroup2 = ref(['Washington']);
const checkboxGroup3 = ref(['Los Angeles']);
const checkboxGroup4 = ref(['Chicago']);
const cities = ['New York', 'Washington', 'Los Angeles', 'Chicago'];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCheckbox:i,FbCheckboxGroup:x,FbCheckboxButton:R},setup:()=>{const o=c(["New York"]),n=c(["Washington"]),b=c(["Los Angeles"]),t=c(["Chicago"]);return{checkboxGroup1:o,checkboxGroup2:n,checkboxGroup3:b,checkboxGroup4:t,cities:["New York","Washington","Los Angeles","Chicago"]}},template:`
<div class="fb-checkbox-story-block">
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup1" size="${e.LARGE}">
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup2">
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup3" size="${e.SMALL}">
            <fb-checkbox-button
                v-for="city in cities"
                :key="city"
                :value="city"
                :disabled="city === 'Beijing'"
            >
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup4" size="${e.SMALL}" disabled>
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
</div>`})},u={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-checkbox v-model="checked1" label="Option1" size="${e.LARGE}" border />
        <fb-checkbox v-model="checked2" label="Option2" size="${e.LARGE}" border />
    </div>
    <div>
        <fb-checkbox v-model="checked3" label="Option1" border />
        <fb-checkbox v-model="checked4" label="Option2" border />
    </div>
    <div>
        <fb-checkbox-group v-model="checkboxGroup1" size="${e.SMALL}">
            <fb-checkbox label="Option1" value="Value1" border />
            <fb-checkbox label="Option2" value="Value2" border />
        </fb-checkbox-group>
    </div>
    <div>
        <fb-checkbox-group v-model="checkboxGroup1" size="${e.SMALL}">
            <fb-checkbox label="Option1" value="Value1" border disabled />
            <fb-checkbox label="Option2" value="Value2" border disabled />
        </fb-checkbox-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(true);
const checkboxGroup1 = ref(['Value1']);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbCheckbox:i,FbCheckboxGroup:x},setup:()=>{const o=c(!0),n=c(!1),b=c(!1),t=c(!0),s=c(["Value1"]);return{checked1:o,checked2:n,checked3:b,checked4:t,checkboxGroup1:s}},template:`
<div class="fb-checkbox-story-block">
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked1" label="Option1" size="${e.LARGE}" border />
        <fb-checkbox v-model="checked2" label="Option2" size="${e.LARGE}" border />
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked3" label="Option1" border />
        <fb-checkbox v-model="checked4" label="Option2" border />
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup1" size="${e.SMALL}">
            <fb-checkbox label="Option1" value="Value1" border />
            <fb-checkbox label="Option2" value="Value2" border />
        </fb-checkbox-group>
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup1" size="${e.SMALL}">
            <fb-checkbox label="Option1" value="Value1" border disabled />
            <fb-checkbox label="Option2" value="Value2" border disabled />
        </fb-checkbox-group>
    </div>
</div>`})};var m,g,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-checkbox v-model="checked1" label="Option 1" size="\${ComponentSizeTypes.LARGE}" />
        <fb-checkbox v-model="checked2" label="Option 2" size="\${ComponentSizeTypes.LARGE}" />
    </div>
    <div>
        <fb-checkbox v-model="checked3" label="Option 1" />
        <fb-checkbox v-model="checked4" label="Option 2" />
    </div>
    <div>
        <fb-checkbox v-model="checked5" label="Option 1" size="\${ComponentSizeTypes.SMALL}" />
        <fb-checkbox v-model="checked6" label="Option 2" size="\${ComponentSizeTypes.SMALL}" />
    </div>
    <div>
        <fb-checkbox v-model="checked7" label="Option 1" size="\${ComponentSizeTypes.SMALL}" disabled />
        <fb-checkbox v-model="checked8" label="Option 2" size="\${ComponentSizeTypes.SMALL}" disabled />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);
const checked6 = ref(false);
const checked7 = ref(false);
const checked8 = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCheckbox
    },
    setup: () => {
      const checked1 = ref(true);
      const checked2 = ref(false);
      const checked3 = ref(false);
      const checked4 = ref(false);
      const checked5 = ref(false);
      const checked6 = ref(false);
      const checked7 = ref(false);
      const checked8 = ref(false);
      return {
        checked1,
        checked2,
        checked3,
        checked4,
        checked5,
        checked6,
        checked7,
        checked8
      };
    },
    template: \`
<div class="fb-checkbox-story-block">
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked1" label="Option 1" size="\${ComponentSizeTypes.LARGE}" />
        <fb-checkbox v-model="checked2" label="Option 2" size="\${ComponentSizeTypes.LARGE}" />
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked3" label="Option 1" />
        <fb-checkbox v-model="checked4" label="Option 2" />
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked5" label="Option 1" size="\${ComponentSizeTypes.SMALL}" />
        <fb-checkbox v-model="checked6" label="Option 2" size="\${ComponentSizeTypes.SMALL}" />
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked7" label="Option 1" size="\${ComponentSizeTypes.SMALL}" disabled />
        <fb-checkbox v-model="checked8" label="Option 2" size="\${ComponentSizeTypes.SMALL}" disabled />
    </div>
</div>\`
  })
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,L,A;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-checkbox v-model="checked1" disabled>Disabled</fb-checkbox>
    <fb-checkbox v-model="checked2">Not disabled</fb-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCheckbox
    },
    setup: () => {
      const checked1 = ref(true);
      const checked2 = ref(false);
      return {
        checked1,
        checked2
      };
    },
    template: \`
<div class="fb-checkbox-story-block">
    <fb-checkbox v-model="checked1" disabled>Disabled</fb-checkbox>
    <fb-checkbox v-model="checked2">Not disabled</fb-checkbox>
</div>\`
  })
}`,...(A=(L=r.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var S,G,z;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-checkbox-group v-model="checkList">
        <fb-checkbox label="Option A" value="Value A" />
        <fb-checkbox label="Option B" value="Value B" />
        <fb-checkbox label="Option C" value="Value C" />
        <fb-checkbox label="disabled" value="Value disabled" disabled />
        <fb-checkbox
            label="selected and disabled"
            value="Value selected and disabled"
            disabled
        />
    </fb-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkList = ref(['Value selected and disabled', 'Value A']);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCheckbox,
      FbCheckboxGroup
    },
    setup: () => {
      const checkList = ref(["Value selected and disabled", "Value A"]);
      return {
        checkList
      };
    },
    template: \`
<div class="fb-checkbox-story-block">
    <fb-checkbox-group v-model="checkList">
        <fb-checkbox label="Option A" value="Value A" />
        <fb-checkbox label="Option B" value="Value B" />
        <fb-checkbox label="Option C" value="Value C" />
        <fb-checkbox label="disabled" value="Value disabled" disabled />
        <fb-checkbox
            label="selected and disabled"
            value="Value selected and disabled"
            disabled
        />
    </fb-checkbox-group>
</div>\`
  })
}`,...(z=(G=h.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var O,_,$;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
    >
        Check all
    </fb-checkbox>
    <fb-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
    >
        <fb-checkbox
            v-for="city in cities"
            :key="city"
            :label="city"
            :value="city"
        >
            {{ city }}
        </fb-checkbox>
    </fb-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(['New York', 'Washington']);
const cities = ['New York', 'Washington', 'Los Angeles', 'Chicago'];

const handleCheckAllChange = (val: boolean) => {
    checkedCities.value = val ? cities : [];
    isIndeterminate.value = false;
};

const handleCheckedCitiesChange = (value: string[]) => {
    const checkedCount = value.length;
    checkAll.value = checkedCount === cities.length;
    isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCheckbox,
      FbCheckboxGroup
    },
    setup: () => {
      const checkAll = ref(false);
      const isIndeterminate = ref(true);
      const checkedCities = ref(["New York", "Washington"]);
      const cities = ["New York", "Washington", "Los Angeles", "Chicago"];
      const handleCheckAllChange = (val: boolean) => {
        checkedCities.value = val ? cities : [];
        isIndeterminate.value = false;
      };
      const handleCheckedCitiesChange = (value: string[]) => {
        const checkedCount = value.length;
        checkAll.value = checkedCount === cities.length;
        isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
      };
      return {
        checkAll,
        isIndeterminate,
        checkedCities,
        cities,
        handleCheckAllChange,
        handleCheckedCitiesChange
      };
    },
    template: \`
<div class="fb-checkbox-story-block">
    <fb-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
    >
        Check all
    </fb-checkbox>
    <fb-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
    >
        <fb-checkbox
            v-for="city in cities"
            :key="city"
            :label="city"
            :value="city"
        >
            {{ city }}
        </fb-checkbox>
    </fb-checkbox-group>
</div>\`
  })
}`,...($=(_=k.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var V,M,I;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <fb-checkbox
            v-for="city in cities"
            :key="city"
            :label="city"
            :value="city"
        >
            {{ city }}
        </fb-checkbox>
    </fb-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkedCities = ref(['New York', 'Washington']);
const cities = ['New York', 'Washington', 'Los Angeles', 'Chicago'];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCheckbox,
      FbCheckboxGroup
    },
    setup: () => {
      const checkedCities = ref(["New York", "Washington"]);
      const cities = ["New York", "Washington", "Los Angeles", "Chicago"];
      return {
        checkedCities,
        cities
      };
    },
    template: \`
<div class="fb-checkbox-story-block">
    <fb-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <fb-checkbox
            v-for="city in cities"
            :key="city"
            :label="city"
            :value="city"
        >
            {{ city }}
        </fb-checkbox>
    </fb-checkbox-group>
</div>\`
  })
}`,...(I=(M=f.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var N,F,T;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-checkbox-group v-model="checkboxGroup1" size="\${ComponentSizeTypes.LARGE}">
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div>
        <fb-checkbox-group v-model="checkboxGroup2">
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div>
        <fb-checkbox-group v-model="checkboxGroup3" size="\${ComponentSizeTypes.SMALL}">
            <fb-checkbox-button
                v-for="city in cities"
                :key="city"
                :value="city"
                :disabled="city === 'Beijing'"
            >
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div>
        <fb-checkbox-group v-model="checkboxGroup4" size="\${ComponentSizeTypes.SMALL}" disabled>
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checkboxGroup1 = ref(['New York']);
const checkboxGroup2 = ref(['Washington']);
const checkboxGroup3 = ref(['Los Angeles']);
const checkboxGroup4 = ref(['Chicago']);
const cities = ['New York', 'Washington', 'Los Angeles', 'Chicago'];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCheckbox,
      FbCheckboxGroup,
      FbCheckboxButton
    },
    setup: () => {
      const checkboxGroup1 = ref(["New York"]);
      const checkboxGroup2 = ref(["Washington"]);
      const checkboxGroup3 = ref(["Los Angeles"]);
      const checkboxGroup4 = ref(["Chicago"]);
      const cities = ["New York", "Washington", "Los Angeles", "Chicago"];
      return {
        checkboxGroup1,
        checkboxGroup2,
        checkboxGroup3,
        checkboxGroup4,
        cities
      };
    },
    template: \`
<div class="fb-checkbox-story-block">
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup1" size="\${ComponentSizeTypes.LARGE}">
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup2">
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup3" size="\${ComponentSizeTypes.SMALL}">
            <fb-checkbox-button
                v-for="city in cities"
                :key="city"
                :value="city"
                :disabled="city === 'Beijing'"
            >
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup4" size="\${ComponentSizeTypes.SMALL}" disabled>
            <fb-checkbox-button v-for="city in cities" :key="city" :value="city">
                {{ city }}
            </fb-checkbox-button>
        </fb-checkbox-group>
    </div>
</div>\`
  })
}`,...(T=(F=p.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var w,W,Y;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-checkbox v-model="checked1" label="Option1" size="\${ComponentSizeTypes.LARGE}" border />
        <fb-checkbox v-model="checked2" label="Option2" size="\${ComponentSizeTypes.LARGE}" border />
    </div>
    <div>
        <fb-checkbox v-model="checked3" label="Option1" border />
        <fb-checkbox v-model="checked4" label="Option2" border />
    </div>
    <div>
        <fb-checkbox-group v-model="checkboxGroup1" size="\${ComponentSizeTypes.SMALL}">
            <fb-checkbox label="Option1" value="Value1" border />
            <fb-checkbox label="Option2" value="Value2" border />
        </fb-checkbox-group>
    </div>
    <div>
        <fb-checkbox-group v-model="checkboxGroup1" size="\${ComponentSizeTypes.SMALL}">
            <fb-checkbox label="Option1" value="Value1" border disabled />
            <fb-checkbox label="Option2" value="Value2" border disabled />
        </fb-checkbox-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(true);
const checkboxGroup1 = ref(['Value1']);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbCheckbox,
      FbCheckboxGroup
    },
    setup: () => {
      const checked1 = ref(true);
      const checked2 = ref(false);
      const checked3 = ref(false);
      const checked4 = ref(true);
      const checkboxGroup1 = ref(["Value1"]);
      return {
        checked1,
        checked2,
        checked3,
        checked4,
        checkboxGroup1
      };
    },
    template: \`
<div class="fb-checkbox-story-block">
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked1" label="Option1" size="\${ComponentSizeTypes.LARGE}" border />
        <fb-checkbox v-model="checked2" label="Option2" size="\${ComponentSizeTypes.LARGE}" border />
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox v-model="checked3" label="Option1" border />
        <fb-checkbox v-model="checked4" label="Option2" border />
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup1" size="\${ComponentSizeTypes.SMALL}">
            <fb-checkbox label="Option1" value="Value1" border />
            <fb-checkbox label="Option2" value="Value2" border />
        </fb-checkbox-group>
    </div>
    <div class="fb-checkbox-story-block__item">
        <fb-checkbox-group v-model="checkboxGroup1" size="\${ComponentSizeTypes.SMALL}">
            <fb-checkbox label="Option1" value="Value1" border disabled />
            <fb-checkbox label="Option2" value="Value2" border disabled />
        </fb-checkbox-group>
    </div>
</div>\`
  })
}`,...(Y=(W=u.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const E=["BasicUsage","Disabled","CheckboxGroup","Indeterminate","MinMax","Button","Bordered"],U=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:a,Bordered:u,Button:p,CheckboxGroup:h,Disabled:r,Indeterminate:k,MinMax:f,__namedExportsOrder:E,default:B},Symbol.toStringTag,{value:"Module"}));export{a as B,U as C,r as D,k as I,f as M,h as a,p as b,u as c};
