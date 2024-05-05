import{r as e,a as Se,o as Oe}from"./vue.esm-bundler-DEpQrfwO.js";import{f as i,R as s,J as A,O as _,Q as we,v as Me,d as Ce,a3 as Le,a4 as Ae,C as _e}from"./web-ui-components.es-nLJZCm2K.js";import{t as c,n as x}from"./web-ui-constants.es-Bfh99ZXh.js";const xe={component:i,title:"Components/Form/Select",excludeStories:/.*Data$/},b={parameters:{docs:{source:{code:`
<template>
    <fb-select
        v-model="value"
        placeholder="Select"
        size="${c.LARGE}"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>

    <fb-select
        v-model="value"
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>

    <fb-select
        v-model="value"
        placeholder="Select"
        size="${c.SMALL}"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s},setup:()=>({value:e(""),options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}]}),template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__form-row">
        <fb-select
            v-model="value"
            placeholder="Select"
            size="large"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>

        <fb-select v-model="value" placeholder="Select">
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>

        <fb-select
            v-model="value"
            placeholder="Select"
            size="small"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>`})},p={parameters:{docs:{source:{code:`
<template>
    <fb-select
        v-model="value"
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled || false"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
        disabled: true,
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s},setup:()=>({value:e(""),options:[{value:"Option1",label:"Option1",disabled:!1},{value:"Option2",label:"Option2",disabled:!0},{value:"Option3",label:"Option3",disabled:!1},{value:"Option4",label:"Option4",disabled:!1},{value:"Option5",label:"Option5",disabled:!1}]}),template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            placeholder="Select"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled || false"
            />
        </fb-select>
    </div>
</div>`})},m={parameters:{docs:{source:{code:`
<template>
    <fb-select
        v-model="value"
        disabled
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s},setup:()=>({value:e(""),options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}]}),template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            disabled
            placeholder="Select"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>`})},v={parameters:{docs:{source:{code:`
<template>
    <fb-select
        v-model="value"
        clearable
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s},setup:()=>({value:e(""),options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}]}),template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            clearable
            placeholder="Select"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>`})},d={parameters:{docs:{source:{code:`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Default
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value1"
                multiple
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Use collapse-tags
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value2"
                multiple
                collapse-tags
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Use collapse-tags-tooltip
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value3"
                multiple
                collapse-tags
                collapse-tags-tooltip
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Use max-collapse-tags
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value4"
                multiple
                collapse-tags
                collapse-tags-tooltip
                :max-collapse-tags="3"
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref([]);
const value2 = ref([]);
const value3 = ref([]);
const value4 = ref([]);

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s,FbRow:A,FbCol:_},setup:()=>{const n=e([]),l=e([]),t=e([]),a=e([]);return{value1:n,value2:l,value3:t,value4:a,options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}]}},template:`
<div class="fb-select-story-block">
    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Default
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value1"
                multiple
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Use collapse-tags
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value2"
                multiple
                collapse-tags
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Use collapse-tags-tooltip
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value3"
                multiple
                collapse-tags
                collapse-tags-tooltip
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Use max-collapse-tags
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value4"
                multiple
                collapse-tags
                collapse-tags-tooltip
                :max-collapse-tags="3"
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>
</div>`})},f={parameters:{docs:{source:{code:`
<template>
    <fb-select v-model="value" placeholder="Select">
        <fb-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
            <span class="custom-label">
                {{ item.label }}
            </span>
            <span class="custom-description">
                {{ item.country }}
            </span>
        </fb-option>
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const cities = [
    {
        value: 'Vienna',
        label: 'Vienna',
        country: 'Austria',
    },
    {
        value: 'Sofia',
        label: 'Sofia',
        country: 'Bulgaria',
    },
    {
        value: 'Helsinki',
        label: 'Helsinki',
        country: 'Finland',
    },
    {
        value: 'Rome',
        label: 'Rome',
        country: 'Italy',
    },
    {
        value: 'Monaco',
        label: 'Monaco',
        country: 'Monaco',
    },
    {
        value: 'Lisbon',
        label: 'Lisbon',
        country: 'Portugal',
    },
];
<\/script>

<style scoped>
.custom-label {
    float: left;
}

.custom-description {
    float: right;
    color: var(--fb-text-color-secondary);
    font-size: 13px;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s},setup:()=>({value:e(""),cities:[{value:"Vienna",label:"Vienna",country:"Austria"},{value:"Sofia",label:"Sofia",country:"Bulgaria"},{value:"Helsinki",label:"Helsinki",country:"Finland"},{value:"Rome",label:"Rome",country:"Italy"},{value:"Monaco",label:"Monaco",country:"Monaco"},{value:"Lisbon",label:"Lisbon",country:"Portugal"}]}),template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select v-model="value" placeholder="Select">
            <fb-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
                <span class="fb-select-story-block__custom-template-label">
                    {{ item.label }}
                </span>
                <span class="fb-select-story-block__custom-template-description">
                    {{ item.country }}
                </span>
            </fb-option>
        </fb-select>
    </div>
</div>`})},g={parameters:{docs:{source:{code:`
<template>
    <fb-select
        v-model="value"
        multiple
        clearable
        collapse-tags
        placeholder="Select"
        popper-class="custom-header"
        :max-collapse-tags="1"
    >
        <template #header>
            <fb-checkbox
                v-model="checkAll"
                :indeterminate="indeterminate"
                @change="handleCheckAll"
            >
                All
            </fb-checkbox>
        </template>

        <fb-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

import type { CheckboxValueType } from '@fastybird/web-ui-library';

const checkAll = ref(false);
const indeterminate = ref(false);
const value = ref<CheckboxValueType[]>([]);

const cities = ref([
    {
        value: 'Vienna',
        label: 'Vienna',
    },
    {
        value: 'Sofia',
        label: 'Sofia',
    },
    {
        value: 'Helsinki',
        label: 'Helsinki',
    },
    {
        value: 'Rome',
        label: 'Rome',
    },
    {
        value: 'Monaco',
        label: 'Monaco',
    },
    {
        value: 'Lisbon',
        label: 'Lisbon',
    },
]);

watch(value, (val) => {
    if (val.length === 0) {
        checkAll.value = false
        indeterminate.value = false
    } else if (val.length === cities.value.length) {
        checkAll.value = true
        indeterminate.value = false
    } else {
        indeterminate.value = true
    }
})

const handleCheckAll = (val: CheckboxValueType) => {
    indeterminate.value = false;

    if (val) {
        value.value = cities.value.map((_) => _.value);
    } else {
        value.value = [];
    }
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s,FbCheckbox:we},setup:()=>{const n=e(!1),l=e(!1),t=e([]),a=e([{value:"Vienna",label:"Vienna"},{value:"Sofia",label:"Sofia"},{value:"Helsinki",label:"Helsinki"},{value:"Rome",label:"Rome"},{value:"Monaco",label:"Monaco"},{value:"Lisbon",label:"Lisbon"}]);return Se(t,r=>{r.length===0?(n.value=!1,l.value=!1):r.length===a.value.length?(n.value=!0,l.value=!1):l.value=!0}),{checkAll:n,indeterminate:l,value:t,cities:a,handleCheckAll:r=>{l.value=!1,r?t.value=a.value.map(o=>o.value):t.value=[]}}},template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            multiple
            clearable
            collapse-tags
            placeholder="Select"
            popper-class="custom-header"
            :max-collapse-tags="1"
        >
            <template #header>
                <fb-checkbox
                    v-model="checkAll"
                    :indeterminate="indeterminate"
                    @change="handleCheckAll"
                >
                    All
                </fb-checkbox>
            </template>

            <fb-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>`})},y={parameters:{docs:{source:{code:`
<template>
    <fb-select v-model="value" placeholder="Select">
        <fb-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
        <template #footer>
            <fb-button v-if="!isAdding" text bg size="${c.SMALL}" @click="onAddOption">
                Add an option
            </fb-button>

            <template v-else>
                <fb-input
                    v-model="optionName"
                    class="option-input"
                    placeholder="Your custom value"
                    size="${c.SMALL}"
                />
                <fb-button variant="${x.PRIMARY}" size="${c.SMALL}" @click="onConfirm">
                    Confirm
                </fb-button>
                <fb-button size="${c.SMALL}" @click="clear">
                    Cancel
                </fb-button>
            </template>
        </template>
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import type { CheckboxValueType } from '@fastybird/web-ui-library';

const isAdding = ref(false);
const value = ref<CheckboxValueType[]>([]);
const optionName = ref('');

const cities = ref([
    {
        value: 'Vienna',
        label: 'Vienna',
    },
    {
        value: 'Sofia',
        label: 'Sofia',
    },
    {
        value: 'Helsinki',
        label: 'Helsinki',
    },
    {
        value: 'Rome',
        label: 'Rome',
    },
    {
        value: 'Monaco',
        label: 'Monaco',
    },
    {
        value: 'Lisbon',
        label: 'Lisbon',
    },
]);

const onAddOption = () => {
    isAdding.value = true;
}

const onConfirm = () => {
    if (optionName.value) {
        cities.value.push({
            label: optionName.value,
            value: optionName.value,
        });

        clear();
    }
}

const clear = () => {
    optionName.value = '';
    isAdding.value = false;
}
<\/script>

<style lang="scss" scoped>
.option-input {
    width: 100%;
    margin-bottom: 8px;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s,FbButton:Me,FbInput:Ce},setup:()=>{const n=e(!1),l=e([]),t=e(""),a=e([{value:"Vienna",label:"Vienna"},{value:"Sofia",label:"Sofia"},{value:"Helsinki",label:"Helsinki"},{value:"Rome",label:"Rome"},{value:"Monaco",label:"Monaco"},{value:"Lisbon",label:"Lisbon"}]),u=()=>{n.value=!0},r=()=>{t.value&&(a.value.push({label:t.value,value:t.value}),o())},o=()=>{t.value="",n.value=!1};return{isAdding:n,value:l,optionName:t,cities:a,onAddOption:u,onConfirm:r,clear:o}},template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select v-model="value" placeholder="Select">
            <fb-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
            <template #footer>
                <fb-button v-if="!isAdding" text bg size="${c.SMALL}" @click="onAddOption">
                    Add an option
                </fb-button>

                <template v-else>
                    <fb-input
                        v-model="optionName"
                        class="fb-select-story-block__custom-footer-input"
                        placeholder="Your custom value"
                        size="${c.SMALL}"
                    />
                    <fb-button variant="${x.PRIMARY}" size="${c.SMALL}" @click="onConfirm">
                        Confirm
                    </fb-button>
                    <fb-button size="${c.SMALL}" @click="clear">
                        Cancel
                    </fb-button>
                </template>
            </template>
        </fb-select>
    </div>
</div>`})},h={parameters:{docs:{source:{code:`
<template>
    <fb-select v-model="value" placeholder="Select">
        <fb-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
        >
            <fb-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-option-group>
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        label: 'Popular cities',
        options: [
            {
                value: 'Rome',
                label: 'Rome',
            },
            {
                value: 'Vienna',
                label: 'Vienna',
            },
        ],
    },
    {
        label: 'City name',
        options: [
            {
                value: 'Sofia',
                label: 'Sofia',
            },
            {
                value: 'Helsinki',
                label: 'Helsinki',
            },
            {
                value: 'Monaco',
                label: 'Monaco',
            },
            {
                value: 'Lisbon',
                label: 'Lisbon',
            },
        ],
    },
];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOptionGroup:Le,FbOption:s},setup:()=>({value:e(""),options:[{label:"Popular cities",options:[{value:"Rome",label:"Rome"},{value:"Vienna",label:"Vienna"}]},{label:"City name",options:[{value:"Sofia",label:"Sofia"},{value:"Helsinki",label:"Helsinki"},{value:"Monaco",label:"Monaco"},{value:"Lisbon",label:"Lisbon"}]}]}),template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select v-model="value" placeholder="Select">
            <fb-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label"
            >
                <fb-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-option-group>
        </fb-select>
    </div>
</div>`})},k={parameters:{docs:{source:{code:`
<template>
    <fb-select
        v-model="value"
        filterable
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        value: 'Vienna',
        label: 'Vienna',
    },
    {
        value: 'Sofia',
        label: 'Sofia',
    },
    {
        value: 'Helsinki',
        label: 'Helsinki',
    },
    {
        value: 'Rome',
        label: 'Rome',
    },
    {
        value: 'Monaco',
        label: 'Monaco',
    },
    {
        value: 'Lisbon',
        label: 'Lisbon',
    },
];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s},setup:()=>({value:e(""),options:[{value:"Vienna",label:"Vienna"},{value:"Sofia",label:"Sofia"},{value:"Helsinki",label:"Helsinki"},{value:"Rome",label:"Rome"},{value:"Monaco",label:"Monaco"},{value:"Lisbon",label:"Lisbon"}]}),template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            filterable
            placeholder="Select"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>`})},O={parameters:{docs:{source:{code:`
<template>
    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Default
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Use remote-show-suffix
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                remote-show-suffix
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

interface ListItem {
  value: string;
  label: string;
}

const list = ref<ListItem[]>([]);
const options = ref<ListItem[]>([]);
const value = ref<string[]>([]);
const loading = ref(false);

onMounted((): void => {
    list.value = states.map((item) => {
        return { value: \`value:\${item}\`, label: item }
    });
})

const remoteMethod = (query: string): void => {
    if (query) {
        loading.value = true;

        setTimeout(() => {
            loading.value = false
            options.value = list.value.filter((item) => {
                return item.label.toLowerCase().includes(query.toLowerCase())
            })
        }, 200);
    } else {
        options.value = [];
    }
}

const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s,FbRow:A,FbCol:_},setup:()=>{const n=e([]),l=e([]),t=e([]),a=e(!1);Oe(()=>{n.value=r.map(o=>({value:`value:${o}`,label:o}))});const u=o=>{o?(a.value=!0,setTimeout(()=>{a.value=!1,l.value=n.value.filter(L=>L.label.toLowerCase().includes(o.toLowerCase()))},200)):l.value=[]},r=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return{list:n,options:l,value:t,loading:a,states:r,remoteMethod:u}},template:`
<div class="fb-select-story-block">
    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Default
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Use remote-show-suffix
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                remote-show-suffix
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>
</div>`})},S={parameters:{docs:{source:{code:`
<template>
    <fb-select
        v-model="value"
        multiple
        filterable
        allow-create
        default-first-option
        :reserve-keyword="false"
        placeholder="Choose tags for your article"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref<string[]>([]);

const options = [
    {
        value: 'HTML',
        label: 'HTML',
    },
    {
        value: 'CSS',
        label: 'CSS',
    },
    {
        value: 'JavaScript',
        label: 'JavaScript',
    },
];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s},setup:()=>({value:e([]),options:[{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"},{value:"JavaScript",label:"JavaScript"}]}),template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            multiple
            filterable
            allow-create
            default-first-option
            :reserve-keyword="false"
            placeholder="Choose tags for your article"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>`})},w={parameters:{docs:{source:{code:`
<template>
    <fb-select
        v-model="value"
        value-key="id"
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.id"
            :label="item.label"
            :value="item"
        />
    </fb-select>

    <p>
        Selected option's description:
        <strong>{{ value ? value.desc : 'nothing selected' }}</strong>
    </p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

type Option = {
    id: number;
    label: string;
    desc: string;
};

const value = ref<Option>();

const options = ref([
    { id: 1, label: 'Option A', desc: 'Option A - 230506' },
    { id: 2, label: 'Option B', desc: 'Option B - 230506' },
    { id: 3, label: 'Option C', desc: 'Option C - 230506' },
    { id: 4, label: 'Option A', desc: 'Option A - 230507' },
]);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s},setup:()=>{const n=e(),l=e([{id:1,label:"Option A",desc:"Option A - 230506"},{id:2,label:"Option B",desc:"Option B - 230506"},{id:3,label:"Option C",desc:"Option C - 230506"},{id:4,label:"Option A",desc:"Option A - 230507"}]);return{value:n,options:l}},template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            value-key="id"
            placeholder="Select"
        >
            <fb-option
                v-for="item in options"
                :key="item.id"
                :label="item.label"
                :value="item"
            />
        </fb-select>
    </div>

    <p>
        Selected option's description:
        <strong>{{ value ? value.desc : 'nothing selected' }}</strong>
    </p>
</div>`})},M={parameters:{docs:{source:{code:`
<template>
    <fb-select
        v-model="value"
        multiple
        placeholder="Select"
    >
        <fb-option
            v-for="item in colors"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
            <fb-tag :color="item.value" size="${c.SMALL}" />
            <span :style="{ color: item.value }">{{ item.label }}</span>
        </fb-option>
        <template #tag>
            <fb-tag v-for="color in value" :key="color.value" :color="color" />
        </template>
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref([]);

const colors = [
    {
        value: '#E63415',
        label: 'red',
    },
    {
        value: '#FF6600',
        label: 'orange',
    },
    {
        value: '#FFDE0A',
        label: 'yellow',
    },
    {
        value: '#1EC79D',
        label: 'green',
    },
    {
        value: '#14CCCC',
        label: 'cyan',
    },
    {
        value: '#4167F0',
        label: 'blue',
    },
    {
        value: '#6222C9',
        label: 'purple',
    },
];

colors.forEach((color) => {
    value.value.push(color.value);
});
<\/script>

<style scoped>
.fb-tag {
    border: none;
    aspect-ratio: 1;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s,FbTag:Ae},setup:()=>{const n=e([]),l=[{value:"#E63415",label:"red"},{value:"#FF6600",label:"orange"},{value:"#FFDE0A",label:"yellow"},{value:"#1EC79D",label:"green"},{value:"#14CCCC",label:"cyan"},{value:"#4167F0",label:"blue"},{value:"#6222C9",label:"purple"}];return l.forEach(t=>{n.value.push(t.value)}),{value:n,colors:l}},template:`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            multiple
            placeholder="Select"
        >
            <fb-option
                v-for="item in colors"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
                <fb-tag :color="item.value" class="fb-select-story-block__custom-tag-option" size="${c.SMALL}" />
                <span :style="{ color: item.value }">{{ item.label }}</span>
            </fb-option>
            <template #tag>
                <fb-tag v-for="color in value" :key="color.value" :color="color" class="fb-select-story-block__custom-tag-list" />
            </template>
        </fb-select>
    </div>
</div>`})},C={parameters:{docs:{source:{code:`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Loading icon 1
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                <template #loading>
                    <svg class="circular" viewBox="0 0 50 50">
                        <circle class="path" cx="25" cy="25" r="20" fill="none" />
                    </svg>
                </template>
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Loading icon 2
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                <template #loading>
                    <fb-icon class="is-loading">
                        <svg class="circular" viewBox="0 0 20 20">
                            <g
                                stroke-width="0"
                                class="group"
                            >
                                <circle r="3.375" class="dot1" rx="0" ry="0" />
                                <circle r="3.375" class="dot2" rx="0" ry="0" />
                                <circle r="3.375" class="dot4" rx="0" ry="0" />
                                <circle r="3.375" class="dot3" rx="0" ry="0" />
                            </g>
                        </svg>
                    </fb-icon>
                </template>
            </fb-select>
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface ListItem {
    value: string;
    label: string;
};

const list = ref<ListItem[]>([]);
const options = ref<ListItem[]>([]);
const value = ref<string[]>([]);
const loading = ref(false);

onMounted(() => {
    list.value = states.map((item) => {
        return { value: \`value:\${item}\`, label: item }
    });
});

const remoteMethod = (query: string): void => {
    if (query) {
        loading.value = true;

        setTimeout(() => {
            loading.value = false
            options.value = list.value.filter((item) => {
                return item.label.toLowerCase().includes(query.toLowerCase())
            })
        }, 3000);
    } else {
        options.value = [];
    }
}

const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
];
<\/script>

<style>
.circular {
  display: inline;
  height: 30px;
  width: 30px;
  animation: loading-rotate 2s linear infinite;
}
.circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--fb-color-primary);
  stroke-linecap: round;
}
.loading-path group {
  animation: none;
  stroke: none;
}
.loading-path .dot1 {
  transform: translate(3.75px, 3.75px);
  fill: var(--fb-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
}
.loading-path .dot2 {
  transform: translate(calc(100% - 3.75px), 3.75px);
  fill: var(--fb-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 0.4s;
}
.loading-path .dot3 {
  transform: translate(3.75px, calc(100% - 3.75px));
  fill: var(--fb-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 1.2s;
}
.loading-path .dot4 {
  transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));
  fill: var(--fb-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 0.8s;
}
@keyframes loading-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes custom-spin-move {
  to {
    opacity: 1;
  }
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbSelect:i,FbOption:s,FbIcon:_e,FbRow:A,FbCol:_},setup:()=>{const n=e([]),l=e([]),t=e([]),a=e(!1);Oe(()=>{n.value=r.map(o=>({value:`value:${o}`,label:o}))});const u=o=>{o?(a.value=!0,setTimeout(()=>{a.value=!1,l.value=n.value.filter(L=>L.label.toLowerCase().includes(o.toLowerCase()))},3e3)):l.value=[]},r=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return{list:n,options:l,value:t,loading:a,remoteMethod:u,states:r}},template:`
<div class="fb-select-story-block">
    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Loading icon 1
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                <template #loading>
                    <svg class="fb-select-story-block__circular-loader-icon" viewBox="0 0 50 50">
                        <circle class="fb-select-story-block__circular-loader-icon-path" cx="25" cy="25" r="20" fill="none" />
                    </svg>
                </template>
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Loading icon 2
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                <template #loading>
                    <fb-icon class="fb-select-story-block__dot-loader">
                        <svg class="fb-select-story-block__circular-loader-icon" viewBox="0 0 20 20">
                            <g
                                stroke-width="0"
                                class="fb-select-story-block__dot-loader-path"
                            >
                                <circle r="3.375" class="dot1" rx="0" ry="0" />
                                <circle r="3.375" class="dot2" rx="0" ry="0" />
                                <circle r="3.375" class="dot4" rx="0" ry="0" />
                                <circle r="3.375" class="dot3" rx="0" ry="0" />
                            </g>
                        </svg>
                    </fb-icon>
                </template>
            </fb-select>
        </fb-col>
    </fb-row>
</div>`})};var F,I,N;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select
        v-model="value"
        placeholder="Select"
        size="\${ComponentSizeTypes.LARGE}"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>

    <fb-select
        v-model="value"
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>

    <fb-select
        v-model="value"
        placeholder="Select"
        size="\${ComponentSizeTypes.SMALL}"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption
    },
    setup: () => {
      const value = ref("");
      const options = [{
        value: "Option1",
        label: "Option1"
      }, {
        value: "Option2",
        label: "Option2"
      }, {
        value: "Option3",
        label: "Option3"
      }, {
        value: "Option4",
        label: "Option4"
      }, {
        value: "Option5",
        label: "Option5"
      }];
      return {
        value,
        options
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__form-row">
        <fb-select
            v-model="value"
            placeholder="Select"
            size="large"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>

        <fb-select v-model="value" placeholder="Select">
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>

        <fb-select
            v-model="value"
            placeholder="Select"
            size="small"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>\`
  })
}`,...(N=(I=b.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var V,R,H;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select
        v-model="value"
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled || false"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
        disabled: true,
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption
    },
    setup: () => {
      const value = ref("");
      const options = [{
        value: "Option1",
        label: "Option1",
        disabled: false
      }, {
        value: "Option2",
        label: "Option2",
        disabled: true
      }, {
        value: "Option3",
        label: "Option3",
        disabled: false
      }, {
        value: "Option4",
        label: "Option4",
        disabled: false
      }, {
        value: "Option5",
        label: "Option5",
        disabled: false
      }];
      return {
        value,
        options
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            placeholder="Select"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled || false"
            />
        </fb-select>
    </div>
</div>\`
  })
}`,...(H=(R=p.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var T,z,D;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select
        v-model="value"
        disabled
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption
    },
    setup: () => {
      const value = ref("");
      const options = [{
        value: "Option1",
        label: "Option1"
      }, {
        value: "Option2",
        label: "Option2"
      }, {
        value: "Option3",
        label: "Option3"
      }, {
        value: "Option4",
        label: "Option4"
      }, {
        value: "Option5",
        label: "Option5"
      }];
      return {
        value,
        options
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            disabled
            placeholder="Select"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>\`
  })
}`,...(D=(z=m.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var P,$,W;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select
        v-model="value"
        clearable
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption
    },
    setup: () => {
      const value = ref("");
      const options = [{
        value: "Option1",
        label: "Option1"
      }, {
        value: "Option2",
        label: "Option2"
      }, {
        value: "Option3",
        label: "Option3"
      }, {
        value: "Option4",
        label: "Option4"
      }, {
        value: "Option5",
        label: "Option5"
      }];
      return {
        value,
        options
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            clearable
            placeholder="Select"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>\`
  })
}`,...(W=($=v.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var U,B,E;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Default
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value1"
                multiple
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Use collapse-tags
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value2"
                multiple
                collapse-tags
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Use collapse-tags-tooltip
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value3"
                multiple
                collapse-tags
                collapse-tags-tooltip
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Use max-collapse-tags
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value4"
                multiple
                collapse-tags
                collapse-tags-tooltip
                :max-collapse-tags="3"
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref([]);
const value2 = ref([]);
const value3 = ref([]);
const value4 = ref([]);

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption,
      FbRow,
      FbCol
    },
    setup: () => {
      const value1 = ref([]);
      const value2 = ref([]);
      const value3 = ref([]);
      const value4 = ref([]);
      const options = [{
        value: "Option1",
        label: "Option1"
      }, {
        value: "Option2",
        label: "Option2"
      }, {
        value: "Option3",
        label: "Option3"
      }, {
        value: "Option4",
        label: "Option4"
      }, {
        value: "Option5",
        label: "Option5"
      }];
      return {
        value1,
        value2,
        value3,
        value4,
        options
      };
    },
    template: \`
<div class="fb-select-story-block">
    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Default
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value1"
                multiple
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Use collapse-tags
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value2"
                multiple
                collapse-tags
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Use collapse-tags-tooltip
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value3"
                multiple
                collapse-tags
                collapse-tags-tooltip
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Use max-collapse-tags
        </fb-col>
        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value4"
                multiple
                collapse-tags
                collapse-tags-tooltip
                :max-collapse-tags="3"
                placeholder="Select"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>
</div>\`
  })
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var K,q,J;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select v-model="value" placeholder="Select">
        <fb-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
            <span class="custom-label">
                {{ item.label }}
            </span>
            <span class="custom-description">
                {{ item.country }}
            </span>
        </fb-option>
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const cities = [
    {
        value: 'Vienna',
        label: 'Vienna',
        country: 'Austria',
    },
    {
        value: 'Sofia',
        label: 'Sofia',
        country: 'Bulgaria',
    },
    {
        value: 'Helsinki',
        label: 'Helsinki',
        country: 'Finland',
    },
    {
        value: 'Rome',
        label: 'Rome',
        country: 'Italy',
    },
    {
        value: 'Monaco',
        label: 'Monaco',
        country: 'Monaco',
    },
    {
        value: 'Lisbon',
        label: 'Lisbon',
        country: 'Portugal',
    },
];
<\/script>

<style scoped>
.custom-label {
    float: left;
}

.custom-description {
    float: right;
    color: var(--fb-text-color-secondary);
    font-size: 13px;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption
    },
    setup: () => {
      const value = ref("");
      const cities = [{
        value: "Vienna",
        label: "Vienna",
        country: "Austria"
      }, {
        value: "Sofia",
        label: "Sofia",
        country: "Bulgaria"
      }, {
        value: "Helsinki",
        label: "Helsinki",
        country: "Finland"
      }, {
        value: "Rome",
        label: "Rome",
        country: "Italy"
      }, {
        value: "Monaco",
        label: "Monaco",
        country: "Monaco"
      }, {
        value: "Lisbon",
        label: "Lisbon",
        country: "Portugal"
      }];
      return {
        value,
        cities
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select v-model="value" placeholder="Select">
            <fb-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
                <span class="fb-select-story-block__custom-template-label">
                    {{ item.label }}
                </span>
                <span class="fb-select-story-block__custom-template-description">
                    {{ item.country }}
                </span>
            </fb-option>
        </fb-select>
    </div>
</div>\`
  })
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Y,G,j;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select
        v-model="value"
        multiple
        clearable
        collapse-tags
        placeholder="Select"
        popper-class="custom-header"
        :max-collapse-tags="1"
    >
        <template #header>
            <fb-checkbox
                v-model="checkAll"
                :indeterminate="indeterminate"
                @change="handleCheckAll"
            >
                All
            </fb-checkbox>
        </template>

        <fb-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

import type { CheckboxValueType } from '@fastybird/web-ui-library';

const checkAll = ref(false);
const indeterminate = ref(false);
const value = ref<CheckboxValueType[]>([]);

const cities = ref([
    {
        value: 'Vienna',
        label: 'Vienna',
    },
    {
        value: 'Sofia',
        label: 'Sofia',
    },
    {
        value: 'Helsinki',
        label: 'Helsinki',
    },
    {
        value: 'Rome',
        label: 'Rome',
    },
    {
        value: 'Monaco',
        label: 'Monaco',
    },
    {
        value: 'Lisbon',
        label: 'Lisbon',
    },
]);

watch(value, (val) => {
    if (val.length === 0) {
        checkAll.value = false
        indeterminate.value = false
    } else if (val.length === cities.value.length) {
        checkAll.value = true
        indeterminate.value = false
    } else {
        indeterminate.value = true
    }
})

const handleCheckAll = (val: CheckboxValueType) => {
    indeterminate.value = false;

    if (val) {
        value.value = cities.value.map((_) => _.value);
    } else {
        value.value = [];
    }
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption,
      FbCheckbox
    },
    setup: () => {
      const checkAll = ref(false);
      const indeterminate = ref(false);
      const value = ref<CheckboxValueType[]>([]);
      const cities = ref([{
        value: "Vienna",
        label: "Vienna"
      }, {
        value: "Sofia",
        label: "Sofia"
      }, {
        value: "Helsinki",
        label: "Helsinki"
      }, {
        value: "Rome",
        label: "Rome"
      }, {
        value: "Monaco",
        label: "Monaco"
      }, {
        value: "Lisbon",
        label: "Lisbon"
      }]);
      watch(value, val => {
        if (val.length === 0) {
          checkAll.value = false;
          indeterminate.value = false;
        } else if (val.length === cities.value.length) {
          checkAll.value = true;
          indeterminate.value = false;
        } else {
          indeterminate.value = true;
        }
      });
      const handleCheckAll = (val: CheckboxValueType) => {
        indeterminate.value = false;
        if (val) {
          value.value = cities.value.map(_ => _.value);
        } else {
          value.value = [];
        }
      };
      return {
        checkAll,
        indeterminate,
        value,
        cities,
        handleCheckAll
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            multiple
            clearable
            collapse-tags
            placeholder="Select"
            popper-class="custom-header"
            :max-collapse-tags="1"
        >
            <template #header>
                <fb-checkbox
                    v-model="checkAll"
                    :indeterminate="indeterminate"
                    @change="handleCheckAll"
                >
                    All
                </fb-checkbox>
            </template>

            <fb-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>\`
  })
}`,...(j=(G=g.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select v-model="value" placeholder="Select">
        <fb-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
        <template #footer>
            <fb-button v-if="!isAdding" text bg size="\${ComponentSizeTypes.SMALL}" @click="onAddOption">
                Add an option
            </fb-button>

            <template v-else>
                <fb-input
                    v-model="optionName"
                    class="option-input"
                    placeholder="Your custom value"
                    size="\${ComponentSizeTypes.SMALL}"
                />
                <fb-button variant="\${VariantTypes.PRIMARY}" size="\${ComponentSizeTypes.SMALL}" @click="onConfirm">
                    Confirm
                </fb-button>
                <fb-button size="\${ComponentSizeTypes.SMALL}" @click="clear">
                    Cancel
                </fb-button>
            </template>
        </template>
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import type { CheckboxValueType } from '@fastybird/web-ui-library';

const isAdding = ref(false);
const value = ref<CheckboxValueType[]>([]);
const optionName = ref('');

const cities = ref([
    {
        value: 'Vienna',
        label: 'Vienna',
    },
    {
        value: 'Sofia',
        label: 'Sofia',
    },
    {
        value: 'Helsinki',
        label: 'Helsinki',
    },
    {
        value: 'Rome',
        label: 'Rome',
    },
    {
        value: 'Monaco',
        label: 'Monaco',
    },
    {
        value: 'Lisbon',
        label: 'Lisbon',
    },
]);

const onAddOption = () => {
    isAdding.value = true;
}

const onConfirm = () => {
    if (optionName.value) {
        cities.value.push({
            label: optionName.value,
            value: optionName.value,
        });

        clear();
    }
}

const clear = () => {
    optionName.value = '';
    isAdding.value = false;
}
<\/script>

<style lang="scss" scoped>
.option-input {
    width: 100%;
    margin-bottom: 8px;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption,
      FbButton,
      FbInput
    },
    setup: () => {
      const isAdding = ref(false);
      const value = ref<CheckboxValueType[]>([]);
      const optionName = ref("");
      const cities = ref([{
        value: "Vienna",
        label: "Vienna"
      }, {
        value: "Sofia",
        label: "Sofia"
      }, {
        value: "Helsinki",
        label: "Helsinki"
      }, {
        value: "Rome",
        label: "Rome"
      }, {
        value: "Monaco",
        label: "Monaco"
      }, {
        value: "Lisbon",
        label: "Lisbon"
      }]);
      const onAddOption = () => {
        isAdding.value = true;
      };
      const onConfirm = () => {
        if (optionName.value) {
          cities.value.push({
            label: optionName.value,
            value: optionName.value
          });
          clear();
        }
      };
      const clear = () => {
        optionName.value = "";
        isAdding.value = false;
      };
      return {
        isAdding,
        value,
        optionName,
        cities,
        onAddOption,
        onConfirm,
        clear
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select v-model="value" placeholder="Select">
            <fb-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
            <template #footer>
                <fb-button v-if="!isAdding" text bg size="\${ComponentSizeTypes.SMALL}" @click="onAddOption">
                    Add an option
                </fb-button>

                <template v-else>
                    <fb-input
                        v-model="optionName"
                        class="fb-select-story-block__custom-footer-input"
                        placeholder="Your custom value"
                        size="\${ComponentSizeTypes.SMALL}"
                    />
                    <fb-button variant="\${VariantTypes.PRIMARY}" size="\${ComponentSizeTypes.SMALL}" @click="onConfirm">
                        Confirm
                    </fb-button>
                    <fb-button size="\${ComponentSizeTypes.SMALL}" @click="clear">
                        Cancel
                    </fb-button>
                </template>
            </template>
        </fb-select>
    </div>
</div>\`
  })
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,le;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select v-model="value" placeholder="Select">
        <fb-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
        >
            <fb-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-option-group>
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        label: 'Popular cities',
        options: [
            {
                value: 'Rome',
                label: 'Rome',
            },
            {
                value: 'Vienna',
                label: 'Vienna',
            },
        ],
    },
    {
        label: 'City name',
        options: [
            {
                value: 'Sofia',
                label: 'Sofia',
            },
            {
                value: 'Helsinki',
                label: 'Helsinki',
            },
            {
                value: 'Monaco',
                label: 'Monaco',
            },
            {
                value: 'Lisbon',
                label: 'Lisbon',
            },
        ],
    },
];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOptionGroup,
      FbOption
    },
    setup: () => {
      const value = ref("");
      const options = [{
        label: "Popular cities",
        options: [{
          value: "Rome",
          label: "Rome"
        }, {
          value: "Vienna",
          label: "Vienna"
        }]
      }, {
        label: "City name",
        options: [{
          value: "Sofia",
          label: "Sofia"
        }, {
          value: "Helsinki",
          label: "Helsinki"
        }, {
          value: "Monaco",
          label: "Monaco"
        }, {
          value: "Lisbon",
          label: "Lisbon"
        }]
      }];
      return {
        value,
        options
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select v-model="value" placeholder="Select">
            <fb-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label"
            >
                <fb-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-option-group>
        </fb-select>
    </div>
</div>\`
  })
}`,...(le=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var te,ae,oe;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select
        v-model="value"
        filterable
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');

const options = [
    {
        value: 'Vienna',
        label: 'Vienna',
    },
    {
        value: 'Sofia',
        label: 'Sofia',
    },
    {
        value: 'Helsinki',
        label: 'Helsinki',
    },
    {
        value: 'Rome',
        label: 'Rome',
    },
    {
        value: 'Monaco',
        label: 'Monaco',
    },
    {
        value: 'Lisbon',
        label: 'Lisbon',
    },
];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption
    },
    setup: () => {
      const value = ref("");
      const options = [{
        value: "Vienna",
        label: "Vienna"
      }, {
        value: "Sofia",
        label: "Sofia"
      }, {
        value: "Helsinki",
        label: "Helsinki"
      }, {
        value: "Rome",
        label: "Rome"
      }, {
        value: "Monaco",
        label: "Monaco"
      }, {
        value: "Lisbon",
        label: "Lisbon"
      }];
      return {
        value,
        options
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            filterable
            placeholder="Select"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>\`
  })
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ie,se,re;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Default
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Use remote-show-suffix
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                remote-show-suffix
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

interface ListItem {
  value: string;
  label: string;
}

const list = ref<ListItem[]>([]);
const options = ref<ListItem[]>([]);
const value = ref<string[]>([]);
const loading = ref(false);

onMounted((): void => {
    list.value = states.map((item) => {
        return { value: \\\`value:\\$\\{item\\}\\\`, label: item }
    });
})

const remoteMethod = (query: string): void => {
    if (query) {
        loading.value = true;

        setTimeout(() => {
            loading.value = false
            options.value = list.value.filter((item) => {
                return item.label.toLowerCase().includes(query.toLowerCase())
            })
        }, 200);
    } else {
        options.value = [];
    }
}

const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption,
      FbRow,
      FbCol
    },
    setup: () => {
      interface ListItem {
        value: string;
        label: string;
      }
      const list = ref<ListItem[]>([]);
      const options = ref<ListItem[]>([]);
      const value = ref<string[]>([]);
      const loading = ref(false);
      onMounted(() => {
        list.value = states.map(item => {
          return {
            value: \`value:\${item}\`,
            label: item
          };
        });
      });
      const remoteMethod = (query: string) => {
        if (query) {
          loading.value = true;
          setTimeout(() => {
            loading.value = false;
            options.value = list.value.filter(item => {
              return item.label.toLowerCase().includes(query.toLowerCase());
            });
          }, 200);
        } else {
          options.value = [];
        }
      };
      const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
      return {
        list,
        options,
        value,
        loading,
        states,
        remoteMethod
      };
    },
    template: \`
<div class="fb-select-story-block">
    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Default
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Use remote-show-suffix
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                remote-show-suffix
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </fb-select>
        </fb-col>
    </fb-row>
</div>\`
  })
}`,...(re=(se=O.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ce,ue,be;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select
        v-model="value"
        multiple
        filterable
        allow-create
        default-first-option
        :reserve-keyword="false"
        placeholder="Choose tags for your article"
    >
        <fb-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref<string[]>([]);

const options = [
    {
        value: 'HTML',
        label: 'HTML',
    },
    {
        value: 'CSS',
        label: 'CSS',
    },
    {
        value: 'JavaScript',
        label: 'JavaScript',
    },
];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption
    },
    setup: () => {
      const value = ref<string[]>([]);
      const options = [{
        value: "HTML",
        label: "HTML"
      }, {
        value: "CSS",
        label: "CSS"
      }, {
        value: "JavaScript",
        label: "JavaScript"
      }];
      return {
        value,
        options
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            multiple
            filterable
            allow-create
            default-first-option
            :reserve-keyword="false"
            placeholder="Choose tags for your article"
        >
            <fb-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </fb-select>
    </div>
</div>\`
  })
}`,...(be=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var pe,me,ve;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select
        v-model="value"
        value-key="id"
        placeholder="Select"
    >
        <fb-option
            v-for="item in options"
            :key="item.id"
            :label="item.label"
            :value="item"
        />
    </fb-select>

    <p>
        Selected option's description:
        <strong>{{ value ? value.desc : 'nothing selected' }}</strong>
    </p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

type Option = {
    id: number;
    label: string;
    desc: string;
};

const value = ref<Option>();

const options = ref([
    { id: 1, label: 'Option A', desc: 'Option A - 230506' },
    { id: 2, label: 'Option B', desc: 'Option B - 230506' },
    { id: 3, label: 'Option C', desc: 'Option C - 230506' },
    { id: 4, label: 'Option A', desc: 'Option A - 230507' },
]);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption
    },
    setup: () => {
      type Option = {
        id: number;
        label: string;
        desc: string;
      };
      const value = ref<Option>();
      const options = ref([{
        id: 1,
        label: "Option A",
        desc: "Option A - 230506"
      }, {
        id: 2,
        label: "Option B",
        desc: "Option B - 230506"
      }, {
        id: 3,
        label: "Option C",
        desc: "Option C - 230506"
      }, {
        id: 4,
        label: "Option A",
        desc: "Option A - 230507"
      }]);
      return {
        value,
        options
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            value-key="id"
            placeholder="Select"
        >
            <fb-option
                v-for="item in options"
                :key="item.id"
                :label="item.label"
                :value="item"
            />
        </fb-select>
    </div>

    <p>
        Selected option's description:
        <strong>{{ value ? value.desc : 'nothing selected' }}</strong>
    </p>
</div>\`
  })
}`,...(ve=(me=w.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var de,fe,ge;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-select
        v-model="value"
        multiple
        placeholder="Select"
    >
        <fb-option
            v-for="item in colors"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
            <fb-tag :color="item.value" size="\${ComponentSizeTypes.SMALL}" />
            <span :style="{ color: item.value }">{{ item.label }}</span>
        </fb-option>
        <template #tag>
            <fb-tag v-for="color in value" :key="color.value" :color="color" />
        </template>
    </fb-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref([]);

const colors = [
    {
        value: '#E63415',
        label: 'red',
    },
    {
        value: '#FF6600',
        label: 'orange',
    },
    {
        value: '#FFDE0A',
        label: 'yellow',
    },
    {
        value: '#1EC79D',
        label: 'green',
    },
    {
        value: '#14CCCC',
        label: 'cyan',
    },
    {
        value: '#4167F0',
        label: 'blue',
    },
    {
        value: '#6222C9',
        label: 'purple',
    },
];

colors.forEach((color) => {
    value.value.push(color.value);
});
<\/script>

<style scoped>
.fb-tag {
    border: none;
    aspect-ratio: 1;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption,
      FbTag
    },
    setup: () => {
      const value = ref([]);
      const colors = [{
        value: "#E63415",
        label: "red"
      }, {
        value: "#FF6600",
        label: "orange"
      }, {
        value: "#FFDE0A",
        label: "yellow"
      }, {
        value: "#1EC79D",
        label: "green"
      }, {
        value: "#14CCCC",
        label: "cyan"
      }, {
        value: "#4167F0",
        label: "blue"
      }, {
        value: "#6222C9",
        label: "purple"
      }];
      colors.forEach(color => {
        value.value.push(color.value);
      });
      return {
        value,
        colors
      };
    },
    template: \`
<div class="fb-select-story-block">
    <div class="fb-select-story-block__item">
        <fb-select
            v-model="value"
            multiple
            placeholder="Select"
        >
            <fb-option
                v-for="item in colors"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
                <fb-tag :color="item.value" class="fb-select-story-block__custom-tag-option" size="\${ComponentSizeTypes.SMALL}" />
                <span :style="{ color: item.value }">{{ item.label }}</span>
            </fb-option>
            <template #tag>
                <fb-tag v-for="color in value" :key="color.value" :color="color" class="fb-select-story-block__custom-tag-list" />
            </template>
        </fb-select>
    </div>
</div>\`
  })
}`,...(ge=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ye,he,ke;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Loading icon 1
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                <template #loading>
                    <svg class="circular" viewBox="0 0 50 50">
                        <circle class="path" cx="25" cy="25" r="20" fill="none" />
                    </svg>
                </template>
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle">
        <fb-col :sm="12" :md="5">
            Loading icon 2
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                <template #loading>
                    <fb-icon class="is-loading">
                        <svg class="circular" viewBox="0 0 20 20">
                            <g
                                stroke-width="0"
                                class="group"
                            >
                                <circle r="3.375" class="dot1" rx="0" ry="0" />
                                <circle r="3.375" class="dot2" rx="0" ry="0" />
                                <circle r="3.375" class="dot4" rx="0" ry="0" />
                                <circle r="3.375" class="dot3" rx="0" ry="0" />
                            </g>
                        </svg>
                    </fb-icon>
                </template>
            </fb-select>
        </fb-col>
    </fb-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface ListItem {
    value: string;
    label: string;
};

const list = ref<ListItem[]>([]);
const options = ref<ListItem[]>([]);
const value = ref<string[]>([]);
const loading = ref(false);

onMounted(() => {
    list.value = states.map((item) => {
        return { value: \\\`value:\\$\\{item\\}\\\`, label: item }
    });
});

const remoteMethod = (query: string): void => {
    if (query) {
        loading.value = true;

        setTimeout(() => {
            loading.value = false
            options.value = list.value.filter((item) => {
                return item.label.toLowerCase().includes(query.toLowerCase())
            })
        }, 3000);
    } else {
        options.value = [];
    }
}

const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
];
<\/script>

<style>
.circular {
  display: inline;
  height: 30px;
  width: 30px;
  animation: loading-rotate 2s linear infinite;
}
.circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--fb-color-primary);
  stroke-linecap: round;
}
.loading-path group {
  animation: none;
  stroke: none;
}
.loading-path .dot1 {
  transform: translate(3.75px, 3.75px);
  fill: var(--fb-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
}
.loading-path .dot2 {
  transform: translate(calc(100% - 3.75px), 3.75px);
  fill: var(--fb-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 0.4s;
}
.loading-path .dot3 {
  transform: translate(3.75px, calc(100% - 3.75px));
  fill: var(--fb-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 1.2s;
}
.loading-path .dot4 {
  transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));
  fill: var(--fb-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 0.8s;
}
@keyframes loading-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes custom-spin-move {
  to {
    opacity: 1;
  }
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbSelect,
      FbOption,
      FbIcon,
      FbRow,
      FbCol
    },
    setup: () => {
      interface ListItem {
        value: string;
        label: string;
      }
      const list = ref<ListItem[]>([]);
      const options = ref<ListItem[]>([]);
      const value = ref<string[]>([]);
      const loading = ref(false);
      onMounted(() => {
        list.value = states.map(item => {
          return {
            value: \`value:\${item}\`,
            label: item
          };
        });
      });
      const remoteMethod = (query: string): void => {
        if (query) {
          loading.value = true;
          setTimeout(() => {
            loading.value = false;
            options.value = list.value.filter(item => {
              return item.label.toLowerCase().includes(query.toLowerCase());
            });
          }, 3000);
        } else {
          options.value = [];
        }
      };
      const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
      return {
        list,
        options,
        value,
        loading,
        remoteMethod,
        states
      };
    },
    template: \`
<div class="fb-select-story-block">
    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Loading icon 1
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                <template #loading>
                    <svg class="fb-select-story-block__circular-loader-icon" viewBox="0 0 50 50">
                        <circle class="fb-select-story-block__circular-loader-icon-path" cx="25" cy="25" r="20" fill="none" />
                    </svg>
                </template>
            </fb-select>
        </fb-col>
    </fb-row>

    <fb-row :gutter="20" align="middle" class="fb-select-story-block__item">
        <fb-col :sm="12" :md="5">
            Loading icon 2
        </fb-col>

        <fb-col :sm="12" :md="13">
            <fb-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Please enter a keyword"
                :remote-method="remoteMethod"
                :loading="loading"
            >
                <fb-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                <template #loading>
                    <fb-icon class="fb-select-story-block__dot-loader">
                        <svg class="fb-select-story-block__circular-loader-icon" viewBox="0 0 20 20">
                            <g
                                stroke-width="0"
                                class="fb-select-story-block__dot-loader-path"
                            >
                                <circle r="3.375" class="dot1" rx="0" ry="0" />
                                <circle r="3.375" class="dot2" rx="0" ry="0" />
                                <circle r="3.375" class="dot4" rx="0" ry="0" />
                                <circle r="3.375" class="dot3" rx="0" ry="0" />
                            </g>
                        </svg>
                    </fb-icon>
                </template>
            </fb-select>
        </fb-col>
    </fb-row>
</div>\`
  })
}`,...(ke=(he=C.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};const Fe=["BasicUsage","DisabledOption","DisabledSelect","Clearable","MultipleSelect","CustomTemplate","DropdownHeader","DropdownFooter","Grouping","OptionFilter","RemoteSearch","CreateNewItems","ValueKeyAttribute","CustomTag","CustomLoading"],Re=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:b,Clearable:v,CreateNewItems:S,CustomLoading:C,CustomTag:M,CustomTemplate:f,DisabledOption:p,DisabledSelect:m,DropdownFooter:y,DropdownHeader:g,Grouping:h,MultipleSelect:d,OptionFilter:k,RemoteSearch:O,ValueKeyAttribute:w,__namedExportsOrder:Fe,default:xe},Symbol.toStringTag,{value:"Module"}));export{b as B,v as C,p as D,h as G,d as M,k as O,O as R,Re as S,w as V,m as a,f as b,g as c,y as d,S as e,M as f,C as g};
