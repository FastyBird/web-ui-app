import{x as I}from"./index-Dg9quNvz.js";import{Z as e,_ as O,a0 as t,J as E,O as _,v as u,C as N}from"./web-ui-components.es-nLJZCm2K.js";const P={component:e,title:"Components/Feedback/Result",argTypes:{title:{type:{name:"string",required:!1},control:{type:"text"},description:"content as result title",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},subtitle:{type:{name:"string",required:!1},control:{type:"text"},description:"content as result subtitle",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},status:{type:{name:"string",required:!1},control:{type:"select"},options:O,description:"result status variant",table:{type:{summary:"string"},defaultValue:{summary:t.INFO}}},animation:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"animate status icon",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{title:"Successfully Configured Device!",subtitle:"Your device: Living room heater is being to be prepared, please wait.",status:t.INFO,animation:!1},excludeStories:/.*Data$/},n={tags:["hideInSidebar"]},s={parameters:{docs:{source:{code:`
<template>
    <fb-row>
        <fb-col :sm="12" :lg="6">
            <fb-result
                status="success"
                title="Success Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <fb-button>Back</fb-button>
                </template>
            </fb-result>
        </fb-col>
        <fb-col :sm="12" :lg="6">
            <fb-result
                status="warning"
                title="Warning Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <fb-button>Back</fb-button>
                </template>
            </fb-result>
        </fb-col>
        <fb-col :sm="12" :lg="6">
            <fb-result
                status="error"
                title="Error Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <fb-button>Back</fb-button>
                </template>
            </fb-result>
        </fb-col>
        <fb-col :sm="12" :lg="6">
            <fb-result
                status="info"
                title="Info Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <fb-button>Back</fb-button>
                </template>
            </fb-result>
        </fb-col>
    </fb-row>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbResult:e,FbRow:E,FbCol:_,FbButton:u},template:`
<fb-row>
    <fb-col :sm="12" :lg="6">
        <fb-result
            status="success"
            title="Success Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <fb-button>Back</fb-button>
            </template>
        </fb-result>
    </fb-col>
    <fb-col :sm="12" :lg="6">
        <fb-result
            status="warning"
            title="Warning Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <fb-button>Back</fb-button>
            </template>
        </fb-result>
    </fb-col>
    <fb-col :sm="12" :lg="6">
        <fb-result
            status="error"
            title="Error Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <fb-button>Back</fb-button>
            </template>
        </fb-result>
    </fb-col>
    <fb-col :sm="12" :lg="6">
        <fb-result
            status="info"
            title="Info Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <fb-button>Back</fb-button>
            </template>
        </fb-result>
    </fb-col>
</fb-row>`})},a={parameters:{docs:{source:{code:`
<template>
    <fb-result
        status="${t.NOT_ALLOWED}"
        title="403"
        subtitle="Sorry, you are not authorized to access this page."
    >
        <template #extra>
            <fb-button>Back Home</fb-button>
        </template>
    </fb-result>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbResult:e,FbButton:u},template:`
<fb-result
    status="${t.NOT_ALLOWED}"
    title="403"
    subtitle="Sorry, you are not authorized to access this page."
>
    <template #extra>
        <fb-button>Back Home</fb-button>
    </template>
</fb-result>`})},o={parameters:{docs:{source:{code:`
<template>
    <fb-result
        status="${t.NOT_FOUND}"
        title="404"
        subtitle="Sorry, the page you visited does not exist."
    >
        <template #extra>
            <fb-button>Back Home</fb-button>
        </template>
    </fb-result>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbResult:e,FbButton:u},template:`
<fb-result
    status="${t.NOT_FOUND}"
    title="404"
    subtitle="Sorry, the page you visited does not exist."
>
    <template #extra>
        <fb-button>Back Home</fb-button>
    </template>
</fb-result>`})},l={parameters:{docs:{source:{code:`
<template>
    <fb-result
        status="${t.SERVER_ERROR}"
        title="500"
        subtitle="Sorry, something went wrong."
    >
        <template #extra>
            <fb-button>Back Home</fb-button>
        </template>
    </fb-result>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbResult:e,FbButton:u},template:`
<fb-result
    status="${t.SERVER_ERROR}"
    title="500"
    subtitle="Sorry, something went wrong."
>
    <template #extra>
        <fb-button>Back Home</fb-button>
    </template>
</fb-result>`})},r={parameters:{docs:{source:{code:`
<template>
    <fb-result
        title="Great, we have done all the operations!"
    >
        <template #icon>
            <fb-icon size="80">
                <far-face-smile />
            </fb-icon>
        </template>
        <template #extra>
            <fb-button>Next</fb-button>
        </template>
    </fb-result>
</template>`}}},tags:["hideInSidebar"],render:()=>({components:{FbResult:e,FbButton:u,FbIcon:N,FarFaceSmile:I},template:`
<fb-result
    title="Great, we have done all the operations!"
>
    <template #icon>
        <fb-icon size="80">
            <far-face-smile />
        </fb-icon>
    </template>
    <template #extra>
        <fb-button>Next</fb-button>
    </template>
</fb-result>`})};var b,i,c;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ["hideInSidebar"]
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var f,m,p;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-row>
        <fb-col :sm="12" :lg="6">
            <fb-result
                status="success"
                title="Success Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <fb-button>Back</fb-button>
                </template>
            </fb-result>
        </fb-col>
        <fb-col :sm="12" :lg="6">
            <fb-result
                status="warning"
                title="Warning Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <fb-button>Back</fb-button>
                </template>
            </fb-result>
        </fb-col>
        <fb-col :sm="12" :lg="6">
            <fb-result
                status="error"
                title="Error Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <fb-button>Back</fb-button>
                </template>
            </fb-result>
        </fb-col>
        <fb-col :sm="12" :lg="6">
            <fb-result
                status="info"
                title="Info Tip"
                subtitle="Please follow the instructions"
            >
                <template #extra>
                    <fb-button>Back</fb-button>
                </template>
            </fb-result>
        </fb-col>
    </fb-row>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbResult,
      FbRow,
      FbCol,
      FbButton
    },
    template: \`
<fb-row>
    <fb-col :sm="12" :lg="6">
        <fb-result
            status="success"
            title="Success Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <fb-button>Back</fb-button>
            </template>
        </fb-result>
    </fb-col>
    <fb-col :sm="12" :lg="6">
        <fb-result
            status="warning"
            title="Warning Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <fb-button>Back</fb-button>
            </template>
        </fb-result>
    </fb-col>
    <fb-col :sm="12" :lg="6">
        <fb-result
            status="error"
            title="Error Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <fb-button>Back</fb-button>
            </template>
        </fb-result>
    </fb-col>
    <fb-col :sm="12" :lg="6">
        <fb-result
            status="info"
            title="Info Tip"
            subtitle="Please follow the instructions"
        >
            <template #extra>
                <fb-button>Back</fb-button>
            </template>
        </fb-result>
    </fb-col>
</fb-row>\`
  })
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
            <fb-button>Back Home</fb-button>
        </template>
    </fb-result>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbResult,
      FbButton
    },
    template: \`
<fb-result
    status="\${ResultIconTypes.NOT_ALLOWED}"
    title="403"
    subtitle="Sorry, you are not authorized to access this page."
>
    <template #extra>
        <fb-button>Back Home</fb-button>
    </template>
</fb-result>\`
  })
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,y,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
            <fb-button>Back Home</fb-button>
        </template>
    </fb-result>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbResult,
      FbButton
    },
    template: \`
<fb-result
    status="\${ResultIconTypes.NOT_FOUND}"
    title="404"
    subtitle="Sorry, the page you visited does not exist."
>
    <template #extra>
        <fb-button>Back Home</fb-button>
    </template>
</fb-result>\`
  })
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var R,w,B;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
            <fb-button>Back Home</fb-button>
        </template>
    </fb-result>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbResult,
      FbButton
    },
    template: \`
<fb-result
    status="\${ResultIconTypes.SERVER_ERROR}"
    title="500"
    subtitle="Sorry, something went wrong."
>
    <template #extra>
        <fb-button>Back Home</fb-button>
    </template>
</fb-result>\`
  })
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var F,T,k;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-result
        title="Great, we have done all the operations!"
    >
        <template #icon>
            <fb-icon size="80">
                <far-face-smile />
            </fb-icon>
        </template>
        <template #extra>
            <fb-button>Next</fb-button>
        </template>
    </fb-result>
</template>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbResult,
      FbButton,
      FbIcon,
      FarFaceSmile
    },
    template: \`
<fb-result
    title="Great, we have done all the operations!"
>
    <template #icon>
        <fb-icon size="80">
            <far-face-smile />
        </fb-icon>
    </template>
    <template #extra>
        <fb-button>Next</fb-button>
    </template>
</fb-result>\`
  })
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const L=["Component","BasicUsage","LoadingStatus403","LoadingStatus404","LoadingStatus500","CustomIcon"],H=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:s,Component:n,CustomIcon:r,LoadingStatus403:a,LoadingStatus404:o,LoadingStatus500:l,__namedExportsOrder:L,default:P},Symbol.toStringTag,{value:"Module"}));export{s as B,n as C,a as L,H as R,o as a,l as b,r as c};
