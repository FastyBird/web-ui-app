import{x as _,d as oe,g,f as F,t as x,y as Le,o as m,c as w,a as N,u as o,n as h,z as Fe,j as f,w as S,m as I,A as b,B as O,C as Pe,k as J,l as Ee,D as Me,E as Ve,F as Q}from"./vue.esm-bundler-CCHDJWTD.js";import{a as re}from"./chunk-454WOBUV-CM0pFb8Z.js";import{j as V,k as A}from"./index-CQmjID0g.js";import{p as Ae,q as ze,r as me,t as _e,S as W,x as ce,A as D,B as pe,C as Y,D as Ne,F as Oe,g as ue,G as E,j as Be,H as M,k as B,I as Ge,J as $e,u as He,K as De,L as Ke,M as Ue,E as k,N as Re,_ as qe,O as Xe,i as xe,P as K,Q as U,b as de,R as C}from"./web-ui-components.es-f1tHOnHV.js";function Je(e){return e}function Qe(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}var We=800,Ye=16,Ze=Date.now;function je(e){var t=0,a=0;return function(){var l=Ze(),i=Ye-(l-a);if(a=l,i>0){if(++t>=We)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function et(e){return function(){return e}}var z=function(){try{var e=Ae(Object,"defineProperty");return e({},"",{}),e}catch{}}(),tt=z?function(e,t){return z(e,"toString",{configurable:!0,enumerable:!1,value:et(t),writable:!0})}:Je,nt=je(tt),at=9007199254740991,lt=/^(?:0|[1-9]\d*)$/;function fe(e,t){var a=typeof e;return t=t??at,!!t&&(a=="number"||a!="symbol"&&lt.test(e))&&e>-1&&e%1==0&&e<t}function it(e,t,a){t=="__proto__"&&z?z(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}var st=Object.prototype,ot=st.hasOwnProperty;function rt(e,t,a){var l=e[t];(!(ot.call(e,t)&&ze(l,a))||a===void 0&&!(t in e))&&it(e,t,a)}var Z=Math.max;function mt(e,t,a){return t=Z(t===void 0?e.length-1:t,0),function(){for(var l=arguments,i=-1,c=Z(l.length-t,0),s=Array(c);++i<c;)s[i]=l[t+i];i=-1;for(var r=Array(t+1);++i<t;)r[i]=l[i];return r[t]=a(s),Qe(e,this,r)}}var ct=9007199254740991;function pt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ct}var ut="[object Arguments]";function j(e){return me(e)&&_e(e)==ut}var be=Object.prototype,dt=be.hasOwnProperty,ft=be.propertyIsEnumerable,he=j(function(){return arguments}())?j:function(e){return me(e)&&dt.call(e,"callee")&&!ft.call(e,"callee")};function bt(e,t){for(var a=-1,l=t.length,i=e.length;++a<l;)e[i+a]=t[a];return e}var ee=W?W.isConcatSpreadable:void 0;function ht(e){return ce(e)||he(e)||!!(ee&&e&&e[ee])}function vt(e,t,a,l,i){var c=-1,s=e.length;for(a||(a=ht),i||(i=[]);++c<s;){var r=e[c];a(r)?bt(i,r):i[i.length]=r}return i}function gt(e){var t=e==null?0:e.length;return t?vt(e):[]}function kt(e){return nt(mt(e,void 0,gt),e+"")}function yt(e,t){return e!=null&&t in Object(e)}function wt(e,t,a){t=D(t,e);for(var l=-1,i=t.length,c=!1;++l<i;){var s=pe(t[l]);if(!(c=e!=null&&a(e,s)))break;e=e[s]}return c||++l!=i?c:(i=e==null?0:e.length,!!i&&pt(i)&&fe(s,i)&&(ce(e)||he(e)))}function St(e,t){return e!=null&&wt(e,t,yt)}function Ct(e,t,a,l){if(!Y(e))return e;t=D(t,e);for(var i=-1,c=t.length,s=c-1,r=e;r!=null&&++i<c;){var d=pe(t[i]),y=a;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(i!=s){var v=r[d];y=void 0,y===void 0&&(y=Y(v)?v:fe(t[i+1])?[]:{})}rt(r,d,y),r=r[d]}return e}function It(e,t,a){for(var l=-1,i=t.length,c={};++l<i;){var s=t[l],r=Ne(e,s);a(r,s)&&Ct(c,D(s,e),r)}return c}function Tt(e,t){return It(e,t,function(a,l){return St(e,l)})}var Lt=kt(function(e,t){return e==null?{}:Tt(e,t)});class Ft extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function Pt(e,t){throw new Ft(`[${e}] ${t}`)}const G="update:modelValue",$="change",H="input",Et=e=>["",...Oe].includes(e),Mt=ue({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),Vt=e=>Lt(Mt,e),At=ue({modelValue:{type:[Boolean,String,Number],default:!1},disabled:Boolean,loading:Boolean,size:{type:String,validator:Et},width:{type:[String,Number],default:""},inlinePrompt:Boolean,inactiveActionIcon:{type:E},activeActionIcon:{type:E},activeIcon:{type:E},inactiveIcon:{type:E},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:Be(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0},...Vt(["ariaLabel"])}),zt={[G]:e=>M(e)||_(e)||B(e),[$]:e=>M(e)||_(e)||B(e),[H]:e=>M(e)||_(e)||B(e)},_t=["onClick"],Nt=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],Ot=["aria-hidden"],Bt=["aria-hidden"],Gt=["aria-hidden"],ve="ElSwitch",$t=oe({name:ve}),Ht=oe({...$t,props:At,emits:zt,setup(e,{expose:t,emit:a}){const l=e,{formItem:i}=Ge(),c=$e(),s=He("switch"),{inputId:r}=De(l,{formItemContext:i}),d=Ke(g(()=>l.loading)),y=F(l.modelValue!==!1),v=F(),ke=F(),ye=g(()=>[s.b(),s.m(c.value),s.is("disabled",d.value),s.is("checked",p.value)]),we=g(()=>[s.e("label"),s.em("label","left"),s.is("active",!p.value)]),Se=g(()=>[s.e("label"),s.em("label","right"),s.is("active",p.value)]),Ce=g(()=>({width:Xe(l.width)}));x(()=>l.modelValue,()=>{y.value=!0});const R=g(()=>y.value?l.modelValue:!1),p=g(()=>R.value===l.activeValue);[l.activeValue,l.inactiveValue].includes(R.value)||(a(G,l.inactiveValue),a($,l.inactiveValue),a(H,l.inactiveValue)),x(p,n=>{var u;v.value.checked=n,l.validateEvent&&((u=i==null?void 0:i.validate)==null||u.call(i,"change").catch(Te=>void 0))});const P=()=>{const n=p.value?l.inactiveValue:l.activeValue;a(G,n),a($,n),a(H,n),Ve(()=>{v.value.checked=p.value})},q=()=>{if(d.value)return;const{beforeChange:n}=l;if(!n){P();return}const u=n();[Q(u),M(u)].includes(!0)||Pt(ve,"beforeChange must return type `Promise<boolean>` or `boolean`"),Q(u)?u.then(X=>{X&&P()}).catch(X=>{}):u&&P()},Ie=()=>{var n,u;(u=(n=v.value)==null?void 0:n.focus)==null||u.call(n)};return Le(()=>{v.value.checked=p.value}),Ue({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-switch",ref:"https://element-plus.org/en-US/component/switch.html"},g(()=>!!l.label)),t({focus:Ie,checked:p}),(n,u)=>(m(),w("div",{class:h(o(ye)),onClick:Me(q,["prevent"])},[N("input",{id:o(r),ref_key:"input",ref:v,class:h(o(s).e("input")),type:"checkbox",role:"switch","aria-checked":o(p),"aria-disabled":o(d),"aria-label":n.label||n.ariaLabel,name:n.name,"true-value":n.activeValue,"false-value":n.inactiveValue,disabled:o(d),tabindex:n.tabindex,onChange:P,onKeydown:Fe(q,["enter"])},null,42,Nt),!n.inlinePrompt&&(n.inactiveIcon||n.inactiveText)?(m(),w("span",{key:0,class:h(o(we))},[n.inactiveIcon?(m(),f(o(k),{key:0},{default:S(()=>[(m(),f(I(n.inactiveIcon)))]),_:1})):b("v-if",!0),!n.inactiveIcon&&n.inactiveText?(m(),w("span",{key:1,"aria-hidden":o(p)},O(n.inactiveText),9,Ot)):b("v-if",!0)],2)):b("v-if",!0),N("span",{ref_key:"core",ref:ke,class:h(o(s).e("core")),style:Ee(o(Ce))},[n.inlinePrompt?(m(),w("div",{key:0,class:h(o(s).e("inner"))},[n.activeIcon||n.inactiveIcon?(m(),f(o(k),{key:0,class:h(o(s).is("icon"))},{default:S(()=>[(m(),f(I(o(p)?n.activeIcon:n.inactiveIcon)))]),_:1},8,["class"])):n.activeText||n.inactiveText?(m(),w("span",{key:1,class:h(o(s).is("text")),"aria-hidden":!o(p)},O(o(p)?n.activeText:n.inactiveText),11,Bt)):b("v-if",!0)],2)):b("v-if",!0),N("div",{class:h(o(s).e("action"))},[n.loading?(m(),f(o(k),{key:0,class:h(o(s).is("loading"))},{default:S(()=>[Pe(o(Re))]),_:1},8,["class"])):o(p)?J(n.$slots,"active-action",{key:1},()=>[n.activeActionIcon?(m(),f(o(k),{key:0},{default:S(()=>[(m(),f(I(n.activeActionIcon)))]),_:1})):b("v-if",!0)]):o(p)?b("v-if",!0):J(n.$slots,"inactive-action",{key:2},()=>[n.inactiveActionIcon?(m(),f(o(k),{key:0},{default:S(()=>[(m(),f(I(n.inactiveActionIcon)))]),_:1})):b("v-if",!0)])],2)],6),!n.inlinePrompt&&(n.activeIcon||n.activeText)?(m(),w("span",{key:1,class:h(o(Se))},[n.activeIcon?(m(),f(o(k),{key:0},{default:S(()=>[(m(),f(I(n.activeIcon)))]),_:1})):b("v-if",!0),!n.activeIcon&&n.activeText?(m(),w("span",{key:1,"aria-hidden":!o(p)},O(n.activeText),9,Gt)):b("v-if",!0)],2)):b("v-if",!0)],10,_t))}});var Dt=qe(Ht,[["__file","switch.vue"]]);const ge=xe(Dt),Kt={component:K,subcomponents:{FbListItem:U},title:"Components/Data/List",excludeStories:/.*Data$/},T={parameters:{docs:{source:{code:`
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
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{ElButton:de,ElSwitch:ge,ElIcon:k,FbList:K,FbListItem:U,FasGear:V,FasPlug:A},setup:()=>{const e=F(!0),t=re("button-clicked");return{switchState:e,onClick:t,FasGear:V,FasPlug:A}},template:`
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
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{ElButton:de,ElSwitch:ge,ElIcon:k,FbList:K,FbListItem:U,FasGear:V,FasPlug:A},setup:()=>{const e=F(!0),t=re("button-clicked");return{switchState:e,onClick:t,FasGear:V,FasPlug:A}},template:`
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
}`,...(se=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const Ut=["BasicUsage","ListStyle"],Jt=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:T,ListStyle:L,__namedExportsOrder:Ut,default:Kt},Symbol.toStringTag,{value:"Module"}));export{T as B,Jt as L,L as a};
