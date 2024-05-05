import{a3 as b}from"./vue.esm-bundler-DEpQrfwO.js";import{v as s,P as e}from"./web-ui-components.es-nLJZCm2K.js";import{n}from"./web-ui-constants.es-Bfh99ZXh.js";const E={title:"Components/Feedback/Message",excludeStories:/.*Data$/},t={parameters:{docs:{source:{code:`
<template>
    <fb-button :plain="true" @click="open">Show message</fb-button>
    <fb-button :plain="true" @click="openVn">VNode</fb-button>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { FbMessage } from '@fastybird/web-ui-library';

const open = (): void => {
    FbMessage.success('This is a message.');
}

const openVn = () => {
    FbMessage({
        message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode'),
        ]),
    });
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:s},methods:{open:()=>{e.success("This is a message.")},openVn:()=>{e({message:b("p",{style:"line-height: 1; font-size: 14px"},[b("span",null,"Message can be "),b("i",{style:"color: teal"},"VNode")])})}},template:`
<fb-button :plain="true" @click="open">Show message</fb-button>
<fb-button :plain="true" @click="openVn">VNode</fb-button>`})},o={parameters:{docs:{source:{code:`
<template>
    <fb-button :plain="true" @click="open2">Success</fb-button>
    <fb-button :plain="true" @click="open3">Warning</fb-button>
    <fb-button :plain="true" @click="open1">Message</fb-button>
    <fb-button :plain="true" @click="open4">Error</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, VariantTypes } from '@fastybird/web-ui-library';

const open1 = (): void => {
    FbMessage.success('This is a message.');
}

const open2 = (): void => {
    FbMessage({
        message: 'Congrats, this is a success message.',
        type: VariantTypes.SUCCESS,
    });
}

const open3 = (): void => {
    FbMessage({
        message: 'Warning, this is a warning message.',
        type: VariantTypes.WARNING,
    });
}

const open4 = (): void => {
    FbMessage.error('Oops, this is a error message.');
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:s},methods:{open1:()=>{e.success("This is a message.")},open2:()=>{e({message:"Congrats, this is a success message.",type:n.SUCCESS})},open3:()=>{e({message:"Warning, this is a warning message.",type:n.WARNING})},open4:()=>{e.error("Oops, this is a error message.")}},template:`
<fb-button :plain="true" @click="open2">Success</fb-button>
<fb-button :plain="true" @click="open3">Warning</fb-button>
<fb-button :plain="true" @click="open1">Message</fb-button>
<fb-button :plain="true" @click="open4">Error</fb-button>`})},a={parameters:{docs:{source:{code:`
<template>
    <fb-button :plain="true" @click="open1">Message</fb-button>
    <fb-button :plain="true" @click="open2">Success</fb-button>
    <fb-button :plain="true" @click="open3">Warning</fb-button>
    <fb-button :plain="true" @click="open4">Error</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, VariantTypes } from '@fastybird/web-ui-library';

const open1 = (): void => {
    FbMessage({
        showClose: true,
        message: 'This is a message.',
    });
}

const open2 = (): void => {
    FbMessage({
        showClose: true,
        message: 'Congrats, this is a success message.',
        type: VariantTypes.SUCCESS,
    });
}

const open3 = (): void => {
    FbMessage({
        showClose: true,
        message: 'Warning, this is a warning message.',
        type: VariantTypes.WARNING,
    });
}

const open4 = (): void => {
    FbMessage({
        showClose: true,
        message: 'Oops, this is a error message.',
        type: VariantTypes.ERROR,
    });
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:s},methods:{open1:()=>{e({showClose:!0,message:"This is a message."})},open2:()=>{e({showClose:!0,message:"Congrats, this is a success message.",type:n.SUCCESS})},open3:()=>{e({showClose:!0,message:"Warning, this is a warning message.",type:n.WARNING})},open4:()=>{e({showClose:!0,message:"Oops, this is a error message.",type:n.ERROR})}},template:`
<fb-button :plain="true" @click="open1">Message</fb-button>
<fb-button :plain="true" @click="open2">Success</fb-button>
<fb-button :plain="true" @click="open3">Warning</fb-button>
<fb-button :plain="true" @click="open4">Error</fb-button>`})},r={parameters:{docs:{source:{code:`
<template>
    <fb-button plain @click="openCenter">Centered text</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage } from '@fastybird/web-ui-library';

const openCenter = (): void => {
    FbMessage({
        showClose: true,
        message: 'Centered text',
        center: true,
    });
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:s},methods:{openCenter:()=>{e({showClose:!0,message:"Centered text",center:!0})}},template:`
<fb-button plain @click="openCenter">Centered text</fb-button>`})},i={parameters:{docs:{source:{code:`
<template>
    <fb-button :plain="true" @click="openHTML">Use HTML string</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage } from '@fastybird/web-ui-library';

const openHTML = (): void => {
    FbMessage({
        dangerouslyUseHTMLString: true,
        message: '<strong>This is <i>HTML</i> string</strong>',
    });
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:s},methods:{openHTML:()=>{e({dangerouslyUseHTMLString:!0,message:"<strong>This is <i>HTML</i> string</strong>"})}},template:`
<fb-button :plain="true" @click="openHTML">Use HTML string</fb-button>`})},p={parameters:{docs:{source:{code:`
<template>
    <fb-button :plain="true" @click="open">Show message</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage } from '@fastybird/web-ui-library';

const open = (): void => {
  FbMessage({
    message: 'This is a message.',
    grouping: true,
    type: VariantTypes.SUCCESS,
  });
}
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbButton:s},methods:{open:()=>{e({message:"This is a message.",grouping:!0,type:n.SUCCESS})}},template:`
<fb-button :plain="true" @click="open">Show message</fb-button>`})};var c,u,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button :plain="true" @click="open">Show message</fb-button>
    <fb-button :plain="true" @click="openVn">VNode</fb-button>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { FbMessage } from '@fastybird/web-ui-library';

