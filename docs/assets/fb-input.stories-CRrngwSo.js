import{r as e}from"./vue.esm-bundler-DEpQrfwO.js";import{d as t,C as Y,f as Z,R as ee,v as ne}from"./web-ui-components.es-nLJZCm2K.js";import{p as h,f as s}from"./index-Dg9quNvz.js";const te={component:t,title:"Components/Form/Input",excludeStories:/.*Data$/},i={parameters:{docs:{source:{code:`
<template>
    <fb-input v-model="input" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInput:t},setup:()=>({input:e("")}),template:`
<div class="fb-input-story-block">
    <fb-input v-model="input" placeholder="Please input" />
</div>`})},l={parameters:{docs:{source:{code:`
<template>
    <fb-input v-model="input" disabled placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInput:t},setup:()=>({input:e("")}),template:`
<div class="fb-input-story-block">
    <fb-input v-model="input" disabled placeholder="Please input" />
</div>`})},r={parameters:{docs:{source:{code:`
<template>
    <fb-input v-model="input" placeholder="Please input" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInput:t},setup:()=>({input:e("")}),template:`
<div class="fb-input-story-block">
    <fb-input v-model="input" placeholder="Please input" clearable />
</div>`})},o={parameters:{docs:{source:{code:`
<template>
    <fb-input
        v-model="input"
        placeholder="Please input"
        :formatter="(value) => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"
        :parser="(value) => value.replace(/\\$\\s?|(,*)/g, '')"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInput:t},setup:()=>({input:e("")}),template:`
<div class="fb-input-story-block">
    <fb-input
        v-model="input"
        placeholder="Please input"
        :formatter="(value) => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"
        :parser="(value) => value.replace(/\\$\\s?|(,*)/g, '')"
    />
</div>`})},u={parameters:{docs:{source:{code:`
<template>
    <fb-input v-model="input" type="password" placeholder="Please input password" show-password />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInput:t},setup:()=>({input:e("")}),template:`
<div class="fb-input-story-block">
    <fb-input v-model="input" type="password" placeholder="Please input password" show-password />
</div>`})},c={parameters:{docs:{source:{code:`
<template>
    <div>
        <span>Using attributes</span>
        <fb-input
            v-model="input1"
            placeholder="Pick a date"
            :suffix-icon="FasCalendar"
        />
        <fb-input
            v-model="input2"
            placeholder="Type something"
            :prefix-icon="FasMagnifyingGlass"
        />
    </div>
    <div>
        <span>Using slots</span>
        <fb-input v-model="input3" placeholder="Pick a date">
            <template #suffix>
                <fb-icon><fas-calendar /></fb-icon>
            </template>
        </fb-input>
        <fb-input v-model="input4" placeholder="Type something">
            <template #prefix>
                <fb-icon><fas-magnifying-glass /></fb-icon>
            </template>
        </fb-input>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FasCalendar, FasMagnifyingGlass } from '@fastybird/web-ui-icons';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const input4 = ref('');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInput:t,FbIcon:Y,FasCalendar:h,FasMagnifyingGlass:s},setup:()=>{const n=e(""),a=e(""),p=e(""),g=e("");return{input1:n,input2:a,input3:p,input4:g,FasCalendar:h,FasMagnifyingGlass:s}},template:`
<div class="fb-input-story-block">
    <div class="fb-input-story-block__form-row">
        <span>Using attributes</span>
        <fb-input
            v-model="input1"
            placeholder="Pick a date"
            :suffix-icon="FasCalendar"
        />
        <fb-input
            v-model="input2"
            placeholder="Type something"
            :prefix-icon="FasMagnifyingGlass"
        />
    </div>
    <div class="fb-input-story-block__form-row">
        <span>Using slots</span>
        <fb-input v-model="input3" placeholder="Pick a date">
            <template #suffix>
                <fb-icon><fas-calendar /></fb-icon>
            </template>
        </fb-input>
        <fb-input v-model="input4" placeholder="Type something">
            <template #prefix>
                <fb-icon><fas-magnifying-glass /></fb-icon>
            </template>
        </fb-input>
    </div>
</div>`})},d={parameters:{docs:{source:{code:`
<template>
    <fb-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="Please input"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const textarea = ref('');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInput:t},setup:()=>({textarea:e("")}),template:`
<div class="fb-input-story-block">
    <fb-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="Please input"
    />
</div>`})},f={parameters:{docs:{source:{code:`
<template>
    <fb-input
        v-model="textarea1"
        autosize
        type="textarea"
        placeholder="Please input"
    />

    <fb-input
        v-model="textarea2"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="Please input"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const textarea1 = ref('');
const textarea2 = ref('');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInput:t},setup:()=>{const n=e(""),a=e("");return{textarea1:n,textarea2:a}},template:`
<div class="fb-input-story-block">
    <fb-input
        v-model="textarea1"
        autosize
        type="textarea"
        placeholder="Please input"
    />

    <div class="fb-input-story-block__divider" />

    <fb-input
        v-model="textarea2"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="Please input"
    />
</div>`})},m={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-input v-model="input1" placeholder="Please input">
            <template #prepend>Http://</template>
        </fb-input>
    </div>
    <div>
        <fb-input v-model="input2" placeholder="Please input">
            <template #append>.com</template>
        </fb-input>
    </div>
    <div>
        <fb-input v-model="input3" placeholder="Please input" class="input-with-select">
            <template #prepend>
                <fb-select v-model="select" placeholder="Select">
                    <fb-option label="Restaurant" value="1" />
                    <fb-option label="Order No." value="2" />
                    <fb-option label="Tel" value="3" />
                </fb-select>
            </template>
            <template #append>
                <fb-button :icon="FasMagnifyingGlass" />
            </template>
        </fb-input>
    </div>
    <div>
        <fb-input v-model="input3" placeholder="Please input" class="input-with-select">
            <template #prepend>
                <fb-button :icon="FasMagnifyingGlass" />
            </template>
            <template #append>
                <fb-select v-model="select" placeholder="Select">
                    <fb-option label="Restaurant" value="1" />
                    <fb-option label="Order No." value="2" />
                    <fb-option label="Tel" value="3" />
                </fb-select>
            </template>
        </fb-input>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FasMagnifyingGlass } from '@fastybird/web-ui-icons';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const select = ref('');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInput:t,FbSelect:Z,FbOption:ee,FbButton:ne,FasMagnifyingGlass:s},setup:()=>{const n=e(""),a=e(""),p=e(""),g=e("");return{input1:n,input2:a,input3:p,select:g,FasMagnifyingGlass:s}},template:`
<div class="fb-input-story-block">
    <div class="fb-input-story-block__item">
        <fb-input
            v-model="input1"
            class="large-input"
            placeholder="Please input"
        >
            <template #prepend>Http://</template>
        </fb-input>
    </div>
    <div class="fb-input-story-block__item">
        <fb-input
            v-model="input2"
            class="large-input"
            placeholder="Please input"
        >
            <template #append>.com</template>
        </fb-input>
    </div>
    <div class="fb-input-story-block__item">
        <fb-input
            v-model="input3"
            class="large-input"
            placeholder="Please input"
        >
            <template #prepend>
                <fb-select v-model="select" placeholder="Select">
                    <fb-option label="Restaurant" value="1" />
                    <fb-option label="Order No." value="2" />
                    <fb-option label="Tel" value="3" />
                </fb-select>
            </template>
            <template #append>
                <fb-button :icon="FasMagnifyingGlass" />
            </template>
        </fb-input>
    </div>
    <div class="fb-input-story-block__item">
        <fb-input
            v-model="input3"
            class="large-input"
            placeholder="Please input"
        >
            <template #prepend>
                <fb-button :icon="FasMagnifyingGlass" />
            </template>
            <template #append>
                <fb-select v-model="select" placeholder="Select">
                    <fb-option label="Restaurant" value="1" />
                    <fb-option label="Order No." value="2" />
                    <fb-option label="Tel" value="3" />
                </fb-select>
            </template>
        </fb-input>
    </div>
</div>`})},b={parameters:{docs:{source:{code:`
<template>
    <div>
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
        />
    </div>
    <div>
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
    </div>
    <div>
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FasMagnifyingGlass } from '@fastybird/web-ui-icons';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInput:t,FasMagnifyingGlass:s},setup:()=>{const n=e(""),a=e(""),p=e("");return{input1:n,input2:a,input3:p,FasMagnifyingGlass:s}},template:`
<div class="fb-input-story-block">
    <div class="fb-input-story-block__form-row">
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
        />
    </div>
    <div class="fb-input-story-block__form-row">
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
    </div>
    <div class="fb-input-story-block__form-row">
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
    </div>
</div>`})},v={parameters:{docs:{source:{code:`
<template>
    <fb-input
        v-model="text"
        maxlength="10"
        placeholder="Please input"
        show-word-limit
        type="text"
    />

    <fb-input
        v-model="textarea"
        maxlength="30"
        placeholder="Please input"
        show-word-limit
        type="textarea"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('');
const textarea = ref('');
<\/script>`}}},tags:["hideInSidebar"],render:()=>({components:{FbInput:t},setup:()=>{const n=e(""),a=e("");return{text:n,textarea:a}},template:`
<div class="fb-input-story-block">
    <fb-input
        v-model="text"
        maxlength="10"
        placeholder="Please input"
        show-word-limit
        type="text"
    />

    <div class="fb-input-story-block__divider" />

    <fb-input
        v-model="textarea"
        maxlength="30"
        placeholder="Please input"
        show-word-limit
        type="textarea"
    />
</div>`})};var y,x,P;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input v-model="input" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInput
    },
    setup: () => {
      const input = ref("");
      return {
        input
      };
    },
    template: \`
<div class="fb-input-story-block">
    <fb-input v-model="input" placeholder="Please input" />
</div>\`
  })
}`,...(P=(x=i.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var F,I,w;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input v-model="input" disabled placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInput
    },
    setup: () => {
      const input = ref("");
      return {
        input
      };
    },
    template: \`
<div class="fb-input-story-block">
    <fb-input v-model="input" disabled placeholder="Please input" />
</div>\`
  })
}`,...(w=(I=l.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var M,_,G;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input v-model="input" placeholder="Please input" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInput
    },
    setup: () => {
      const input = ref("");
      return {
        input
      };
    },
    template: \`
<div class="fb-input-story-block">
    <fb-input v-model="input" placeholder="Please input" clearable />
</div>\`
  })
}`,...(G=(_=r.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var k,S,z;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input
        v-model="input"
        placeholder="Please input"
        :formatter="(value) => \\\`$ \\$\\{value\\}\\\`.replace(/\\\\B(?=(\\\\d{3})+(?!\\\\d))/g, ',')"
        :parser="(value) => value.replace(/\\\\$\\\\s?|(,*)/g, '')"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInput
    },
    setup: () => {
      const input = ref("");
      return {
        input
      };
    },
    template: \`
<div class="fb-input-story-block">
    <fb-input
        v-model="input"
        placeholder="Please input"
        :formatter="(value) => \\\`$ \\$\\{value\\}\\\`.replace(/\\\\B(?=(\\\\d{3})+(?!\\\\d))/g, ',')"
        :parser="(value) => value.replace(/\\\\$\\\\s?|(,*)/g, '')"
    />
</div>\`
  })
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var T,R,C;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input v-model="input" type="password" placeholder="Please input password" show-password />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInput
    },
    setup: () => {
      const input = ref("");
      return {
        input
      };
    },
    template: \`
<div class="fb-input-story-block">
    <fb-input v-model="input" type="password" placeholder="Please input password" show-password />
</div>\`
  })
}`,...(C=(R=u.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var O,$,U;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <span>Using attributes</span>
        <fb-input
            v-model="input1"
            placeholder="Pick a date"
            :suffix-icon="FasCalendar"
        />
        <fb-input
            v-model="input2"
            placeholder="Type something"
            :prefix-icon="FasMagnifyingGlass"
        />
    </div>
    <div>
        <span>Using slots</span>
        <fb-input v-model="input3" placeholder="Pick a date">
            <template #suffix>
                <fb-icon><fas-calendar /></fb-icon>
            </template>
        </fb-input>
        <fb-input v-model="input4" placeholder="Type something">
            <template #prefix>
                <fb-icon><fas-magnifying-glass /></fb-icon>
            </template>
        </fb-input>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FasCalendar, FasMagnifyingGlass } from '@fastybird/web-ui-icons';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const input4 = ref('');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInput,
      FbIcon,
      FasCalendar,
      FasMagnifyingGlass
    },
    setup: () => {
      const input1 = ref("");
      const input2 = ref("");
      const input3 = ref("");
      const input4 = ref("");
      return {
        input1,
        input2,
        input3,
        input4,
        FasCalendar,
        FasMagnifyingGlass
      };
    },
    template: \`
<div class="fb-input-story-block">
    <div class="fb-input-story-block__form-row">
        <span>Using attributes</span>
        <fb-input
            v-model="input1"
            placeholder="Pick a date"
            :suffix-icon="FasCalendar"
        />
        <fb-input
            v-model="input2"
            placeholder="Type something"
            :prefix-icon="FasMagnifyingGlass"
        />
    </div>
    <div class="fb-input-story-block__form-row">
        <span>Using slots</span>
        <fb-input v-model="input3" placeholder="Pick a date">
            <template #suffix>
                <fb-icon><fas-calendar /></fb-icon>
            </template>
        </fb-input>
        <fb-input v-model="input4" placeholder="Type something">
            <template #prefix>
                <fb-icon><fas-magnifying-glass /></fb-icon>
            </template>
        </fb-input>
    </div>
</div>\`
  })
}`,...(U=($=c.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var B,N,L;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="Please input"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const textarea = ref('');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInput
    },
    setup: () => {
      const textarea = ref("");
      return {
        textarea
      };
    },
    template: \`
<div class="fb-input-story-block">
    <fb-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="Please input"
    />
</div>\`
  })
}`,...(L=(N=d.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var D,H,A;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input
        v-model="textarea1"
        autosize
        type="textarea"
        placeholder="Please input"
    />

    <fb-input
        v-model="textarea2"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="Please input"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const textarea1 = ref('');
const textarea2 = ref('');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInput
    },
    setup: () => {
      const textarea1 = ref("");
      const textarea2 = ref("");
      return {
        textarea1,
        textarea2
      };
    },
    template: \`
<div class="fb-input-story-block">
    <fb-input
        v-model="textarea1"
        autosize
        type="textarea"
        placeholder="Please input"
    />

    <div class="fb-input-story-block__divider" />

    <fb-input
        v-model="textarea2"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="Please input"
    />
</div>\`
  })
}`,...(A=(H=f.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var W,j,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-input v-model="input1" placeholder="Please input">
            <template #prepend>Http://</template>
        </fb-input>
    </div>
    <div>
        <fb-input v-model="input2" placeholder="Please input">
            <template #append>.com</template>
        </fb-input>
    </div>
    <div>
        <fb-input v-model="input3" placeholder="Please input" class="input-with-select">
            <template #prepend>
                <fb-select v-model="select" placeholder="Select">
                    <fb-option label="Restaurant" value="1" />
                    <fb-option label="Order No." value="2" />
                    <fb-option label="Tel" value="3" />
                </fb-select>
            </template>
            <template #append>
                <fb-button :icon="FasMagnifyingGlass" />
            </template>
        </fb-input>
    </div>
    <div>
        <fb-input v-model="input3" placeholder="Please input" class="input-with-select">
            <template #prepend>
                <fb-button :icon="FasMagnifyingGlass" />
            </template>
            <template #append>
                <fb-select v-model="select" placeholder="Select">
                    <fb-option label="Restaurant" value="1" />
                    <fb-option label="Order No." value="2" />
                    <fb-option label="Tel" value="3" />
                </fb-select>
            </template>
        </fb-input>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FasMagnifyingGlass } from '@fastybird/web-ui-icons';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const select = ref('');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInput,
      FbSelect,
      FbOption,
      FbButton,
      FasMagnifyingGlass
    },
    setup: () => {
      const input1 = ref("");
      const input2 = ref("");
      const input3 = ref("");
      const select = ref("");
      return {
        input1,
        input2,
        input3,
        select,
        FasMagnifyingGlass
      };
    },
    template: \`
<div class="fb-input-story-block">
    <div class="fb-input-story-block__item">
        <fb-input
            v-model="input1"
            class="large-input"
            placeholder="Please input"
        >
            <template #prepend>Http://</template>
        </fb-input>
    </div>
    <div class="fb-input-story-block__item">
        <fb-input
            v-model="input2"
            class="large-input"
            placeholder="Please input"
        >
            <template #append>.com</template>
        </fb-input>
    </div>
    <div class="fb-input-story-block__item">
        <fb-input
            v-model="input3"
            class="large-input"
            placeholder="Please input"
        >
            <template #prepend>
                <fb-select v-model="select" placeholder="Select">
                    <fb-option label="Restaurant" value="1" />
                    <fb-option label="Order No." value="2" />
                    <fb-option label="Tel" value="3" />
                </fb-select>
            </template>
            <template #append>
                <fb-button :icon="FasMagnifyingGlass" />
            </template>
        </fb-input>
    </div>
    <div class="fb-input-story-block__item">
        <fb-input
            v-model="input3"
            class="large-input"
            placeholder="Please input"
        >
            <template #prepend>
                <fb-button :icon="FasMagnifyingGlass" />
            </template>
            <template #append>
                <fb-select v-model="select" placeholder="Select">
                    <fb-option label="Restaurant" value="1" />
                    <fb-option label="Order No." value="2" />
                    <fb-option label="Tel" value="3" />
                </fb-select>
            </template>
        </fb-input>
    </div>
</div>\`
  })
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var E,J,K;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <div>
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
        />
    </div>
    <div>
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
    </div>
    <div>
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FasMagnifyingGlass } from '@fastybird/web-ui-icons';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInput,
      FasMagnifyingGlass
    },
    setup: () => {
      const input1 = ref("");
      const input2 = ref("");
      const input3 = ref("");
      return {
        input1,
        input2,
        input3,
        FasMagnifyingGlass
      };
    },
    template: \`
<div class="fb-input-story-block">
    <div class="fb-input-story-block__form-row">
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
        />
    </div>
    <div class="fb-input-story-block__form-row">
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
            :suffix-icon="FasMagnifyingGlass"
        />
    </div>
    <div class="fb-input-story-block__form-row">
        <fb-input
            v-model="input1"
            size="large"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input2"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
        <fb-input
            v-model="input3"
            size="small"
            placeholder="Please Input"
            :prefix-icon="FasMagnifyingGlass"
        />
    </div>
</div>\`
  })
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,V,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<template>
    <fb-input
        v-model="text"
        maxlength="10"
        placeholder="Please input"
        show-word-limit
        type="text"
    />

    <fb-input
        v-model="textarea"
        maxlength="30"
        placeholder="Please input"
        show-word-limit
        type="textarea"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('');
const textarea = ref('');
<\/script>\`
      }
    }
  },
  tags: ["hideInSidebar"],
  render: () => ({
    components: {
      FbInput
    },
    setup: () => {
      const text = ref("");
      const textarea = ref("");
      return {
        text,
        textarea
      };
    },
    template: \`
<div class="fb-input-story-block">
    <fb-input
        v-model="text"
        maxlength="10"
        placeholder="Please input"
        show-word-limit
        type="text"
    />

    <div class="fb-input-story-block__divider" />

    <fb-input
        v-model="textarea"
        maxlength="30"
        placeholder="Please input"
        show-word-limit
        type="textarea"
    />
</div>\`
  })
}`,...(X=(V=v.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const ae=["BasicUsage","Disabled","Clearable","Formatter","Password","WithIcon","Textarea","AutosizeTextarea","Mixed","Sizes","LimitLength"],le=Object.freeze(Object.defineProperty({__proto__:null,AutosizeTextarea:f,BasicUsage:i,Clearable:r,Disabled:l,Formatter:o,LimitLength:v,Mixed:m,Password:u,Sizes:b,Textarea:d,WithIcon:c,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{f as A,i as B,r as C,l as D,o as F,le as I,v as L,m as M,u as P,b as S,d as T,c as W};
