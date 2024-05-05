import{a as it}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{f as st}from"./index-B-T0PRdw.js";import{f as v,a as bt,d as rt,e as ut,g as ft,h as ot,i as lt,j as dt,k as ct}from"./index-Dg9quNvz.js";import{v as a,b,C as et}from"./web-ui-components.es-nLJZCm2K.js";import{t as n,n as t}from"./web-ui-constants.es-Bfh99ZXh.js";const pt={component:a,title:"Components/Basic/Button",argTypes:{default:{type:{name:"string",required:!0},control:{type:"text"},description:"required slot representing button content",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},size:{type:{name:"string",required:!1},control:{type:"select"},options:[n.LARGE,n.DEFAULT,n.SMALL],description:"button size",table:{type:{summary:"string"},defaultValue:{summary:n.DEFAULT}}},variant:{type:{name:"string",required:!1},control:{type:"select"},options:["",t.DEFAULT,t.PRIMARY,t.INFO,t.SUCCESS,t.WARNING,t.DANGER],description:"button variant",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},type:{type:{name:"string",required:!1},control:{type:"select"},options:[b.BUTTON,b.SUBMIT,b.RESET],description:"same as native button's `type`",table:{type:{summary:"string"},defaultValue:{summary:b.BUTTON}}},block:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether button is stretched to full width",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},uppercase:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether button text is in uppercase",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},link:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether it's a link button",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},round:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether it's a round button",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},circle:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether it's a circle button",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},text:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether it's a text button",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},plain:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether it's a plain button",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},bg:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether the text button background color is always on",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},color:{type:{name:"string",required:!1},control:{type:"text"},description:"custom button color, automatically calculate `hover` and `active` color",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},active:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether it's a active button",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},autofocus:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"same as native button's `autofocus`",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"whether it's loading",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loadingIcon:{type:{name:"string",required:!1},control:{type:"text"},description:"customize loading icon component",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},icon:{type:{name:"string",required:!1},control:{type:"text"},description:"icon component",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},tag:{type:{name:"string",required:!1},control:{type:"text"},description:"custom element tag",table:{type:{summary:"string"},defaultValue:{summary:"button"}}},dark:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"dark mode, which automatically converts `color` to dark mode colors",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},onClick:{table:{disable:!0}}},args:{size:n.DEFAULT,type:b.BUTTON,block:!1,uppercase:!1,link:!1,round:!1,circle:!1,text:!1,plain:!1,bg:!1,active:!1,disabled:!1,autofocus:!1,loading:!1,tag:"button",dark:!1,onClick:st()},excludeStories:/.*Data$/},mt={onClick:it("click")},o={tags:["hideInSidebar"],args:{default:"Default"}},e={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-button>Default</fb-button>
        <fb-button variant="${t.PRIMARY}">Primary</fb-button>
        <fb-button variant="${t.SUCCESS}">Success</fb-button>
        <fb-button variant="${t.INFO}">Info</fb-button>
        <fb-button variant="${t.WARNING}">Warning</fb-button>
        <fb-button variant="${t.DANGER}">Danger</fb-button>
    </div>
    
    <div>
        <fb-button plain>Plain</fb-button>
        <fb-button variant="${t.PRIMARY}" plain>Primary</fb-button>
        <fb-button variant="${t.SUCCESS}" plain>Success</fb-button>
        <fb-button variant="${t.INFO}" plain>Info</fb-button>
        <fb-button variant="${t.WARNING}" plain>Warning</fb-button>
        <fb-button variant="${t.DANGER}" plain>Danger</fb-button>
    </div>
    
    <div>
        <fb-button round>Round</fb-button>
        <fb-button variant="${t.PRIMARY}" round>Primary</fb-button>
        <fb-button variant="${t.SUCCESS}" round>Success</fb-button>
        <fb-button variant="${t.INFO}" round>Info</fb-button>
        <fb-button variant="${t.WARNING}" round>Warning</fb-button>
        <fb-button variant="${t.DANGER}" round>Danger</fb-button>
    </div>
    
    <div>
        <fb-button :icon="FasMagnifyingGlass" circle />
        <fb-button variant="${t.PRIMARY}" :icon="FasPenToSquare" circle />
        <fb-button variant="${t.SUCCESS}" :icon="FasEnvelope" circle />
        <fb-button variant="${t.INFO}" :icon="FasCheck" circle />
        <fb-button variant="${t.WARNING}" :icon="FasStar" circle />
        <fb-button variant="${t.DANGER}" :icon="FasTrashCan" circle />
    </div>
</template>

