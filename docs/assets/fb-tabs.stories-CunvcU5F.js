import{a8 as c,a9 as T,aa as s,ab as p,A as Q,S as X,C as K,v as Y}from"./web-ui-components.es-nLJZCm2K.js";import{p as x,e as Z}from"./index-Dg9quNvz.js";import{r as i}from"./vue.esm-bundler-DEpQrfwO.js";const ee={component:c,title:"Components/Navigation/Tabs",excludeStories:/.*Data$/},v={parameters:{docs:{source:{code:`
<template>
    <fb-tabs
        v-model="activeName"
        class="demo-tabs"
        @tab-click="handleClick"
    >
        <fb-tab-pane label="User" name="first">User</fb-tab-pane>
        <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
        <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
        <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from '@fastybird/web-ui-library'

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event): void => {
    console.log(tab, event);
}
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTabs:c,FbTabPane:T},setup:()=>({activeName:i("first"),handleClick:(e,d)=>{console.log(e,d)}}),template:`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs v-model="activeName" @tab-click="handleClick">
            <fb-tab-pane label="User" name="first">User</fb-tab-pane>
            <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
            <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
            <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
        </fb-tabs>
    </div>
</div>`})},u={parameters:{docs:{source:{code:`
<template>
    <fb-tabs
        v-model="activeName"
        type="${s.CARD}"
        class="demo-tabs"
        @tab-click="handleClick"
    >
        <fb-tab-pane label="User" name="first">User</fb-tab-pane>
        <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
        <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
        <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from '@fastybird/web-ui-library'

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event): void => {
    console.log(tab, event);
}
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTabs:c,FbTabPane:T},setup:()=>({activeName:i("first"),handleClick:(e,d)=>{console.log(e,d)}}),template:`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs
            v-model="activeName"
            type="${s.CARD}"
            @tab-click="handleClick"
        >
            <fb-tab-pane label="User" name="first">User</fb-tab-pane>
            <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
            <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
            <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
        </fb-tabs>
    </div>
</div>`})},g={parameters:{docs:{source:{code:`
<template>
    <fb-tabs
        v-model="activeName"
        type="${s.BORDER_CARD}"
        class="demo-tabs"
        @tab-click="handleClick"
    >
        <fb-tab-pane label="User" name="first">User</fb-tab-pane>
        <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
        <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
        <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from '@fastybird/web-ui-library'

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event): void => {
    console.log(tab, event);
}
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTabs:c,FbTabPane:T},setup:()=>({activeName:i("first"),handleClick:(e,d)=>{console.log(e,d)}}),template:`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs
            v-model="activeName"
            type="${s.BORDER_CARD}"
            @tab-click="handleClick"
        >
            <fb-tab-pane label="User" name="first">User</fb-tab-pane>
            <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
            <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
            <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
        </fb-tabs>
    </div>
</div>`})},N={parameters:{docs:{source:{code:`
<template>
    <fb-radio-group v-model="tabPosition">
        <fb-radio-button value="${p.TOP}">top</fb-radio-button>
        <fb-radio-button value="${p.RIGHT}">right</fb-radio-button>
        <fb-radio-button value="${p.BOTTOM}">bottom</fb-radio-button>
        <fb-radio-button value="${p.LEFT}">left</fb-radio-button>
    </fb-radio-group>

    <fb-tabs :tab-position="tabPosition" class="demo-tabs">
        <fb-tab-pane label="User">User</fb-tab-pane>
        <fb-tab-pane label="Config">Config</fb-tab-pane>
        <fb-tab-pane label="Role">Role</fb-tab-pane>
        <fb-tab-pane label="Task">Task</fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabPosition = ref('left');
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTabs:c,FbTabPane:T,FbRadioGroup:Q,FbRadioButton:X},setup:()=>({tabPosition:i("left")}),template:`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__controls">
        <fb-radio-group v-model="tabPosition">
            <fb-radio-button value="${p.TOP}">top</fb-radio-button>
            <fb-radio-button value="${p.RIGHT}">right</fb-radio-button>
            <fb-radio-button value="${p.BOTTOM}">bottom</fb-radio-button>
            <fb-radio-button value="${p.LEFT}">left</fb-radio-button>
        </fb-radio-group>
    </div>

    <div class="fb-tabs-story-block__item">
        <fb-tabs :tab-position="tabPosition">
            <fb-tab-pane label="User">User</fb-tab-pane>
            <fb-tab-pane label="Config">Config</fb-tab-pane>
            <fb-tab-pane label="Role">Role</fb-tab-pane>
            <fb-tab-pane label="Task">Task</fb-tab-pane>
        </fb-tabs>
    </div>
</div>`})},y={parameters:{docs:{source:{code:`
<template>
    <fb-tabs type="${s.BORDER_CARD}" class="demo-tabs">
        <fb-tab-pane>
            <template #label>
                <fb-icon><fas-calendar /></fb-icon>
                <span>Route</span>
            </template>

            Route
        </fb-tab-pane>
        <fb-tab-pane label="Config">Config</fb-tab-pane>
        <fb-tab-pane label="Role">Role</fb-tab-pane>
        <fb-tab-pane label="Task">Task</fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { FasCalendar } from '@fastybird/web-ui-icons';
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label .fb-icon {
    vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTabs:c,FbTabPane:T,FbIcon:K,FasCalendar:x},setup:()=>({FasCalendar:x}),template:`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs type="${s.BORDER_CARD}" class="fb-tabs-story-block__custom-tabs-label">
            <fb-tab-pane>
                <template #label>
                    <fb-icon><fas-calendar /></fb-icon>
                    <span>Route</span>
                </template>

                Route
            </fb-tab-pane>
            <fb-tab-pane label="Config">Config</fb-tab-pane>
            <fb-tab-pane label="Role">Role</fb-tab-pane>
            <fb-tab-pane label="Task">Task</fb-tab-pane>
        </fb-tabs>
    </div>
</div>`})},k={parameters:{docs:{source:{code:`
<template>
    <fb-tabs
        v-model="editableTabsValue"
        type="${s.CARD}"
        editable
        class="demo-tabs"
        @edit="handleTabsEdit"
    >
        <fb-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
            {{ item.content }}
        </fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabPaneName } from '@fastybird/web-ui-library';

let tabIndex = 2;

const editableTabsValue = ref('2');

const editableTabs = ref([
    {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
    },
    {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content',
    },
]);

const handleTabsEdit = (
    targetName: TabPaneName | undefined,
    action: 'remove' | 'add',
) => {
    if (action === 'add') {
        const newTabName = \`\${++tabIndex}\`;

        editableTabs.value.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content',
        });

        editableTabsValue.value = newTabName;
    } else if (action === 'remove') {
        const tabs = editableTabs.value;

        let activeName = editableTabsValue.value;

        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    const nextTab = tabs[index + 1] || tabs[index - 1];

                    if (nextTab) {
                        activeName = nextTab.name;
                    }
                }
            })
        }

        editableTabsValue.value = activeName;
        editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
    }
}
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTabs:c,FbTabPane:T},setup:()=>{let t=2;const n=i("2"),e=i([{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}]);return{tabIndex:t,editableTabsValue:n,editableTabs:e,handleTabsEdit:(r,b)=>{if(b==="add"){const a=`${++t}`;e.value.push({title:"New Tab",name:a,content:"New Tab content"}),n.value=a}else if(b==="remove"){const a=e.value;let o=n.value;o===r&&a.forEach((l,m)=>{if(l.name===r){const f=a[m+1]||a[m-1];f&&(o=f.name)}}),n.value=o,e.value=a.filter(l=>l.name!==r)}}}},template:`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs
            v-model="editableTabsValue"
            type="${s.CARD}"
            editable
            @edit="handleTabsEdit"
        >
            <fb-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
                {{ item.content }}
            </fb-tab-pane>
        </fb-tabs>
    </div>
</div>`})},h={parameters:{docs:{source:{code:`
<template>
    <fb-tabs
        v-model="editableTabsValue"
        type="${s.CARD}"
        editable
        class="demo-tabs"
        @edit="handleTabsEdit"
    >
        <template #add-icon>
            <fb-icon><fas-check /></fb-icon>
        </template>

        <fb-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
            {{ item.content }}
        </fb-tab-pane>
    </fb-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabPaneName } from '@fastybird/web-ui-library';

let tabIndex = 2;

const editableTabsValue = ref('2');

const editableTabs = ref([
    {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
    },
    {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content',
    },
]);

const handleTabsEdit = (
    targetName: TabPaneName | undefined,
    action: 'remove' | 'add',
) => {
    if (action === 'add') {
        const newTabName = \`\${++tabIndex}\`;

        editableTabs.value.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content',
        });

        editableTabsValue.value = newTabName;
    } else if (action === 'remove') {
        const tabs = editableTabs.value;

        let activeName = editableTabsValue.value;

        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    const nextTab = tabs[index + 1] || tabs[index - 1]
                    if (nextTab) {
                        activeName = nextTab.name
                    }
                }
            });
        }

        editableTabsValue.value = activeName;
        editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
    }
}
<\/script>

<style>
.demo-tabs > .fb-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTabs:c,FbTabPane:T,FbIcon:K,FasCheck:Z},setup:()=>{let t=2;const n=i("2"),e=i([{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}]);return{tabIndex:t,editableTabsValue:n,editableTabs:e,handleTabsEdit:(r,b)=>{if(b==="add"){const a=`${++t}`;e.value.push({title:"New Tab",name:a,content:"New Tab content"}),n.value=a}else if(b==="remove"){const a=e.value;let o=n.value;o===r&&a.forEach((l,m)=>{if(l.name===r){const f=a[m+1]||a[m-1];f&&(o=f.name)}}),n.value=o,e.value=a.filter(l=>l.name!==r)}}}},template:`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs
            v-model="editableTabsValue"
            type="${s.CARD}"
            editable
            @edit="handleTabsEdit"
        >
            <template #add-icon>
                <fb-icon><fas-check /></fb-icon>
            </template>

            <fb-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
                {{ item.content }}
            </fb-tab-pane>
        </fb-tabs>
    </div>
</div>`})},C={parameters:{docs:{source:{code:`
<template>
    <fb-button size="small" @click="addTab(editableTabsValue)">
        Add new tab
    </fb-button>

    <fb-tabs
        v-model="editableTabsValue"
        type="${s.CARD}"
        closable
        class="demo-tabs"
        @tab-remove="removeTab"
    >
        <fb-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
            {{ item.content }}
        </fb-tab-pane>
    </fb-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

let tabIndex = 2;

const editableTabsValue = ref('2');

const editableTabs = ref([
    {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
    },
    {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content',
    },
]);

const addTab = (targetName: string) => {
    const newTabName = \`\${++tabIndex}\`;

    editableTabs.value.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
    });

    editableTabsValue.value = newTabName;
}

const removeTab = (targetName: string) => {
    const tabs = editableTabs.value;
    let activeName = editableTabsValue.value;

    if (activeName === targetName) {
        tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    activeName = nextTab.name
                }
            }
        });
    }

    editableTabsValue.value = activeName;
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
}
<\/script>

<style>
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbTabs:c,FbTabPane:T,FbButton:Y},setup:()=>{let t=2;const n=i("2"),e=i([{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}]);return{tabIndex:t,editableTabsValue:n,editableTabs:e,addTab:()=>{const b=`${++t}`;e.value.push({title:"New Tab",name:b,content:"New Tab content"}),n.value=b},removeTab:b=>{const a=e.value;let o=n.value;o===b&&a.forEach((l,m)=>{if(l.name===b){const f=a[m+1]||a[m-1];f&&(o=f.name)}}),n.value=o,e.value=a.filter(l=>l.name!==b)}}},template:`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__controls">
        <fb-button size="small" @click="addTab">
            Add new tab
        </fb-button>
    </div>

    <div class="fb-tabs-story-block__item">
        <fb-tabs
            v-model="editableTabsValue"
            type="${s.CARD}"
            closable
            @tab-remove="removeTab"
        >
            <fb-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
                {{ item.content }}
            </fb-tab-pane>
        </fb-tabs>
    </div>
</div>`})};var R,_,w;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tabs
        v-model="activeName"
        class="demo-tabs"
        @tab-click="handleClick"
    >
        <fb-tab-pane label="User" name="first">User</fb-tab-pane>
        <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
        <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
        <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from '@fastybird/web-ui-library'

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event): void => {
    console.log(tab, event);
}
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTabs,
      FbTabPane
    },
    setup: () => {
      const activeName = ref("first");
      const handleClick = (tab: TabsPaneContext, event: Event): void => {
        console.log(tab, event);
      };
      return {
        activeName,
        handleClick
      };
    },
    template: \`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs v-model="activeName" @tab-click="handleClick">
            <fb-tab-pane label="User" name="first">User</fb-tab-pane>
            <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
            <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
            <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
        </fb-tabs>
    </div>
</div>\`
  })
}`,...(w=(_=v.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var P,V,E;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tabs
        v-model="activeName"
        type="\${TabNavTypeTypes.CARD}"
        class="demo-tabs"
        @tab-click="handleClick"
    >
        <fb-tab-pane label="User" name="first">User</fb-tab-pane>
        <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
        <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
        <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from '@fastybird/web-ui-library'

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event): void => {
    console.log(tab, event);
}
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTabs,
      FbTabPane
    },
    setup: () => {
      const activeName = ref("first");
      const handleClick = (tab: TabsPaneContext, event: Event): void => {
        console.log(tab, event);
      };
      return {
        activeName,
        handleClick
      };
    },
    template: \`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs
            v-model="activeName"
            type="\${TabNavTypeTypes.CARD}"
            @tab-click="handleClick"
        >
            <fb-tab-pane label="User" name="first">User</fb-tab-pane>
            <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
            <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
            <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
        </fb-tabs>
    </div>
</div>\`
  })
}`,...(E=(V=u.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var F,$,I;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tabs
        v-model="activeName"
        type="\${TabNavTypeTypes.BORDER_CARD}"
        class="demo-tabs"
        @tab-click="handleClick"
    >
        <fb-tab-pane label="User" name="first">User</fb-tab-pane>
        <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
        <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
        <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from '@fastybird/web-ui-library'

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event): void => {
    console.log(tab, event);
}
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTabs,
      FbTabPane
    },
    setup: () => {
      const activeName = ref("first");
      const handleClick = (tab: TabsPaneContext, event: Event): void => {
        console.log(tab, event);
      };
      return {
        activeName,
        handleClick
      };
    },
    template: \`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs
            v-model="activeName"
            type="\${TabNavTypeTypes.BORDER_CARD}"
            @tab-click="handleClick"
        >
            <fb-tab-pane label="User" name="first">User</fb-tab-pane>
            <fb-tab-pane label="Config" name="second">Config</fb-tab-pane>
            <fb-tab-pane label="Role" name="third">Role</fb-tab-pane>
            <fb-tab-pane label="Task" name="fourth">Task</fb-tab-pane>
        </fb-tabs>
    </div>
</div>\`
  })
}`,...(I=($=g.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var A,U,D;N.parameters={...N.parameters,docs:{...(A=N.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-radio-group v-model="tabPosition">
        <fb-radio-button value="\${TabPositionTypes.TOP}">top</fb-radio-button>
        <fb-radio-button value="\${TabPositionTypes.RIGHT}">right</fb-radio-button>
        <fb-radio-button value="\${TabPositionTypes.BOTTOM}">bottom</fb-radio-button>
        <fb-radio-button value="\${TabPositionTypes.LEFT}">left</fb-radio-button>
    </fb-radio-group>

    <fb-tabs :tab-position="tabPosition" class="demo-tabs">
        <fb-tab-pane label="User">User</fb-tab-pane>
        <fb-tab-pane label="Config">Config</fb-tab-pane>
        <fb-tab-pane label="Role">Role</fb-tab-pane>
        <fb-tab-pane label="Task">Task</fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabPosition = ref('left');
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTabs,
      FbTabPane,
      FbRadioGroup,
      FbRadioButton
    },
    setup: () => {
      const tabPosition = ref("left");
      return {
        tabPosition
      };
    },
    template: \`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__controls">
        <fb-radio-group v-model="tabPosition">
            <fb-radio-button value="\${TabPositionTypes.TOP}">top</fb-radio-button>
            <fb-radio-button value="\${TabPositionTypes.RIGHT}">right</fb-radio-button>
            <fb-radio-button value="\${TabPositionTypes.BOTTOM}">bottom</fb-radio-button>
            <fb-radio-button value="\${TabPositionTypes.LEFT}">left</fb-radio-button>
        </fb-radio-group>
    </div>

    <div class="fb-tabs-story-block__item">
        <fb-tabs :tab-position="tabPosition">
            <fb-tab-pane label="User">User</fb-tab-pane>
            <fb-tab-pane label="Config">Config</fb-tab-pane>
            <fb-tab-pane label="Role">Role</fb-tab-pane>
            <fb-tab-pane label="Task">Task</fb-tab-pane>
        </fb-tabs>
    </div>
</div>\`
  })
}`,...(D=(U=N.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var S,O,z;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tabs type="\${TabNavTypeTypes.BORDER_CARD}" class="demo-tabs">
        <fb-tab-pane>
            <template #label>
                <fb-icon><fas-calendar /></fb-icon>
                <span>Route</span>
            </template>

            Route
        </fb-tab-pane>
        <fb-tab-pane label="Config">Config</fb-tab-pane>
        <fb-tab-pane label="Role">Role</fb-tab-pane>
        <fb-tab-pane label="Task">Task</fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { FasCalendar } from '@fastybird/web-ui-icons';
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label .fb-icon {
    vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTabs,
      FbTabPane,
      FbIcon,
      FasCalendar
    },
    setup: () => {
      return {
        FasCalendar
      };
    },
    template: \`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs type="\${TabNavTypeTypes.BORDER_CARD}" class="fb-tabs-story-block__custom-tabs-label">
            <fb-tab-pane>
                <template #label>
                    <fb-icon><fas-calendar /></fb-icon>
                    <span>Route</span>
                </template>

                Route
            </fb-tab-pane>
            <fb-tab-pane label="Config">Config</fb-tab-pane>
            <fb-tab-pane label="Role">Role</fb-tab-pane>
            <fb-tab-pane label="Task">Task</fb-tab-pane>
        </fb-tabs>
    </div>
</div>\`
  })
}`,...(z=(O=y.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var B,G,M;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tabs
        v-model="editableTabsValue"
        type="\${TabNavTypeTypes.CARD}"
        editable
        class="demo-tabs"
        @edit="handleTabsEdit"
    >
        <fb-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
            {{ item.content }}
        </fb-tab-pane>
    </fb-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabPaneName } from '@fastybird/web-ui-library';

let tabIndex = 2;

const editableTabsValue = ref('2');

const editableTabs = ref([
    {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
    },
    {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content',
    },
]);

const handleTabsEdit = (
    targetName: TabPaneName | undefined,
    action: 'remove' | 'add',
) => {
    if (action === 'add') {
        const newTabName = \\\`\\$\\{++tabIndex\\}\\\`;

        editableTabs.value.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content',
        });

        editableTabsValue.value = newTabName;
    } else if (action === 'remove') {
        const tabs = editableTabs.value;

        let activeName = editableTabsValue.value;

        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    const nextTab = tabs[index + 1] || tabs[index - 1];

                    if (nextTab) {
                        activeName = nextTab.name;
                    }
                }
            })
        }

        editableTabsValue.value = activeName;
        editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
    }
}
<\/script>

<style scoped>
.demo-tabs > .fb-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTabs,
      FbTabPane
    },
    setup: () => {
      let tabIndex = 2;
      const editableTabsValue = ref("2");
      const editableTabs = ref([{
        title: "Tab 1",
        name: "1",
        content: "Tab 1 content"
      }, {
        title: "Tab 2",
        name: "2",
        content: "Tab 2 content"
      }]);
      const handleTabsEdit = (targetName: TabPaneName | undefined, action: "remove" | "add"): void => {
        if (action === "add") {
          const newTabName = \`\${++tabIndex}\`;
          editableTabs.value.push({
            title: "New Tab",
            name: newTabName,
            content: "New Tab content"
          });
          editableTabsValue.value = newTabName;
        } else if (action === "remove") {
          const tabs = editableTabs.value;
          let activeName = editableTabsValue.value;
          if (activeName === targetName) {
            tabs.forEach((tab, index): void => {
              if (tab.name === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          editableTabsValue.value = activeName;
          editableTabs.value = tabs.filter((tab): boolean => tab.name !== targetName);
        }
      };
      return {
        tabIndex,
        editableTabsValue,
        editableTabs,
        handleTabsEdit
      };
    },
    template: \`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs
            v-model="editableTabsValue"
            type="\${TabNavTypeTypes.CARD}"
            editable
            @edit="handleTabsEdit"
        >
            <fb-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
                {{ item.content }}
            </fb-tab-pane>
        </fb-tabs>
    </div>
</div>\`
  })
}`,...(M=(G=k.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var H,L,j;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-tabs
        v-model="editableTabsValue"
        type="\${TabNavTypeTypes.CARD}"
        editable
        class="demo-tabs"
        @edit="handleTabsEdit"
    >
        <template #add-icon>
            <fb-icon><fas-check /></fb-icon>
        </template>

        <fb-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
            {{ item.content }}
        </fb-tab-pane>
    </fb-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabPaneName } from '@fastybird/web-ui-library';

let tabIndex = 2;

const editableTabsValue = ref('2');

const editableTabs = ref([
    {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
    },
    {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content',
    },
]);

const handleTabsEdit = (
    targetName: TabPaneName | undefined,
    action: 'remove' | 'add',
) => {
    if (action === 'add') {
        const newTabName = \\\`\\$\\{++tabIndex\\}\\\`;

        editableTabs.value.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content',
        });

        editableTabsValue.value = newTabName;
    } else if (action === 'remove') {
        const tabs = editableTabs.value;

        let activeName = editableTabsValue.value;

        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    const nextTab = tabs[index + 1] || tabs[index - 1]
                    if (nextTab) {
                        activeName = nextTab.name
                    }
                }
            });
        }

        editableTabsValue.value = activeName;
        editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
    }
}
<\/script>

<style>
.demo-tabs > .fb-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTabs,
      FbTabPane,
      FbIcon,
      FasCheck
    },
    setup: () => {
      let tabIndex = 2;
      const editableTabsValue = ref("2");
      const editableTabs = ref([{
        title: "Tab 1",
        name: "1",
        content: "Tab 1 content"
      }, {
        title: "Tab 2",
        name: "2",
        content: "Tab 2 content"
      }]);
      const handleTabsEdit = (targetName: TabPaneName | undefined, action: "remove" | "add"): void => {
        if (action === "add") {
          const newTabName = \`\${++tabIndex}\`;
          editableTabs.value.push({
            title: "New Tab",
            name: newTabName,
            content: "New Tab content"
          });
          editableTabsValue.value = newTabName;
        } else if (action === "remove") {
          const tabs = editableTabs.value;
          let activeName = editableTabsValue.value;
          if (activeName === targetName) {
            tabs.forEach((tab, index): void => {
              if (tab.name === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          editableTabsValue.value = activeName;
          editableTabs.value = tabs.filter((tab): boolean => tab.name !== targetName);
        }
      };
      return {
        tabIndex,
        editableTabsValue,
        editableTabs,
        handleTabsEdit
      };
    },
    template: \`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__item">
        <fb-tabs
            v-model="editableTabsValue"
            type="\${TabNavTypeTypes.CARD}"
            editable
            @edit="handleTabsEdit"
        >
            <template #add-icon>
                <fb-icon><fas-check /></fb-icon>
            </template>

            <fb-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
                {{ item.content }}
            </fb-tab-pane>
        </fb-tabs>
    </div>
</div>\`
  })
}`,...(j=(L=h.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var W,q,J;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button size="small" @click="addTab(editableTabsValue)">
        Add new tab
    </fb-button>

    <fb-tabs
        v-model="editableTabsValue"
        type="\${TabNavTypeTypes.CARD}"
        closable
        class="demo-tabs"
        @tab-remove="removeTab"
    >
        <fb-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
            {{ item.content }}
        </fb-tab-pane>
    </fb-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

let tabIndex = 2;

const editableTabsValue = ref('2');

const editableTabs = ref([
    {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
    },
    {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content',
    },
]);

const addTab = (targetName: string) => {
    const newTabName = \\\`\\$\\{++tabIndex\\}\\\`;

    editableTabs.value.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
    });

    editableTabsValue.value = newTabName;
}

const removeTab = (targetName: string) => {
    const tabs = editableTabs.value;
    let activeName = editableTabsValue.value;

    if (activeName === targetName) {
        tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    activeName = nextTab.name
                }
            }
        });
    }

    editableTabsValue.value = activeName;
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
}
<\/script>

<style>
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbTabs,
      FbTabPane,
      FbButton
    },
    setup: () => {
      let tabIndex = 2;
      const editableTabsValue = ref("2");
      const editableTabs = ref([{
        title: "Tab 1",
        name: "1",
        content: "Tab 1 content"
      }, {
        title: "Tab 2",
        name: "2",
        content: "Tab 2 content"
      }]);
      const addTab = (): void => {
        const newTabName = \`\${++tabIndex}\`;
        editableTabs.value.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        editableTabsValue.value = newTabName;
      };
      const removeTab = (targetName: string): void => {
        const tabs = editableTabs.value;
        let activeName = editableTabsValue.value;
        if (activeName === targetName) {
          tabs.forEach((tab, index): void => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        editableTabsValue.value = activeName;
        editableTabs.value = tabs.filter((tab): boolean => tab.name !== targetName);
      };
      return {
        tabIndex,
        editableTabsValue,
        editableTabs,
        addTab,
        removeTab
      };
    },
    template: \`
<div class="fb-tabs-story-block">
    <div class="fb-tabs-story-block__controls">
        <fb-button size="small" @click="addTab">
            Add new tab
        </fb-button>
    </div>

    <div class="fb-tabs-story-block__item">
        <fb-tabs
            v-model="editableTabsValue"
            type="\${TabNavTypeTypes.CARD}"
            closable
            @tab-remove="removeTab"
        >
            <fb-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
                {{ item.content }}
            </fb-tab-pane>
        </fb-tabs>
    </div>
</div>\`
  })
}`,...(J=(q=C.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const ae=["BasicUsage","CardStyle","BorderCard","TabPosition","CustomTab","AddCloseTab","CustomAddIcon","CustomAddTrigger"],se=Object.freeze(Object.defineProperty({__proto__:null,AddCloseTab:k,BasicUsage:v,BorderCard:g,CardStyle:u,CustomAddIcon:h,CustomAddTrigger:C,CustomTab:y,TabPosition:N,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{k as A,v as B,u as C,se as T,g as a,N as b,y as c,h as d,C as e};
