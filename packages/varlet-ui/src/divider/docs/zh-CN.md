# 分割线

### 介绍
用于分隔列表或布局的各个部分。

### 引入

```js
import { createApp } from 'vue'
import { Divider } from '@varlet/ui'

createApp().use(Divider)
```

### 基本使用
```html
<var-divider />
```

### 虚线
```html
<var-divider dashed />
```

### 缩进
```html
<var-divider inset />
<var-divider :inset="36" margin="36px 0" />
<var-divider inset="-36px" />
```

### 垂直分割线
```html
<span>文字</span>
<var-divider vertical />
<span>文字</span>
<var-divider vertical />
<span>文字</span>
```

### 带有文字描述的分割线
```html
<var-divider description="文字描述" />
```

### 自定义
```html
<var-divider>
  <var-icon name="heart-outline" style="margin: 0 16px; color: rgb(41, 121, 255);" />
</var-divider>
```

## API

### 属性
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `inset` | 设置缩进距离，正负号可控制缩进方向。当传递 `true` 时默认缩进为 `72px` | _boolean \| number \| string_ | `false` |
| `vertical` | 是否垂直 | _boolean_ | `false` |
| `dashed` | 虚线 | _boolean_ | `false` |
| `description` | 分割线的文字描述 | _string_ | `-` |
| `margin` | 设置分割线样式的 `margin` 属性 | _string_ | `-` |

### 插槽
| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 自定义分割线文字描述内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--divider-color` | `rgba(0, 0, 0, 0.12)` |
| `--divider-text-color` | `#888`|
| `--divider-text-margin` | `8px 0`|
| `--divider-text-padding` | `0 8px`|
| `--divider-inset` |  `72px`|
| `--divider-vertical-inset` | `8px`|