<script lang="ts" setup>
import {
  FasMagnifyingGlass,
  FasCheck,
  FasEnvelope,
  FasPenToSquare,
  FasStar,
  FasTrashCan,
} from '@fastybird/web-ui-icons';
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a},setup(){return{FasMagnifyingGlass:v,FasPenToSquare:bt,FasEnvelope:rt,FasCheck:ut,FasStar:ft,FasTrashCan:ot}},template:`
<div class="fb-button-story-block">
    <div class="fb-button-story-block__item">
        <fb-button>Default</fb-button>
        <fb-button variant="${t.PRIMARY}">Primary</fb-button>
        <fb-button variant="${t.INFO}">Info</fb-button>
        <fb-button variant="${t.SUCCESS}">Success</fb-button>
        <fb-button variant="${t.WARNING}">Warning</fb-button>
        <fb-button variant="${t.DANGER}">Danger</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button plain>Plain</fb-button>
        <fb-button variant="${t.PRIMARY}" plain>Primary</fb-button>
        <fb-button variant="${t.INFO}" plain>Info</fb-button>
        <fb-button variant="${t.SUCCESS}" plain>Success</fb-button>
        <fb-button variant="${t.WARNING}" plain>Warning</fb-button>
        <fb-button variant="${t.DANGER}" plain>Danger</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button round>Round</fb-button>
        <fb-button variant="${t.PRIMARY}" round>Primary</fb-button>
        <fb-button variant="${t.INFO}" round>Info</fb-button>
        <fb-button variant="${t.SUCCESS}" round>Success</fb-button>
        <fb-button variant="${t.WARNING}" round>Warning</fb-button>
        <fb-button variant="${t.DANGER}" round>Danger</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button circle :icon="FasMagnifyingGlass" />
        <fb-button variant="${t.PRIMARY}" circle :icon="FasPenToSquare" />
        <fb-button variant="${t.SUCCESS}" circle :icon="FasEnvelope" />
        <fb-button variant="${t.INFO}" circle :icon="FasCheck" />
        <fb-button variant="${t.WARNING}" circle :icon="FasStar" />
        <fb-button variant="${t.DANGER}" circle :icon="FasTrashCan" />
    </div>
</div>`})},i={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-button disabled>Default</fb-button>
        <fb-button variant="${t.PRIMARY}" disabled>Primary</fb-button>
        <fb-button variant="${t.INFO}" disabled>Info</fb-button>
        <fb-button variant="${t.SUCCESS}" disabled>Success</fb-button>
        <fb-button variant="${t.WARNING}" disabled>Warning</fb-button>
        <fb-button variant="${t.DANGER}" disabled>Danger</fb-button>
    </div>

    <div>
        <fb-button plain disabled>Plain</fb-button>
        <fb-button variant="${t.PRIMARY}" plain disabled>Primary</fb-button>
        <fb-button variant="${t.INFO}" plain disabled>Info</fb-button>
        <fb-button variant="${t.SUCCESS}" plain disabled>Success</fb-button>
        <fb-button variant="${t.WARNING}" plain disabled>Warning</fb-button>
        <fb-button variant="${t.DANGER}" plain disabled>Danger</fb-button>
    </div>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a},template:`
<div class="fb-button-story-block">
    <div class="fb-button-story-block__item">
        <fb-button disabled>Default</fb-button>
        <fb-button variant="${t.PRIMARY}" disabled>Primary</fb-button>
        <fb-button variant="${t.INFO}" disabled>Info</fb-button>
        <fb-button variant="${t.SUCCESS}" disabled>Success</fb-button>
        <fb-button variant="${t.WARNING}" disabled>Warning</fb-button>
        <fb-button variant="${t.DANGER}" disabled>Danger</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button plain disabled>Plain</fb-button>
        <fb-button variant="${t.PRIMARY}" plain disabled>Primary</fb-button>
        <fb-button variant="${t.INFO}" plain disabled>Info</fb-button>
        <fb-button variant="${t.SUCCESS}" plain disabled>Success</fb-button>
        <fb-button variant="${t.WARNING}" plain disabled>Warning</fb-button>
        <fb-button variant="${t.DANGER}" plain disabled>Danger</fb-button>
    </div>
</div>`})},s={parameters:{docs:{source:{code:`
<template>
    <fb-button link>Default</fb-button>
    <fb-button variant="${t.PRIMARY}" link>Primary</fb-button>
    <fb-button variant="${t.INFO}" link>Info</fb-button>
    <fb-button variant="${t.SUCCESS}" link>Success</fb-button>
    <fb-button variant="${t.WARNING}" link>Warning</fb-button>
    <fb-button variant="${t.DANGER}" link>Danger</fb-button>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a},template:`
<div class="fb-button-story-block">
    <fb-button link>Default</fb-button>
    <fb-button variant="${t.PRIMARY}" link>Primary</fb-button>
    <fb-button variant="${t.INFO}" link>Info</fb-button>
    <fb-button variant="${t.SUCCESS}" link>Success</fb-button>
    <fb-button variant="${t.WARNING}" link>Warning</fb-button>
    <fb-button variant="${t.DANGER}" link>Danger</fb-button>
</div>`})},r={parameters:{docs:{source:{code:`
<template>
    <fb-button link disabled>Plain</fb-button>
    <fb-button variant="${t.PRIMARY}" link disabled>Primary</fb-button>
    <fb-button variant="${t.INFO}" link disabled>Info</fb-button>
    <fb-button variant="${t.SUCCESS}" link disabled>Success</fb-button>
    <fb-button variant="${t.WARNING}" link disabled>Warning</fb-button>
    <fb-button variant="${t.DANGER}" link disabled>Danger</fb-button>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a},template:`
<div class="fb-button-story-block">
    <fb-button link disabled>Plain</fb-button>
    <fb-button variant="${t.PRIMARY}" link disabled>Primary</fb-button>
    <fb-button variant="${t.INFO}" link disabled>Info</fb-button>
    <fb-button variant="${t.SUCCESS}" link disabled>Success</fb-button>
    <fb-button variant="${t.WARNING}" link disabled>Warning</fb-button>
    <fb-button variant="${t.DANGER}" link disabled>Danger</fb-button>
</div>`})},u={parameters:{docs:{source:{code:`
<template>
    <fb-button text>Plain</fb-button>
    <fb-button variant="${t.PRIMARY}" text>Primary</fb-button>
    <fb-button variant="${t.INFO}" text>Info</fb-button>
    <fb-button variant="${t.SUCCESS}" text>Success</fb-button>
    <fb-button variant="${t.WARNING}" text>Warning</fb-button>
    <fb-button variant="${t.DANGER}" text>Danger</fb-button>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a},template:`
<div class="fb-button-story-block">
    <fb-button text>Plain</fb-button>
    <fb-button variant="${t.PRIMARY}" text>Primary</fb-button>
    <fb-button variant="${t.INFO}" text>Info</fb-button>
    <fb-button variant="${t.SUCCESS}" text>Success</fb-button>
    <fb-button variant="${t.WARNING}" text>Warning</fb-button>
    <fb-button variant="${t.DANGER}" text>Danger</fb-button>
</div>`})},f={parameters:{docs:{source:{code:`
<template>
    <fb-button text bg>Plain</fb-button>
    <fb-button variant="${t.PRIMARY}" text bg>Primary</fb-button>
    <fb-button variant="${t.INFO}" text bg>Info</fb-button>
    <fb-button variant="${t.SUCCESS}" text bg>Success</fb-button>
    <fb-button variant="${t.WARNING}" text bg>Warning</fb-button>
    <fb-button variant="${t.DANGER}" text bg>Danger</fb-button>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a},template:`
<div class="fb-button-story-block">
    <fb-button text bg>Plain</fb-button>
    <fb-button variant="${t.PRIMARY}" text bg>Primary</fb-button>
    <fb-button variant="${t.INFO}" text bg>Info</fb-button>
    <fb-button variant="${t.SUCCESS}" text bg>Success</fb-button>
    <fb-button variant="${t.WARNING}" text bg>Warning</fb-button>
    <fb-button variant="${t.DANGER}" text bg>Danger</fb-button>
</div>`})},l={parameters:{docs:{source:{code:`
<template>
    <fb-button text disabled>Plain</fb-button>
    <fb-button variant="${t.PRIMARY}" text disabled>Primary</fb-button>
    <fb-button variant="${t.INFO}" text disabled>Info</fb-button>
    <fb-button variant="${t.SUCCESS}" text disabled>Success</fb-button>
    <fb-button variant="${t.WARNING}" text disabled>Warning</fb-button>
    <fb-button variant="${t.DANGER}" text disabled>Danger</fb-button>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a},template:`
<div class="fb-button-story-block">
    <fb-button text disabled>Plain</fb-button>
    <fb-button variant="${t.PRIMARY}" text disabled>Primary</fb-button>
    <fb-button variant="${t.INFO}" text disabled>Info</fb-button>
    <fb-button variant="${t.SUCCESS}" text disabled>Success</fb-button>
    <fb-button variant="${t.WARNING}" text disabled>Warning</fb-button>
    <fb-button variant="${t.DANGER}" text disabled>Danger</fb-button>
</div>`})},d={parameters:{docs:{source:{code:`
<template>
    <fb-button variant="${t.PRIMARY}" :icon="FasPenToSquare" />
    <fb-button variant="${t.PRIMARY}" :icon="FasShareNodes" />
    <fb-button variant="${t.PRIMARY}" :icon="FasTrashCan" />
    <fb-button variant="${t.PRIMARY}" :icon="FasMagnifyingGlass">Search</fb-button>
    <fb-button variant="${t.PRIMARY}">
        Upload
        <fb-icon class="button-icon">
            <fas-upload />
        </fb-icon>
    </fb-button>
</template>

<script lang="ts" setup>
import {
  FasPenToSquare,
  FasShareNodes,
  FasTrashCan,
  FasMagnifyingGlass,
  FasUpload,
 } from '@fastybird/web-ui-icons';
<\/script>

<style scoped>
.button-icon {
    margin-left: 6px;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a,FbIcon:et,FasUpload:lt},setup(){return{FasPenToSquare:bt,FasShareNodes:dt,FasTrashCan:ot,FasMagnifyingGlass:v}},template:`
<div class="fb-button-story-block">
    <fb-button variant="${t.PRIMARY}" :icon="FasPenToSquare" />
    <fb-button variant="${t.PRIMARY}" :icon="FasShareNodes" />
    <fb-button variant="${t.PRIMARY}" :icon="FasTrashCan" />
    <fb-button variant="${t.PRIMARY}" :icon="FasMagnifyingGlass">Search</fb-button>
    <fb-button variant="${t.PRIMARY}">Upload<fb-icon class="button-icon"><fas-upload /></fb-icon></fb-button>
</div>`})},c={parameters:{docs:{source:{code:`
<template>
    <fb-button variant="${t.PRIMARY}" loading>Loading</fb-button>
    <fb-button variant="${t.PRIMARY}" loading :loadingIcon="FasSpinner">Loading</fb-button>
    <fb-button variant='${t.PRIMARY}' loading>
        <template #loading>
            <fb-icon :size="18">
                <svg viewBox="-10, -10, 50, 50" class="custom-loading">
                    <path
                        d="
                            M 30 15
                            L 28 17
                            M 25.61 25.61
                            A 15 15, 0, 0, 1, 15 30
                            A 15 15, 0, 1, 1, 27.99 7.5
                            L 15 15
                        "
                    />
                </svg>
            </fb-icon>
        </template>
        Loading
    </fb-button>
</template>

<style scoped>
.custom-loading {
    animation: loading-rotate 2s linear infinite;
}
.custom-loading path {
    fill: rgba(0, 0, 0, 0);
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2px;
    stroke: var(--fb-button-text-color);
    stroke-linecap: round;
}
</style>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a,FbIcon:et},setup(){return{FasSpinner:ct}},template:`
<div class="fb-button-story-block">
    <fb-button variant="${t.PRIMARY}" loading>Loading</fb-button>
    <fb-button variant="${t.PRIMARY}" loading :loadingIcon="FasSpinner">Loading</fb-button>
    <fb-button variant='${t.PRIMARY}' loading>
        <template #loading>
            <fb-icon :size="18">
                <svg viewBox="-10, -10, 50, 50" class="custom-loading">
                    <path
                        d="
                            M 30 15
                            L 28 17
                            M 25.61 25.61
                            A 15 15, 0, 0, 1, 15 30
                            A 15 15, 0, 1, 1, 27.99 7.5
                            L 15 15
                        "
                    />
                </svg>
            </fb-icon>
        </template>
        Loading
    </fb-button>
</div>`})},p={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-button size="${n.LARGE}">Large</fb-button>
        <fb-button>Default</fb-button>
        <fb-button size="${n.SMALL}">Small</fb-button>

        <fb-button size="${n.LARGE}" :icon="FasMagnifyingGlass">Large</fb-button>
        <fb-button :icon="FasMagnifyingGlass">Default</fb-button>
        <fb-button size="${n.SMALL}" :icon="FasMagnifyingGlass">Small</fb-button>
    </div>
    <div>
        <fb-button size="${n.LARGE}" round>Large</fb-button>
        <fb-button round>Default</fb-button>
        <fb-button size="${n.SMALL}" round>Small</fb-button>

        <fb-button size="${n.LARGE}" round :icon="FasMagnifyingGlass">Large</fb-button>
        <fb-button round :icon="FasMagnifyingGlass">Default</fb-button>
        <fb-button size="${n.SMALL}" round :icon="FasMagnifyingGlass">Small</fb-button>
    </div>
    <div>
        <fb-button size="${n.LARGE}" circle :icon="FasMagnifyingGlass" />
        <fb-button circle :icon="FasMagnifyingGlass" />
        <fb-button size="${n.SMALL}" circle :icon="FasMagnifyingGlass" />
    </div>
</template>

<script lang="ts" setup>
import { FasMagnifyingGlass } from '@fastybird/web-ui-icons';
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a},setup(){return{FasMagnifyingGlass:v}},template:`
<div class="fb-button-story-block">
    <div class="fb-button-story-block__item">
        <fb-button size="${n.LARGE}">Large</fb-button>
        <fb-button>Default</fb-button>
        <fb-button size="${n.SMALL}">Small</fb-button>

        <fb-button size="${n.LARGE}" :icon="FasMagnifyingGlass">Large</fb-button>
        <fb-button :icon="FasMagnifyingGlass">Default</fb-button>
        <fb-button size="${n.SMALL}" :icon="FasMagnifyingGlass">Small</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button size="${n.LARGE}" round>Large</fb-button>
        <fb-button round>Default</fb-button>
        <fb-button size="${n.SMALL}" round>Small</fb-button>

        <fb-button size="${n.LARGE}" round :icon="FasMagnifyingGlass">Large</fb-button>
        <fb-button round :icon="FasMagnifyingGlass">Default</fb-button>
        <fb-button size="${n.SMALL}" round :icon="FasMagnifyingGlass">Small</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button size="${n.LARGE}" circle :icon="FasMagnifyingGlass" />
        <fb-button circle :icon="FasMagnifyingGlass" />
        <fb-button size="${n.SMALL}" circle :icon="FasMagnifyingGlass" />
    </div>
</div>`})},m={parameters:{docs:{source:{code:`
<template>
    <fb-button>button</fb-button>
    <fb-button tag="div" role="button" tabindex="0">div</fb-button>
    <fb-button
        variant="${t.PRIMARY}"
        tag="a"
        href="https://github.com/fastybird/fastybird"
        target="_blank"
        rel="noopener noreferrer"
    >
        a
    </fb-button>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a},template:`
<div class="fb-button-story-block">
    <fb-button>button</fb-button>
    <fb-button tag="div" role="button" tabindex="0">div</fb-button>
    <fb-button
        variant="${t.PRIMARY}"
        tag="a"
        href="https://github.com/fastybird/fastybird"
        target="_blank"
        rel="noopener noreferrer"
    >
        a
    </fb-button>
</div>`})},y={parameters:{docs:{source:{code:`
<template>
    <fb-button color="#626aef">Default</fb-button>
    <fb-button color="#626aef" plain>Plain</fb-button>

    <fb-button color="#626aef" disabled>Disabled</fb-button>
    <fb-button color="#626aef" disabled plain>Disabled Plain</fb-button>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:a},template:`
<div class="fb-button-story-block">
    <fb-button color="#626aef">Default</fb-button>
    <fb-button color="#626aef" plain>Plain</fb-button>

    <fb-button color="#626aef" disabled>Disabled</fb-button>
    <fb-button color="#626aef" disabled plain>Disabled Plain</fb-button>
</div>`})};var g,S,$;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ["hideInSidebar"],
  args: {
    default: "Default"
  }
}`,...($=(S=o.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var R,I,A;e.parameters={...e.parameters,docs:{...(R=e.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-button>Default</fb-button>
        <fb-button variant="\${VariantTypes.PRIMARY}">Primary</fb-button>
        <fb-button variant="\${VariantTypes.SUCCESS}">Success</fb-button>
        <fb-button variant="\${VariantTypes.INFO}">Info</fb-button>
        <fb-button variant="\${VariantTypes.WARNING}">Warning</fb-button>
        <fb-button variant="\${VariantTypes.DANGER}">Danger</fb-button>
    </div>
    
    <div>
        <fb-button plain>Plain</fb-button>
        <fb-button variant="\${VariantTypes.PRIMARY}" plain>Primary</fb-button>
        <fb-button variant="\${VariantTypes.SUCCESS}" plain>Success</fb-button>
        <fb-button variant="\${VariantTypes.INFO}" plain>Info</fb-button>
        <fb-button variant="\${VariantTypes.WARNING}" plain>Warning</fb-button>
        <fb-button variant="\${VariantTypes.DANGER}" plain>Danger</fb-button>
    </div>
    
    <div>
        <fb-button round>Round</fb-button>
        <fb-button variant="\${VariantTypes.PRIMARY}" round>Primary</fb-button>
        <fb-button variant="\${VariantTypes.SUCCESS}" round>Success</fb-button>
        <fb-button variant="\${VariantTypes.INFO}" round>Info</fb-button>
        <fb-button variant="\${VariantTypes.WARNING}" round>Warning</fb-button>
        <fb-button variant="\${VariantTypes.DANGER}" round>Danger</fb-button>
    </div>
    
    <div>
        <fb-button :icon="FasMagnifyingGlass" circle />
        <fb-button variant="\${VariantTypes.PRIMARY}" :icon="FasPenToSquare" circle />
        <fb-button variant="\${VariantTypes.SUCCESS}" :icon="FasEnvelope" circle />
        <fb-button variant="\${VariantTypes.INFO}" :icon="FasCheck" circle />
        <fb-button variant="\${VariantTypes.WARNING}" :icon="FasStar" circle />
        <fb-button variant="\${VariantTypes.DANGER}" :icon="FasTrashCan" circle />
    </div>
</template>

<script lang="ts" setup>
import {
  FasMagnifyingGlass,
  FasCheck,
  FasEnvelope,
  FasPenToSquare,
  FasStar,
  FasTrashCan,
} from '@fastybird/web-ui-icons';
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    setup() {
      return {
        FasMagnifyingGlass,
        FasPenToSquare,
        FasEnvelope,
        FasCheck,
        FasStar,
        FasTrashCan
      };
    },
    template: \`
<div class="fb-button-story-block">
    <div class="fb-button-story-block__item">
        <fb-button>Default</fb-button>
        <fb-button variant="\${VariantTypes.PRIMARY}">Primary</fb-button>
        <fb-button variant="\${VariantTypes.INFO}">Info</fb-button>
        <fb-button variant="\${VariantTypes.SUCCESS}">Success</fb-button>
        <fb-button variant="\${VariantTypes.WARNING}">Warning</fb-button>
        <fb-button variant="\${VariantTypes.DANGER}">Danger</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button plain>Plain</fb-button>
        <fb-button variant="\${VariantTypes.PRIMARY}" plain>Primary</fb-button>
        <fb-button variant="\${VariantTypes.INFO}" plain>Info</fb-button>
        <fb-button variant="\${VariantTypes.SUCCESS}" plain>Success</fb-button>
        <fb-button variant="\${VariantTypes.WARNING}" plain>Warning</fb-button>
        <fb-button variant="\${VariantTypes.DANGER}" plain>Danger</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button round>Round</fb-button>
        <fb-button variant="\${VariantTypes.PRIMARY}" round>Primary</fb-button>
        <fb-button variant="\${VariantTypes.INFO}" round>Info</fb-button>
        <fb-button variant="\${VariantTypes.SUCCESS}" round>Success</fb-button>
        <fb-button variant="\${VariantTypes.WARNING}" round>Warning</fb-button>
        <fb-button variant="\${VariantTypes.DANGER}" round>Danger</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button circle :icon="FasMagnifyingGlass" />
        <fb-button variant="\${VariantTypes.PRIMARY}" circle :icon="FasPenToSquare" />
        <fb-button variant="\${VariantTypes.SUCCESS}" circle :icon="FasEnvelope" />
        <fb-button variant="\${VariantTypes.INFO}" circle :icon="FasCheck" />
        <fb-button variant="\${VariantTypes.WARNING}" circle :icon="FasStar" />
        <fb-button variant="\${VariantTypes.DANGER}" circle :icon="FasTrashCan" />
    </div>
</div>\`
  })
}`,...(A=(I=e.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var F,T,N;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-button disabled>Default</fb-button>
        <fb-button variant="\${VariantTypes.PRIMARY}" disabled>Primary</fb-button>
        <fb-button variant="\${VariantTypes.INFO}" disabled>Info</fb-button>
        <fb-button variant="\${VariantTypes.SUCCESS}" disabled>Success</fb-button>
        <fb-button variant="\${VariantTypes.WARNING}" disabled>Warning</fb-button>
        <fb-button variant="\${VariantTypes.DANGER}" disabled>Danger</fb-button>
    </div>

    <div>
        <fb-button plain disabled>Plain</fb-button>
        <fb-button variant="\${VariantTypes.PRIMARY}" plain disabled>Primary</fb-button>
        <fb-button variant="\${VariantTypes.INFO}" plain disabled>Info</fb-button>
        <fb-button variant="\${VariantTypes.SUCCESS}" plain disabled>Success</fb-button>
        <fb-button variant="\${VariantTypes.WARNING}" plain disabled>Warning</fb-button>
        <fb-button variant="\${VariantTypes.DANGER}" plain disabled>Danger</fb-button>
    </div>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    template: \`
<div class="fb-button-story-block">
    <div class="fb-button-story-block__item">
        <fb-button disabled>Default</fb-button>
        <fb-button variant="\${VariantTypes.PRIMARY}" disabled>Primary</fb-button>
        <fb-button variant="\${VariantTypes.INFO}" disabled>Info</fb-button>
        <fb-button variant="\${VariantTypes.SUCCESS}" disabled>Success</fb-button>
        <fb-button variant="\${VariantTypes.WARNING}" disabled>Warning</fb-button>
        <fb-button variant="\${VariantTypes.DANGER}" disabled>Danger</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button plain disabled>Plain</fb-button>
        <fb-button variant="\${VariantTypes.PRIMARY}" plain disabled>Primary</fb-button>
        <fb-button variant="\${VariantTypes.INFO}" plain disabled>Info</fb-button>
        <fb-button variant="\${VariantTypes.SUCCESS}" plain disabled>Success</fb-button>
        <fb-button variant="\${VariantTypes.WARNING}" plain disabled>Warning</fb-button>
        <fb-button variant="\${VariantTypes.DANGER}" plain disabled>Danger</fb-button>
    </div>
</div>\`
  })
}`,...(N=(T=i.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var P,M,G;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button link>Default</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" link>Primary</fb-button>
    <fb-button variant="\${VariantTypes.INFO}" link>Info</fb-button>
    <fb-button variant="\${VariantTypes.SUCCESS}" link>Success</fb-button>
    <fb-button variant="\${VariantTypes.WARNING}" link>Warning</fb-button>
    <fb-button variant="\${VariantTypes.DANGER}" link>Danger</fb-button>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    template: \`
<div class="fb-button-story-block">
    <fb-button link>Default</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" link>Primary</fb-button>
    <fb-button variant="\${VariantTypes.INFO}" link>Info</fb-button>
    <fb-button variant="\${VariantTypes.SUCCESS}" link>Success</fb-button>
    <fb-button variant="\${VariantTypes.WARNING}" link>Warning</fb-button>
    <fb-button variant="\${VariantTypes.DANGER}" link>Danger</fb-button>
</div>\`
  })
}`,...(G=(M=s.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var V,C,D;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button link disabled>Plain</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" link disabled>Primary</fb-button>
    <fb-button variant="\${VariantTypes.INFO}" link disabled>Info</fb-button>
    <fb-button variant="\${VariantTypes.SUCCESS}" link disabled>Success</fb-button>
    <fb-button variant="\${VariantTypes.WARNING}" link disabled>Warning</fb-button>
    <fb-button variant="\${VariantTypes.DANGER}" link disabled>Danger</fb-button>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    template: \`
<div class="fb-button-story-block">
    <fb-button link disabled>Plain</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" link disabled>Primary</fb-button>
    <fb-button variant="\${VariantTypes.INFO}" link disabled>Info</fb-button>
    <fb-button variant="\${VariantTypes.SUCCESS}" link disabled>Success</fb-button>
    <fb-button variant="\${VariantTypes.WARNING}" link disabled>Warning</fb-button>
    <fb-button variant="\${VariantTypes.DANGER}" link disabled>Danger</fb-button>
</div>\`
  })
}`,...(D=(C=r.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var k,E,h;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button text>Plain</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" text>Primary</fb-button>
    <fb-button variant="\${VariantTypes.INFO}" text>Info</fb-button>
    <fb-button variant="\${VariantTypes.SUCCESS}" text>Success</fb-button>
    <fb-button variant="\${VariantTypes.WARNING}" text>Warning</fb-button>
    <fb-button variant="\${VariantTypes.DANGER}" text>Danger</fb-button>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    template: \`
<div class="fb-button-story-block">
    <fb-button text>Plain</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" text>Primary</fb-button>
    <fb-button variant="\${VariantTypes.INFO}" text>Info</fb-button>
    <fb-button variant="\${VariantTypes.SUCCESS}" text>Success</fb-button>
    <fb-button variant="\${VariantTypes.WARNING}" text>Warning</fb-button>
    <fb-button variant="\${VariantTypes.DANGER}" text>Danger</fb-button>
</div>\`
  })
}`,...(h=(E=u.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var L,x,W;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button text bg>Plain</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" text bg>Primary</fb-button>
    <fb-button variant="\${VariantTypes.INFO}" text bg>Info</fb-button>
    <fb-button variant="\${VariantTypes.SUCCESS}" text bg>Success</fb-button>
    <fb-button variant="\${VariantTypes.WARNING}" text bg>Warning</fb-button>
    <fb-button variant="\${VariantTypes.DANGER}" text bg>Danger</fb-button>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    template: \`
<div class="fb-button-story-block">
    <fb-button text bg>Plain</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" text bg>Primary</fb-button>
    <fb-button variant="\${VariantTypes.INFO}" text bg>Info</fb-button>
    <fb-button variant="\${VariantTypes.SUCCESS}" text bg>Success</fb-button>
    <fb-button variant="\${VariantTypes.WARNING}" text bg>Warning</fb-button>
    <fb-button variant="\${VariantTypes.DANGER}" text bg>Danger</fb-button>
</div>\`
  })
}`,...(W=(x=f.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var Y,z,_;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button text disabled>Plain</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" text disabled>Primary</fb-button>
    <fb-button variant="\${VariantTypes.INFO}" text disabled>Info</fb-button>
    <fb-button variant="\${VariantTypes.SUCCESS}" text disabled>Success</fb-button>
    <fb-button variant="\${VariantTypes.WARNING}" text disabled>Warning</fb-button>
    <fb-button variant="\${VariantTypes.DANGER}" text disabled>Danger</fb-button>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    template: \`
<div class="fb-button-story-block">
    <fb-button text disabled>Plain</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" text disabled>Primary</fb-button>
    <fb-button variant="\${VariantTypes.INFO}" text disabled>Info</fb-button>
    <fb-button variant="\${VariantTypes.SUCCESS}" text disabled>Success</fb-button>
    <fb-button variant="\${VariantTypes.WARNING}" text disabled>Warning</fb-button>
    <fb-button variant="\${VariantTypes.DANGER}" text disabled>Danger</fb-button>
</div>\`
  })
}`,...(_=(z=l.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var U,O,B;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button variant="\${VariantTypes.PRIMARY}" :icon="FasPenToSquare" />
    <fb-button variant="\${VariantTypes.PRIMARY}" :icon="FasShareNodes" />
    <fb-button variant="\${VariantTypes.PRIMARY}" :icon="FasTrashCan" />
    <fb-button variant="\${VariantTypes.PRIMARY}" :icon="FasMagnifyingGlass">Search</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}">
        Upload
        <fb-icon class="button-icon">
            <fas-upload />
        </fb-icon>
    </fb-button>
</template>

<script lang="ts" setup>
import {
  FasPenToSquare,
  FasShareNodes,
  FasTrashCan,
  FasMagnifyingGlass,
  FasUpload,
 } from '@fastybird/web-ui-icons';
<\/script>

<style scoped>
.button-icon {
    margin-left: 6px;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton,
      FbIcon,
      FasUpload
    },
    setup() {
      return {
        FasPenToSquare,
        FasShareNodes,
        FasTrashCan,
        FasMagnifyingGlass
      };
    },
    template: \`
<div class="fb-button-story-block">
    <fb-button variant="\${VariantTypes.PRIMARY}" :icon="FasPenToSquare" />
    <fb-button variant="\${VariantTypes.PRIMARY}" :icon="FasShareNodes" />
    <fb-button variant="\${VariantTypes.PRIMARY}" :icon="FasTrashCan" />
    <fb-button variant="\${VariantTypes.PRIMARY}" :icon="FasMagnifyingGlass">Search</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}">Upload<fb-icon class="button-icon"><fas-upload /></fb-icon></fb-button>
</div>\`
  })
}`,...(B=(O=d.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var q,w,j;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button variant="\${VariantTypes.PRIMARY}" loading>Loading</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" loading :loadingIcon="FasSpinner">Loading</fb-button>
    <fb-button variant='\${VariantTypes.PRIMARY}' loading>
        <template #loading>
            <fb-icon :size="18">
                <svg viewBox="-10, -10, 50, 50" class="custom-loading">
                    <path
                        d="
                            M 30 15
                            L 28 17
                            M 25.61 25.61
                            A 15 15, 0, 0, 1, 15 30
                            A 15 15, 0, 1, 1, 27.99 7.5
                            L 15 15
                        "
                    />
                </svg>
            </fb-icon>
        </template>
        Loading
    </fb-button>
</template>

<style scoped>
.custom-loading {
    animation: loading-rotate 2s linear infinite;
}
.custom-loading path {
    fill: rgba(0, 0, 0, 0);
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2px;
    stroke: var(--fb-button-text-color);
    stroke-linecap: round;
}
</style>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton,
      FbIcon
    },
    setup() {
      return {
        FasSpinner
      };
    },
    template: \`
<div class="fb-button-story-block">
    <fb-button variant="\${VariantTypes.PRIMARY}" loading>Loading</fb-button>
    <fb-button variant="\${VariantTypes.PRIMARY}" loading :loadingIcon="FasSpinner">Loading</fb-button>
    <fb-button variant='\${VariantTypes.PRIMARY}' loading>
        <template #loading>
            <fb-icon :size="18">
                <svg viewBox="-10, -10, 50, 50" class="custom-loading">
                    <path
                        d="
                            M 30 15
                            L 28 17
                            M 25.61 25.61
                            A 15 15, 0, 0, 1, 15 30
                            A 15 15, 0, 1, 1, 27.99 7.5
                            L 15 15
                        "
                    />
                </svg>
            </fb-icon>
        </template>
        Loading
    </fb-button>
</div>\`
  })
}`,...(j=(w=c.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var H,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-button size="\${ComponentSizeTypes.LARGE}">Large</fb-button>
        <fb-button>Default</fb-button>
        <fb-button size="\${ComponentSizeTypes.SMALL}">Small</fb-button>

        <fb-button size="\${ComponentSizeTypes.LARGE}" :icon="FasMagnifyingGlass">Large</fb-button>
        <fb-button :icon="FasMagnifyingGlass">Default</fb-button>
        <fb-button size="\${ComponentSizeTypes.SMALL}" :icon="FasMagnifyingGlass">Small</fb-button>
    </div>
    <div>
        <fb-button size="\${ComponentSizeTypes.LARGE}" round>Large</fb-button>
        <fb-button round>Default</fb-button>
        <fb-button size="\${ComponentSizeTypes.SMALL}" round>Small</fb-button>

        <fb-button size="\${ComponentSizeTypes.LARGE}" round :icon="FasMagnifyingGlass">Large</fb-button>
        <fb-button round :icon="FasMagnifyingGlass">Default</fb-button>
        <fb-button size="\${ComponentSizeTypes.SMALL}" round :icon="FasMagnifyingGlass">Small</fb-button>
    </div>
    <div>
        <fb-button size="\${ComponentSizeTypes.LARGE}" circle :icon="FasMagnifyingGlass" />
        <fb-button circle :icon="FasMagnifyingGlass" />
        <fb-button size="\${ComponentSizeTypes.SMALL}" circle :icon="FasMagnifyingGlass" />
    </div>
</template>

<script lang="ts" setup>
import { FasMagnifyingGlass } from '@fastybird/web-ui-icons';
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    setup() {
      return {
        FasMagnifyingGlass
      };
    },
    template: \`
<div class="fb-button-story-block">
    <div class="fb-button-story-block__item">
        <fb-button size="\${ComponentSizeTypes.LARGE}">Large</fb-button>
        <fb-button>Default</fb-button>
        <fb-button size="\${ComponentSizeTypes.SMALL}">Small</fb-button>

        <fb-button size="\${ComponentSizeTypes.LARGE}" :icon="FasMagnifyingGlass">Large</fb-button>
        <fb-button :icon="FasMagnifyingGlass">Default</fb-button>
        <fb-button size="\${ComponentSizeTypes.SMALL}" :icon="FasMagnifyingGlass">Small</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button size="\${ComponentSizeTypes.LARGE}" round>Large</fb-button>
        <fb-button round>Default</fb-button>
        <fb-button size="\${ComponentSizeTypes.SMALL}" round>Small</fb-button>

        <fb-button size="\${ComponentSizeTypes.LARGE}" round :icon="FasMagnifyingGlass">Large</fb-button>
        <fb-button round :icon="FasMagnifyingGlass">Default</fb-button>
        <fb-button size="\${ComponentSizeTypes.SMALL}" round :icon="FasMagnifyingGlass">Small</fb-button>
    </div>
    <div class="fb-button-story-block__item">
        <fb-button size="\${ComponentSizeTypes.LARGE}" circle :icon="FasMagnifyingGlass" />
        <fb-button circle :icon="FasMagnifyingGlass" />
        <fb-button size="\${ComponentSizeTypes.SMALL}" circle :icon="FasMagnifyingGlass" />
    </div>
</div>\`
  })
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button>button</fb-button>
    <fb-button tag="div" role="button" tabindex="0">div</fb-button>
    <fb-button
        variant="\${VariantTypes.PRIMARY}"
        tag="a"
        href="https://github.com/fastybird/fastybird"
        target="_blank"
        rel="noopener noreferrer"
    >
        a
    </fb-button>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    template: \`
<div class="fb-button-story-block">
    <fb-button>button</fb-button>
    <fb-button tag="div" role="button" tabindex="0">div</fb-button>
    <fb-button
        variant="\${VariantTypes.PRIMARY}"
        tag="a"
        href="https://github.com/fastybird/fastybird"
        target="_blank"
        rel="noopener noreferrer"
    >
        a
    </fb-button>
</div>\`
  })
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var tt,nt,at;y.parameters={...y.parameters,docs:{...(tt=y.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button color="#626aef">Default</fb-button>
    <fb-button color="#626aef" plain>Plain</fb-button>

    <fb-button color="#626aef" disabled>Disabled</fb-button>
    <fb-button color="#626aef" disabled plain>Disabled Plain</fb-button>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    template: \`
<div class="fb-button-story-block">
    <fb-button color="#626aef">Default</fb-button>
    <fb-button color="#626aef" plain>Plain</fb-button>

    <fb-button color="#626aef" disabled>Disabled</fb-button>
    <fb-button color="#626aef" disabled plain>Disabled Plain</fb-button>
</div>\`
  })
}`,...(at=(nt=y.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};const yt=["actionsData","Component","BasicUsage","Disabled","Link","LinkDisabled","Text","TextBg","TextDisabled","Icon","Loading","Sizes","Tag","CustomColor"],It=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,Component:o,CustomColor:y,Disabled:i,Icon:d,Link:s,LinkDisabled:r,Loading:c,Sizes:p,Tag:m,Text:u,TextBg:f,TextDisabled:l,__namedExportsOrder:yt,actionsData:mt,default:pt},Symbol.toStringTag,{value:"Module"}));export{It as B,o as C,i as D,d as I,s as L,p as S,u as T,e as a,r as b,f as c,l as d,c as e,m as f,y as g};
