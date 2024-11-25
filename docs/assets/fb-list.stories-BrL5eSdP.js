import{v as N,d as oe,g as y,f as F,w as X,x as Le,o as m,c as w,a as B,u as o,n as h,y as Fe,j as f,k as S,z as b,A as O,q as J,l as Pe,B as Ee,C as Me,m as I,D as Ve,E as Q}from"./vue.esm-bundler-Co5bQ3ld.js";import{a as re}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{j as V,k as A}from"./index-BvDULa1j.js";import{q as Ae,s as ze,t as me,v as Ne,S as W,x as ce,y as D,z as pe,A as Y,B as Be,C as Oe,d as ue,D as E,j as Ge,F as M,k as G,G as $e,H as He,h as _e,J as De,K as Ke,E as g,L as Ue,_ as Re,M as qe,w as xe,N as K,P as U,a as de,Q as C}from"./web-ui-components.es-CYzxcWcv.js";function Xe(e){return e}function Je(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}var Qe=800,We=16,Ye=Date.now;function Ze(e){var t=0,a=0;return function(){var l=Ye(),i=We-(l-a);if(a=l,i>0){if(++t>=Qe)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function je(e){return function(){return e}}var z=function(){try{var e=Ae(Object,"defineProperty");return e({},"",{}),e}catch{}}(),et=z?function(e,t){return z(e,"toString",{configurable:!0,enumerable:!1,value:je(t),writable:!0})}:Xe,tt=Ze(et),nt=9007199254740991,at=/^(?:0|[1-9]\d*)$/;function fe(e,t){var a=typeof e;return t=t??nt,!!t&&(a=="number"||a!="symbol"&&at.test(e))&&e>-1&&e%1==0&&e<t}function lt(e,t,a){t=="__proto__"&&z?z(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}var it=Object.prototype,st=it.hasOwnProperty;function ot(e,t,a){var l=e[t];(!(st.call(e,t)&&ze(l,a))||a===void 0&&!(t in e))&&lt(e,t,a)}var Z=Math.max;function rt(e,t,a){return t=Z(t===void 0?e.length-1:t,0),function(){for(var l=arguments,i=-1,c=Z(l.length-t,0),s=Array(c);++i<c;)s[i]=l[t+i];i=-1;for(var r=Array(t+1);++i<t;)r[i]=l[i];return r[t]=a(s),Je(e,this,r)}}var mt=9007199254740991;function ct(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=mt}var pt="[object Arguments]";function j(e){return me(e)&&Ne(e)==pt}var be=Object.prototype,ut=be.hasOwnProperty,dt=be.propertyIsEnumerable,he=j(function(){return arguments}())?j:function(e){return me(e)&&ut.call(e,"callee")&&!dt.call(e,"callee")};function ft(e,t){for(var a=-1,l=t.length,i=e.length;++a<l;)e[i+a]=t[a];return e}var ee=W?W.isConcatSpreadable:void 0;function bt(e){return ce(e)||he(e)||!!(ee&&e&&e[ee])}function ht(e,t,a,l,i){var c=-1,s=e.length;for(a||(a=bt),i||(i=[]);++c<s;){var r=e[c];a(r)?ft(i,r):i[i.length]=r}return i}function vt(e){var t=e==null?0:e.length;return t?ht(e):[]}function gt(e){return tt(rt(e,void 0,vt),e+"")}function kt(e,t){return e!=null&&t in Object(e)}function yt(e,t,a){t=D(t,e);for(var l=-1,i=t.length,c=!1;++l<i;){var s=pe(t[l]);if(!(c=e!=null&&a(e,s)))break;e=e[s]}return c||++l!=i?c:(i=e==null?0:e.length,!!i&&ct(i)&&fe(s,i)&&(ce(e)||he(e)))}function wt(e,t){return e!=null&&yt(e,t,kt)}function St(e,t,a,l){if(!Y(e))return e;t=D(t,e);for(var i=-1,c=t.length,s=c-1,r=e;r!=null&&++i<c;){var d=pe(t[i]),k=a;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(i!=s){var v=r[d];k=void 0,k===void 0&&(k=Y(v)?v:fe(t[i+1])?[]:{})}ot(r,d,k),r=r[d]}return e}function Ct(e,t,a){for(var l=-1,i=t.length,c={};++l<i;){var s=t[l],r=Be(e,s);a(r,s)&&St(c,D(s,e),r)}return c}function It(e,t){return Ct(e,t,function(a,l){return wt(e,l)})}var Tt=gt(function(e,t){return e==null?{}:It(e,t)});class Lt extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function Ft(e,t){throw new Lt(`[${e}] ${t}`)}const $="update:modelValue",H="change",_="input",Pt=e=>["",...Oe].includes(e),Et=ue({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),Mt=e=>Tt(Et,e),Vt=ue({modelValue:{type:[Boolean,String,Number],default:!1},disabled:Boolean,loading:Boolean,size:{type:String,validator:Pt},width:{type:[String,Number],default:""},inlinePrompt:Boolean,inactiveActionIcon:{type:E},activeActionIcon:{type:E},activeIcon:{type:E},inactiveIcon:{type:E},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:Ge(Function)},id:String,tabindex:{type:[String,Number]},...Mt(["ariaLabel"])}),At={[$]:e=>M(e)||N(e)||G(e),[H]:e=>M(e)||N(e)||G(e),[_]:e=>M(e)||N(e)||G(e)},ve="ElSwitch",zt=oe({name:ve}),Nt=oe({...zt,props:Vt,emits:At,setup(e,{expose:t,emit:a}){const l=e,{formItem:i}=$e(),c=He(),s=_e("switch"),{inputId:r}=De(l,{formItemContext:i}),d=Ke(y(()=>l.loading)),k=F(l.modelValue!==!1),v=F(),ke=F(),ye=y(()=>[s.b(),s.m(c.value),s.is("disabled",d.value),s.is("checked",p.value)]),we=y(()=>[s.e("label"),s.em("label","left"),s.is("active",!p.value)]),Se=y(()=>[s.e("label"),s.em("label","right"),s.is("active",p.value)]),Ce=y(()=>({width:qe(l.width)}));X(()=>l.modelValue,()=>{k.value=!0});const R=y(()=>k.value?l.modelValue:!1),p=y(()=>R.value===l.activeValue);[l.activeValue,l.inactiveValue].includes(R.value)||(a($,l.inactiveValue),a(H,l.inactiveValue),a(_,l.inactiveValue)),X(p,n=>{var u;v.value.checked=n,l.validateEvent&&((u=i==null?void 0:i.validate)==null||u.call(i,"change").catch(Te=>void 0))});const P=()=>{const n=p.value?l.inactiveValue:l.activeValue;a($,n),a(H,n),a(_,n),Me(()=>{v.value.checked=p.value})},q=()=>{if(d.value)return;const{beforeChange:n}=l;if(!n){P();return}const u=n();[Q(u),M(u)].includes(!0)||Ft(ve,"beforeChange must return type `Promise<boolean>` or `boolean`"),Q(u)?u.then(x=>{x&&P()}).catch(x=>{}):u&&P()},Ie=()=>{var n,u;(u=(n=v.value)==null?void 0:n.focus)==null||u.call(n)};return Le(()=>{v.value.checked=p.value}),t({focus:Ie,checked:p}),(n,u)=>(m(),w("div",{class:h(o(ye)),onClick:Ee(q,["prevent"])},[B("input",{id:o(r),ref_key:"input",ref:v,class:h(o(s).e("input")),type:"checkbox",role:"switch","aria-checked":o(p),"aria-disabled":o(d),"aria-label":n.ariaLabel,name:n.name,"true-value":n.activeValue,"false-value":n.inactiveValue,disabled:o(d),tabindex:n.tabindex,onChange:P,onKeydown:Fe(q,["enter"])},null,42,["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"]),!n.inlinePrompt&&(n.inactiveIcon||n.inactiveText)?(m(),w("span",{key:0,class:h(o(we))},[n.inactiveIcon?(m(),f(o(g),{key:0},{default:S(()=>[(m(),f(I(n.inactiveIcon)))]),_:1})):b("v-if",!0),!n.inactiveIcon&&n.inactiveText?(m(),w("span",{key:1,"aria-hidden":o(p)},O(n.inactiveText),9,["aria-hidden"])):b("v-if",!0)],2)):b("v-if",!0),B("span",{ref_key:"core",ref:ke,class:h(o(s).e("core")),style:Pe(o(Ce))},[n.inlinePrompt?(m(),w("div",{key:0,class:h(o(s).e("inner"))},[n.activeIcon||n.inactiveIcon?(m(),f(o(g),{key:0,class:h(o(s).is("icon"))},{default:S(()=>[(m(),f(I(o(p)?n.activeIcon:n.inactiveIcon)))]),_:1},8,["class"])):n.activeText||n.inactiveText?(m(),w("span",{key:1,class:h(o(s).is("text")),"aria-hidden":!o(p)},O(o(p)?n.activeText:n.inactiveText),11,["aria-hidden"])):b("v-if",!0)],2)):b("v-if",!0),B("div",{class:h(o(s).e("action"))},[n.loading?(m(),f(o(g),{key:0,class:h(o(s).is("loading"))},{default:S(()=>[Ve(o(Ue))]),_:1},8,["class"])):o(p)?J(n.$slots,"active-action",{key:1},()=>[n.activeActionIcon?(m(),f(o(g),{key:0},{default:S(()=>[(m(),f(I(n.activeActionIcon)))]),_:1})):b("v-if",!0)]):o(p)?b("v-if",!0):J(n.$slots,"inactive-action",{key:2},()=>[n.inactiveActionIcon?(m(),f(o(g),{key:0},{default:S(()=>[(m(),f(I(n.inactiveActionIcon)))]),_:1})):b("v-if",!0)])],2)],6),!n.inlinePrompt&&(n.activeIcon||n.activeText)?(m(),w("span",{key:1,class:h(o(Se))},[n.activeIcon?(m(),f(o(g),{key:0},{default:S(()=>[(m(),f(I(n.activeIcon)))]),_:1})):b("v-if",!0),!n.activeIcon&&n.activeText?(m(),w("span",{key:1,"aria-hidden":!o(p)},O(n.activeText),9,["aria-hidden"])):b("v-if",!0)],2)):b("v-if",!0)],10,["onClick"]))}});var Bt=Re(Nt,[["__file","switch.vue"]]);const ge=xe(Bt),Ot={component:K,subcomponents:{FbListItem:U},title:"Components/Data/List",excludeStories:/.*Data$/},T={parameters:{docs:{source:{code:`
<template>
    <fb-list>
        <template #heading>List of awesome items</template>
        <template #subheading>Subheading of awesome items</template>
        <template #buttons>
            <el-button size="small" @click.prevent="onClick">Add</el-button>
            <el-button size="small" type="warning" :icon="FasGear" @click.prevent="onClick" />
        </template>
        <fb-list-item @click="onClick">
            <template #title>Temperature</template>
            <template #subtitle>Master room measured temperature</template>
            <template #detail>23 °C</template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick">
            <template #title>Humidity</template>
            <template #subtitle>Master room measured humidity</template>
            <template #detail>43 %</template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick">
            <template #title>Heater</template>
            <template #subtitle>Master room heater switch</template>
            <template #button>
                <el-switch v-model="switchState" />
            </template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
    </fb-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const switchState = ref(true);

const onClick = () => {
    console.log('clicked')
};
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{ElButton:de,ElSwitch:ge,ElIcon:g,FbList:K,FbListItem:U,FasGear:V,FasPlug:A},setup:()=>{const e=F(!0),t=re("button-clicked");return{switchState:e,onClick:t,FasGear:V,FasPlug:A}},template:`
<fb-list>
    <template #heading>List of awesome items</template>
    <template #subheading>Subheading of awesome items</template>
    <template #buttons>
        <el-button size="small" @click.prevent="onClick">Add</el-button>
        <el-button size="small" type="warning" :icon="FasGear" @click.prevent="onClick" />
    </template>
    <fb-list-item @click="onClick">
        <template #title>Temperature</template>
        <template #subtitle>Master room measured temperature</template>
        <template #detail>23 °C</template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick">
        <template #title>Humidity</template>
        <template #subtitle>Master room measured humidity</template>
        <template #detail>43 %</template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick">
        <template #title>Heater</template>
        <template #subtitle>Master room heater switch</template>
        <template #button>
            <el-switch v-model="switchState" />
        </template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
</fb-list>`})},L={parameters:{docs:{source:{code:`
<template>
    <fb-list>
        <template #heading>List of awesome items</template>
        <template #subheading>Subheading of awesome items</template>
        <template #buttons>
            <el-button size="small" @click.prevent="onClick">Add</el-button>
            <el-button size="small" type="warning" :icon="FasGear" @click.prevent="onClick" />
        </template>
        <fb-list-item @click="onClick" type="${C.LIST}">
            <template #title>Temperature</template>
            <template #subtitle>Master room measured temperature</template>
            <template #detail>23 °C</template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick" type="${C.LIST}">
            <template #title>Humidity</template>
            <template #subtitle>Master room measured humidity</template>
            <template #detail>43 %</template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick" type="${C.LIST}">
            <template #title>Heater</template>
            <template #subtitle>Master room heater switch</template>
            <template #button>
                <el-switch v-model="switchState" />
            </template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
    </fb-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const switchState = ref(true);

const onClick = () => {
    console.log('clicked')
};
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{ElButton:de,ElSwitch:ge,ElIcon:g,FbList:K,FbListItem:U,FasGear:V,FasPlug:A},setup:()=>{const e=F(!0),t=re("button-clicked");return{switchState:e,onClick:t,FasGear:V,FasPlug:A}},template:`
<fb-list>
    <template #heading>List of awesome items</template>
    <template #subheading>Subheading of awesome items</template>
    <template #buttons>
        <el-button size="small" @click.prevent="onClick">Add</el-button>
        <el-button size="small" type="warning" :icon="FasGear" @click.prevent="onClick" />
    </template>
    <fb-list-item @click="onClick" type="${C.LIST}">
        <template #title>Temperature</template>
        <template #subtitle>Master room measured temperature</template>
        <template #detail>23 °C</template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick" type="${C.LIST}">
        <template #title>Humidity</template>
        <template #subtitle>Master room measured humidity</template>
        <template #detail>43 %</template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick" type="${C.LIST}">
        <template #title>Heater</template>
        <template #subtitle>Master room heater switch</template>
        <template #button>
            <el-switch v-model="switchState" />
        </template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
</fb-list>`})};var te,ne,ae;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-list>
        <template #heading>List of awesome items</template>
        <template #subheading>Subheading of awesome items</template>
        <template #buttons>
            <el-button size="small" @click.prevent="onClick">Add</el-button>
            <el-button size="small" type="warning" :icon="FasGear" @click.prevent="onClick" />
        </template>
        <fb-list-item @click="onClick">
            <template #title>Temperature</template>
            <template #subtitle>Master room measured temperature</template>
            <template #detail>23 °C</template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick">
            <template #title>Humidity</template>
            <template #subtitle>Master room measured humidity</template>
            <template #detail>43 %</template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick">
            <template #title>Heater</template>
            <template #subtitle>Master room heater switch</template>
            <template #button>
                <el-switch v-model="switchState" />
            </template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
    </fb-list>
</template>

<script setup lang="ts">
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
      ElButton,
      ElSwitch,
      ElIcon,
      FbList,
      FbListItem,
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
        <el-button size="small" @click.prevent="onClick">Add</el-button>
        <el-button size="small" type="warning" :icon="FasGear" @click.prevent="onClick" />
    </template>
    <fb-list-item @click="onClick">
        <template #title>Temperature</template>
        <template #subtitle>Master room measured temperature</template>
        <template #detail>23 °C</template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick">
        <template #title>Humidity</template>
        <template #subtitle>Master room measured humidity</template>
        <template #detail>43 %</template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick">
        <template #title>Heater</template>
        <template #subtitle>Master room heater switch</template>
        <template #button>
            <el-switch v-model="switchState" />
        </template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
</fb-list>\`
  })
}`,...(ae=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var le,ie,se;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-list>
        <template #heading>List of awesome items</template>
        <template #subheading>Subheading of awesome items</template>
        <template #buttons>
            <el-button size="small" @click.prevent="onClick">Add</el-button>
            <el-button size="small" type="warning" :icon="FasGear" @click.prevent="onClick" />
        </template>
        <fb-list-item @click="onClick" type="\${ListItemVariantTypes.LIST}">
            <template #title>Temperature</template>
            <template #subtitle>Master room measured temperature</template>
            <template #detail>23 °C</template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick" type="\${ListItemVariantTypes.LIST}">
            <template #title>Humidity</template>
            <template #subtitle>Master room measured humidity</template>
            <template #detail>43 %</template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
        <fb-list-item @click="onClick" type="\${ListItemVariantTypes.LIST}">
            <template #title>Heater</template>
            <template #subtitle>Master room heater switch</template>
            <template #button>
                <el-switch v-model="switchState" />
            </template>
            <template #icon>
                <el-icon>
                    <fas-plug />
                </el-icon>
            </template>
        </fb-list-item>
    </fb-list>
</template>

<script setup lang="ts">
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
      ElButton,
      ElSwitch,
      ElIcon,
      FbList,
      FbListItem,
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
        <el-button size="small" @click.prevent="onClick">Add</el-button>
        <el-button size="small" type="warning" :icon="FasGear" @click.prevent="onClick" />
    </template>
    <fb-list-item @click="onClick" type="\${ListItemVariantTypes.LIST}">
        <template #title>Temperature</template>
        <template #subtitle>Master room measured temperature</template>
        <template #detail>23 °C</template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick" type="\${ListItemVariantTypes.LIST}">
        <template #title>Humidity</template>
        <template #subtitle>Master room measured humidity</template>
        <template #detail>43 %</template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
    <fb-list-item @click="onClick" type="\${ListItemVariantTypes.LIST}">
        <template #title>Heater</template>
        <template #subtitle>Master room heater switch</template>
        <template #button>
            <el-switch v-model="switchState" />
        </template>
        <template #icon>
            <el-icon>
                <fas-plug />
            </el-icon>
        </template>
    </fb-list-item>
</fb-list>\`
  })
}`,...(se=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const Gt=["BasicUsage","ListStyle"],Kt=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:T,ListStyle:L,__namedExportsOrder:Gt,default:Ot},Symbol.toStringTag,{value:"Module"}));export{T as B,Kt as L,L as a};
