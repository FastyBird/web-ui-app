import{i as ne}from"./index-CCt2Qn-w.js";import{g as q,u as A,_ as G,i as K,j as c,k as E,m as r,n as se,z as l,b as h,E as le}from"./web-ui-components.es-BCo1uCuo.js";import{d as w,g as o,p as ae,o as J,j as M,w as Y,k as Q,n as X,u as S,l as Z,m as ee,q as oe,s as re}from"./vue.esm-bundler-DuXQnSn7.js";const p=u=>u,te=Symbol("rowContextKey"),ue=["start","center","end","space-around","space-between","space-evenly"],ie=["top","middle","bottom"],ce=q({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:ue,default:"start"},align:{type:String,values:ie}}),pe=w({name:"ElRow"}),me=w({...pe,props:ce,setup(u){const t=u,a=A("row"),s=o(()=>t.gutter);ae(te,{gutter:s});const x=o(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),R=o(()=>[a.b(),a.is(`justify-${t.justify}`,t.justify!=="start"),a.is(`align-${t.align}`,!!t.align)]);return(e,_)=>(J(),M(ee(e.tag),{class:X(S(R)),style:Z(S(x))},{default:Y(()=>[Q(e.$slots,"default")]),_:3},8,["class","style"]))}});var be=G(me,[["__file","row.vue"]]);const fe=K(be),de=q({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:c([Number,Object]),default:()=>p({})},sm:{type:c([Number,Object]),default:()=>p({})},md:{type:c([Number,Object]),default:()=>p({})},lg:{type:c([Number,Object]),default:()=>p({})},xl:{type:c([Number,Object]),default:()=>p({})}}),ge=w({name:"ElCol"}),ye=w({...ge,props:de,setup(u){const t=u,{gutter:a}=oe(te,{gutter:o(()=>0)}),s=A("col"),x=o(()=>{const e={};return a.value&&(e.paddingLeft=e.paddingRight=`${a.value/2}px`),e}),R=o(()=>{const e=[];return["span","offset","pull","push"].forEach(n=>{const i=t[n];E(i)&&(n==="span"?e.push(s.b(`${t[n]}`)):i>0&&e.push(s.b(`${n}-${t[n]}`)))}),["xs","sm","md","lg","xl"].forEach(n=>{E(t[n])?e.push(s.b(`${n}-${t[n]}`)):re(t[n])&&Object.entries(t[n]).forEach(([i,B])=>{e.push(i!=="span"?s.b(`${n}-${i}-${B}`):s.b(`${n}-${B}`))})}),a.value&&e.push(s.is("guttered")),[s.b(),e]});return(e,_)=>(J(),M(ee(e.tag),{class:X(S(R)),style:Z(S(x))},{default:Y(()=>[Q(e.$slots,"default")]),_:3},8,["class","style"]))}});var he=G(ye,[["__file","col.vue"]]);const Se=K(he),we={component:r,title:"Components/Feedback/Result",argTypes:{title:{type:{name:"string",required:!1},control:{type:"text"},description:"content as result title",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},subtitle:{type:{name:"string",required:!1},control:{type:"text"},description:"content as result subtitle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},status:{type:{name:"string",required:!1},control:{type:"select"},options:se,description:"result status variant",table:{type:{summary:"string"},defaultValue:{summary:l.INFO}}},animation:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"animate status icon",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{title:"Successfully Configured Device!",subtitle:"Your device: Living room heater is being to be prepared, please wait.",status:l.INFO,animation:!1},excludeStories:/.*Data$/},m={tags:["hideInSidebar"]},b={parameters:{docs:{source:{code:`
<template>
    <el-row>
        <el-col :sm="12" :lg="6">
            <fb-result
                status="success"
                title="Success Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <el-button>Back</el-button>
                </template>
            </fb-result>
        </el-col>
        <el-col :sm="12" :lg="6">
            <fb-result
                status="warning"
                title="Warning Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <el-button>Back</el-button>
                </template>
            </fb-result>
        </el-col>
        <el-col :sm="12" :lg="6">
            <fb-result
                status="error"
                title="Error Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <el-button>Back</el-button>
                </template>
            </fb-result>
        </el-col>
        <el-col :sm="12" :lg="6">
            <fb-result
                status="info"
                title="Info Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <el-button>Back</el-button>
                </template>
            </fb-result>
        </el-col>
    </el-row>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{ElButton:h,ElRow:fe,ElCol:Se,FbResult:r},template:`
<el-row>
    <el-col :sm="12" :lg="6">
        <fb-result
            status="success"
            title="Success Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <el-button>Back</el-button>
            </template>
        </fb-result>
    </el-col>
    <el-col :sm="12" :lg="6">
        <fb-result
            status="warning"
            title="Warning Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <el-button>Back</el-button>
            </template>
        </fb-result>
    </el-col>
    <el-col :sm="12" :lg="6">
        <fb-result
            status="error"
            title="Error Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <el-button>Back</el-button>
            </template>
        </fb-result>
    </el-col>
    <el-col :sm="12" :lg="6">
        <fb-result
            status="info"
            title="Info Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <el-button>Back</el-button>
            </template>
        </fb-result>
    </el-col>
</el-row>`})},f={parameters:{docs:{source:{code:`
<template>
    <fb-result
        status="${l.NOT_ALLOWED}"
        title="403"
        subtitle="Sorry, you are not authorized to access this page."
    >
        <template #extra>
            <el-button>Back Home</el-button>
        </template>
    </fb-result>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{ElButton:h,FbResult:r},template:`
<fb-result
    status="${l.NOT_ALLOWED}"
    title="403"
    subtitle="Sorry, you are not authorized to access this page."
>
    <template #extra>
        <el-button>Back Home</el-button>
    </template>
</fb-result>`})},d={parameters:{docs:{source:{code:`
<template>
    <fb-result
        status="${l.NOT_FOUND}"
        title="404"
        subtitle="Sorry, the page you visited does not exist."
    >
        <template #extra>
            <el-button>Back Home</el-button>
        </template>
    </fb-result>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{ElButton:h,FbResult:r},template:`
<fb-result
    status="${l.NOT_FOUND}"
    title="404"
    subtitle="Sorry, the page you visited does not exist."
>
    <template #extra>
        <el-button>Back Home</el-button>
    </template>
</fb-result>`})},g={parameters:{docs:{source:{code:`
<template>
    <fb-result
        status="${l.SERVER_ERROR}"
        title="500"
        subtitle="Sorry, something went wrong."
    >
        <template #extra>
            <el-button>Back Home</el-button>
        </template>
    </fb-result>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{ElButton:h,FbResult:r},template:`
<fb-result
    status="${l.SERVER_ERROR}"
    title="500"
    subtitle="Sorry, something went wrong."
>
    <template #extra>
        <el-button>Back Home</el-button>
    </template>
</fb-result>`})},y={parameters:{docs:{source:{code:`
<template>
    <fb-result
        title="Great, we have done all the operations!"
    >
        <template #icon>
            <el-icon size="80">
                <far-face-smile />
            </el-icon>
        </template>
        <template #extra>
            <el-button>Next</el-button>
        </template>
    </fb-result>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{ElButton:h,ElIcon:le,FbResult:r,FarFaceSmile:ne},template:`
<fb-result
    title="Great, we have done all the operations!"
>
    <template #icon>
        <el-icon size="80">
            <far-face-smile />
        </el-icon>
    </template>
    <template #extra>
        <el-button>Next</el-button>
    </template>
</fb-result>`})};var k,T,O;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ["hideInSidebar"]
}`,...(O=(T=m.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var $,N,I;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <el-row>
        <el-col :sm="12" :lg="6">
            <fb-result
                status="success"
                title="Success Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <el-button>Back</el-button>
                </template>
            </fb-result>
        </el-col>
        <el-col :sm="12" :lg="6">
            <fb-result
                status="warning"
                title="Warning Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <el-button>Back</el-button>
                </template>
            </fb-result>
        </el-col>
        <el-col :sm="12" :lg="6">
            <fb-result
                status="error"
                title="Error Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <el-button>Back</el-button>
                </template>
            </fb-result>
        </el-col>
        <el-col :sm="12" :lg="6">
            <fb-result
                status="info"
                title="Info Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <el-button>Back</el-button>
                </template>
            </fb-result>
        </el-col>
    </el-row>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      ElButton,
      ElRow,
      ElCol,
      FbResult
    },
    template: \`
<el-row>
    <el-col :sm="12" :lg="6">
        <fb-result
            status="success"
            title="Success Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <el-button>Back</el-button>
            </template>
        </fb-result>
    </el-col>
    <el-col :sm="12" :lg="6">
        <fb-result
            status="warning"
            title="Warning Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <el-button>Back</el-button>
            </template>
        </fb-result>
    </el-col>
    <el-col :sm="12" :lg="6">
        <fb-result
            status="error"
            title="Error Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <el-button>Back</el-button>
            </template>
        </fb-result>
    </el-col>
    <el-col :sm="12" :lg="6">
        <fb-result
            status="info"
            title="Info Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <el-button>Back</el-button>
            </template>
        </fb-result>
    </el-col>
</el-row>\`
  })
}`,...(I=(N=b.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var v,F,P;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-result
        status="\${ResultIconTypes.NOT_ALLOWED}"
        title="403"
        subtitle="Sorry, you are not authorized to access this page."
    >
        <template #extra>
            <el-button>Back Home</el-button>
        </template>
    </fb-result>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      ElButton,
      FbResult
    },
    template: \`
<fb-result
    status="\${ResultIconTypes.NOT_ALLOWED}"
    title="403"
    subtitle="Sorry, you are not authorized to access this page."
>
    <template #extra>
        <el-button>Back Home</el-button>
    </template>
</fb-result>\`
  })
}`,...(P=(F=f.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var L,C,j;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-result
        status="\${ResultIconTypes.NOT_FOUND}"
        title="404"
        subtitle="Sorry, the page you visited does not exist."
    >
        <template #extra>
            <el-button>Back Home</el-button>
        </template>
    </fb-result>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      ElButton,
      FbResult
    },
    template: \`
<fb-result
    status="\${ResultIconTypes.NOT_FOUND}"
    title="404"
    subtitle="Sorry, the page you visited does not exist."
>
    <template #extra>
        <el-button>Back Home</el-button>
    </template>
</fb-result>\`
  })
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var H,D,z;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-result
        status="\${ResultIconTypes.SERVER_ERROR}"
        title="500"
        subtitle="Sorry, something went wrong."
    >
        <template #extra>
            <el-button>Back Home</el-button>
        </template>
    </fb-result>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      ElButton,
      FbResult
    },
    template: \`
<fb-result
    status="\${ResultIconTypes.SERVER_ERROR}"
    title="500"
    subtitle="Sorry, something went wrong."
>
    <template #extra>
        <el-button>Back Home</el-button>
    </template>
</fb-result>\`
  })
}`,...(z=(D=g.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var W,V,U;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-result
        title="Great, we have done all the operations!"
    >
        <template #icon>
            <el-icon size="80">
                <far-face-smile />
            </el-icon>
        </template>
        <template #extra>
            <el-button>Next</el-button>
        </template>
    </fb-result>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      ElButton,
      ElIcon,
      FbResult,
      FarFaceSmile
    },
    template: \`
<fb-result
    title="Great, we have done all the operations!"
>
    <template #icon>
        <el-icon size="80">
            <far-face-smile />
        </el-icon>
    </template>
    <template #extra>
        <el-button>Next</el-button>
    </template>
</fb-result>\`
  })
}`,...(U=(V=y.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};const xe=["Component","BasicUsage","LoadingStatus403","LoadingStatus404","LoadingStatus500","CustomIcon"],ke=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:b,Component:m,CustomIcon:y,LoadingStatus403:f,LoadingStatus404:d,LoadingStatus500:g,__namedExportsOrder:xe,default:we},Symbol.toStringTag,{value:"Module"}));export{b as B,m as C,f as L,ke as R,d as a,g as b,y as c};
