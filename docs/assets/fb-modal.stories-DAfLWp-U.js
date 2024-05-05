import{r as t,j as Y}from"./vue.esm-bundler-DEpQrfwO.js";import{a as g}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{n as l,l as y,m as V}from"./index-Dg9quNvz.js";import{X as a,v as o,z as H,j as K,d as G,C as Q}from"./web-ui-components.es-nLJZCm2K.js";import{n,r as s}from"./web-ui-constants.es-Bfh99ZXh.js";const ee={component:a,title:"Components/Feedback/Modal",argTypes:{content:{type:{name:"string",required:!1},control:{type:"text"},description:"content of the modal footer for replacing whole modal content with custom one",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},header:{type:{name:"string",required:!1},control:{type:"text"},description:"content of the modal header for replacing whole modal header content with custom one",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},footer:{type:{name:"string",required:!1},control:{type:"text"},description:"content of the modal footer for replacing whole modal footer content with custom one",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},title:{type:{name:"string",required:!1},control:{type:"text"},description:"title of the modal",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},subtitle:{type:{name:"string",required:!1},control:{type:"text"},description:"subtitle of the modal",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},icon:{type:{name:"string",required:!1},control:{type:"text"},description:"modal header icon",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},default:{type:{name:"string",required:!1},control:{type:"text"},description:"content of modal",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},"left-button":{type:{name:"string",required:!1},control:{type:"text"},description:"slot for using custom left button used as `Close` action",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},"right-button":{type:{name:"string",required:!1},control:{type:"text"},description:"slot for using custom right button used as `Ok` action",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},variant:{type:{name:"string",required:!1},control:{type:"select"},options:[n.PRIMARY,n.DEFAULT,n.INFO,n.SUCCESS,n.WARNING,n.ERROR],description:"modal header and button variant",table:{type:{summary:"string"},defaultValue:{summary:n.PRIMARY}}},layout:{type:{name:"string",required:!1},control:{type:"select"},options:[s.DEFAULT,s.PHONE,s.TABLET],description:"modal layout",table:{type:{summary:"string"},defaultValue:{summary:s.DEFAULT}}},width:{type:{name:"string",required:!1},control:{type:"text"},description:"width of modal, default is 50%",table:{type:{summary:"string"},defaultValue:{summary:"50%"}}},fullscreen:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether the modal takes up full screen",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},top:{type:{name:"string",required:!1},control:{type:"text"},description:"value for `margin-top` of modal CSS, default is 15vh",table:{type:{summary:"string"},defaultValue:{summary:"15vh"}}},showHeader:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether a modal header is displayed",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},showFooter:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether a modal footer is displayed",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},backdrop:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether a mask is displayed",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},customClass:{type:{name:"string",required:!1},control:{type:"text"},description:"custom class names for backdrop",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},appendToBody:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether to append modal itself to body. A nested modal should have this attribute set to `true`",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},appendTo:{type:{name:"string",required:!1},control:{type:"text"},description:"which element the modal appends to. Will override `append-to-body`",table:{type:{summary:"string"},defaultValue:{summary:"body"}}},lockScroll:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether scroll of body is disabled while modal is displayed",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},openDelay:{type:{name:"number",required:!1},control:{type:"text"},description:"the time in milliseconds before open",table:{type:{summary:"number"},defaultValue:{summary:0}}},closeDelay:{type:{name:"number",required:!1},control:{type:"text"},description:"the time in milliseconds before close",table:{type:{summary:"number"},defaultValue:{summary:0}}},closeOnClickBackdrop:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether the modal can be closed by clicking the backdrop",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},closeOnPressEscape:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether the modal can be closed by pressing ESC",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},showClose:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether to show a close button",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},showLeftBtn:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether to show a left action button",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},leftBtnLabel:{type:{name:"string",required:!1},control:{type:"text"},description:"left action button label",table:{type:{summary:"string"},defaultValue:{summary:"Close"}}},showRightBtn:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether to show a right action button",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},rightBtnLabel:{type:{name:"string",required:!1},control:{type:"text"},description:"right action button label",table:{type:{summary:"string"},defaultValue:{summary:"Ok"}}},draggable:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"enable dragging feature for modal",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},overflow:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"draggable modal can overflow the viewport",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},center:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether to align the header and footer in center",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},alignCenter:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether to align the modal both horizontally and vertically",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},closable:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether enable or disable modal close action",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},destroyOnClose:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"destroy elements in modal when closed",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{variant:n.PRIMARY,layout:s.DEFAULT,width:"50%",fullscreen:!1,top:"15vh",showHeader:!0,showFooter:!0,backdrop:!0,appendToBody:!1,appendTo:"body",lockScroll:!1,openDelay:0,closeDelay:0,closeOnClickBackdrop:!0,closeOnPressEscape:!0,showClose:!0,showLeftBtn:!0,leftBtnLabel:"Close",showRightBtn:!0,rightBtnLabel:"Ok",draggable:!1,overflow:!1,center:!1,alignCenter:!1,closable:!0,destroyOnClose:!1},excludeStories:/.*Data$/},r={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="modalVisible = true">
        Click to open the Modal
    </fb-button>

    <fb-modal v-model="modalVisible">
        <span>This is a message</span>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:e=>({components:{FbModal:a,FbButton:o},setup(){const i=t(!1);return{args:e,modalVisible:i}},methods:{onClick:g("button-clicked"),onClose:g("modal-close-action-triggered"),onLeftClick:g("modal-left-button-clicked"),onRightClick:g("modal-right-button-clicked")},template:`
<fb-button @click.prevent="() => { modalVisible = true }">Open modal</fb-button>

<fb-modal
    v-model="modalVisible"
    v-bind="args"
    @close="(e) => { modalVisible = false; onClose(e) }"
    @leftClick="(e) => { modalVisible = false; onLeftClick(e) }"
    @rightClick="(e) => { modalVisible = false; onRightClick(e) }"
>
    <template
        v-if="${e.content!==null&&typeof e.content<"u"}"
        #content
    >
        ${e.content}
    </template>

    <template
        v-if="${e.header!==null&&typeof e.header<"u"}"
        #header
    >
        ${e.header}
    </template>

    <template
        v-if="${e.title!==null&&typeof e.title<"u"}"
        #title
    >
        ${e.title}
    </template>

    <template
        v-if="${e.subtitle!==null&&typeof e.subtitle<"u"}"
        #subtitle
    >
        ${e.subtitle}
    </template>

    <template
        v-if="${e.icon!==null&&typeof e.icon<"u"}"
        #icon
    >
        ${e.icon}
    </template>

    <template
        v-if="${e.default!==null&&typeof e.default<"u"}"
        #default
    >
        ${e.default}
    </template>

    <template
        v-if="${e.footer!==null&&typeof e.footer<"u"}"
        #footer
    >
        ${e.footer}
    </template>

    <template
        v-if="${e["left-button"]!==null&&typeof e["left-button"]<"u"}"
        #left-button
    >
        ${e["left-button"]}
    </template>

    <template
        v-if="${e["right-button"]!==null&&typeof e["right-button"]<"u"}"
        #right-button
    >
        ${e["right-button"]}
    </template>
</fb-modal>`}),args:{title:"Modal window header",default:`
            <div>
                <p>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi. Nunc sodales vel libero ac gravida. Maecenas malesuada viverra odio at molestie.</p>
                <p>Donec ultrices vel nibh a iaculis. Morbi dapibus sollicitudin libero facilisis dapibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi. Nunc sodales vel libero ac gravida. Maecenas malesuada viverra odio at molestie.</p>
            </div>`}},d={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="modalVisible = true">
        Click to open the Modal
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
    >
        <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
        <template #icon><fas-image /></template>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbModal:a,FbButton:o,FasImage:l},setup(){const e=t(!1);return{FasImage:l,modalVisible:e}},template:`
<fb-button plain @click="modalVisible = true">
    Click to open the Modal
</fb-button>

<fb-modal
    v-model="modalVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    @leftClick="(e) => { modalVisible = false; }"
    @rightClick="(e) => { modalVisible = false; }"
>
    <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
    <template #icon><fas-image /></template>
</fb-modal>`})},m={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="modalTableVisible = true">
        Open a Table nested Modal
    </fb-button>

    <fb-button plain @click="modalFormVisible = true">
        Open a Form nested Modal
    </fb-button>

    <fb-modal v-model="modalTableVisible" title="Shipping address" width="800">
        <fb-table :data="gridData">
            <fb-table-column property="date" label="Date" width="150" />
            <fb-table-column property="name" label="Name" width="200" />
            <fb-table-column property="address" label="Address" />
        </fb-table>
    </fb-modal>

    <fb-modal v-model="modalFormVisible" title="Shipping address" width="500">
        <fb-form :model="form">
            <fb-form-item label="Promotion name" :label-width="formLabelWidth">
                <fb-input v-model="form.name" autocomplete="off" />
            </fb-form-item>
            <fb-form-item label="Zones" :label-width="formLabelWidth">
                <fb-select v-model="form.region" placeholder="Please select a zone">
                    <fb-option label="Zone No.1" value="shanghai" />
                    <fb-option label="Zone No.2" value="beijing" />
                </fb-select>
            </fb-form-item>
        </fb-form>
        <template #footer>
            <div class="modal-footer">
                <fb-button @click="modalFormVisible = false">Cancel</fb-button>
                <fb-button variant="primary" @click="modalFormVisible = false">
                    Confirm
                </fb-button>
            </div>
        </template>
    </fb-modal>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const modalTableVisible = ref(false);
const modalFormVisible = ref(false);
const formLabelWidth = '140px';

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
];
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbModal:a,FbButton:o,FbForm:H,FbFormItem:K,FbInput:G,FasKeyboard:y},setup(){const e=t(!1),i=t(!1),U="140px",X=Y({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""});return{modalTableVisible:e,modalFormVisible:i,formLabelWidth:U,form:X,gridData:[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-03",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],FasKeyboard:y}},template:`
<fb-button plain @click="modalTableVisible = true">
    Open a Table nested Modal
</fb-button>

<fb-button plain @click="modalFormVisible = true">
    Open a Form nested Modal
</fb-button>

<fb-modal
    v-model="modalTableVisible"
    title="Shipping address"
    width="800"
    @leftClick="(e) => { modalTableVisible = false; }"
    @rightClick="(e) => { modalTableVisible = false; }"
>
    <fb-table :data="gridData">
        <fb-table-column property="date" label="Date" width="150" />
        <fb-table-column property="name" label="Name" width="200" />
        <fb-table-column property="address" label="Address" />
    </fb-table>
</fb-modal>

<fb-modal v-model="modalFormVisible" title="Shipping address" width="500">
    <template #icon>
        <fas-keyboard />
    </template>

    <fb-form :model="form">
        <fb-form-item label="Promotion name" :label-width="formLabelWidth">
            <fb-input v-model="form.name" autocomplete="off" />
        </fb-form-item>
        <fb-form-item label="Zones" :label-width="formLabelWidth">
            <fb-select v-model="form.region" placeholder="Please select a zone">
                <fb-option label="Zone No.1" value="shanghai" />
                <fb-option label="Zone No.2" value="beijing" />
            </fb-select>
        </fb-form-item>
    </fb-form>
    <template #footer>
        <div class="modal-footer">
            <fb-button @click="modalFormVisible = false">Cancel</fb-button>
            <fb-button variant="${n.PRIMARY}" @click="modalFormVisible = false">
                Confirm
            </fb-button>
        </div>
    </template>
</fb-modal>`})},b={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="modalVisible = true">
        Open Modal with customized header
    </fb-button>

    <fb-modal v-model="modalVisible" :show-close="false" width="500">
        <template #header="{ close, titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>

                <fb-button variant="danger" @click="close">
                    <fb-icon class="fb-icon--left"><fas-circle-xmark /></fb-icon>
                    Close
                </fb-button>
            </div>
        </template>
        This is modal content.
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FasCircleXmark } from '@fastybird/web-ui-icons';

const modalVisible = ref(false);
<\/script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbModal:a,FbButton:o,FbIcon:Q,FasCircleXmark:V},setup(){const e=t(!1);return{FasCircleXmark:V,modalVisible:e}},template:`
<div class="fb-modal-story-block">
    <fb-button plain @click="modalVisible = true">
        Open Modal with customized header
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        :show-close="false"
        width="500"
        @leftClick="(e) => { modalVisible = false; }"
        @rightClick="(e) => { modalVisible = false; }"
    >
        <template #header="{ close, titleId, titleClass }">
            <div class="fb-modal-story-block__custom-modal-header">
                <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>

                <fb-button variant="${n.DANGER}" @click="close">
                    <fb-icon class="fb-icon--left"><fas-circle-xmark /></fb-icon>
                    Close
                </fb-button>
            </div>
        </template>

        This is modal content.
    </fb-modal>
</div>`})},u={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="outerVisible = true">
        Open the outer Modal
    </fb-button>

    <fb-modal v-model="outerVisible" title="Outer Modal" width="800">
        <span>This is the outer Modal</span>
        <fb-modal
            v-model="innerVisible"
            width="500"
            title="Inner Modal"
            append-to-body
        >
            <span>This is the inner Modal</span>
        </fb-modal>
        <template #footer>
            <div class="modal-footer">
                <fb-button @click="outerVisible = false">Cancel</fb-button>
                <fb-button variant="primary" @click="innerVisible = true">
                    Open the inner Modal
                </fb-button>
            </div>
        </template>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const outerVisible = ref(false);
const innerVisible = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbModal:a,FbButton:o},setup(){const e=t(!1),i=t(!1);return{outerVisible:e,innerVisible:i}},template:`
<div>
    <fb-button plain @click="outerVisible = true">
        Open the outer Modal
    </fb-button>

    <fb-modal v-model="outerVisible" title="Outer Modal" width="800">
        <span>This is the outer Modal</span>
        <fb-modal
            v-model="innerVisible"
            width="500"
            title="Inner Modal"
            append-to-body
            @leftClick="(e) => { innerVisible = false; }"
            @rightClick="(e) => { innerVisible = false; }"
        >
            <span>This is the inner Modal</span>
        </fb-modal>
        <template #footer>
            <div class="modal-footer">
                <fb-button @click="outerVisible = false">Cancel</fb-button>
                <fb-button variant="${n.PRIMARY}" @click="innerVisible = true">
                    Open the inner Modal
                </fb-button>
            </div>
        </template>
    </fb-modal>
</div>`})},p={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="modalVisible = true">
        Click to open the Modal
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
        center
    >
        <span>It should be noted that the content will not be aligned in center by default</span>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbModal:a,FbButton:o,FasImage:l},setup(){const e=t(!1);return{FasImage:l,modalVisible:e}},template:`
<fb-button plain @click="modalVisible = true">
    Click to open the Modal
</fb-button>

<fb-modal
    v-model="modalVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    center
    @leftClick="(e) => { modalVisible = false; }"
    @rightClick="(e) => { modalVisible = false; }"
>
    <span>It should be noted that the content will not be aligned in center by default</span>
</fb-modal>`})},c={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="modalVisible = true">
        Click to open the Modal
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
        align-center
    >
        <span>It should be noted that the content will not be aligned in center by default</span>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbModal:a,FbButton:o,FasImage:l},setup(){const e=t(!1);return{FasImage:l,modalVisible:e}},template:`
<fb-button plain @click="modalVisible = true">
    Click to open the Modal
</fb-button>

<fb-modal
    v-model="modalVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    align-center
    @leftClick="(e) => { modalVisible = false; }"
    @rightClick="(e) => { modalVisible = false; }"
>
    <span>It should be noted that the content will not be aligned in center by default</span>
</fb-modal>`})},f={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="modalVisible = true">
    Open a draggable Modal
    </fb-button>

    <fb-button plain @click="modalOverflowVisible = true">
    Open a overflow draggable Modal
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
        draggable
    >
        <span>It's a draggable Dialog</span>
    </fb-modal>

    <fb-modal
        v-model="modalOverflowVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
        draggable
        overflow
    >
        <span>It's a overflow draggable Dialog</span>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
const modalVisiblemodalOverflowVisible = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbModal:a,FbButton:o,FasImage:l},setup(){const e=t(!1),i=t(!1);return{FasImage:l,modalVisible:e,modalOverflowVisible:i}},template:`
<fb-button plain @click="modalVisible = true">
    Open a draggable Modal
</fb-button>

<fb-button plain @click="modalOverflowVisible = true">
    Open a overflow draggable Modal
</fb-button>

<fb-modal
    v-model="modalVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    draggable
>
    <span>It's a draggable Dialog</span>
</fb-modal>

<fb-modal
    v-model="modalOverflowVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    draggable
    overflow
>
    <span>It's a overflow draggable Dialog</span>
</fb-modal>`})},h={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="modalVisible = true">
        Click to open the Modal
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
    >
        <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
        <template #description>
            Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.
        </template>
        <template #icon><fas-image /></template>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbModal:a,FbButton:o,FasImage:l},setup(){const e=t(!1);return{FasImage:l,modalVisible:e}},template:`
<fb-button plain @click="modalVisible = true">
    Click to open the Modal
</fb-button>

<fb-modal
    v-model="modalVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    @leftClick="(e) => { modalVisible = false; }"
    @rightClick="(e) => { modalVisible = false; }"
>
    <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
    <template #description>
        Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.
    </template>
    <template #icon><fas-image /></template>
</fb-modal>`})};var v,k,w;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="modalVisible = true">
        Click to open the Modal
    </fb-button>

    <fb-modal v-model="modalVisible">
        <span>This is a message</span>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: args => ({
    components: {
      FbModal,
      FbButton
    },
    setup() {
      const modalVisible = ref<boolean>(false);
      return {
        args,
        modalVisible
      };
    },
    methods: {
      onClick: action("button-clicked"),
      onClose: action("modal-close-action-triggered"),
      onLeftClick: action("modal-left-button-clicked"),
      onRightClick: action("modal-right-button-clicked")
    },
    template: \`
<fb-button @click.prevent="() => { modalVisible = true }">Open modal</fb-button>

<fb-modal
    v-model="modalVisible"
    v-bind="args"
    @close="(e) => { modalVisible = false; onClose(e) }"
    @leftClick="(e) => { modalVisible = false; onLeftClick(e) }"
    @rightClick="(e) => { modalVisible = false; onRightClick(e) }"
>
    <template
        v-if="\${args.content !== null && typeof args.content !== "undefined"}"
        #content
    >
        \${args.content}
    </template>

    <template
        v-if="\${args.header !== null && typeof args.header !== "undefined"}"
        #header
    >
        \${args.header}
    </template>

    <template
        v-if="\${args.title !== null && typeof args.title !== "undefined"}"
        #title
    >
        \${args.title}
    </template>

    <template
        v-if="\${args.subtitle !== null && typeof args.subtitle !== "undefined"}"
        #subtitle
    >
        \${args.subtitle}
    </template>

    <template
        v-if="\${args.icon !== null && typeof args.icon !== "undefined"}"
        #icon
    >
        \${args.icon}
    </template>

    <template
        v-if="\${args.default !== null && typeof args.default !== "undefined"}"
        #default
    >
        \${args.default}
    </template>

    <template
        v-if="\${args.footer !== null && typeof args.footer !== "undefined"}"
        #footer
    >
        \${args.footer}
    </template>

    <template
        v-if="\${args["left-button"] !== null && typeof args["left-button"] !== "undefined"}"
        #left-button
    >
        \${args["left-button"]}
    </template>

    <template
        v-if="\${args["right-button"] !== null && typeof args["right-button"] !== "undefined"}"
        #right-button
    >
        \${args["right-button"]}
    </template>
</fb-modal>\`
  }),
  args: {
    title: "Modal window header",
    default: \`
            <div>
                <p>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi. Nunc sodales vel libero ac gravida. Maecenas malesuada viverra odio at molestie.</p>
                <p>Donec ultrices vel nibh a iaculis. Morbi dapibus sollicitudin libero facilisis dapibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi. Nunc sodales vel libero ac gravida. Maecenas malesuada viverra odio at molestie.</p>
            </div>\`
  }
}`,...(w=(k=r.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var C,F,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="modalVisible = true">
        Click to open the Modal
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
    >
        <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
        <template #icon><fas-image /></template>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbModal,
      FbButton,
      FasImage
    },
    setup() {
      const modalVisible = ref(false);
      return {
        FasImage,
        modalVisible
      };
    },
    template: \`
<fb-button plain @click="modalVisible = true">
    Click to open the Modal
</fb-button>

<fb-modal
    v-model="modalVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    @leftClick="(e) => { modalVisible = false; }"
    @rightClick="(e) => { modalVisible = false; }"
>
    <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
    <template #icon><fas-image /></template>
</fb-modal>\`
  })
}`,...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var S,I,P;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="modalTableVisible = true">
        Open a Table nested Modal
    </fb-button>

    <fb-button plain @click="modalFormVisible = true">
        Open a Form nested Modal
    </fb-button>

    <fb-modal v-model="modalTableVisible" title="Shipping address" width="800">
        <fb-table :data="gridData">
            <fb-table-column property="date" label="Date" width="150" />
            <fb-table-column property="name" label="Name" width="200" />
            <fb-table-column property="address" label="Address" />
        </fb-table>
    </fb-modal>

    <fb-modal v-model="modalFormVisible" title="Shipping address" width="500">
        <fb-form :model="form">
            <fb-form-item label="Promotion name" :label-width="formLabelWidth">
                <fb-input v-model="form.name" autocomplete="off" />
            </fb-form-item>
            <fb-form-item label="Zones" :label-width="formLabelWidth">
                <fb-select v-model="form.region" placeholder="Please select a zone">
                    <fb-option label="Zone No.1" value="shanghai" />
                    <fb-option label="Zone No.2" value="beijing" />
                </fb-select>
            </fb-form-item>
        </fb-form>
        <template #footer>
            <div class="modal-footer">
                <fb-button @click="modalFormVisible = false">Cancel</fb-button>
                <fb-button variant="primary" @click="modalFormVisible = false">
                    Confirm
                </fb-button>
            </div>
        </template>
    </fb-modal>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const modalTableVisible = ref(false);
const modalFormVisible = ref(false);
const formLabelWidth = '140px';

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
];
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbModal,
      FbButton,
      FbForm,
      FbFormItem,
      FbInput,
      FasKeyboard
    },
    setup() {
      const modalTableVisible = ref(false);
      const modalFormVisible = ref(false);
      const formLabelWidth = "140px";
      const form = reactive({
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      });
      const gridData = [{
        date: "2016-05-02",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      }, {
        date: "2016-05-04",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      }, {
        date: "2016-05-01",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      }, {
        date: "2016-05-03",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      }];
      return {
        modalTableVisible,
        modalFormVisible,
        formLabelWidth,
        form,
        gridData,
        FasKeyboard
      };
    },
    template: \`
<fb-button plain @click="modalTableVisible = true">
    Open a Table nested Modal
</fb-button>

<fb-button plain @click="modalFormVisible = true">
    Open a Form nested Modal
</fb-button>

<fb-modal
    v-model="modalTableVisible"
    title="Shipping address"
    width="800"
    @leftClick="(e) => { modalTableVisible = false; }"
    @rightClick="(e) => { modalTableVisible = false; }"
>
    <fb-table :data="gridData">
        <fb-table-column property="date" label="Date" width="150" />
        <fb-table-column property="name" label="Name" width="200" />
        <fb-table-column property="address" label="Address" />
    </fb-table>
</fb-modal>

<fb-modal v-model="modalFormVisible" title="Shipping address" width="500">
    <template #icon>
        <fas-keyboard />
    </template>

    <fb-form :model="form">
        <fb-form-item label="Promotion name" :label-width="formLabelWidth">
            <fb-input v-model="form.name" autocomplete="off" />
        </fb-form-item>
        <fb-form-item label="Zones" :label-width="formLabelWidth">
            <fb-select v-model="form.region" placeholder="Please select a zone">
                <fb-option label="Zone No.1" value="shanghai" />
                <fb-option label="Zone No.2" value="beijing" />
            </fb-select>
        </fb-form-item>
    </fb-form>
    <template #footer>
        <div class="modal-footer">
            <fb-button @click="modalFormVisible = false">Cancel</fb-button>
            <fb-button variant="\${VariantTypes.PRIMARY}" @click="modalFormVisible = false">
                Confirm
            </fb-button>
        </div>
    </template>
</fb-modal>\`
  })
}`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var O,D,q;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="modalVisible = true">
        Open Modal with customized header
    </fb-button>

    <fb-modal v-model="modalVisible" :show-close="false" width="500">
        <template #header="{ close, titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>

                <fb-button variant="danger" @click="close">
                    <fb-icon class="fb-icon--left"><fas-circle-xmark /></fb-icon>
                    Close
                </fb-button>
            </div>
        </template>
        This is modal content.
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FasCircleXmark } from '@fastybird/web-ui-icons';