const open = (): void => {
    FbMessage.success('This is a message.');
}

const openVn = () => {
    FbMessage({
        message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode'),
        ]),
    });
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    methods: {
      open: () => {
        FbMessage.success("This is a message.");
      },
      openVn: () => {
        FbMessage({
          message: h("p", {
            style: "line-height: 1; font-size: 14px"
          }, [h("span", null, "Message can be "), h("i", {
            style: "color: teal"
          }, "VNode")])
        });
      }
    },
    template: \`
<fb-button :plain="true" @click="open">Show message</fb-button>
<fb-button :plain="true" @click="openVn">VNode</fb-button>\`
  })
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button :plain="true" @click="open2">Success</fb-button>
    <fb-button :plain="true" @click="open3">Warning</fb-button>
    <fb-button :plain="true" @click="open1">Message</fb-button>
    <fb-button :plain="true" @click="open4">Error</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, VariantTypes } from '@fastybird/web-ui-library';

const open1 = (): void => {
    FbMessage.success('This is a message.');
}

const open2 = (): void => {
    FbMessage({
        message: 'Congrats, this is a success message.',
        type: VariantTypes.SUCCESS,
    });
}

const open3 = (): void => {
    FbMessage({
        message: 'Warning, this is a warning message.',
        type: VariantTypes.WARNING,
    });
}

const open4 = (): void => {
    FbMessage.error('Oops, this is a error message.');
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    methods: {
      open1: () => {
        FbMessage.success("This is a message.");
      },
      open2: () => {
        FbMessage({
          message: "Congrats, this is a success message.",
          type: VariantTypes.SUCCESS
        });
      },
      open3: () => {
        FbMessage({
          message: "Warning, this is a warning message.",
          type: VariantTypes.WARNING
        });
      },
      open4: () => {
        FbMessage.error("Oops, this is a error message.");
      }
    },
    template: \`
<fb-button :plain="true" @click="open2">Success</fb-button>
<fb-button :plain="true" @click="open3">Warning</fb-button>
<fb-button :plain="true" @click="open1">Message</fb-button>
<fb-button :plain="true" @click="open4">Error</fb-button>\`
  })
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var f,h,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button :plain="true" @click="open1">Message</fb-button>
    <fb-button :plain="true" @click="open2">Success</fb-button>
    <fb-button :plain="true" @click="open3">Warning</fb-button>
    <fb-button :plain="true" @click="open4">Error</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage, VariantTypes } from '@fastybird/web-ui-library';

const open1 = (): void => {
    FbMessage({
        showClose: true,
        message: 'This is a message.',
    });
}

const open2 = (): void => {
    FbMessage({
        showClose: true,
        message: 'Congrats, this is a success message.',
        type: VariantTypes.SUCCESS,
    });
}

const open3 = (): void => {
    FbMessage({
        showClose: true,
        message: 'Warning, this is a warning message.',
        type: VariantTypes.WARNING,
    });
}

const open4 = (): void => {
    FbMessage({
        showClose: true,
        message: 'Oops, this is a error message.',
        type: VariantTypes.ERROR,
    });
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    methods: {
      open1: () => {
        FbMessage({
          showClose: true,
          message: "This is a message."
        });
      },
      open2: () => {
        FbMessage({
          showClose: true,
          message: "Congrats, this is a success message.",
          type: VariantTypes.SUCCESS
        });
      },
      open3: () => {
        FbMessage({
          showClose: true,
          message: "Warning, this is a warning message.",
          type: VariantTypes.WARNING
        });
      },
      open4: () => {
        FbMessage({
          showClose: true,
          message: "Oops, this is a error message.",
          type: VariantTypes.ERROR
        });
      }
    },
    template: \`
<fb-button :plain="true" @click="open1">Message</fb-button>
<fb-button :plain="true" @click="open2">Success</fb-button>
<fb-button :plain="true" @click="open3">Warning</fb-button>
<fb-button :plain="true" @click="open4">Error</fb-button>\`
  })
}`,...(M=(h=a.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var y,S,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button plain @click="openCenter">Centered text</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage } from '@fastybird/web-ui-library';

const openCenter = (): void => {
    FbMessage({
        showClose: true,
        message: 'Centered text',
        center: true,
    });
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    methods: {
      openCenter: () => {
        FbMessage({
          showClose: true,
          message: "Centered text",
          center: true
        });
      }
    },
    template: \`
<fb-button plain @click="openCenter">Centered text</fb-button>\`
  })
}`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var T,F,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button :plain="true" @click="openHTML">Use HTML string</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage } from '@fastybird/web-ui-library';

const openHTML = (): void => {
    FbMessage({
        dangerouslyUseHTMLString: true,
        message: '<strong>This is <i>HTML</i> string</strong>',
    });
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    methods: {
      openHTML: () => {
        FbMessage({
          dangerouslyUseHTMLString: true,
          message: "<strong>This is <i>HTML</i> string</strong>"
        });
      }
    },
    template: \`
<fb-button :plain="true" @click="openHTML">Use HTML string</fb-button>\`
  })
}`,...(k=(F=i.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var w,V,v;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-button :plain="true" @click="open">Show message</fb-button>
</template>

<script lang="ts" setup>
import { FbMessage } from '@fastybird/web-ui-library';

const open = (): void => {
  FbMessage({
    message: 'This is a message.',
    grouping: true,
    type: VariantTypes.SUCCESS,
  });
}
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbButton
    },
    methods: {
      open: () => {
        FbMessage({
          message: "This is a message.",
          grouping: true,
          type: VariantTypes.SUCCESS
        });
      }
    },
    template: \`
<fb-button :plain="true" @click="open">Show message</fb-button>\`
  })
}`,...(v=(V=p.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};const N=["BasicUsage","Types","Closable","CenteredText","HtmlContent","Grouping"],R=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,CenteredText:r,Closable:a,Grouping:p,HtmlContent:i,Types:o,__namedExportsOrder:N,default:E},Symbol.toStringTag,{value:"Module"}));export{t as B,a as C,p as G,i as H,R as M,o as T,r as a};