const modalVisible = ref(false);
<\/script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbModal,
      FbButton,
      FbIcon,
      FasCircleXmark
    },
    setup() {
      const modalVisible = ref(false);
      return {
        FasCircleXmark,
        modalVisible
      };
    },
    template: \`
<div class="fb-modal-story-block">
    <fb-button plain @click="modalVisible = true">
        Open Modal with customized header
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        :show-close="false"
        width="500"
        @leftClick="(e) => { modalVisible = false; }"
        @rightClick="(e) => { modalVisible = false; }"
    >
        <template #header="{ close, titleId, titleClass }">
            <div class="fb-modal-story-block__custom-modal-header">
                <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>

                <fb-button variant="\${VariantTypes.DANGER}" @click="close">
                    <fb-icon class="fb-icon--left"><fas-circle-xmark /></fb-icon>
                    Close
                </fb-button>
            </div>
        </template>

        This is modal content.
    </fb-modal>
</div>\`
  })
}`,...(q=(D=b.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var T,x,R;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="outerVisible = true">
        Open the outer Modal
    </fb-button>

    <fb-modal v-model="outerVisible" title="Outer Modal" width="800">
        <span>This is the outer Modal</span>
        <fb-modal
            v-model="innerVisible"
            width="500"
            title="Inner Modal"
            append-to-body
        >
            <span>This is the inner Modal</span>
        </fb-modal>
        <template #footer>
            <div class="modal-footer">
                <fb-button @click="outerVisible = false">Cancel</fb-button>
                <fb-button variant="primary" @click="innerVisible = true">
                    Open the inner Modal
                </fb-button>
            </div>
        </template>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const outerVisible = ref(false);
const innerVisible = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbModal,
      FbButton
    },
    setup() {
      const outerVisible = ref(false);
      const innerVisible = ref(false);
      return {
        outerVisible,
        innerVisible
      };
    },
    template: \`
<div>
    <fb-button plain @click="outerVisible = true">
        Open the outer Modal
    </fb-button>

    <fb-modal v-model="outerVisible" title="Outer Modal" width="800">
        <span>This is the outer Modal</span>
        <fb-modal
            v-model="innerVisible"
            width="500"
            title="Inner Modal"
            append-to-body
            @leftClick="(e) => { innerVisible = false; }"
            @rightClick="(e) => { innerVisible = false; }"
        >
            <span>This is the inner Modal</span>
        </fb-modal>
        <template #footer>
            <div class="modal-footer">
                <fb-button @click="outerVisible = false">Cancel</fb-button>
                <fb-button variant="\${VariantTypes.PRIMARY}" @click="innerVisible = true">
                    Open the inner Modal
                </fb-button>
            </div>
        </template>
    </fb-modal>
</div>\`
  })
}`,...(R=(x=u.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var $,W,N;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="modalVisible = true">
        Click to open the Modal
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
        center
    >
        <span>It should be noted that the content will not be aligned in center by default</span>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbModal,
      FbButton,
      FasImage
    },
    setup() {
      const modalVisible = ref(false);
      return {
        FasImage,
        modalVisible
      };
    },
    template: \`
<fb-button plain @click="modalVisible = true">
    Click to open the Modal
</fb-button>

<fb-modal
    v-model="modalVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    center
    @leftClick="(e) => { modalVisible = false; }"
    @rightClick="(e) => { modalVisible = false; }"
>
    <span>It should be noted that the content will not be aligned in center by default</span>
</fb-modal>\`
  })
}`,...(N=(W=p.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var B,J,L;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="modalVisible = true">
        Click to open the Modal
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
        align-center
    >
        <span>It should be noted that the content will not be aligned in center by default</span>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbModal,
      FbButton,
      FasImage
    },
    setup() {
      const modalVisible = ref(false);
      return {
        FasImage,
        modalVisible
      };
    },
    template: \`
<fb-button plain @click="modalVisible = true">
    Click to open the Modal
</fb-button>

<fb-modal
    v-model="modalVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    align-center
    @leftClick="(e) => { modalVisible = false; }"
    @rightClick="(e) => { modalVisible = false; }"
>
    <span>It should be noted that the content will not be aligned in center by default</span>
</fb-modal>\`
  })
}`,...(L=(J=c.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var j,A,_;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="modalVisible = true">
    Open a draggable Modal
    </fb-button>

    <fb-button plain @click="modalOverflowVisible = true">
    Open a overflow draggable Modal
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
        draggable
    >
        <span>It's a draggable Dialog</span>
    </fb-modal>

    <fb-modal
        v-model="modalOverflowVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
        draggable
        overflow
    >
        <span>It's a overflow draggable Dialog</span>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
const modalVisiblemodalOverflowVisible = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbModal,
      FbButton,
      FasImage
    },
    setup() {
      const modalVisible = ref(false);
      const modalOverflowVisible = ref(false);
      return {
        FasImage,
        modalVisible,
        modalOverflowVisible
      };
    },
    template: \`
<fb-button plain @click="modalVisible = true">
    Open a draggable Modal
</fb-button>

<fb-button plain @click="modalOverflowVisible = true">
    Open a overflow draggable Modal
</fb-button>

<fb-modal
    v-model="modalVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    draggable
>
    <span>It's a draggable Dialog</span>
</fb-modal>

<fb-modal
    v-model="modalOverflowVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    draggable
    overflow
>
    <span>It's a overflow draggable Dialog</span>
</fb-modal>\`
  })
}`,...(_=(A=f.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var E,z,Z;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="modalVisible = true">
        Click to open the Modal
    </fb-button>

    <fb-modal
        v-model="modalVisible"
        title="Simple modal header"
        subtitle="With simple subtitle"
        width="500"
    >
        <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
        <template #description>
            Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.
        </template>
        <template #icon><fas-image /></template>
    </fb-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const modalVisible = ref(false);
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbModal,
      FbButton,
      FasImage
    },
    setup() {
      const modalVisible = ref(false);
      return {
        FasImage,
        modalVisible
      };
    },
    template: \`
<fb-button plain @click="modalVisible = true">
    Click to open the Modal
</fb-button>

<fb-modal
    v-model="modalVisible"
    title="Simple modal header"
    subtitle="With simple subtitle"
    width="500"
    @leftClick="(e) => { modalVisible = false; }"
    @rightClick="(e) => { modalVisible = false; }"
>
    <span>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.</span>
    <template #description>
        Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi.
    </template>
    <template #icon><fas-image /></template>
</fb-modal>\`
  })
}`,...(Z=(z=h.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};const te=["Playground","BasicUsage","CustomContent","CustomHeader","NestedModal","CentredContent","AlignCentred","Draggable","WithDescription"],re=Object.freeze(Object.defineProperty({__proto__:null,AlignCentred:c,BasicUsage:d,CentredContent:p,CustomContent:m,CustomHeader:b,Draggable:f,NestedModal:u,Playground:r,WithDescription:h,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{c as A,d as B,m as C,f as D,re as M,u as N,r as P,h as W,b as a,p as b};
